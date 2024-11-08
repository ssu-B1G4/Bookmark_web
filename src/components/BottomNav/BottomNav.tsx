import home from '@/assets/BottomNav/homeIcon.svg';
import mypage from '@/assets/BottomNav/mypageIcon.svg';
import save from '@/assets/BottomNav/saveIcon.svg';

import { NavContainer, NavWrapper, StyledNavLink } from './BottomNav.style';

export const BottomNav = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <StyledNavLink to="/">
          <img src={home} alt="홈" />
          <span>홈</span>
        </StyledNavLink>

        <StyledNavLink to="/myplace">
          <img src={save} alt="저장" />
          <span>저장</span>
        </StyledNavLink>

        <StyledNavLink to="/mypage">
          <img src={mypage} alt="마이페이지" />
          <span>마이페이지</span>
        </StyledNavLink>
      </NavWrapper>
    </NavContainer>
  );
};
