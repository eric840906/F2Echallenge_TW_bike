import { useEffect, useState, useRef } from 'react'
import {
  Flex,
  Box,
  Text,
  Heading,
  FormControl,
  Input,
  IconButton
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { MyMap } from 'Components/Map'
import { usePosition, useSpots, useAvailability } from 'hooks'
import combineData from 'util/combineData'
import { Navbar } from 'Components/Navbar'
import { MapModeButton } from 'Components/SpecialBottons'
import useMyToast from 'hooks/useMyToast'

const BikePage = () => {
  const inputRef = useRef(null)
  const [latitude, longitude, error] = usePosition()
  const [nearbyStations, searchNearbyStations] = useSpots()
  const [stationDetail, searchStationDetail] = useAvailability()
  const [searchTerm, setSearchTerm] = useState('')
  const [mapMode, setMapMode] = useState('default')
  const { errorToast } = useMyToast('9527')
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
  const search = e => {
    e.preventDefault()
    setSearchTerm(inputRef.current.value)
    errorToast('NOT READY YET')
  }
  return (
    <>
      <Flex flexDirection='column' h='100vh'>
        <Navbar>
          <Heading color='brand.black' size='sm' m='auto'>
            {searchTerm || '您附近的站點'}
          </Heading>
          <MapModeButton
            onClick={switchMode}
            mapMode={mapMode}
            rwdStyle={{ display: { base: 'none', md: 'flex' } }}
          />
        </Navbar>
        <Box
          as='form'
          display='flex'
          w='300px'
          position='absolute'
          zIndex={10}
          top='18%'
          left='50%'
          transform='translate(-50%, -50%)'
          onSubmit={search}
        >
          <FormControl display='flex' gridGap='6px'>
            <Input ref={inputRef} placeholder='搜尋站點' bg='brand.white' />
            <IconButton
              type='submit'
              color='white'
              background='brand.black'
              aria-label='Search database'
              icon={<SearchIcon />}
              onFocus={() => document.activeElement.blur()}
            />
          </FormControl>
        </Box>

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
        <Flex
          flex={1}
          bg='brand.yellow'
          display={{ base: 'flex', md: 'none' }}
          justifyContent='center'
        >
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
