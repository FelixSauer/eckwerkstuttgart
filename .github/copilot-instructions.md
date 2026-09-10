# GitHub Copilot Instructions for Eckwerk Stuttgart

## Project Overview

This is an Astro-based website for Eckwerk Stuttgart, a craftsmanship company specializing in home improvement, tree care, and terrace construction. The site is built with modern web technologies and follows a component-based architecture.

## Tech Stack & Dependencies

- **Framework**: Astro 4.11.3 with TypeScript
- **Styling**: Tailwind CSS with custom color scheme
- **Icons**: Astro Icon with custom SVG icons
- **Animations**: GSAP for smooth animations
- **Image Gallery**: PhotoSwipe for image lightboxes
- **Fonts**: Montserrat, Source Code Pro, Source Sans 3, Roboto
- **Build Tools**: Vite, ESLint, Prettier
- **Package Management**: Node 22.14.0, Yarn 1.22.11
- **CI/CD**: Changesets for versioning

## Software Design Aspects

### Architectural Principles

- **Component-Based Architecture**: Modular, reusable Astro components with clear separation of concerns
- **Static Site Generation (SSG)**: Pre-built pages for optimal performance and SEO
- **Content-Driven Design**: Content collections drive navigation and page structure
- **Progressive Enhancement**: Core functionality works without JavaScript, enhanced with GSAP animations
- **Mobile-First Responsive Design**: Tailwind breakpoints ensure optimal experience across devices

### Design Patterns

#### Composition Pattern

- Components compose smaller, focused components (e.g., Header includes Navigation)
- Layouts provide consistent structure while allowing content flexibility
- Slot-based content injection for flexible component composition

#### Observer Pattern

- GSAP animations triggered by scroll/intersection observers
- Event-driven navigation state management
- Modal state management for gallery interactions

#### Template Method Pattern

- Layout components define structure, specific pages fill in content
- Base styles in global.css extended by component-specific styles
- Content collection schemas provide consistent data structure

#### Factory Pattern

- Navigation generation from content collections
- Dynamic route generation from markdown files
- Icon component factory for consistent SVG handling

### Code Organization Principles

#### Separation of Concerns

- **Components**: Pure UI logic and rendering
- **Content**: Business content separated from code
- **Utils**: Reusable functionality (animations, helpers)
- **Types**: Type definitions for data contracts
- **Hooks**: Data fetching and processing logic

#### Single Responsibility Principle

- Each component has one clear purpose
- Utility functions perform specific tasks
- Content collections handle specific data types

#### Dependency Inversion

- Components depend on abstractions (interfaces) not concrete implementations
- Configuration-driven behavior (Tailwind config, Astro config)
- Plugin-based architecture with Astro integrations

#### Don't Repeat Yourself (DRY)

- Shared components prevent UI duplication
- Global styles define consistent typography
- Utility functions for common operations
- Content collections provide consistent data structure

### Data Flow Architecture

#### Unidirectional Data Flow

```
Content Collections → Hooks → Components → UI
```

#### State Management

- Content state managed through Astro's content collections
- UI state managed locally within components
- Global state minimal (navigation, modal visibility)
- Animation state managed by GSAP timeline

#### Error Handling

- TypeScript compile-time error prevention
- Zod schema validation for content
- Graceful fallbacks for missing content/images
- Build-time validation with Astro check

### Performance Considerations

#### Optimization Strategies

- **Static Generation**: Pre-built HTML for fast loading
- **Image Optimization**: Sharp integration for responsive images
- **Code Splitting**: Astro's automatic component splitting
- **CSS Optimization**: Tailwind purging unused styles
- **Bundle Optimization**: Vite's tree shaking and minification

#### Lazy Loading

- Images loaded progressively
- GSAP animations triggered on viewport entry
- PhotoSwipe gallery initialized on demand

#### Caching Strategy

- Static assets with long-term caching
- Content-based cache invalidation
- CDN-friendly asset structure

### Security Principles

#### Content Security

- Markdown content sanitization
- Type-safe content parsing with Zod
- No user-generated content vulnerabilities

#### Build Security

- Dependency vulnerability scanning
- Locked dependency versions
- Secure build pipeline

### Testing Strategy

#### Type Safety

- TypeScript strict mode for compile-time safety
- Interface contracts for component props
- Zod schemas for runtime validation

#### Code Quality

- ESLint for code standards enforcement
- Prettier for consistent formatting
- Build-time validation prevents deployment errors

### Scalability Considerations

#### Horizontal Scaling

- Static site deployment scales naturally
- CDN distribution for global performance
- Serverless-friendly architecture

#### Content Scaling

- File-based content management
- Automated navigation generation
- Dynamic route generation from content

#### Development Scaling

- Component library approach
- Consistent patterns for new features
- Documentation-driven development

### Maintainability Features

#### Code Documentation

- TypeScript interfaces document data contracts
- Component props clearly defined
- Utility functions with JSDoc comments

#### Consistent Patterns

- Established naming conventions
- Standard component structure
- Predictable file organization

#### Version Control

- Changesets for semantic versioning
- Conventional commit messages
- Automated changelog generation

## Architecture Patterns

### File Structure

```
src/
├── components/     # Reusable Astro components
├── content/        # Content collections (pages)
├── hooks/          # Custom utilities (navigation)
├── layouts/        # Page layouts (single, multi)
├── pages/          # Route pages
├── styles/         # Global CSS
├── types/          # TypeScript type definitions
└── utils/          # Utility functions (animations)
```

### Component Conventions

- Use `.astro` extension for components
- Import path alias `@/` maps to `src/`
- Components accept typed props via interfaces
- Use Astro's frontmatter for component logic
- Follow naming convention: PascalCase for components

### Content Management

- Content stored in `src/content/pages/` as Markdown files
- Use Astro Content Collections with Zod schemas
- Page frontmatter includes: title, mainStage, navigation, slogan, imagePath
- Navigation items parsed from comma-separated strings

### Styling Guidelines

- Primary color: `#828B6F` (green)
- Secondary color: `#DBA507` (yellow)
- Accent colors: blue tones (`#8EC7D2`, `#42AFBF`) and coral (`#FF7180`)
- Use Tailwind utility classes
- Custom font families defined in config
- Base styles applied via `@layer base` in global.css

### Typography Scale

- h1: font-montserrat, text-4xl/5xl/6xl, pb-7
- h3: text-2xl font-medium
- h4: text-xl font-medium
- h5: text-lg font-normal
- body: font-light text-lg

## Component Patterns

### Layout Components

- `multi.astro`: Main layout with header, footer, navigation
- `single.astro`: Simpler layout variant
- Include SEO meta tags, favicon, generator info
- Use semantic HTML structure with proper accessibility

### Navigation

- Desktop and mobile navigation variants
- Hash-based routing for single-page sections
- Icon-based mobile menu toggle
- Navigation data sourced from content collections

### Image Handling

- Images stored in `src/assets/Albums/` organized by category
- Use Sharp for optimization
- PhotoSwipe integration for gallery functionality
- Responsive image loading

### Animations

- GSAP-based animation utilities in `utils/Animations.ts`
- Common patterns: animateFromLeft, animateFromRight
- Use `power3.out` easing for smooth effects
- Configurable delay and duration parameters

## Code Standards

### TypeScript

- Strict mode enabled
- Path aliases configured (`@/*` → `src/*`)
- Export interfaces with `I` prefix (e.g., `INavigation`)
- Use proper typing for component props

### Imports

- Use path aliases for internal imports
- Group imports: external libs first, then internal
- Import components with proper casing

### Naming Conventions

- Components: PascalCase (e.g., `Header.astro`)
- Files: kebab-case for pages, PascalCase for components
- Types: PascalCase with `I` prefix for interfaces
- CSS classes: follow Tailwind conventions

### Accessibility

- Include proper ARIA labels
- Use semantic HTML elements
- Provide alt text for images
- Ensure keyboard navigation support

## Development Workflow

### Scripts

- `yarn dev`: Development server
- `yarn build`: Production build with type checking
- `yarn lint`: Format and lint code
- `yarn changeset`: Create changeset for versioning

### Content Updates

- Add new pages to `src/content/pages/`
- Follow naming convention: `page-X-Title.md`
- Update navigation arrays in frontmatter
- Images go in appropriate `Albums/` subdirectory

### Styling

- Use Tailwind utilities first
- Add custom CSS to global.css with `@layer`
- Maintain responsive design (mobile-first)
- Follow color scheme consistency

## Business Context

- German craftsmanship company (language: German)
- Location: Stuttgart, Germany
- Target audience: homeowners seeking quality craftsmanship

## SEO & Performance

- Include proper meta descriptions
- Generate sitemap automatically
- Use semantic HTML structure
- Optimize images with Sharp
- Implement proper favicon strategy
- Compress assets in production

## When generating code:

1. Follow the established patterns and conventions
2. Use TypeScript with proper typing
3. Maintain the design system and color scheme
4. Include proper accessibility attributes
5. Use the existing animation utilities
6. Follow the component structure patterns
7. Ensure responsive design
8. Use German language for user-facing content
9. Maintain SEO best practices
10. Follow the established file organization
