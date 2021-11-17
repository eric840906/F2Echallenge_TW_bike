import { Flex, Select, Grid, useDisclosure, Button } from '@chakra-ui/react'
import { cityMap } from 'data/cityData'
import { Navbar } from 'Components/Navbar'
import { useState, useEffect } from 'react'
import { useShape, usePosition } from 'hooks'
import { SpotCard } from 'Components/Cards'
import { SideDrawer } from 'Components/Drawer'
import { MyMap } from 'Components/Map'

const CityPage = () => {
  const [latitude, longitude] = usePosition()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [searchTerm, setSearchTerm] = useState('')
  const [routes, searchRoutes] = useShape()
  const [currentRoutes, setCurrentRoutes] = useState([])
  const [skip, setSkip] = useState(0)
  const [selectedRoute, setSelectedRoute] = useState(null)
  const [loadMore, setLoadMore] = useState(true)
  useEffect(() => {
    if (searchTerm !== '') {
      setSkip(0)
      setCurrentRoutes([])
      searchRoutes({ city: searchTerm, skip: 0 })
    }
  }, [searchTerm])

  useEffect(() => {
    setLoadMore(!(routes.length === 0))
    setCurrentRoutes([...currentRoutes, ...routes])
  }, [routes])

  useEffect(() => {
    if (searchTerm !== '') {
      searchRoutes({ city: searchTerm, skip })
    }
  }, [skip])
  useEffect(() => {
    console.log(selectedRoute)
  }, [selectedRoute])
  const renderCard = spots => {
    return spots.map(spot => (
      <SpotCard
        key={spot.RouteName}
        spot={spot}
        onClick={() => {
          onClose()
          setSelectedRoute(spot)
        }}
      />
    ))
  }

  return (
    <>
      <SideDrawer onDrawerOpen={isOpen} onDrawerClose={onClose}>
        <Select
          bg='brand.black'
          w='150px'
          color='brand.white'
          borderRadius='100px'
          onChange={e => setSearchTerm(e.currentTarget.value)}
          value={searchTerm}
        >
          {[...cityMap].map(city => (
            <option
              key={city[1]}
              value={city[1]}
              style={{ backgroundColor: 'black' }}
            >
              {city[0]}
            </option>
          ))}
        </Select>
        <Grid
          p={5}
          w='100%'
          borderRadius='16px'
          bg='brand.yellow'
          h='70vh'
          overflowY='scroll'
          templateColumns={{
            base: 'repeat(1, 1fr)'
          }}
          gridGap={5}
        >
          {currentRoutes.length > 0 ? (
            renderCard(currentRoutes)
          ) : (
            <Flex py={5}>請選擇城市</Flex>
          )}
        </Grid>
        <Button
          variant='default'
          disabled={!loadMore}
          onClick={() => setSkip(skip + 30)}
        >
          {loadMore ? '載入更多' : '已到底部'}
        </Button>
      </SideDrawer>
      <Flex flexDirection='column' h='100vh' alignItems='center'>
        <Navbar
          onHamburgerClick={onOpen}
          routeName={(selectedRoute && selectedRoute.RouteName) || '請選擇車道'}
        ></Navbar>
        {latitude && (
          <MyMap
            lat={latitude}
            lng={longitude}
            nearbySpots={[]}
            routePath={selectedRoute}
          />
        )}
      </Flex>
    </>
  )
}

export default CityPage
