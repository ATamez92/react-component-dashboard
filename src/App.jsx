import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import About from './components/About'
import Summary from './components/Summary'

// App manages shared task state and renders the main components.
function App() {
  // Controls which message is displayed using a boolean.
  const isReady = true;

  // Track which application view should be displayed.
  // The dashboard is the default view when the app first loads.
  const [view, setView] = useState('dashboard')

  // Store the task array in React state so its changes
  // can trigger updates to the interface.
  const [tasks, setTasks] = useState([
    { id: 1, title: "Finish React assignment", done: false },
    { id: 2, title: "Read Chapter 5", done: false },
    { id: 3, title: "Submit JavaScript homework", done: true }
  ])

  // Update the completion status of the task matching the given ID.
  // map() creates a new array, while spread copies the matching object.
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, done: !task.done }
        : task
    ))
  }

  // Add a new task to the existing task collection.
  const addTask = (title) => {
    const newTask = {
      id: crypto.randomUUID(),
      title: title,
      done: false
    }

    setTasks(previousTasks => [...previousTasks, newTask])
  }

  return (
    <div className="container">

      {/* Render the Header component imported from Header.jsx */}
      <Header title="React Component Dashboard" />

      {/* Switch between views by updating React state. */}
      <nav aria-label="Dashboard navigation">
        <button
          type="button"
          onClick={() => setView('dashboard')}
        >
          Dashboard
        </button>

        <button
          type="button"
          onClick={() => setView('about')}
        >
          About
        </button>
      </nav>

      {/* Display a message based on the isReady condition. */}
      <p>{isReady ? "Dashboard Ready" : "Dashboard Not Ready"}</p>

      {/* Display the Dashboard or About content based on React state. */}
      {view === 'dashboard' ? (
        <>
          {/* Pass the tasks array to Summary to calculate statistics. */}
          <Summary tasks={tasks} />

          {/* Display the form above the task list. */}
          <TaskForm addTask={addTask} />

          {/* Pass both the task data and the function for updating it. */}
          <TaskList tasks={tasks} toggleTask={toggleTask} />
        </>
      ) : (
        <About />
      )}

    </div>
  )
}

// Export App so main.jsx can import and render this component.
export default App