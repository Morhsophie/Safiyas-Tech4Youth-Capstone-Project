import './navbar.css'

function Navbar() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Tech 4 Youth home">
        Tech <span>4</span> Youth
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/courses">Courses</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </nav>
    </header>
  )
}

export default Navbar
