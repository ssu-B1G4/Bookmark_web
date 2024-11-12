import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  border-top: 1px solid #f7f7f7;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  max-width: 335px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: black;

  &.active {
    color: ${({ theme }) => theme.colors.green};
  }

  img {
    width: 24px;
    height: 24px;
  }

  span {
    font-size: 1rem;
  }
`;
