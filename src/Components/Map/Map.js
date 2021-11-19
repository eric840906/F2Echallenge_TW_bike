import { Flex, Text } from '@chakra-ui/react'
import { memo, useState, useEffect } from 'react'
import markerIcon from 'assets/images/default.svg'
import markerIcon2 from 'assets/images/marker2.svg'
import flagIcon from 'assets/images/flag.svg'
import corsshairIcon from 'assets/images/crosshair.svg'
import { useLocation } from 'react-router-dom'
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Polyline,
  MarkerClusterer,
  InfoWindow
} from '@react-google-maps/api'
import PropTypes from 'prop-types'
import { pathFilter } from 'util/pathFilter'

const containerStyle = {
  width: '100%',
  height: '100%'
}

const MyMap = ({ lat, lng, nearbySpots, routePath, mode = 'default' }) => {
  const { pathname } = useLocation()
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
    // console.log(spots)
    return (
      spots && (
        <MarkerClusterer>
          {clusterer =>
            spots.map(spot => (
              <div key={spot.StationID}>
                <Marker
                  clusterer={clusterer}
                  position={{
                    lat: spot.StationPosition.PositionLat,
                    lng: spot.StationPosition.PositionLon
                  }}
                  options={{
                    icon: {
                      url: mode === 'default' ? markerIcon : markerIcon2,
                      labelOrigin: new window.google.maps.Point(20, 19)
                    },
                    label: {
                      text:
                        mode === 'default'
                          ? spot.AvailableRentBikes + ''
                          : spot.AvailableReturnBikes + '',
                      fontSize: '20px',
                      color: mode === 'default' ? '#000000' : '#fed801'
                    }
                  }}
                  onClick={() => {
                    setCurrentInfo(spot)
                    console.log(currentInfo)
                    currentMap.panTo({
                      lat: spot.StationPosition.PositionLat,
                      lng: spot.StationPosition.PositionLon
                    })
                  }}
                />
              </div>
            ))
          }
        </MarkerClusterer>
      )
    )
  }

  // const renderBox = spots => {
  //   return (
  //     spots &&
  //     spots.map(spot => (
  //       <div key={spot.StationID}>
  //         <InfoBox
  //           position={{
  //             lat: spot.StationPosition.PositionLat,
  //             lng: spot.StationPosition.PositionLon
  //           }}
  //           options={{
  //             closeBoxURL: '',
  //             alignBottom: true,
  //             pixelOffset: new window.google.maps.Size(-14.3, -12)
  //           }}
  //           onClick={() =>
  //             currentMap.panTo({
  //               lat: spot.StationPosition.PositionLat,
  //               lng: spot.StationPosition.PositionLon
  //             })
  //           }
  //         >
  //           <Flex
  //             transition='all 0.5s ease'
  //             bg={mode === 'default' ? 'brand.yellow' : 'black'}
  //             color={mode === 'default' ? 'black' : 'brand.yellow'}
  //             justifyContent='center'
  //             alignItems='center'
  //             borderRadius='100%'
  //             w='28px'
  //             h='28px'
  //           >
  //             <Text fontWeight='700'>
  //               {mode === 'default'
  //                 ? spot.AvailableRentBikes
  //                 : spot.AvailableReturnBikes}
  //             </Text>
  //           </Flex>
  //         </InfoBox>
  //       </div>
  //     ))
  //   )
  // }

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
          // console.log(e)
          setCurrentMap(e)
          e.setCenter({ lat, lng })
        }}
        options={{
          gestureHandling: 'greedy',
          zoomControl: false,
          scaleControl: false,
          fullscreenControl: false,
          mapTypeControl: false,
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }]
            }
          ]
        }}
      >
        {pathname === '/nearbybike' && (
          <Marker
            position={{ lat, lng }}
            options={{
              draggable: true
            }}
            onDragEnd={e => console.log(e.latLng.toJSON())}
          />
        )}
        {nearbySpots && renderStations(nearbySpots)}
        {/* {nearbySpots && renderBox(nearbySpots)} */}
        {currentInfo && (
          <InfoWindow
            position={{
              lat: currentInfo.StationPosition.PositionLat,
              lng: currentInfo.StationPosition.PositionLon
            }}
            onCloseClick={() => setCurrentInfo(null)}
          >
            <Flex
              flexDirection='column'
              gridGap='20px'
              pr='12px'
              pb='12px'
              fontWeight='700'
            >
              <Text>{currentInfo.StationName.Zh_tw}</Text>
              <Flex justifyContent='center' gridGap={2}>
                <Flex
                  flexDirection='column'
                  background='brand.yellow'
                  color='brand.black'
                  borderRadius='5px'
                  p={2}
                >
                  <Text>剩餘車輛</Text>
                  <Text>{currentInfo.AvailableRentBikes}</Text>
                </Flex>
                <Flex
                  flexDirection='column'
                  background='brand.black'
                  color='brand.yellow'
                  borderRadius='5px'
                  p={2}
                >
                  <Text>可停車位</Text>
                  <Text>{currentInfo.AvailableReturnBikes}</Text>
                </Flex>
              </Flex>
            </Flex>
          </InfoWindow>
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
  routePath: PropTypes.object,
  mode: PropTypes.string
}

export default memo(MyMap)
