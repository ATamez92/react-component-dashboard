// Displays the application title received through props.
const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

// Export Header for use in App.jsx.
export default Header