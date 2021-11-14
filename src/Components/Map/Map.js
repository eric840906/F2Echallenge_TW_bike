import { Flex } from '@chakra-ui/react'
// import { Flex } from '@chakra-ui/react'
// import { MdLocationOn } from 'react-icons/md'
import GoogleMapReact from 'google-map-react'
import PropTypes from 'prop-types'

const MyMap = ({ lat, lng, name }) => {
  // const { colorMode } = useColorMode()
  // const Marker = () => (
  //   <Flex
  //     position="absolute"
  //     flexDirection="column"
  //     transform="translate(-50%, -100%)"
  //     onClick={() =>
  //       window.open(
  //         `http://www.google.com/maps/search/${name}/@${lat},${lng},20z`,
  //         '_blank'
  //       )
  //     }
  //   >
  //     <Icon
  //       as={MdLocationOn}
  //       h="50px"
  //       w="50px"
  //       color={colorMode === 'light' ? 'brand.200' : 'brand.black'}
  //     />
  //   </Flex>
  // )
  return (
    <Flex h="88vh" w="100%" overflow="hidden">
      {/* <Heading
        color={colorMode === 'light' ? 'brand.200' : 'brand.black'}
        transform="translate(8px, 5px)"
        position="absolute"
        size="sm"
        zIndex={1}
      >
        點擊圖示開啟Google map
      </Heading> */}
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
        center={{ lat, lng }}
        defaultZoom={15}
      >
        {/* <Marker lat={lat} lng={lng} /> */}
      </GoogleMapReact>
    </Flex>
  )
}

MyMap.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  name: PropTypes.string
}

export default MyMap
