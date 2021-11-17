import { Flex } from '@chakra-ui/react'
import { LottieContainer } from 'Components/Lottie'
import bicycle from 'assets/images/youbike.json'
const Loading = () => (
  <Flex justifyContent='center' p={10}>
    <LottieContainer styleObj={{ width: '71px' }} LottieFile={bicycle} />
  </Flex>
)

export default Loading
