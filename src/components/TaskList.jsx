import TaskItem from './TaskItem'

// TaskList stores and displays an array of task objects.
const TaskList = () => {

  // Define three task objects with an ID, title,
  // and boolean indicating whether they are completed.
  const tasks = [
    { id: 1, title: "Finish React assignment", done: false },
    { id: 2, title: "Read Chapter 5", done: false },
    { id: 3, title: "Submit JavaScript homework", done: true }
  ]

  return (
    <section>
      <h2>My Tasks</h2>

      {/* Iterate through tasks and render a TaskItem component
          for each object, passing that object through props. */}
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>

    </section>
  )
}

export default TaskList