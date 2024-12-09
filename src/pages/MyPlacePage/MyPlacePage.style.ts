import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: white;
`;

export const Header = styled.header`
  padding: 36px 36px 0;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: ${({ theme }) => theme.fonts.semiBold600};
  margin-bottom: 36px;
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderTitle = styled.p`
  position: relative;
  width: fit-content;
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fonts.medium500};
  padding-bottom: 8px;
  margin-bottom: 12px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -10px;
    right: -10px;
    height: 2.3px;
    background-color: #2aa971;
  }
`;

export const CountText = styled.p`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.regular400};
  margin-left: 4px;
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  margin-bottom: 80px;
`;

export const SpaceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  padding: 0 16px;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 40px 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export const EmptyTitle = styled.p`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fonts.regular400};
  margin-bottom: 8px;
`;

export const EmptyDescription = styled.p`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fonts.regular400};
  color: #b2b2b2;
`;
