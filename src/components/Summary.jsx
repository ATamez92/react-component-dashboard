// Displays task statistics calculated from the tasks array.
const Summary = ({ tasks }) => {
    // Calculate statistics directly from props without additional state.
    const total = tasks.length
    const completed = tasks.filter(task => task.done).length
    const remaining = total - completed

    return (
        <section>
            <h2>Task Summary</h2>

            {/* Display the calculated statistics in separate cards. */}
            <div className="summary-grid">
                <div className="summary-card">
                    <span className="summary-value">{total}</span>
                    <span className="summary-label">Total Tasks</span>
                </div>

                <div className="summary-card">
                    <span className="summary-value">{completed}</span>
                    <span className="summary-label">Completed</span>
                </div>

                <div className="summary-card">
                    <span className="summary-value">{remaining}</span>
                    <span className="summary-label">Remaining</span>
                </div>
            </div>
        </section>
    )
}

// Export Summary for use in App.jsx.
export default Summary