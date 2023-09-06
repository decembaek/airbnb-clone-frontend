import {
  Box,
  Grid,
  Heading,
  Image,
  VStack,
  Text,
  HStack,
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
// <Grid gap={10} templateColumns={'repeat(5, 1fr)'}> gap은 공간 templateColumn은 컴렁 정렬
export default function Home() {
  return (
    // 1fr 공간안에 최대한 많이 넣는 설정
    <Grid
      mt={10}
      px={40}
      columnGap={4}
      rowGap={8}
      templateColumns={'repeat(5, 1fr)'}
    >
      {/* <Box w={'100%'} h={'120px'} bg={'red.400'} /> */}
      <VStack alignItems={'flex-start'}>
        <Box overflow={'hidden'} mb={2} rounded={'3xl'}>
          <Image
            // h={280}
            src="https://a0.muscache.com/im/pictures/cdd7fa47-2b40-4593-be79-3ca6757f25bc.jpg?im_w=720"
          />
        </Box>
        <Box>
          <Grid gap={2} templateColumns={'6fr 1fr'}>
            <Text as={'b'} noOfLines={1} fontSize={'md'}>
              Cavinti, Calabarzon, 필리핀
            </Text>
            <HStack spacing={1}>
              <FaStar size={15} />
              <Text>5.0</Text>
            </HStack>
          </Grid>
          <Text fontSize={'sm'} color={'gray.600'}>
            Seoul, S. Korea
          </Text>
        </Box>
        <Text fontSize={'sm'} color={'gray.600'}>
          <Text as={'b'}>$72</Text> / night
        </Text>
      </VStack>
    </Grid>
  );
}
