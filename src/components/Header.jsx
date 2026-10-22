// Receive the title prop from App using object destructuring.
const Header = ({ title }) => {

  // Return the JSX containing the application's main heading.
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}

// Export Header so App.jsx can import and render this component.
export default Header