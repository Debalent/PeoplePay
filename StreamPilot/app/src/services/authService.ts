const API_BASE = '/api'
const TOKEN_KEY = 'streampilot_token'

export async function login(email: string, password: string) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  if (!res.ok) throw new Error(await res.text())
  const data = await res.json()
  localStorage.setItem(TOKEN_KEY, data.token)
  return data
}

export async function signup(email: string, password: string) {
  const res = await fetch(`${API_BASE}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  if (!res.ok) throw new Error(await res.text())
  const data = await res.json()
  localStorage.setItem(TOKEN_KEY, data.token)
  return data
}

export function getToken() { return localStorage.getItem(TOKEN_KEY) }

export async function whoami() {
  const token = getToken()
  if (!token) return null
  const res = await fetch(`${API_BASE}/auth/me`, { headers: { Authorization: `Bearer ${token}` } })
  if (!res.ok) return null
  return res.json()
}

export async function authFetch(input: RequestInfo, init: RequestInit = {}) {
  const token = getToken()
  const headers = new Headers(init.headers || {})
  if (token) headers.set('Authorization', `Bearer ${token}`)
  return fetch(input, { ...init, headers })
}

export default { login, signup, whoami, authFetch }
