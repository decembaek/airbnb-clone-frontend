import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Headers from './Header';
// import { FaAirbnb, FaMoon } from 'react-icons/fa';
// import LoginModal from './LoginModal';
// import SocialLogin from './socialLogin';

/* 랜더링 Outlet  가로 디자인 HStack*/
/* py는 수직 px는 수평 거리 padding */

export default function Root() {
  /* useDisclosure True False */

  return (
    // 로그인 구현
    <Box>
      <Headers />
      <Outlet />
    </Box>
  );
}
