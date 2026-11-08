import Home from './pages/home.jsx'
import Courses from './pages/courses.jsx'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

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
