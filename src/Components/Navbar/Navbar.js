// import { useRef, useEffect } from 'react'
import { Button, Flex } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router'
import { Logo } from 'assets/logo/logo'
import Proptype from 'prop-types'

const Navbar = ({ onHamburgerClick }) => {
  const navigate = useNavigate()
  return (
    <Flex
      position="sticky"
      zIndex="sticky"
      top="0"
      bg="brand.yellow"
      boxShadow="sm"
      w="100%"
      alignItems="center"
      py={5}
      px={10}
      color="white"
      gridGap="5rem"
    >
      <Flex alignSelf="center" cursor="pointer" onClick={() => navigate('/')}>
        <Logo />
      </Flex>
      <Button
        variant="default"
        marginLeft="auto"
        boxShadow="none"
        w="40px"
        h="40px"
        onClick={onHamburgerClick}
        onFocus={() => document.activeElement.blur()}
        size="sm"
      >
        <HamburgerIcon w={5} h={5} />
      </Button>
    </Flex>
  )
}

Navbar.propTypes = {
  onHamburgerClick: Proptype.func
}

export default Navbar
