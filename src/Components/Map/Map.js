import { Flex, Text } from '@chakra-ui/react'
import { memo, useState, useEffect } from 'react'
import markerIcon from 'assets/images/marker2.svg'
import flagIcon from 'assets/images/flag.svg'
import corsshairIcon from 'assets/images/crosshair.svg'

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoBox,
  Polyline
} from '@react-google-maps/api'
import PropTypes from 'prop-types'
import { pathFilter } from 'util/pathFilter'

const containerStyle = {
  width: '100%',
  height: '100%'
}

const MyMap = ({ lat, lng, nearbySpots, routePath }) => {
  const [currentMap, setCurrentMap] = useState(null)
  const [currentInfo, setCurrentInfo] = useState(null)
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY
  })
  const [currentPath, setCurrentPath] = useState(null)
  useEffect(() => {
    if (routePath) {
      setCurrentPath(pathFilter(routePath.Geometry))
      // console.log(currentPath)
    }
  }, [routePath])
  useEffect(() => {
    if (currentPath) {
      currentMap.panTo(currentPath[0])
    }
  }, [currentPath])

  const renderStations = spots => {
    return (
      spots.length > 0 &&
      spots.map(spot => (
        <div key={spot.StationID}>
          <Marker
            position={{
              lat: spot.StationPosition.PositionLat,
              lng: spot.StationPosition.PositionLon
            }}
            onClick={() => {
              setCurrentInfo(spot)
            }}
            options={{
              icon: {
                url: markerIcon
              }
            }}
          />
        </div>
      ))
    )
  }
  const onLoad = polyline => {
    console.log('polyline: ', polyline)
  }

  const options = {
    strokeColor: '#000000',
    strokeOpacity: 0.6,
    strokeWeight: 5,
    fillColor: '#000000',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000,
    zIndex: 1
  }
  return isLoaded && lat ? (
    <Flex flex={1} w='100%' overflow='hidden'>
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={15}
        onLoad={e => {
          setCurrentMap(e)
          e.setCenter({ lat, lng })
        }}
        options={{
          gestureHandling: 'greedy'
        }}
      >
        {/* <Marker position={{ lat, lng }} /> */}
        {nearbySpots.length > 0 && renderStations(nearbySpots)}
        {currentInfo && (
          <InfoBox
            position={{
              lat: currentInfo.StationPosition.PositionLat,
              lng: currentInfo.StationPosition.PositionLon
            }}
            onCloseClick={e => {
              setCurrentInfo(null)
            }}
            onLoad={() => console.log(123)}
          >
            <Flex
              flexDirection='column'
              bg='brand.white'
              borderRadius='6px'
              boxShadow='xl'
              p={3}
              maxW='300px'
              gridGap={1}
            >
              <Text fontWeight='700'>{currentInfo.StationName.Zh_tw}</Text>
              <Text>剩餘車輛: {currentInfo.AvailableRentBikes}</Text>
              <Text>目前空位: {currentInfo.AvailableReturnBikes}</Text>
            </Flex>
          </InfoBox>
        )}
        <Polyline onLoad={onLoad} path={currentPath} options={options} />
        {currentPath && (
          <>
            <Marker
              position={{
                lat: currentPath[0].lat,
                lng: currentPath[0].lng
              }}
              options={{
                icon: {
                  url: corsshairIcon
                }
              }}
            />
            <Marker
              position={{
                lat: currentPath[currentPath.length - 1].lat,
                lng: currentPath[currentPath.length - 1].lng
              }}
              options={{
                icon: {
                  url: flagIcon
                }
              }}
            />
          </>
        )}
      </GoogleMap>
    </Flex>
  ) : (
    <></>
  )
}

MyMap.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  nearbySpots: PropTypes.array,
  routePath: PropTypes.object
}

export default memo(MyMap)
