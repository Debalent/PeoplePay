import auth from './authService'
const API_BASE = '/api'

export async function listFavorites() {
  const res = await auth.authFetch(`${API_BASE}/favorites`)
  if (!res.ok) throw new Error(await res.text())
  return res.json()
}

export async function addFavorite(programId: string) {
  const res = await auth.authFetch(`${API_BASE}/favorites`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ programId }),
  })
  if (!res.ok) throw new Error(await res.text())
  return res.json()
}

export async function removeFavorite(id: string) {
  const res = await auth.authFetch(`${API_BASE}/favorites/${encodeURIComponent(id)}`, { method: 'DELETE' })
  if (!res.ok) throw new Error(await res.text())
  return res.json()
}

export default { listFavorites, addFavorite, removeFavorite }
