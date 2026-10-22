// Displays an individual task and handles completion changes.
const TaskItem = ({ task, toggleTask }) => {
    return (
        <li className="task-item">
            <label className="task-item-content">
                {/* Keep the checkbox synchronized with the task's completion
            status and notify App when the user changes it. */}
                <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggleTask(task.id)}
                />

                <span>{task.title}</span>
            </label>
        </li>
    )
}

// Export TaskItem for use in TaskList.jsx.
export default TaskItem