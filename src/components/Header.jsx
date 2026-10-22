import Button from './Button'

// Receive the title prop from App using object destructuring
const Header = ({ title }) => {

    // Define the function that runs when the Add Task button is clicked.
    // For now, it logs a message to verify that the event works.
    const handleClick = () => {
        console.log("Add Task button clicked")
    }

    return (
        <header>
            {/* Display the title value supplied by the parent component. */}
            <h1>{title}</h1>

            {/* Pass button text, color, and the handleClick function as props.
                The Button component will execute handleClick when clicked. */}
            <Button
                text="Add Task"
                color="green"
                onClick={handleClick}
            />
        </header>
    )
}

// Export Header so other files can import and render it.
export default Header