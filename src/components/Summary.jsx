// Receive the tasks array from the parent component.
// Summary calculates statistics without maintaining separate state.
const Summary = ({ tasks }) => {

    // Count every object currently stored in the tasks array.
    const total = tasks.length

    // Create an array containing only completed tasks,
    // then count how many objects passed the condiditon.
    const completed = tasks.filter(task => task.done).length

    // Calculate the remaining tasks using the two counts.
    const remaining = total - completed

    return (
        <section>
            <h2>Task Summary</h2>

            {/* Display the calculated statistics. */}
            <p>Total Tasks: {total}</p>
            <p>Completed: {completed}</p>
            <p>Remaining: {remaining}</p>
        </section>
    )
}

// Export Summary so App
export default Summary