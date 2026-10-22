import TaskItem from './TaskItem'

// Receive the task array and completion callback from App.
// TaskList forwards the callback to its child components.
const TaskList = ({ tasks, toggleTask }) => {
  return (
    <section>
      <h2>My Tasks</h2>

      {/* Create a TaskItem for every task and pass along
          the task object and completion callback. */}
      <ul>
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

export default TaskList