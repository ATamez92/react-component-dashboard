# Task Manager Dashboard

A simple React application developed for Assignment 6 in COSC 3351 – Internet Programming at Texas A&M University–Corpus Christi.

## Overview

Task Manager Dashboard is a single-page application that allows users to create tasks, mark them as completed, and view a summary of their progress. The project demonstrates React functional components, props, state management, controlled forms, conditional rendering, and dynamic lists.

## Features

- Add tasks using a controlled input form.
- Mark tasks as completed or incomplete.
- View total, completed, and remaining task counts.
- Switch between Dashboard and About views.
- Toggle between light and dark appearance modes.
- Responsive layout for different screen sizes.

## Technologies

- React
- JavaScript (JSX)
- HTML and CSS
- Vite

## Running the Project

1. Install [Node.js](https://nodejs.org/) if it is not already installed.
2. Open a terminal in the project directory.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local address displayed in the terminal.

## Project Structure

- `src/App.jsx` — Main application component and shared state.
- `src/App.css` — Application styling, layout, and themes.
- `src/components/` — Individual React components for the dashboard.
- `src/index.css` — Global styling.
- `src/main.jsx` — React application entry point.

## Notes

Task data is maintained using React state and resets when the page is refreshed. Persistent storage is not implemented.

This application was created as a course assignment to practice component-based development using React.