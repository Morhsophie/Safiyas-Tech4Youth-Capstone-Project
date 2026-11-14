import { useEffect, useState } from 'react'
import { getProfile } from '../api.js'
import './navbar.css'

function Navbar() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    let active = true

    getProfile()
      .then((profile) => {
        if (active) setUser(profile)
      })
      .catch((error) => {
        console.error('Unable to fetch profile:', error)
      })

    return () => {
      active = false
    }
  }, [])

  function handleLogout() {
    window.localStorage.removeItem('token')
    setUser(null)
  }

  return (
    <header className="site-header">
      <a className="brand" href="/#/" aria-label="Tech 4 Youth home">
        Tech <span>4</span> Youth
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="/#/">Home</a>
        <a href="/#/courses">Courses</a>
        {user ? (
          <>
            <span className="nav-user-name">{user.name}</span>
            <button className="main-nav-button" onClick={handleLogout} type="button">
              Logout
            </button>
          </>
        ) : (
          <>
            <a href="/#/login">Login</a>
            <a href="/#/register">Register</a>
          </>
        )}
      </nav>
    </header>
  )
}

export default Navbar
