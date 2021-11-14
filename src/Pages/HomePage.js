import { VStack } from '@chakra-ui/react'
import { MyMap } from 'Components/Map'

const HomePage = () => {
  return (
    <>
      <VStack>
        <MyMap lat={25} lng={121.5} />
      </VStack>
    </>
  )
}

export default HomePage
