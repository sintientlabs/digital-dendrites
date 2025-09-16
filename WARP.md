# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a static website for Sintient Labs (sintientlabs.com) built with vanilla HTML, CSS, and JavaScript. It's a modern, responsive site featuring a clean design with interactive elements, optimized for multiple deployment platforms.

## Architecture and Structure

### Core Files
- `index.html` - Single-page application with semantic HTML structure
- `styles.css` - Modern CSS with custom properties, grid layouts, and responsive design
- `script.js` - Vanilla JavaScript for interactions, smooth scrolling, and animations

### Deployment Configurations
- `netlify.toml` - Netlify deployment config with form handling, security headers, and caching
- `vercel.json` - Vercel deployment config with static file handling and security headers
- `CNAME` - GitHub Pages custom domain configuration

### Design Architecture
- **Mobile-first responsive design** with breakpoints at 480px, 768px, and 968px
- **CSS Grid and Flexbox** for layout systems
- **CSS Custom Properties** for consistent theming
- **Intersection Observer API** for scroll-triggered animations
- **Progressive enhancement** approach with fallbacks

## Development Commands

### Local Development Server
```bash
# Python 3 (recommended for local testing)
python -m http.server 8000

# Node.js with live-server (if installed)
npx live-server

# PHP (alternative)
php -S localhost:8000
```

### Testing and Validation
```bash
# Open in browser for testing
open http://localhost:8000

# Validate HTML (if validator installed)
html5validator index.html

# Check for broken links (if linkchecker installed)
linkchecker http://localhost:8000
```

## Deployment Workflows

### Netlify (Recommended - has automatic form handling)
```bash
# Deploy via Git
git add .
git commit -m "Your commit message"
git push origin main
```

### Vercel
```bash
# Deploy with Vercel CLI
vercel --prod
```

### GitHub Pages
```bash
# Enable in repository settings after push
git push origin main
```

## Key Features and Functionality

### Contact Form Integration
- Pre-configured for **Netlify Forms** with `data-netlify="true"`
- Form validation and user feedback in JavaScript
- For other platforms, integrate with Formspree or EmailJS

### Interactive Elements
- **Mobile navigation** with hamburger menu
- **Smooth scrolling** navigation
- **Scroll-triggered animations** using Intersection Observer
- **Counter animations** for statistics
- **Floating elements** with CSS animations

### Performance Optimizations
- Optimized font loading with `preconnect`
- Efficient CSS animations with `transform` and `opacity`
- Lazy-loaded animations using Intersection Observer
- Static asset caching via deployment configs

## Content Management

### Section Updates
- **Hero content**: Lines 40-47 in `index.html`
- **Work projects**: Update work-grid starting at line 69
- **About section**: Modify content from line 120
- **Contact information**: Update lines 165-179

### Styling Customizations
- **Brand colors**: Modify CSS custom properties in `styles.css`
- **Typography**: Change Google Fonts import in HTML head
- **Layout spacing**: Adjust grid and flexbox properties

## Browser Compatibility

Supports all modern browsers:
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile Safari and Chrome Mobile (latest)
- Uses modern features: CSS Grid, Flexbox, Intersection Observer

## Security and Performance

### Security Headers (configured in deployment files)
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`

### Caching Strategy
- Static assets: 1 year cache
- Fonts: Immutable cache
- CSS/JS: 1 year cache with content hashing

## Common Development Tasks

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Update navigation links if needed
4. Add scroll animations if desired

### Modifying Contact Form
1. Update form fields in HTML
2. Adjust styling in CSS
3. For non-Netlify deployments, update form action

### Responsive Design Changes
1. Test across breakpoints: 480px, 768px, 968px
2. Use browser dev tools device simulation
3. Adjust grid layouts and spacing as needed

## Deployment Platform Specifics

### Netlify Features
- Automatic form processing
- Branch deploys for testing
- Edge functions support
- Built-in CDN

### Vercel Features  
- Serverless functions available
- Automatic performance monitoring
- Edge network deployment
- Git integration

### GitHub Pages
- Free hosting
- Custom domain support
- Branch-based deployment
- Jekyll processing (disabled with `.nojekyll`)