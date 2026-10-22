// Receive the title property directly from the props object
// using JavaScript object destructuring.
const Header = ({ title }) => {
    return (
        <header>
            {/* Display the title value supplied by the parent component. */}
            <h1>{title}</h1>
        </header>
    )
}

// Export Header so other files can import and render it.
export default Header