import React, { useEffect, useState } from 'react'

export default function GuideScreen(){
  const [programs, setPrograms] = useState<any[]>([])
  useEffect(()=>{
    fetch('/api/programs').then(r=>r.json()).then(d=>setPrograms(d.programs || []))
  },[])

  return (
    <div>
      <h2>Guide</h2>
      <p className="text-muted">TV guide and program listings</p>
      <ul className="list-group">
        {programs.map(p=> (
          <li key={p.id} className="list-group-item">
            <strong>{p.title}</strong> — <span className="text-muted">{p.channel}</span>
            <div className="small text-muted">{p.start} - {p.end}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
