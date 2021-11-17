import React from 'react'
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'
import Proptype from 'prop-types'

const SideDrawer = ({ onDrawerOpen, onDrawerClose, children }) => {
  const btnRef = React.useRef()
  return (
    <>
      <Drawer
        size='xl'
        isOpen={onDrawerOpen}
        placement='right'
        onClose={onDrawerClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg='brand.white'>
          <DrawerCloseButton onFocus={() => document.activeElement.blur()} />
          {children}
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
