import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import FavoritesScreen from './screens/FavoritesScreen'
import DVRScreen from './screens/DVRScreen'

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 8 }}>
        <Link to="/">Home</Link> | <Link to="/favorites">Favorites</Link> | <Link to="/recordings">Recordings</Link> | <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/favorites" element={<FavoritesScreen />} />
        <Route path="/recordings" element={<DVRScreen />} />
      </Routes>
    </BrowserRouter>
  )
}
