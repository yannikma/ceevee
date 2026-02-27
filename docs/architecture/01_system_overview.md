# System Overview Architecture

This document outlines the high-level architecture of the Ceevee application. The application is built as a static site generated or server-side rendered application using Next.js.

## Key Principles
- **Content as Code:** All CV content (experiences, projects) is stored alongside the code using MDX or JSON to keep the app highly portable and version-controlled.
- **Server and Client Separation:** Utilizing React Server Components (where applicable in Next.js) to keep the client bundle size small, prioritizing performance and SEO.

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
