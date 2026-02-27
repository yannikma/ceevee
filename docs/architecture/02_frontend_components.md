# Frontend Architecture Rules

To maintain a clean and scalable codebase within the Next.js and React ecosystem, the frontend follows specific structural conventions.

## Architecture Rules

1. **Component Hierarchy:** Components should be categorized based on their scope (e.g., UI primitives vs. layout components). Keep state as local as possible.
2. **Server Components by Default:** In the Next.js App Router, components should be Server Components by default to optimize performance. Only add `"use client"` when interactivity (hooks, state, event listeners) is explicitly required.
3. **Styling Consistency:** All styling is managed via Tailwind CSS. Avoid inline styles unless absolutely necessary for dynamic values.
4. **Type Safety:** Strict TypeScript rules apply. No `any` types. All props and state must be explicitly typed.

## Component Flow & Structure

```mermaid
flowchart TD
    App[Next.js App Router]
    
    App --> Layout(RootLayout)
    App --> Pages(Page Routes)
    
    Layout --> Nav[Navigation Component]
    Layout --> Footer[Footer Component]
    
    Pages --> HeroSection(Hero Section)
    Pages --> ExperienceSection(Experience Section)
    Pages --> ProjectsSection(Projects Section)
    
    ExperienceSection --> Card[Experience Card UI Primitive]
    ProjectsSection --> Card
    
    classDef router fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff;
    classDef layout fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff;
    classDef ui fill:#0ea5e9,stroke:#0284c7,stroke-width:2px,color:#fff;
    
    class App,Pages router;
    class Layout,Nav,Footer layout;
    class HeroSection,ExperienceSection,ProjectsSection,Card ui;
```
