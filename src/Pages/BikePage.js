import { useEffect } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { MyMap } from 'Components/Map'
import { usePosition, useSpots, useAvailability } from 'hooks'
import combineData from 'util/combineData'
import { Navbar } from 'Components/Navbar'

const BikePage = () => {
  const [latitude, longitude, error] = usePosition()
  const [nearbyStations, searchNearbyStations] = useSpots()
  const [stationDetail, searchStationDetail] = useAvailability()
  useEffect(() => {
    if (latitude && longitude) {
      searchNearbyStations({
        option: 'nearby',
        lat: latitude,
        lng: longitude
      })
      searchStationDetail({
        option: 'nearby',
        lat: latitude,
        lng: longitude
      })
    }
  }, [latitude, longitude])
  return (
    <>
      <Flex flexDirection='column' h='100vh'>
        <Navbar />
        {error ? (
          <Text>{error}</Text>
        ) : (
          latitude && (
            <MyMap
              lat={latitude}
              lng={longitude}
              nearbySpots={combineData(
                nearbyStations,
                stationDetail,
                'StationID'
              )}
            />
          )
        )}
      </Flex>
    </>
  )
}

export default BikePage
