import React from 'react'
import { useParams } from 'react-router-dom'
import useDVR from '../hooks/useDVR'
import useFavorites from '../hooks/useFavorites'
import contentService from '../services/contentService'

export default function ProgramDetail() {
  // In this minimal stub we won't implement full router; this is a placeholder
  return (
    <div style={{ padding: 16 }}>
      <h2>Program</h2>
      <div>Program detail UI goes here (wired to services)</div>
    </div>
  )
}
