# Fullstack Assignment

This is a fullstack application using Express.js for the backend, and React with Vite for the frontend. It uses TypeScript, Tailwind CSS, tRPC for API calls, and shadcn/ui for components.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- Yarn package manager

## Getting Started

1. Clone the repository:

   ```
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:

   ```
   yarn install
   ```

3. Start the development servers:

   ```
   yarn dev
   ```

   This will start both the backend server (default: http://localhost:3000) and the frontend development server (default: http://localhost:5173).

4. Open your browser and navigate to `http://localhost:5173` to see the application running.

## Project Structure

- `/backend`: Contains the Express.js server and tRPC API
- `/frontend`: Contains the React application built with Vite

## Available Scripts

In the project directory, you can run:

- `yarn dev`: Runs both the backend and frontend in development mode
- `yarn build`: Builds both the backend and frontend for production
- `yarn start`: Starts the production server (run `yarn build` first)

## Technologies Used

- Backend:

  - Express.js
  - TypeScript
  - tRPC

- Frontend:
  - React
  - Vite
  - TypeScript
  - Tailwind CSS
  - shadcn/ui

## Notes

I developed the application according to the figma design specifications. For the grid images, I used the placeholder images from [Placehold.co](https://placehold.co/). This is because I didn't want to host the images within the application.

For some of the other images like the Figma, Canva and Creative OS logos, I used the actual images from the figma design but as SVG files to avoid any scaling issues.

I kept the data within the backend for simplicity and ease of use, although I understand that in a real-world scenario, the data would be hosted on a separate service.

I used tailwindcss and shadcn/ui for styling. And for some of the other images (like the user image in the header), I used icons instead to maximise on space and speed of loading.

I also worked on mobile responsiveness for the UI and created components separately for some parts of the UI.