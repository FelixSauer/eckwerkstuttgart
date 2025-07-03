# Eckwerk Stuttgart

## Overview

Eckwerk Stuttgart is a modern web application built with [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), and enhanced with [GSAP](https://greensock.com/gsap/) animations. The site showcases content related to home crafts, tree care, terrace construction, and more, with a focus on performance and user experience.

![Eckwerk Stuttgart](public/android-chrome-192x192.png)

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Development](#development)
- [Building and Deployment](#building-and-deployment)
- [Docker Support](#docker-support)
- [Contributing](#contributing)
- [License](#license)

## Features

- Fast and responsive design using Astro and Tailwind CSS
- Smooth animations powered by GSAP
- Image galleries and carousels
- Content management using Astro's content collections
- Fully responsive navigation and layout
- Docker support for consistent development environments

## Prerequisites

- Node.js (v16.x or later)
- npm or yarn
- Git

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/eckwerkstuttgart.git
cd eckwerkstuttgart
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

## Project Structure

```
eckwerkstuttgart/
├── public/               # Static assets (images, fonts, favicon, etc.)
├── src/
│   ├── assets/           # Project-specific assets (processed by build)
│   ├── components/       # Reusable Astro components
│   ├── content/          # Content collections and config
│   ├── hooks/            # Custom hooks
│   ├── layouts/          # Page layouts
│   ├── pages/            # Page components/routes
│   ├── styles/           # Global styles
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── astro.config.mjs      # Astro configuration
├── tailwind.config.mjs   # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── docker-compose.yml    # Docker configuration
```

## Development

### Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
|:--------------------------|:-------------------------------------------------|
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### Key Components

- **SectionContent.astro**: Handles the display of content sections with optional images
- **Gallery.astro**: Image gallery component with modal support
- **Navigation.astro**: Site navigation with responsive design
- **Intro.astro**: Landing page introduction component
- **Animations.ts**: GSAP animation utilities

## Building and Deployment

To build the project for production:

```bash
npm run build
```

This will generate static files in the `dist/` directory that can be deployed to any static hosting service.

## Docker Support

The project includes Docker support for consistent development environments:

```bash
# Start the Docker container
docker-compose up

# Build the Docker image
docker-compose build
```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE).
