import { useState, useEffect } from 'react'
import contentService from '../services/contentService'

export default function useGuideData() {
  const [programs, setPrograms] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    contentService
      .fetchPrograms()
      .then((p) => mounted && setPrograms(p))
      .catch((e) => mounted && setError(String(e)))
      .finally(() => mounted && setLoading(false))
    return () => {
      mounted = false
    }
  }, [])

  return { programs, loading, error }
}
