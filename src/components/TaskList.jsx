import TaskItem from './TaskItem'

// Displays the task collection received from App.jsx.
const TaskList = ({ tasks, toggleTask }) => {
  return (
    <section>
      <h2>My Tasks</h2>

      {/* Render a TaskItem for each task, passing its data
          and the callback used to update its completion status. */}
      <ul className="task-list">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
          />
        ))}
      </ul>
    </section>
  )
}

// Export TaskList for use in App.jsx.
export default TaskList