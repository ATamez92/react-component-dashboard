import { useState } from 'react'

// Provides a controlled form for creating new tasks.
const TaskForm = ({ addTask }) => {
    // Store the current task title entered by the user.
    const [title, setTitle] = useState('')

    // Validate the title and submit it without reloading the page.
    const handleSubmit = (event) => {
        event.preventDefault()

        // Remove surrounding whitespace and reject empty titles.
        const trimmedTitle = title.trim()

        if (trimmedTitle === '') {
            return
        }

        // Add the new task through the parent callback and reset the input.
        addTask(trimmedTitle)
        setTitle('')
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>

            {/* Group the controlled input and submission button for layout. */}
            <div className="task-form-row">
                <input
                    type="text"
                    id="task-title"
                    aria-label="Task Title"
                    placeholder="Enter a task..."
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />

                <button type="submit">Add Task</button>
            </div>
        </form>
    )
}

// Export TaskForm for use in App.jsx.
export default TaskForm