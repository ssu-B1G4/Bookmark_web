import styled from 'styled-components';

export const BottomSheetWrapper = styled.div`
  position: absolute;
  top: calc(min(43rem, 100vw) - 20px);
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  min-height: calc(100vh - min(43rem, 100vw) - 20px);
  background-color: white;
  border-radius: 20px 20px 0 0;
  padding: 20px;
  z-index: 2;
  transition: transform 0.3s ease-out;
  will-change: transform;
  height: auto;
  overflow-y: visible;
  overscroll-behavior: contain;
  touch-action: pan-y pinch-zoom;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
`;

export const SpaceTitle = styled.p`
  font-size: 3rem;
  font-weight: ${({ theme }) => theme.fonts.semiBold600};
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 18px;
`;

export const IconButton = styled.button`
  width: 34px;
  height: 34px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`;

export const SpaceLocation = styled.p`
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fonts.regular400};
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const SpaceType = styled.p`
  color: #8b8b8b;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.regular400};
  gap: 2px;
  margin-left: 30px;
`;

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #ecfce5;
  margin: 14px 0;
`;

export const ContentSection = styled.div`
  margin-top: 24px;
  height: auto;
  position: relative;
  overscroll-behavior: contain;
`;

export const SpaceInfo = styled.p`
  color: ${({ theme }) => theme.colors.green};
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.fonts.semiBold600};
  margin: 24px 0 16px 0;
`;

export const MoodInfo = styled.p`
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.fonts.semiBold600};
  margin-right: 10px;
`;

export const FacilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin: 8px;
`;

export const FacilityItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
`;

export const FacilityIcon = styled.img`
  width: 28px;
  height: 28px;
`;

export const FacilityName = styled.span`
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.fonts.semiBold600};
  margin-bottom: 4px;
`;

export const FacilityStatus = styled.span`
  color: #585858;
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.fonts.regular400};
  margin-top: 4px;
`;

export const MoodContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
  margin-left: 30px;
`;

export const TabNavigationContainer = styled.div`
  position: relative;
  display: flex;
  border-bottom: 3px solid #ecfce5;
`;

export const TabButton = styled.button<{ $active: boolean }>`
  flex: 1;
  padding: 16px 0;
  background: none;
  border: none;
  font-weight: ${({ theme }) => theme.fonts.regular400};
  color: ${({ $active }) => ($active ? '#198155' : '#000000')};
`;

export const TabIndicator = styled.div<{ $activeTab: string }>`
  position: absolute;
  bottom: -1px;
  height: 2px;
  background-color: #198155;
  transition: left 0.2s ease;
  width: 33.33%;
  left: ${({ $activeTab }) => {
    switch ($activeTab) {
      case '정보':
        return '0%';
      case '리뷰':
        return '33.33%';
      case '유사':
        return '66.66%';
      default:
        return '0%';
    }
  }};
`;
