import { useState } from 'react'
import { Text, Flex, AspectRatio } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const MaskCard = ({ card, onClick }) => {
  const [enter, setEnter] = useState(false)
  return (
    <AspectRatio ratio={1.67 / 1} borderRadius="16px" overflow="hidden">
      <Flex
        backgroundImage={card.imageUrl}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        cursor="pointer"
        onClick={onClick && onClick}
        onMouseEnter={() => setEnter(true)}
        onMouseLeave={() => setEnter(false)}
        transition="transform 0.5s ease"
        transform={enter ? 'scale(1.2)' : 'scale(1)'}
      >
        <Flex
          w="100%"
          h="100%"
          justifyContent="center"
          alignItems="center"
          transition="all 0.5s ease"
          background={enter ? '#00000000' : '#00000080'}
        >
          <Text color="white" fontSize={{ base: '16px', sm: '22px' }}>
            {card.name}
          </Text>
        </Flex>
      </Flex>
    </AspectRatio>
  )
}

MaskCard.propTypes = {
  card: PropTypes.object,
  onClick: PropTypes.func
}

export default MaskCard
