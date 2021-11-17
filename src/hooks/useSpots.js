import { useState } from 'react'
import { bike } from 'api/transport'
import useMyToast from './useMyToast'

const useStation = () => {
  const [spots, setSpots] = useState(null)
  const { errorToast } = useMyToast('error')
  // useEffect(() => {
  //   search({ option, city, lat, lng })
  // }, [])
  const search = async ({ option, city, lat, lng }) => {
    let finalUrl
    if (option === 'nearby') {
      finalUrl = `Station/NearBy?$top=30&$spatialFilter=nearby(${lat}, ${lng}, 1000)&$format=JSON`
    } else {
      finalUrl = `Station/${city}?$top=30&$format=JSON`
    }
    try {
      const { data } = await bike.get(finalUrl)
      setSpots(data)
    } catch (error) {
      errorToast('權限到期，請重新整理後再試一次')
    }
  }
  return [spots, search]
}

export default useStation
