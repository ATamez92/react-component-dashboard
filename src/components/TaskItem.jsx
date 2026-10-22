// Receive the task object and the function used
// to update its completion status.
const TaskItem = ({ task, toggleTask }) => {
    return (
        <li>
            <label>
                {/* The checkbox is controlled by the task's done property.
            Its onChange handler calls toggleTask with this task's ID. */}
                <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggleTask(task.id)}
                    />

                    {/* Display the task title beside its checkbox. */}
                    <span>{task.title}</span>
            </label>
        </li>
    )
}

// Export TaskItem so TaskList can import and render it.
export default TaskItem