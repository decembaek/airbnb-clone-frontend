import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  InputGroup,
  InputLeftElement,
  Box,
  VStack,
  Input,
  Button,
} from '@chakra-ui/react';
import { FaUserNinja, FaLock } from 'react-icons/fa';
import SocialLogin from './socialLogin';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  return (
    <Modal motionPreset="slideInRight" onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Login</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={'gray.500'}>
                    <FaUserNinja />
                  </Box>
                }
              />
              <Input variant={'filled'} placeholder="Username" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={'gray.500'}>
                    <FaLock />
                  </Box>
                }
              />
              <Input variant={'filled'} placeholder="Password" />
            </InputGroup>
          </VStack>
          <Button mt={4} colorScheme="red" width={'100%'}>
            Log in
          </Button>
          <SocialLogin />
        </ModalBody>
        {/* <ModalFooter>
              <Button colorScheme="red">Close</Button>
            </ModalFooter> */}
        {/* <ModalFooter>
              <Button colorScheme="red" width={"100%"}>Log in</Button>
            </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
}
