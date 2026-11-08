import { useEffect, useState } from 'react'
import Home from './pages/home.jsx'
import Courses from './pages/courses.jsx'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'

function getCurrentPath() {
  const hashPath = window.location.hash.slice(1).split('?')[0]
  return hashPath || window.location.pathname.replace(/\/+$/, '') || '/'
}

function App() {
  const [path, setPath] = useState(getCurrentPath)

  useEffect(() => {
    function handleLocationChange() {
      setPath(getCurrentPath())
    }

    window.addEventListener('hashchange', handleLocationChange)
    window.addEventListener('popstate', handleLocationChange)
    return () => {
      window.removeEventListener('hashchange', handleLocationChange)
      window.removeEventListener('popstate', handleLocationChange)
    }
  }, [])

  switch (path) {
    case '/':
      return <Home />
    case '/courses':
      return <Courses />
    case '/login':
      return <Login />
    case '/register':
      return <Register />
    default:
      return <Home />
  }
}

export default App
