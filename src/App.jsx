import './App.css'
import Header from './components/Header'
import TaskList from './components/TaskList'

// App is the root functional component of our React application.
// It returns JSX describing the elements React should display.
function App() {
  // Controls which message is displayed using a boolean.
  const isReady = true;

  return (
    <div className="container">

      {/* Render the Header component imported from Header.jsx */}
      <Header title="React Component Dashboard" />

      {/* Display a message based on the isReady condition. */}
      <p>{isReady ? "Dashboard Ready" : "Dashboard Not Ready"}</p>

      {/* Render the TaskList component below the header. */ }
      <TaskList />

    </div>
  )
}

// Export App so main.jsx can import and render this component.
export default App