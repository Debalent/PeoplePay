import auth from './authService'
const API_BASE = '/api'

export async function listRecordings() {
  const res = await auth.authFetch(`${API_BASE}/recordings`)
  if (!res.ok) throw new Error(await res.text())
  return res.json()
}

export async function scheduleRecording(programId: string, when?: string) {
  const res = await auth.authFetch(`${API_BASE}/recordings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ programId, when }),
  })
  if (!res.ok) throw new Error(await res.text())
  return res.json()
}

export async function deleteRecording(id: string) {
  const res = await auth.authFetch(`${API_BASE}/recordings/${encodeURIComponent(id)}`, { method: 'DELETE' })
  if (!res.ok) throw new Error(await res.text())
  return res.json()
}

export default { listRecordings, scheduleRecording, deleteRecording }
