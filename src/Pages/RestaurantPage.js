import { VStack, Grid } from '@chakra-ui/react'

const RestaurantPage = () => {
  return (
    <>
      <VStack gridGap={7} my={14}>
        <Grid
          w={{ base: '95%', md: '80%' }}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)'
          }}
          gridGap={{ base: 3, md: 5 }}
        ></Grid>
      </VStack>
    </>
  )
}

export default RestaurantPage
