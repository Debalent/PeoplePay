import React, { useEffect, useState } from 'react'

export default function HomeScreen(){
  const [programs, setPrograms] = useState<any[]>([])
  useEffect(()=>{
    fetch('/api/programs').then(r=>r.json()).then(d=>setPrograms(d.programs || []))
  },[])

  return (
    <div>
      <h2>Home</h2>
      <p className="text-muted">Featured programs</p>
      <div className="row">
        {programs.slice(0,6).map(p=> (
          <div key={p.id} className="col-12 col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text text-muted">{p.channel}</p>
                <p className="card-text">{p.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
