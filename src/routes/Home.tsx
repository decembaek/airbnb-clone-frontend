import { Grid, Skeleton, Box, SkeletonText } from '@chakra-ui/react';
import { FaHeart, FaStar, FaRegHeart } from 'react-icons/fa';
import Room from '../components/Room';
import RoomSkeleton from '../components/RoomSkeleton';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getRooms } from '../api';

interface IPhoto {
  pk: string;
  file: string;
  description: string;
}
interface IRoom {
  pk: number;
  name: string;
  contry: string;
  city: string;
  price: number;
  rating: number;
  is_owner: boolean;
  photos: IPhoto[];
}
// <Grid gap={10} templateColumns={'repeat(5, 1fr)'}> gap은 공간 templateColumn은 컴렁 정렬
export default function Home() {
  // tanstack 개꿀  key, data 하면 됌
  const { isLoading, data } = useQuery<IRoom[]>(['rooms'], getRooms);
  // const [isLoading, setIsLoading] = useState(true);
  // const [rooms, setRooms] = useState<IRoom[]>([]);
  // const fetchRooms = async () => {
  //   const response = await fetch('http://127.0.0.1:8000/api/v1/rooms/');
  //   const json = await response.json();
  //   setRooms(json);
  //   setIsLoading(false);
  // };
  // useEffect(() => {
  //   fetchRooms();
  // }, []);
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
      {/* {[
        1, 2, 3, 4, 5, 6, 7, 7, 5, 5, 6, 8, 9, 3, 1, 3, 4, 5, 6, 7, 8, 4, 5, 7,
        2,
      ].map((index) => (
        <Room key={index} />
      ))} */}
      {/* <Box>
        <Skeleton rounded={'2xl'} height={280} mb={7} />
        <SkeletonText w={'50%'} noOfLines={3} mb={7} />
      </Box>
      <Room /> */}
      {isLoading ? (
        <>
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />

          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
        </>
      ) : null}
      {data?.map((room) => (
        <Room
          imageUrl={room.photos[0].file}
          name={room.name}
          rating={room.rating}
          city={room.city}
          contry={room.contry}
          price={room.price}
        />
      ))}
    </Grid>
  );
}
