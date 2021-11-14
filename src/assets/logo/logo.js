import logo from '../images/logo.svg'
import { Flex, Image } from '@chakra-ui/react'
export const Logo = () => {
  return (
    <Flex flexDirection="row" gridGap="10px">
      <Image src={logo} />
    </Flex>
  )
}
