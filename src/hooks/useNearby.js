import { useState } from 'react'
import { travelInfo } from 'api/travelapi'

const useNearby = () => {
  const [spots, setSpots] = useState([])
  const search = async ({ target, lat, lon }) => {
    const url = `${target}?$top=4&$select=ID,Name,Picture&$spatialFilter=nearby(${lat},${lon},10000)&$format=JSON`
    try {
      const { data } = await travelInfo.get(url)
      setSpots(data)
    } catch (error) {
      console.log(error)
    }
  }
  return [spots, search]
}

export default useNearby
