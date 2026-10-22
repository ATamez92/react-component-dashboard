// Receive text, color, and onClick from the parent component.
const Button = ({ text, color, onClick }) => {
    return (
        // The HTML button invokes the supplied callback when clicked.
        <button
            type="button"
            style={{ backgroundColor: color }}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

// Export Button so other components can import and use it.
export default Button