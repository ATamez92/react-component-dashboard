import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TaskList from './components/TaskList'

// App manages shared task state and renders the main components.
function App() {
  // Controls which message is displayed using a boolean.
  const isReady = true;

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

  return (
    <div className="container">

      {/* Render the Header component imported from Header.jsx */}
      <Header title="React Component Dashboard" />

      {/* Display a message based on the isReady condition. */}
      <p>{isReady ? "Dashboard Ready" : "Dashboard Not Ready"}</p>

      {/* Pass both the task data and the function for updating it. */ }
      <TaskList tasks={tasks} toggleTask={toggleTask} />

    </div>
  )
}

// Export App so main.jsx can import and render this component.
export default App