// Receive an individual task object through props.
// Each instance of TaskItem displays one task.
const TaskItem = ({ task }) => {
    return (
        <li>
            {/* Display the title property of the received task object. */}
            {task.title}
        </li>
    )
}

// Export TaskItem so TaskList can import and render it.
export default TaskItem