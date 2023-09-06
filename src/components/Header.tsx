import {
  HStack,
  Box,
  IconButton,
  Button,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  LightMode,
} from '@chakra-ui/react';
import { FaAirbnb, FaMoon, FaSun } from 'react-icons/fa';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

// LightMode, DarkMode 태그 만들면 강제로 사용

export default function Headers() {
  const {
    isOpen: isLoginOpen,
    onClose: onLoginClose,
    onOpen: onLoginOpen,
  } = useDisclosure();
  const {
    isOpen: isSignUpOpen,
    onClose: onSignUpClose,
    onOpen: onSignUpOpen,
  } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  // 컬러모드에 따라 true, false
  const logoColor = useColorModeValue('red.500', 'red.200');
  // Icon으로 쓸때는 무조건 대문자로 시작
  const Icon = useColorModeValue(FaMoon, FaSun);
  return (
    <HStack
      justifyContent={'space-between'}
      py={5}
      px={40}
      borderBottomWidth={1}
    >
      <Box color={logoColor}>
        <FaAirbnb size={38} />
      </Box>
      <HStack>
        <IconButton
          onClick={toggleColorMode}
          variant={'ghost'}
          aria-label="Toggle dark mode"
          // icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
          icon={<Icon />}
        />
        <Button onClick={onLoginOpen}>Log in</Button>
        <LightMode>
          <Button onClick={onSignUpOpen} colorScheme="red">
            Sign up
          </Button>
        </LightMode>
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
    </HStack>
  );
}
