import React from 'react'
import useFavorites from '../hooks/useFavorites'

export default function FavoritesScreen() {
  const { favorites, loading } = useFavorites()

  return (
    <div style={{ padding: 16 }}>
      <h2>Favorites</h2>
      {loading && <div>Loading...</div>}
      <ul>
        {favorites.map((f) => (
          <li key={f.id}>{f.programId}</li>
        ))}
      </ul>
    </div>
  )
}
