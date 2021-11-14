import { useState } from 'react'
import { travelInfo } from 'api/travelapi'

const useNearby = (options) => {
  const [spots, setSpots] = useState([])
  const search = async ({ lat, lon }) => {
    const { target } = options
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
