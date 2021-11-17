import { useState } from 'react'
import { bike } from 'api/transport'

const useAvailability = () => {
  const [spots, setSpots] = useState([])
  const search = async ({ option, city, lat, lng }) => {
    let finalUrl
    if (option === 'nearby') {
      finalUrl = `Availability/NearBy?$top=30&$spatialFilter=nearby(${lat}, ${lng}, 1000)&$format=JSON`
    } else {
      finalUrl = `Availability/${city}?$top=30&$format=JSON`
    }
    try {
      const { data } = await bike.get(finalUrl)
      setSpots(data)
    } catch (error) {
      console.log(error)
    }
  }
  return [spots, search]
}

export default useAvailability
