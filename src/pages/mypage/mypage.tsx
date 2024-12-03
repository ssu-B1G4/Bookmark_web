import { useEffect, useState } from 'react';

import KakaoTag from '@/assets/kakaoTag.png';

import {
  Container,
  KakaoLogo,
  LoginSection,
  LoginTag,
  LoginText,
  MenuItem,
  MenuList,
  ProfileImage,
  ProfileName,
} from './mypage.style';

export const Mypage = () => {
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const dummyData = {
      result: {
        memberId: 3,
        nickname: '배고픈 곰',
      },
    };

    if (dummyData.result) {
      setNickname(dummyData.result.nickname);
    }
  }, []);

  return (
    <Container>
      <ProfileImage />
      <ProfileName>{nickname}</ProfileName>

      <LoginSection>
        <LoginText>로그인</LoginText>
        <LoginTag>
          <KakaoLogo src={KakaoTag} alt="kakaoLoginIcon" />
          카카오 로그인
        </LoginTag>
      </LoginSection>
      <MenuList>
        <MenuItem>개인정보 처리방침</MenuItem>
        <MenuItem>서비스 이용약관</MenuItem>
        <MenuItem>위치서비스 약관</MenuItem>
        <MenuItem>문의하기</MenuItem>
        <MenuItem>로그아웃</MenuItem>
        <MenuItem>회원탈퇴</MenuItem>
      </MenuList>
    </Container>
  );
};

export default Mypage;
