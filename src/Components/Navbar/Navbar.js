// import { useRef, useEffect } from 'react'
import { Flex, Button, Heading } from '@chakra-ui/react'
// import { HamburgerIcon } from '@chakra-ui/icons'
import { useNavigate, useLocation } from 'react-router'
import { HamburgerIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import { Logo } from 'assets/logo/logo'
import Proptype from 'prop-types'
import { textOverflow } from 'assets/style/style'

const Navbar = ({ onHamburgerClick, children, routeName }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
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
      minH='80px'
    >
      <ChevronLeftIcon
        display={{ base: 'block', md: 'none' }}
        color='brand.black'
        position='absolute'
        left='10px'
        h={10}
        w={10}
        onClick={() => navigate('/')}
      />
      <Flex
        alignSelf='center'
        cursor='pointer'
        onClick={() => navigate('/')}
        display={{ base: 'none', md: 'block' }}
      >
        <Logo />
      </Flex>

      {routeName && (
        <Heading
          {...textOverflow}
          maxW={{ base: '250px', md: '500px' }}
          size='sm'
          color='black'
          m='auto'
        >
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
      {pathname !== '/nearbybike' && (
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
      )}
    </Flex>
  )
}

Navbar.propTypes = {
  onHamburgerClick: Proptype.func,
  children: Proptype.node,
  routeName: Proptype.string
}

export default Navbar
