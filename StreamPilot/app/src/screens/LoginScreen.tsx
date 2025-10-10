import React, { useState } from 'react'
import useAuth from '../hooks/useAuth'

export default function LoginScreen() {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      await login(email, password)
    } catch (err: any) {
      setError(err.message || String(err))
    } finally {
      setLoading(false)
    }
  }

  async function handleDemo() {
    setEmail('demo@streampilot.local')
    setPassword('demo123')
    setLoading(true)
    setError(null)
    try {
      await login('demo@streampilot.local', 'demo123')
    } catch (err: any) {
      setError(err.message || String(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: 420, margin: '2rem auto' }}>
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <div style={{ marginTop: 12 }}>
          <button type="submit" disabled={loading}>Sign in</button>
          <button type="button" onClick={handleDemo} style={{ marginLeft: 8 }} disabled={loading}>Demo</button>
        </div>
      </form>
    </div>
  )
}
