import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerFooter,
  DrawerCloseButton,
  VStack,
  Image,
  Text,
  Flex,
  Button,
  Icon
} from '@chakra-ui/react'

import { RiCopyrightLine } from 'react-icons/ri'
import { Logo } from 'assets/logo/logo'
import bicycle from 'assets/images/bicycle.svg'
import { useNavigate } from 'react-router-dom'
import Proptype from 'prop-types'

const SideDrawer = ({ onDrawerOpen, onDrawerClose }) => {
  const btnRef = React.useRef()
  const navigate = useNavigate()
  return (
    <>
      <Drawer
        isOpen={onDrawerOpen}
        placement="right"
        onClose={onDrawerClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent background="brand.yellow">
          <DrawerCloseButton />
          <DrawerBody p={0}>
            <VStack gridGap={3} mt={10} textAlign="center">
              <Flex
                mb="80px"
                mt="40px"
                flexDirection="column"
                alignSelf="center"
                cursor="pointer"
                onClick={() => navigate('/')}
              >
                <Image src={bicycle} h="75px" w="119px" />
                <Logo />
                <Text letterSpacing="12px" alignSelf="baseline" fontSize="13px">
                  微笑單車，暢遊城市
                </Text>
              </Flex>
              <Button
                variant="brandoutline"
                w="80%"
                onClick={() => navigate('/')}
              >
                <Text variant="switch" fontSize="20px">
                  尋找 Youbike
                </Text>
              </Button>
              <Button
                variant="brandoutline"
                w="80%"
                onClick={() => navigate('/')}
              >
                <Text variant="switch" fontSize="20px">
                  查詢自行車道
                </Text>
              </Button>
              <Button
                variant="brandoutline"
                w="80%"
                onClick={() => navigate('/')}
              >
                <Text variant="switch" fontSize="20px">
                  附近景點、美食
                </Text>
              </Button>
            </VStack>
          </DrawerBody>
          <DrawerFooter fontSize="12px">
            Where&apos;s &nbsp;Youbike &nbsp;
            <Icon as={RiCopyrightLine} />
            &nbsp; Code: Eric Chiu &nbsp;/&nbsp; Design: KT
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

SideDrawer.propTypes = {
  onDrawerOpen: Proptype.bool,
  onDrawerClose: Proptype.func
}

export default SideDrawer
