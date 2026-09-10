# Eckwerk Stuttgart

<div align="center">
  <img src="public/android-chrome-192x192.png" alt="Eckwerk Stuttgart Logo" width="120" />
</div>

## 📋 Overview

Eckwerk Stuttgart is a modern web application showcasing professional services in home crafts, tree care, and terrace construction. Built with [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), and enhanced with [GSAP](https://greensock.com/gsap/) animations for a smooth user experience.

## ✨ Features

- **High Performance**: Fast loading and rendering with Astro's static site generation
- **Responsive Design**: Seamlessly adapts to all device sizes
- **Interactive Elements**: Smooth animations powered by GSAP
- **Image Galleries**: Showcasing project portfolios with modal support
- **Content Management**: Structured with Astro's content collections
- **Development Tools**: Docker support for consistent development environments

## 🔧 Prerequisites

- Node.js (v16.x or later)
- npm or yarn
- Git

## 🚀 Getting Started

### Installation

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

3. Start the development server

```bash
npm run dev
```

## 📁 Project Structure

```
eckwerkstuttgart/
├── public/               # Static assets (images, fonts, favicon, etc.)
├── src/
│   ├── assets/           # Project-specific assets (processed by build)
│   │   ├── Albums/       # Image collections for galleries
│   │   └── icons/        # SVG icons and logos
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

## ⚙️ Development

### Available Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### Key Components

- **SectionContent.astro**: Content sections with optional images
- **Gallery.astro**: Image gallery with lightbox functionality
- **GalleryModal.astro**: Modal component for image viewing
- **Navigation.astro**: Responsive site navigation
- **Intro.astro**: Landing page hero section
- **Animations.ts**: GSAP animation utilities

## 📦 Building and Deployment

### Production Build

```bash
npm run build
```

This generates optimized static files in the `./dist/` directory that can be deployed to any static hosting service.

### Preview Production Build

```bash
npm run preview
```

### Deployment Process

#### GitHub Pages Deployment

The project is configured for automatic deployment to GitHub Pages:

1. Push changes to the `main` branch
2. GitHub Actions workflow automatically builds and deploys the site
3. The site is deployed to `https://yourusername.github.io/eckwerkstuttgart/` (or your custom domain)

#### Manual Deployment

For manual deployment to other hosting services:

1. Build the project: `npm run build`
2. Upload the contents of the `dist/` directory to your web server
3. Ensure proper MIME types are configured on your server
4. For SPA routing support, configure URL rewriting to redirect requests to `index.html`

#### Custom Domain Setup

If using a custom domain:

1. Add your domain to the `CNAME` file in the `public/` directory
2. Configure DNS settings with your domain provider:
   - For apex domain: Add an A record pointing to your hosting provider's IP
   - For subdomain: Add a CNAME record pointing to `yourusername.github.io`
3. Enable HTTPS in your hosting settings for secure connections

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the [MIT License](LICENSE).
