import { HStack, Box, Divider, Text, VStack, Button } from '@chakra-ui/react';
import { FaGithub, FaComment } from 'react-icons/fa';

export default function SocialLogin() {
  return (
    <Box mb={4}>
      {/*  OR 버튼 및 선 만들기 */}
      <HStack my={8}>
        <Divider />
        <Text
          textTransform={'uppercase'}
          color={'gray.400'}
          fontSize={'xs'}
          as={'b'}
        >
          OR
        </Text>
        <Divider />
      </HStack>
      {/* 깃헙 및 소셜 로그인 만들기 */}

      <VStack>
        <Button w={'100%'} leftIcon={<FaGithub />} colorScheme="telegram">
          Continue with Github
        </Button>
        <Button w={'100%'} leftIcon={<FaComment />} colorScheme="yellow">
          Continue with KaKao
        </Button>
      </VStack>
    </Box>
  );
}
