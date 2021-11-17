import { useState } from 'react'
import { cyclingRoute } from 'api/transport'
import useMyToast from './useMyToast'

const useShape = () => {
  const [spots, setSpots] = useState([])
  const { errorToast } = useMyToast('error')
  const search = async ({ city, skip }) => {
    const skipString = skip ? `$skip=${skip}` : ''
    const tail = '$top=30&$format=JSON'
    const finalUrl = `${city}?${skipString}&${tail}`
    try {
      const { data } = await cyclingRoute.get(finalUrl)
      setSpots(data)
    } catch (error) {
      errorToast('權限到期，請重新整理後再試一次')
    }
  }
  return [spots, search]
}

export default useShape
