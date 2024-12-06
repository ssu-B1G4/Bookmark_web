import { useEffect, useState, useMemo } from 'react';

import { useNavigate } from 'react-router-dom';

import { DeleteWithdrawUseCase } from '@/apis/application/useCases/Auth/DeleteWithdrawUseCase';
import { PostLogoutUseCase } from '@/apis/application/useCases/Auth/PostLogoutUseCase';
import { GetUserInfoUseCase } from '@/apis/application/useCases/User/GetUserInfoUseCase';
import { AuthService } from '@/apis/services/AuthService';
import { UserService } from '@/apis/services/UserService';
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
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');

  const userService = useMemo(() => new UserService(), []);
  const getUserInfoUseCase = useMemo(() => new GetUserInfoUseCase(userService), [userService]);

  const authService = useMemo(() => new AuthService(), []);
  const deleteWithdrawUseCase = useMemo(
    () => new DeleteWithdrawUseCase(authService),
    [authService]
  );
  const postLogoutUseCase = useMemo(() => new PostLogoutUseCase(authService), [authService]);

  /**
   * 마이페이지 API 호출 (유저 정보)
   */
  const fetchUserInfo = async () => {
    try {
      const response = await getUserInfoUseCase.execute();
      if (response.isSuccess) {
        setNickname(response.result.nickname);
      }
    } catch (error) {
      console.error('Failed to fetch user info:', error);
      setNickname('사용자 정보를 불러올 수 없습니다.');
    }
  };

  /**
   * 회원탈퇴 API 호출
   */
  const withdraw = async () => {
    try {
      const response = await deleteWithdrawUseCase.execute();
      if (response.isSuccess) {
        console.log(response.message);
        navigate(`/login`);
      }
    } catch (error) {
      console.error('Failed to withdraw:', error);
    }
  };

  /**
   * 로그아웃 함수 호출
   */
  const logout = async () => {
    try {
      await postLogoutUseCase.execute();
      navigate(`/login`);
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  });

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
        <MenuItem onClick={logout}>로그아웃</MenuItem>
        <MenuItem onClick={withdraw}>회원탈퇴</MenuItem>
      </MenuList>
    </Container>
  );
};

export default Mypage;
