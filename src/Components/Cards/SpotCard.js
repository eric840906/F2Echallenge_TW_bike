import { useState } from 'react'
import { Heading, Flex, AspectRatio, Icon, Text } from '@chakra-ui/react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { textOverflow } from 'assets/style/style'
const SpotCard = ({ spot, onClick }) => {
  const [enter, setEnter] = useState()
  return (
    <AspectRatio key={spot.RouteName} ratio={5 / 2}>
      <Flex
        cursor='pointer'
        borderRadius='10px'
        overflow='hidden'
        flexDirection='column'
        justifyContent='space-between !important'
        boxShadow='lg'
        marginBottom='40px'
        bg={enter ? 'brand.black' : 'white'}
        color={enter ? 'brand.yellow' : 'brand.black'}
        transition='all 0.5s ease'
        p={2}
        onClick={onClick}
        onMouseEnter={() => setEnter(true)}
        onMouseLeave={() => setEnter(false)}
      >
        <Heading
          w='100%'
          {...textOverflow}
          maxW='100%'
          color='brand.grey'
          textAlign='start'
          size={{ base: 'sm', sm: 'md' }}
        >
          {spot.RouteName}
        </Heading>
        <Flex justifyContent='space-between' w='100%' fontSize='12px'>
          <Flex>
            <Text>{spot.Direction}</Text>
            <Text>{(spot.CyclingLength / 1000).toFixed(2)}公里</Text>
          </Flex>
          <Flex>
            <Icon as={FaMapMarkerAlt} alignSelf='center' />
            <Text {...textOverflow}>
              {spot.City}&nbsp;{spot.Town}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </AspectRatio>
  )
}
SpotCard.propTypes = {
  spot: PropTypes.object,
  onClick: PropTypes.func
}

export default SpotCard
