# Task Tracker Next

A collaborative task tracking application developed by Redina and Elmedin.

## Project Overview
This is a test application being developed to explore and implement various features of modern web development. The project serves as a learning platform for both developers to experiment with different technologies and best practices.

## Technologies Used
- Next.js - React framework for production
- React - JavaScript library for building user interfaces
- TypeScript - For type-safe development
- Tailwind CSS - For styling and responsive design
- Electron - For cross-platform desktop application support

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Navigate to the project directory:
```bash
cd task-tracker-next
```

3. Install dependencies:
```bash
npm install
```

## Running the Application

### Web Version
1. Start the development server:
```bash
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Desktop Version (Electron)
1. Start the Electron development version:
```bash
npm run electron:dev
```

2. For production build:
```bash
npm run electron:build
```

The application will automatically reload if you make any changes to the source files.

## Building for Production

### Web Version
To create a production build:
```bash
npm run build
```

To start the production server:
```bash
npm start
```

### Desktop Version
To create a production desktop build:
```bash
npm run electron:build
```

This will create installers for Windows, macOS, and Linux in the `dist` directory.