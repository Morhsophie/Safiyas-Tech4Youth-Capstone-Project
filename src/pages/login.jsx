import { useState } from 'react'
import Navbar from '../components/navbar.jsx'
import './routed-pages.css'

function Login() {
  const [notice, setNotice] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setNotice('Login is not connected yet. Your details were not sent or saved.')
  }

  return (
    <div className="routed-page">
      <Navbar />
      <main className="auth-content">
        <section className="auth-card">
          <p className="route-eyebrow">WELCOME BACK</p>
          <h1>Login</h1>
          <p className="auth-description">Sign in to continue your learning journey.</p>
          <form className="auth-form" onSubmit={handleSubmit}>
            <label htmlFor="login-email">Email address</label>
            <input
              autoComplete="email"
              id="login-email"
              name="email"
              placeholder="you@example.com"
              required
              type="email"
            />

            <label htmlFor="login-password">Password</label>
            <div className="password-field">
              <input
                autoComplete="current-password"
                id="login-password"
                name="password"
                placeholder="Enter your password"
                required
                type={showPassword ? 'text' : 'password'}
              />
              <button
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                className="password-toggle"
                onClick={() => setShowPassword((visible) => !visible)}
                type="button"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>

            <button className="auth-submit" type="submit">Login</button>
            {notice && <p className="auth-notice" role="status">{notice}</p>}
          </form>
          <p className="auth-switch">
            New to Tech 4 Youth? <a href="/#/register">Create an account</a>
          </p>
        </section>
      </main>
    </div>
  )
}

export default Login