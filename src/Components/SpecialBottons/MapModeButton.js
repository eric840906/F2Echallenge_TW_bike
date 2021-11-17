import { Button, Flex, Text, Icon, Box, Circle } from '@chakra-ui/react'
import { MdDirectionsBike } from 'react-icons/md'
import { FaParking } from 'react-icons/fa'
import PropTypes from 'prop-types'
const MapModeButton = ({ onClick, mapMode, rwdStyle }) => {
  return (
    <Button
      {...rwdStyle}
      onClick={onClick}
      bg='white'
      position='relative'
      borderRadius='999px'
    >
      <Flex
        letterSpacing='15px'
        alignItems='center'
        zIndex={3}
        gridGap='10px'
        color={mapMode === 'default' ? 'brand.yellow' : 'brand.black'}
        transition='0.5s color ease'
      >
        <Icon as={MdDirectionsBike} verticalAlign='center' h={6} w={6} />
        <Text>租車</Text>
      </Flex>
      <Box w='50px' padding='3px' h='auto' bg='brand.100' borderRadius='20px'>
        <Circle
          w='50%'
          h='100%'
          borderRadius='999px'
          bg='brand.black'
          transition='all 0.5s ease'
          position='absolute'
          top={0}
          left={0}
          zIndex={2}
          transform={
            mapMode === 'default' ? 'translateX(0)' : 'translateX(100%)'
          }
        />
      </Box>
      <Flex
        letterSpacing='15px'
        alignItems='center'
        transition='0.5s color ease'
        color={mapMode === 'default' ? 'brand.black' : 'brand.yellow'}
        zIndex={3}
        gridGap='10px'
      >
        <Icon as={FaParking} verticalAlign='center' h={6} w={6} />
        <Text>還車</Text>
      </Flex>
    </Button>
  )
}

MapModeButton.propTypes = {
  onClick: PropTypes.func,
  mapMode: PropTypes.string,
  rwdStyle: PropTypes.object
}

export default MapModeButton
