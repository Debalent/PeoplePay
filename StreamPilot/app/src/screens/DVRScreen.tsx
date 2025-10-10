import React from 'react'
import useDVR from '../hooks/useDVR'

export default function DVRScreen() {
  const { recordings, loading, schedule, remove } = useDVR()

  return (
    <div style={{ padding: 16 }}>
      <h2>Recordings</h2>
      {loading && <div>Loading...</div>}
      <ul>
        {recordings.map((r) => (
          <li key={r.id}>
            {r.title} — {r.scheduledAt}
            <button onClick={() => remove(r.id)} style={{ marginLeft: 8 }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
