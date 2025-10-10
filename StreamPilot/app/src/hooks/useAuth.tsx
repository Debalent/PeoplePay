import { useState, useEffect, useCallback } from 'react'
import authService from '../services/authService'

export default function useAuth() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const refresh = useCallback(async () => {
    setLoading(true)
    try {
      const me = await authService.whoami()
      setUser(me)
    } catch (e) {
      setUser(null)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    refresh()
  }, [refresh])

  return {
    user,
    loading,
    login: async (email: string, password: string) => {
      const r = await authService.login(email, password)
      await refresh()
      return r
    },
    signup: async (email: string, password: string) => {
      const r = await authService.signup(email, password)
      await refresh()
      return r
    },
    logout: () => {
      authService.logout()
      setUser(null)
    },
  }
}
