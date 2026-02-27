# System Overview Architecture

This document outlines the high-level architecture of the Ceevee application. The application is built as a static site generated or server-side rendered application using Next.js.

## Key Principles
- **Content as Code:** All CV content (experiences, projects) is stored alongside the code using MDX or JSON to keep the app highly portable and version-controlled.
- **Server and Client Separation:** Utilizing React Server Components (where applicable in Next.js) to keep the client bundle size small, prioritizing performance and SEO.

## Application Architecture

The application implements a clean component hierarchy with two main layers:

1. **UI Primitives (`src/components/ui/`)**: A minimal design system of semantic, reusable, and stateless components (e.g., `Badge`, `Card`, `SectionHeader`).
2. **Features (`src/components/`)**: Colocated semantic components (e.g., `Hero`, `Experience`, `Skills`, `Projects`) that consume the UI primitives to build the application logic. Each component is isolated in its own folder with an `index.tsx` file for better maintainability.

Data is managed in `src/data/dummy.ts` and strictly typed using TypeScript interfaces defined in `src/types/index.ts`.

## Context Diagram

```mermaid
flowchart TD
    User([User / Browser])
    
    subgraph "Ceevee Platform"
        NextApp(Next.js Web Application)
        MDX[(MDX Files / Local Content)]
        Assets[(Static Assets / Images)]
    end
    
    User -->|Visits Web App| NextApp
    NextApp -->|Parses Content| MDX
    NextApp -->|Serves Static Files| Assets
    
    classDef primary fill:#2563eb,stroke:#1e40af,stroke-width:2px,color:#fff;
    classDef storage fill:#10b981,stroke:#047857,stroke-width:2px,color:#fff;
    
    class NextApp primary;
    class MDX,Assets storage;
```

## Deployment Strategy

The project utilizes a **multi-stage Docker build process**, leveraging Next.js's "standalone" output mode. This mode automatically traces all required dependencies and copies them into a minimal production artifact, keeping the final Docker image incredibly small and efficient.

A simple `docker-compose.yml` file is provided for isolated, production-like local development and testing. This approach forms the foundation for later automated CI/CD pipeline deployments using GitHub Actions.
