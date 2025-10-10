import React from 'react'
import useGuideData from '../hooks/useGuideData'

export default function HomeScreen() {
  const { programs, loading, error } = useGuideData()

  return (
    <div style={{ padding: 16 }}>
      <h2>Guide</h2>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <ul>
        {programs.map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong> — {p.channel} {p.startTime ? `@ ${p.startTime}` : ''}
          </li>
        ))}
      </ul>
    </div>
  )
}
