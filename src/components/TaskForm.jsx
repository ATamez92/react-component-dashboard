import { useState } from 'react'

// Receive the callback used to add tasks to App's state.
const TaskForm = ({ addTask }) => {

    // Store the current text entered into the form.
    const [title, setTitle] = useState('')

    // Handle submission without reloading the page.
    const handleSubmit = (event) => {
        event.preventDefault()

        // Reject titles that are empty or contain only whitespace.
        if (title.trim() === '') {
            return
        }

        // Add the task to the parent's state and clear the input.
        addTask(title.trim())
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task-title">Task Title</label>

            {/* Keep the input synchronized with the title state. */}
            <input
                type="text"
                id="task-title"
                placeholder="Enter a task..."
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            {/* Submit the form using handleSubmit. */}
            <button type="submit">Add Task</button>
        </form>
    )
}

// Export TaskForm so App can import and display it.
export default TaskForm