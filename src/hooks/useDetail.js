import { useEffect, useState } from 'react'
import { travelInfo } from 'api/travelapi'
import useMyToast from './useMyToast'

const useDetail = (options, defaultSearchTerm) => {
  const { errorToast } = useMyToast('error123')
  const [spot, setSpot] = useState([])
  useEffect(() => {
    // console.log('defaultSearchTerm' + defaultSearchTerm)
    search(defaultSearchTerm)
  }, [defaultSearchTerm])
  const search = async id => {
    const { target } = options
    const url = `${target}?$filter=ID eq '${id}'&$format=JSON`
    try {
      const { data } = await travelInfo.get(url)
      setSpot(data)
    } catch (error) {
      errorToast('繁忙中，稍後再試')
      console.log(error)
    }
  }
  return [spot, search]
}

export default useDetail
