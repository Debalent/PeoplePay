import { useState, useEffect, useCallback } from 'react'
import favoritesService from '../services/favoritesService'

export default function useFavorites() {
  const [favorites, setFavorites] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const f = await favoritesService.listFavorites()
      setFavorites(f)
    } catch (e) {
      // ignore for now
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  return { favorites, loading, refresh: load, add: favoritesService.addFavorite, remove: favoritesService.removeFavorite }
}
