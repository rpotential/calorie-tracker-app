# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a calorie tracking application designed to help users monitor their daily food intake and maintain a healthy lifestyle. The project is currently in the initial setup phase with the following core features planned:

- Daily calorie consumption tracking
- Food database with nutritional information
- Meal planning and logging
- Progress tracking and analytics
- User-friendly interface

## Technology Stack

Based on the .gitignore patterns, this appears to be a Node.js/JavaScript-based project with the following characteristics:

- **Frontend Framework**: Likely React, Next.js, or similar (indicated by build/, dist/, .next patterns)
- **Package Management**: npm or yarn
- **Build Tools**: Modern JavaScript build toolchain
- **Testing**: Coverage tools and test frameworks supported
- **Development**: Hot reloading and development server capabilities

## Project Architecture

```
calorie-tracker-app/
├── src/           # Main application source code
├── tests/         # Test files and test utilities
├── docs/          # Documentation files
├── assets/        # Static assets (images, icons, styles)
├── README.md      # Project documentation
└── .gitignore     # Git ignore patterns
```

## Development Status

**Important**: This project is in the initial setup phase. The src/, tests/, docs/, and assets/ directories are currently empty. When developing in this codebase:

1. The project structure exists but implementation has not begun
2. No build configuration files (package.json, etc.) are present yet
3. Technology stack and tooling decisions may still be in flux
4. Core application architecture and component structure need to be established

## Development Commands

Since the project is in initial setup:

- **Setup**: First determine and install the chosen tech stack
- **Install Dependencies**: Run `npm install` or `yarn install` (once package.json is created)
- **Development Server**: Command to be determined based on chosen framework
- **Build**: Command to be determined based on chosen build tools
- **Test**: Command to be determined based on chosen testing framework

## Key Development Considerations

When beginning development on this project:

1. **Choose and set up the technology stack** - Create package.json and install core dependencies
2. **Establish project architecture** - Design the folder structure within src/
3. **Set up development tooling** - Configure build tools, linting, and testing frameworks
4. **Create core components** - Implement the main application structure
5. **Implement data management** - Set up state management and API integration for food database
6. **Design the user interface** - Create responsive components for calorie tracking features

## Core Features to Implement

1. **Food Database Integration** - API for nutritional information lookup
2. **User Authentication** - User accounts and data persistence
3. **Calorie Tracking** - Daily logging and calculation features
4. **Meal Planning** - Advanced planning and scheduling capabilities
5. **Analytics Dashboard** - Progress tracking and visualization
6. **Mobile Responsiveness** - Cross-device compatibility

## File Organization Guidelines

When implementing the application:

- Place reusable components in `src/components/`
- Store utility functions in `src/utils/`
- Keep API integration code in `src/api/` or `src/services/`
- Place routing logic in `src/routes/` or `src/pages/`
- Store application state management in `src/store/` or `src/context/`
- Keep styling files organized by component or in `src/styles/`