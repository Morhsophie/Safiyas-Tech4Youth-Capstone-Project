const API_BASE_URL = (
  import.meta.env.VITE_API_URL ||
  (import.meta.env.PROD ? 'https://tech4youth-api-safiya.onrender.com' : '')
).replace(/\/+$/, '')

async function readJson(response) {
  try {
    return await response.json()
  } catch {
    throw new Error(
      `The backend returned a non-JSON response (HTTP ${response.status}). Check the Backend terminal; the API may not be running or MongoDB may not have connected.`,
    )
  }
}

export async function postAuth(endpoint, payload) {
  const response = await fetch(`${API_BASE_URL}/api/auth/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const result = await readJson(response)

  if (!response.ok) {
    throw new Error(result.message || `Request failed with status ${response.status}.`)
  }

  if (endpoint === 'login') {
    if (typeof result.token !== 'string') {
      throw new Error('The login response did not include an authentication token.')
    }
    window.localStorage.setItem('token', result.token)
  }

  return result
}

export async function getProfile() {
  const token = window.localStorage.getItem('token')
  if (!token) return null

  const response = await fetch(`${API_BASE_URL}/api/auth/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const result = await readJson(response)

  if (response.status === 401) {
    window.localStorage.removeItem('token')
    return null
  }

  if (!response.ok) {
    throw new Error(result.message || `Request failed with status ${response.status}.`)
  }

  return result.user
}
