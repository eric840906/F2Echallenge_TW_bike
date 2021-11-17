import { useEffect, useState } from 'react'
const usePosition = () => {
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  const [error, setError] = useState(null)
  const onChange = ({ coords }) => {
    setLat(coords.latitude)
    setLng(coords.longitude)
  }
  const onError = error => {
    setError(error.message)
  }
  useEffect(() => {
    const geo = navigator.geolocation
    const watcher = geo.watchPosition(onChange, onError)
    if (!geo) {
      setError('Geolocation is not supported')
      return
    }
    return () => geo.clearWatch(watcher)
  }, [])

  return [lat, lng, error]
}

export default usePosition
