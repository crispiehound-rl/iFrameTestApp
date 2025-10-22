# iFrame Test App

A simple React TypeScript application built with Vite that displays "Click here to open iFrame" text centered on the page.

## Features

- Built with React 18 and TypeScript
- Vite for fast development and building
- Centered text display for iFrame testing purposes
- Hot reload development server

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

### Development

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173/`

### Building for Production

1. Build the application:
   ```bash
   npm run build
   ```

2. Preview the production build:
   ```bash
   npm run preview
   ```

## Project Structure

```
├── src/
│   ├── App.tsx          # Main App component
│   ├── App.css          # App component styles
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies and scripts
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- React 18
- TypeScript
- Vite
- ESLint