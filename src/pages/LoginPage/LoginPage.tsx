import kakao from '@/assets/login/kakao.svg';
import logo from '@/assets/login/logo.svg';

import { Container, KakaoButton, LoginSubText, LoginText, LogoImage } from './LoginPage.style';

const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

export const LoginPage = () => {
  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <Container>
      <LogoImage src={logo} alt="Bookmark 로고" />
      <LoginText>Bookmark</LoginText>
      <LoginSubText>매일매일 새로운 독서 공간 추천</LoginSubText>
      <KakaoButton onClick={handleKakaoLogin} src={kakao} alt="카카오로 로그인하기" />
    </Container>
  );
};
