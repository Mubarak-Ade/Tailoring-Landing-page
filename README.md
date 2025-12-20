# Tailor Landing Page - Client

A modern, responsive landing page for a tailoring business built with React, Vite, and Tailwind CSS. This application showcases services, gallery, testimonials, and provides contact functionality with Stripe payment integration.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Engaging scroll and entrance animations powered by Motion library
- **Service Showcase**: Display tailoring services with detailed descriptions
- **Gallery**: Interactive gallery to showcase tailoring work
- **Testimonials**: Customer testimonials section
- **Contact Form**: Built-in contact functionality
- **Payment Integration**: Stripe integration for online payments
- **Modern UI**: Beautiful UI components built with Tailwind CSS
- **State Management**: Redux Toolkit for state management
- **API Integration**: Axios for seamless backend communication

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **State Management**: Redux Toolkit
- **Animation**: Motion.js
- **UI Components**: Lucide React, React Icons
- **Payment**: Stripe
- **HTTP Client**: Axios
- **Routing**: React Router
- **Form & Notifications**: React Toastify
- **Development**: ESLint for code quality

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── CardPreview.jsx
│   ├── GalleryCard.jsx
│   └── Navbar.jsx
├── sections/           # Page sections
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── CTASection.jsx
│   ├── Footer.jsx
│   ├── Gallery.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   └── Testimonial.jsx
├── animation/          # Animation configurations
│   ├── about.js
│   ├── footer.js
│   ├── general.js
│   └── hero.js
├── assets/            # Static assets
│   ├── fonts/        # Google Fonts
│   └── images/       # Images and JSON data
├── App.jsx           # Main app component
├── main.jsx          # Entry point
└── data.js          # Application data
```

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mubarak-Ade/Tailoring-Landing-page.git
   cd tailor-landing-page/client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (if needed for Stripe and API endpoints)
   ```bash
   cp .env.example .env.local
   ```

## Available Scripts

### Development

Start the development server with hot module replacement:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create an optimized production build:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## Configuration

### Vite Config
The project uses Vite with React and Tailwind CSS plugins for optimal development and build performance.

### Tailwind CSS
Tailwind CSS is configured for utility-first styling with custom fonts and animations.

### ESLint
Code quality is maintained with ESLint configuration for React and modern JavaScript.

## Sections Overview

- **Hero**: Eye-catching landing section with call-to-action
- **About**: Information about the tailoring business
- **Gallery**: Showcase of completed tailoring projects
- **Services**: Detailed service offerings
- **Testimonials**: Customer reviews and feedback
- **CTA**: Call-to-action section for engagement
- **Contact**: Contact form for inquiries
- **Footer**: Additional links and information

## Performance

- Fast development experience with Vite's instant HMR
- Optimized production builds
- Smooth animations with Motion.js
- Responsive images and lazy loading
- Efficient state management with Redux

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Author

**Mubarak-Ade** - [GitHub Profile](https://github.com/Mubarak-Ade)

## Support

For support, please open an issue on the GitHub repository.

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Tailoring-Landing-page
# Tailoring-Landing-page
# Tailoring-Landing-page
