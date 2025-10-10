import { useState, useEffect, useCallback } from 'react'
import dvrService from '../services/dvrService'

export default function useDVR() {
  const [recordings, setRecordings] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const r = await dvrService.listRecordings()
      setRecordings(r)
    } catch (e) {
      // swallow for now
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  return {
    recordings,
    loading,
    refresh: load,
    schedule: dvrService.scheduleRecording,
    remove: dvrService.deleteRecording,
  }
}
