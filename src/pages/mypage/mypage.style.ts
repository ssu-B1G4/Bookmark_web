import styled from 'styled-components';

import ProfileImg from '@/assets/profileImage.png';

export const Container = styled.div`
  height: 100vh;
  margin-top: 30%;
  padding: 20px;
  background-color: white;
`;

export const ProfileImage = styled.div`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background-image: url(${ProfileImg});
  background-size: cover;
  background-position: center;
  margin-bottom: 23.17px;
`;

export const ProfileName = styled.h2`
  font-size: 2.06rem;
  font-weight: ${({ theme }) => theme.fonts.semiBold600};
`;

export const LoginSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px 7px;
  border-top: 2px solid #f2f4f5;
  border-bottom: 2px solid #f2f4f5;
  margin: 8px 0px;
`;

export const LoginText = styled.label`
  font-size: 1.54rem;
  font-weight: ${({ theme }) => theme.fonts.semiBold600};
  padding: 0;
  margin: 0;
`;

export const LoginTag = styled.div`
  display: flex;
  align-items: center;
  color: #c5c5c7;
  font-size: 1.03rem;
  font-weight: ${({ theme }) => theme.fonts.semiBold600};
`;

export const KakaoLogo = styled.img`
  width: 13px;
  height: 13px;
  margin-right: 5px;
`;

export const MenuList = styled.ul`
  list-style: none;
  margin: 0px 8px;
`;

export const MenuItem = styled.button`
  width: 100%;
  text-align: left;
  padding: 14px 0;
  font-size: 1.52rem;
  font-weight: ${({ theme }) => theme.fonts.semiBold600};
  color: black;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #198155;
  }
`;
