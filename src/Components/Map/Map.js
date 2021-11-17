import { Flex, Text } from '@chakra-ui/react'
import { memo, useState, useEffect } from 'react'
import markerIcon from 'assets/images/default.svg'
import flagIcon from 'assets/images/flag.svg'
import corsshairIcon from 'assets/images/crosshair.svg'
// import { Loader } from '@googlemaps/js-api-loader'
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoBox,
  Polyline
} from '@react-google-maps/api'
import PropTypes from 'prop-types'
import { pathFilter } from 'util/pathFilter'

// const loader = new Loader({
//   apiKey: process.env.REACT_APP_GOOGLE_KEY,
//   version: 'weekly'
// })

const containerStyle = {
  width: '100%',
  height: '100%'
}

const MyMap = ({ lat, lng, nearbySpots, routePath, mode = 'default' }) => {
  const [currentMap, setCurrentMap] = useState(null)
  // const [currentInfo, setCurrentInfo] = useState(null)
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
    // console.log(spots)
    return (
      spots &&
      spots.map(spot => (
        <div key={spot.StationID}>
          <Marker
            position={{
              lat: spot.StationPosition.PositionLat,
              lng: spot.StationPosition.PositionLon
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

  const renderBox = spots => {
    return (
      spots &&
      spots.map(spot => (
        <div key={spot.StationID}>
          <InfoBox
            position={{
              lat: spot.StationPosition.PositionLat,
              lng: spot.StationPosition.PositionLon
            }}
            options={{
              closeBoxURL: '',
              alignBottom: true,
              pixelOffset: new window.google.maps.Size(-14.3, -12)
            }}
          >
            <Flex
              transition='all 0.5s ease'
              bg={mode === 'default' ? 'brand.yellow' : 'black'}
              color={mode === 'default' ? 'black' : 'brand.yellow'}
              justifyContent='center'
              alignItems='center'
              borderRadius='100%'
              w='28px'
              h='28px'
            >
              <Text fontWeight='700'>
                {mode === 'default'
                  ? spot.AvailableRentBikes
                  : spot.AvailableReturnBikes}
              </Text>
            </Flex>
          </InfoBox>
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
          console.log(e)
          setCurrentMap(e)
          e.setCenter({ lat, lng })
        }}
        options={{
          gestureHandling: 'greedy',
          zoomControl: false,
          scaleControl: false,
          fullscreenControl: false,
          mapTypeControl: false
        }}
      >
        {/* <Marker position={{ lat, lng }} /> */}
        {nearbySpots && renderStations(nearbySpots)}
        {nearbySpots && renderBox(nearbySpots)}
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
  routePath: PropTypes.object,
  mode: PropTypes.string
}

export default memo(MyMap)
