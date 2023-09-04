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
import { FaUserNinja, FaLock, FaEnvelope, FaUser } from 'react-icons/fa';
import SocialLogin from './socialLogin';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  return (
    <Modal motionPreset="slideInRight" onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sign up</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={'gray.500'}>
                    <FaUser />
                  </Box>
                }
              />
              <Input variant={'filled'} placeholder="Name" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={'gray.500'}>
                    <FaEnvelope />
                  </Box>
                }
              />
              <Input variant={'filled'} placeholder="Email" />
            </InputGroup>
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
