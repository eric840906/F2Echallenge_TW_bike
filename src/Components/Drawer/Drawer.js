import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  Divider,
  VStack
} from '@chakra-ui/react'
import Proptype from 'prop-types'

const SideDrawer = ({ onDrawerOpen, onDrawerClose, children }) => {
  const btnRef = React.useRef()
  return (
    <>
      <Drawer
        isOpen={onDrawerOpen}
        placement='right'
        onClose={onDrawerClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg='brand.white'>
          <DrawerCloseButton onFocus={() => document.activeElement.blur()} />
          <DrawerHeader bg='brand.yellow' height='200px'></DrawerHeader>
          <Divider />
          <DrawerBody p={2} overflow='hidden'>
            <VStack gridGap={3}>
              {children}
              {/* <Flex
                mb='80px'
                mt='40px'
                flexDirection='column'
                alignSelf='center'
                cursor='pointer'
                onClick={() => navigate('/')}
              >
                <Image src={bicycle} h='75px' w='119px' />
                <Logo />
                <Text letterSpacing='12px' alignSelf='baseline' fontSize='13px'>
                  微笑單車，暢遊城市
                </Text>
              </Flex>
              <Button
                variant='brandoutline'
                w='80%'
                onClick={() => navigate('/nearbybike')}
              >
                <Text variant='switch' fontSize='20px'>
                  尋找 Youbike
                </Text>
              </Button>
              <Button
                variant='brandoutline'
                w='80%'
                onClick={() => navigate('/')}
              >
                <Text variant='switch' fontSize='20px'>
                  查詢自行車道
                </Text>
              </Button>
              <Button
                variant='brandoutline'
                w='80%'
                onClick={() => navigate('/')}
              >
                <Text variant='switch' fontSize='20px'>
                  附近景點、美食
                </Text>
              </Button> */}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

SideDrawer.propTypes = {
  onDrawerOpen: Proptype.bool,
  onDrawerClose: Proptype.func,
  children: Proptype.node
}

export default SideDrawer
