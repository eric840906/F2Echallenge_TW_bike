// import { useRef, useEffect } from 'react'
import { Flex, Button, Heading } from '@chakra-ui/react'
// import { HamburgerIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Logo } from 'assets/logo/logo'
import Proptype from 'prop-types'

const Navbar = ({ onHamburgerClick, children, routeName }) => {
  const navigate = useNavigate()
  return (
    <Flex
      position='sticky'
      zIndex='sticky'
      top='0'
      bg='brand.yellow'
      boxShadow='sm'
      w='100%'
      alignItems='center'
      py={5}
      px={10}
      color='white'
      gridGap='5rem'
      minH='80px'
    >
      <Flex
        alignSelf='center'
        cursor='pointer'
        onClick={() => navigate('/')}
        display={{ base: 'none', md: 'block' }}
      >
        <Logo />
      </Flex>

      {routeName && (
        <Heading size='sm' color='black' m='auto'>
          {routeName}
        </Heading>
      )}
      {children}
      {/* <Button
        variant='default'
        marginLeft='auto'
        boxShadow='none'
        w='40px'
        h='40px'
        onClick={onHamburgerClick}
        onFocus={() => document.activeElement.blur()}
        size='sm'
      >
        <HamburgerIcon w={5} h={5} />
      </Button> */}
      <Button
        variant='default'
        marginLeft='auto'
        boxShadow='none'
        w='40px'
        h='40px'
        onClick={onHamburgerClick}
        onFocus={() => document.activeElement.blur()}
        size='sm'
      >
        <HamburgerIcon w={5} h={5} />
      </Button>
    </Flex>
  )
}

Navbar.propTypes = {
  onHamburgerClick: Proptype.func,
  children: Proptype.node,
  routeName: Proptype.string
}

export default Navbar
