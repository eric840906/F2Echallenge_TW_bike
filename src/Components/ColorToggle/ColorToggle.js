import { Button, useColorMode, Box, Circle } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import Proptype from 'prop-types'

const ColorModeButton = ({ display }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    // <Button onClick={toggleColorMode}>
    //   Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
    // </Button>
    <Button onClick={toggleColorMode} bg='none' display={display} gridGap='5px'>
      <SunIcon
        w={6}
        h={6}
        color={colorMode === 'light' ? 'brand.200' : 'brand.100'}
      />
      <Box w='50px' padding='3px' h='auto' bg='brand.100' borderRadius='20px'>
        <Circle
          w='20px'
          h='20px'
          bg='white'
          transition='all 0.5s ease'
          transform={
            colorMode === 'light' ? 'translateX(0)' : 'translateX(25px)'
          }
        />
      </Box>
      <MoonIcon
        w={6}
        h={6}
        color={colorMode === 'light' ? 'brand.200' : 'brand.100'}
      />
    </Button>
  )
}

ColorModeButton.propTypes = {
  display: Proptype.object
}

export default ColorModeButton
