import {
  VStack,
  Box,
  Image,
  Button,
  HStack,
  Grid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaRegHeart, FaStar } from 'react-icons/fa';

export default function Room() {
  const gray = useColorModeValue('gray.600', 'gray.300');
  return (
    <VStack alignItems={'flex-start'}>
      <Box position={'relative'} overflow={'hidden'} mb={2} rounded={'3xl'}>
        <Image
          minH={'280'}
          src="https://a0.muscache.com/im/pictures/cdd7fa47-2b40-4593-be79-3ca6757f25bc.jpg?im_w=720"
        />
        <Button
          variant={'unstyled'}
          cursor={'pointer'}
          position={'absolute'}
          top={0}
          right={0}
          color={'white'}
        >
          <FaRegHeart size={'20px'} />
        </Button>
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
        <Text fontSize={'sm'} color={gray}>
          Seoul, S. Korea
        </Text>
      </Box>
      <Text fontSize={'sm'} color={gray}>
        <Text as={'b'}>$72</Text> / night
      </Text>
    </VStack>
  );
}
