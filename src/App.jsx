import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import About from './components/About'
import Summary from './components/Summary'

// Main application component responsible for shared state and navigation.
function App() {
  // Track the currently selected view and appearance mode.
  const [view, setView] = useState('dashboard')
  const [darkMode, setDarkMode] = useState(false)

  // Maintain the task collection in shared state so child components
  // receive updated data whenever a task is added or modified.
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Finish React assignment', done: false },
    { id: 2, title: 'Read Chapter 5', done: false },
    { id: 3, title: 'Submit JavaScript homework', done: false }
  ])

  // Toggle the completion status of a task identified by its ID.
  // Create a new array and copy the matching object to avoid mutating state.
  const toggleTask = (id) => {
    setTasks(previousTasks =>
      previousTasks.map(task =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
      )
    )
  }

  // Create a new task and append it to the existing collection.
  const addTask = (title) => {
    const newTask = {
      id: crypto.randomUUID(),
      title: title,
      done: false
    }

    setTasks(previousTasks => [...previousTasks, newTask])
  }

  return (
    <div className={`app-shell ${darkMode ? 'dark' : 'light'}`}>
      <div className="container">

        <Header title="Task Manager Dashboard" />

        {/* Navigation updates the selected view without changing pages. */}
        <nav className="dashboard-nav" aria-label="Dashboard navigation">

          {/* Highlight the Dashboard button when its view is selected. */}
          <button
            type="button"
            className={view === 'dashboard' ? 'nav-active' : ''}
            aria-pressed={view === 'dashboard'}
            onClick={() => setView('dashboard')}
          >
            Dashboard
          </button>

          {/* Highlight the About button when its view is selected. */}
          <button
            type="button"
            className={view === 'about' ? 'nav-active' : ''}
            aria-pressed={view === 'about'}
            onClick={() => setView('about')}
          >
            About
          </button>

          {/* Toggle between light and dark appearance modes. */}
          <button
            type="button"
            className="theme-button"
            onClick={() => setDarkMode(previousMode => !previousMode)}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>

        {/* Render the selected view using conditional rendering. */}
        {view === 'dashboard' ? (
          <>
            <Summary tasks={tasks} />
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} toggleTask={toggleTask} />
          </>
        ) : (
          <About />
        )}

      </div>
    </div>
  )
}

// Export the root component for rendering in main.jsx.
export default App