import kakao from '@/assets/login/kakao.svg';
import logo from '@/assets/login/logo.svg';

import { Container, KakaoButton, LoginSubText, LoginText, LogoImage } from './LoginPage.style';

export const LoginPage = () => {
  const handleKakaoLogin = () => {
    console.log('카카오 로그인 시도');
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
