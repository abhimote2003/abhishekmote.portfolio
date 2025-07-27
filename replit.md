# Abhishek Mote Portfolio Website

## Overview

This is a static portfolio website for Abhishek Mote, a web developer specializing in HTML, CSS, JavaScript, Python, and Machine Learning. The site is built using vanilla HTML, CSS, and JavaScript with a focus on responsive design and smooth user interactions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

This is a client-side only static website with no backend components. The architecture follows a traditional multi-page application pattern using:

- **Frontend**: Vanilla HTML5, CSS3, and JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Variables for theming
- **Icons**: Font Awesome 6.4.0 via CDN
- **Fonts**: Google Fonts (Inter family)
- **Hosting**: Static file hosting (suitable for GitHub Pages, Netlify, Vercel, etc.)

## Key Components

### 1. HTML Structure (index.html)
- Semantic HTML5 structure
- Meta tags for SEO optimization
- External CDN resources for fonts and icons
- Navigation with mobile-responsive hamburger menu
- Section-based layout for portfolio content

### 2. CSS Styling (styles.css)
- CSS Reset for cross-browser compatibility
- CSS Custom Properties (variables) for consistent theming
- Responsive design using media queries
- Modern CSS features including Flexbox/Grid
- Color scheme with primary, secondary, and accent colors
- Box shadows and transitions for enhanced UX

### 3. JavaScript Functionality (script.js)
- Modular function organization
- Navigation menu interactions (mobile toggle)
- Scroll-based animations and effects
- Smooth scrolling navigation
- Skill progress bar animations
- Contact form handling
- Parallax effects for visual appeal

## Data Flow

Since this is a static website, data flow is minimal:

1. **User Interaction** → JavaScript event handlers
2. **Scroll Events** → Navigation state changes and animations
3. **Form Submission** → Client-side validation and processing
4. **Mobile Menu** → Toggle visibility states

## External Dependencies

### CDN Resources
- **Google Fonts**: Inter font family for typography
- **Font Awesome 6.4.0**: Icon library for UI elements

### Browser APIs Used
- DOM manipulation APIs
- Scroll and resize event listeners
- Form validation APIs
- CSS transitions and animations

## Deployment Strategy

This static website can be deployed on any static hosting platform:

**Recommended Platforms:**
- GitHub Pages (free tier)
- Netlify (free tier with CI/CD)
- Vercel (free tier with CI/CD)
- Traditional web hosting

**Deployment Requirements:**
- No server-side processing needed
- No database required
- Simple file upload or git-based deployment
- HTTPS recommended for modern web standards

**File Structure:**
```
/
├── index.html (main page)
├── styles.css (styling)
├── script.js (functionality)
└── assets/ (images, if any)
```

The website is designed to be lightweight, fast-loading, and SEO-friendly with proper meta tags and semantic HTML structure.