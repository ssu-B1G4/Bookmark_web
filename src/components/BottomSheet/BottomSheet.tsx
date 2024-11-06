import { useState } from 'react';

import bookmarkActive from '@/assets/SpacePage/activeBookmarkIcon.svg';
import bookmarkDefault from '@/assets/SpacePage/bookmarkIcon.svg';
import chatIcon from '@/assets/SpacePage/chatIcon.svg';
import locationIcon from '@/assets/SpacePage/spacemarker.svg';
import { FACILITY_ICONS } from '@/constant/facility';

import { ReplyBtn } from '../ReplyBtn/ReplyBtn';

import {
  BottomSheetWrapper,
  ContentSection,
  Divider,
  FacilitiesGrid,
  FacilityIcon,
  FacilityItem,
  FacilityName,
  FacilityStatus,
  HeaderContainer,
  IconButton,
  IconsContainer,
  LocationContainer,
  MoodContainer,
  MoodInfo,
  SpaceInfo,
  SpaceLocation,
  SpaceTitle,
  SpaceType,
  TabButton,
  TabIndicator,
  TabNavigationContainer,
} from './BottomSheet.style';
import { InfoTab } from './Tabs/InfoTab/InfoTab';
import { ReviewTab } from './Tabs/ReviewTab/ReviewTab';
import { SimilarTab } from './Tabs/SimilarTab/SimilarTab';

type TabType = '정보' | '리뷰' | '유사';

interface BottomSheetProps {
  spaceInfo: {
    title: string;
    location: string;
    category: string;
    outlet: string;
    size: string;
    wifi: string;
    noise: string;
    mood1: string;
    mood2: string;
  };
}

export const BottomSheet = ({ spaceInfo }: BottomSheetProps) => {
  const [activeTab, setActiveTab] = useState<TabType>('정보');
  const [isBookmarked, setIsBookmarked] = useState(false);

  const facilityStatus = {
    1: spaceInfo.outlet,
    2: spaceInfo.size,
    3: spaceInfo.wifi,
    4: spaceInfo.noise,
  };

  const moods = {
    1: spaceInfo.mood1,
    2: spaceInfo.mood2,
  };

  const handleBookmarkClick = () => {
    setIsBookmarked((prev) => !prev);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case '정보':
        return <InfoTab />;
      case '리뷰':
        return <ReviewTab />;
      case '유사':
        return <SimilarTab />;
      default:
        return null;
    }
  };

  return (
    <BottomSheetWrapper>
      <HeaderContainer>
        <SpaceTitle>{spaceInfo.title}</SpaceTitle>
        <IconsContainer>
          <IconButton onClick={() => console.log('채팅 클릭')}>
            <img src={chatIcon} alt="채팅" />
          </IconButton>
          <IconButton onClick={handleBookmarkClick}>
            <img src={isBookmarked ? bookmarkActive : bookmarkDefault} alt="북마크" />
          </IconButton>
        </IconsContainer>
      </HeaderContainer>

      <LocationContainer>
        <img src={locationIcon} alt="위치마커" />
        <SpaceLocation>{spaceInfo.location}</SpaceLocation>
      </LocationContainer>

      <SpaceType>{spaceInfo.category}</SpaceType>

      <Divider />

      <ContentSection>
        <SpaceInfo>공간 정보</SpaceInfo>
        <FacilitiesGrid>
          {FACILITY_ICONS.map((facility) => (
            <FacilityItem key={facility.id}>
              <FacilityName>{facility.name}</FacilityName>
              <FacilityIcon src={facility.icon} alt={facility.name} />
              <FacilityStatus>{facilityStatus[facility.id]}</FacilityStatus>
            </FacilityItem>
          ))}
        </FacilitiesGrid>

        <MoodContainer>
          <MoodInfo>분위기</MoodInfo>
          {Object.values(moods).map((mood, index) => (
            <ReplyBtn key={index} disabled={true}>
              {mood}
            </ReplyBtn>
          ))}
        </MoodContainer>
      </ContentSection>

      <Divider />

      <TabNavigationContainer>
        <TabButton $active={activeTab === '정보'} onClick={() => setActiveTab('정보')}>
          정보
        </TabButton>
        <TabButton $active={activeTab === '리뷰'} onClick={() => setActiveTab('리뷰')}>
          리뷰
        </TabButton>
        <TabButton $active={activeTab === '유사'} onClick={() => setActiveTab('유사')}>
          유사
        </TabButton>
        <TabIndicator $activeTab={activeTab} />
      </TabNavigationContainer>

      {renderTabContent()}
    </BottomSheetWrapper>
  );
};
