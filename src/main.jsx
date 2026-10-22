// Import StrictMode, a React development tool that helps
// identify potential problems with components and Hooks.
import { StrictMode } from 'react'

// Import createRoot, which connects React to an HTML element
// so React can render and manage the application's interface.
import { createRoot } from 'react-dom/client'

// Load the global CSS rules for the entire application.
import './index.css'

// Import the App component from the App.jsx file.
import App from './App.jsx'

// Find the HTML element with id="root" and create a React root.
// render() displays App and all of its child components.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)