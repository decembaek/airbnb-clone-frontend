import { Grid } from '@chakra-ui/react';
import { FaHeart, FaStar, FaRegHeart } from 'react-icons/fa';
import Room from '../components/Room';
// <Grid gap={10} templateColumns={'repeat(5, 1fr)'}> gap은 공간 templateColumn은 컴렁 정렬
export default function Home() {
  return (
    // 1fr 공간안에 최대한 많이 넣는 설정
    <Grid
      mt={10}
      px={{
        sm: 10,
        lg: 40,
      }}
      columnGap={4}
      rowGap={8}
      // templateColumns={'repeat(5, 1fr)'}
      templateColumns={{
        sm: '1fr',
        md: '1fr 1fr',
        lg: 'repeat(3, 1fr)',
        xl: 'repeat(4, 1fr)',
        '2xl': 'repeat(5, 1fr)',
      }}
    >
      {/* <Box w={'100%'} h={'120px'} bg={'red.400'} /> */}
      {[
        1, 2, 3, 4, 5, 6, 7, 7, 5, 5, 6, 8, 9, 3, 1, 3, 4, 5, 6, 7, 8, 4, 5, 7,
        2,
      ].map((index) => (
        <Room key={index} />
      ))}
    </Grid>
  );
}
