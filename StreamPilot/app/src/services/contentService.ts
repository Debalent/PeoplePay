const API_BASE = '/api'

export async function fetchPrograms() {
  const res = await fetch(`${API_BASE}/programs`)
  if (!res.ok) throw new Error(await res.text())
  return res.json()
}

export async function fetchProgram(id: string) {
  const res = await fetch(`${API_BASE}/programs/${encodeURIComponent(id)}`)
  if (res.status === 404) return null
  if (!res.ok) throw new Error(await res.text())
  return res.json()
}

export default { fetchPrograms, fetchProgram }
