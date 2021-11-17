import { useEffect, useState } from 'react'
import { Flex, Text, Heading } from '@chakra-ui/react'
import { MyMap } from 'Components/Map'
import { usePosition, useSpots, useAvailability } from 'hooks'
import combineData from 'util/combineData'
import { Navbar } from 'Components/Navbar'
import { MapModeButton } from 'Components/SpecialBottons'

const BikePage = () => {
  const [latitude, longitude, error] = usePosition()
  const [nearbyStations, searchNearbyStations] = useSpots()
  const [stationDetail, searchStationDetail] = useAvailability()
  const [mapMode, setMapMode] = useState('default')
  const switchMode = () => {
    if (mapMode === 'default') {
      return setMapMode('park')
    }
    setMapMode('default')
  }
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
        <Navbar>
          <Heading color='brand.black' size='sm' m='auto'>
            您附近的站點
          </Heading>
          <MapModeButton
            onClick={switchMode}
            mapMode={mapMode}
            rwdStyle={{ display: { base: 'none', md: 'flex' } }}
          />
        </Navbar>
        {error ? (
          <Text>{error}</Text>
        ) : (
          latitude && (
            <MyMap
              mode={mapMode}
              lat={latitude}
              lng={longitude}
              nearbySpots={
                nearbyStations &&
                stationDetail &&
                combineData(nearbyStations, stationDetail, 'StationID')
              }
            />
          )
        )}
        <Flex bg='brand.yellow' display={{ base: 'flex', md: 'none' }}>
          <MapModeButton
            onClick={switchMode}
            mapMode={mapMode}
            rwdStyle={{ display: { base: 'flex', md: 'none' }, w: '300px' }}
          />
        </Flex>
      </Flex>
    </>
  )
}

export default BikePage
