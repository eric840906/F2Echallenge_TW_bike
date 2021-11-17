import { Text, Flex, Button, Icon } from '@chakra-ui/react'
import { RiCopyrightLine } from 'react-icons/ri'
import { Logo } from 'assets/logo/logo'
import { LottieContainer } from 'Components/Lottie'
import bicycle from 'assets/images/youbike.json'
import { useNavigate } from 'react-router-dom'

const DetailPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <Flex
        flexDirection='column'
        alignItems='center'
        textAlign='center'
        bg='brand.yellow'
        h='100vh'
      >
        <Flex
          w='80%'
          mt={{ base: '100px', md: '151px' }}
          flexDirection='column'
          alignItems='center'
          cursor='pointer'
          onClick={() => navigate('/')}
        >
          <LottieContainer
            styleObj={{ width: '119px', marginRight: '140px' }}
            LottieFile={bicycle}
          />
          <Logo />
          <Text
            letterSpacing='12px'
            alignSelf='center'
            fontSize='13px'
            mr='20px'
          >
            微笑單車‧暢遊城市
          </Text>
        </Flex>
        <Flex flexDirection='column' gridGap={3} mt='114px'>
          <Button
            w='244px'
            variant='brandoutline'
            onClick={() => navigate('/nearbybike')}
            onFocus={() => document.activeElement.blur()}
          >
            <Text variant='switch' fontSize='14px'>
              尋找 Youbike
            </Text>
          </Button>
          <Button
            w='244px'
            variant='brandoutline'
            onClick={() => navigate('/cities')}
            onFocus={() => document.activeElement.blur()}
          >
            <Text variant='switch' fontSize='14px'>
              查詢自行車道
            </Text>
          </Button>
          <Button
            w='244px'
            variant='brandoutline'
            onClick={() => navigate('/')}
            onFocus={() => document.activeElement.blur()}
          >
            <Text variant='switch' fontSize='14px'>
              附近景點、美食
            </Text>
          </Button>
        </Flex>
        <Text
          variant='switch'
          fontSize='12px'
          mt='auto'
          alignSelf={{ base: 'center', md: 'end' }}
        >
          Where&apos;s &nbsp;Youbike &nbsp;
          <Icon as={RiCopyrightLine} />
          &nbsp; Code: Eric Chiu &nbsp;/&nbsp; Design: KT
        </Text>
      </Flex>
    </>
  )
}

export default DetailPage
