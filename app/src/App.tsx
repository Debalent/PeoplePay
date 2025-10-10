import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import GuideScreen from './screens/GuideScreen'

export default function App(){
  return (
    <div className="container py-4">
      <nav className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4">StreamPilot</h1>
        <div>
          <Link to="/" className="btn btn-link">Home</Link>
          <Link to="/guide" className="btn btn-primary ms-2">Guide</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/guide" element={<GuideScreen/>} />
      </Routes>
    </div>
  )
}
