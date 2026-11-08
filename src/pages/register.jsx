import { useState } from 'react'
import Navbar from '../components/navbar.jsx'
import './routed-pages.css'

function Register() {
  const [notice, setNotice] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')

    if (password !== confirmPassword) {
      setNotice('The passwords do not match. Please check them and try again.')
      return
    }

    setNotice('Registration is not connected yet. Your details were not sent or saved.')
  }

  return (
    <div className="routed-page">
      <Navbar />
      <main className="auth-content">
        <section className="auth-card">
          <p className="route-eyebrow">START LEARNING</p>
          <h1>Create an account</h1>
          <p className="auth-description">Join Tech 4 Youth and get ready to build.</p>
          <form className="auth-form" onSubmit={handleSubmit}>
            <label htmlFor="register-name">Full name</label>
            <input
              autoComplete="name"
              id="register-name"
              name="name"
              placeholder="Your name"
              required
              type="text"
            />

            <label htmlFor="register-email">Email address</label>
            <input
              autoComplete="email"
              id="register-email"
              name="email"
              placeholder="you@example.com"
              required
              type="email"
            />

            <label htmlFor="register-password">Password</label>
            <div className="password-field">
              <input
                autoComplete="new-password"
                id="register-password"
                minLength={8}
                name="password"
                placeholder="At least 8 characters"
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

            <label htmlFor="register-confirm-password">Confirm password</label>
            <input
              autoComplete="new-password"
              id="register-confirm-password"
              minLength={8}
              name="confirmPassword"
              placeholder="Enter your password again"
              required
              type={showPassword ? 'text' : 'password'}
            />

            <button className="auth-submit" type="submit">Create account</button>
            {notice && <p className="auth-notice" role="status">{notice}</p>}
          </form>
          <p className="auth-switch">
            Already have an account? <a href="/#/login">Login</a>
          </p>
        </section>
      </main>
    </div>
  )
}

export default Register