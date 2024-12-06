import { useEffect, useState } from 'react';

import chatIcon from '@/assets/SpacePage/chatIcon.svg';
import locationIcon from '@/assets/SpacePage/spacemarker.svg';
import { FACILITY_ICONS } from '@/constant/facility';
import { PlaceDetailResponse } from '@/types/placeDetail';

import { Bookmark } from '../Bookmark/Bookmark';
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
} from './PlaceBottomSheet.style';
import { InfoTab } from './Tabs/InfoTab/InfoTab';
import { ReviewTab } from './Tabs/ReviewTab/ReviewTab';

export type TabType = '정보' | '리뷰';

interface BottomSheetProps {
  spaceId: number;
  spaceDetail?: PlaceDetailResponse['result'];
  containerRef: React.RefObject<HTMLDivElement>;
  onTabChange: (tab: TabType) => void;
  // refetchSpaceDetail: () => Promise<QueryObserverBaseResult<PlaceDetailResponse, Error>>;
}

export const PlaceBottomSheet = ({
  spaceId,
  spaceDetail,
  onTabChange,
  // refetchSpaceDetail,
}: BottomSheetProps) => {
  const [activeTab, setActiveTab] = useState<TabType>('정보');
  void spaceId;

  const { name, address, category, outlet, size, wifi, noise, moods } = spaceDetail ?? {};

  const facilityStatus = {
    1: outlet,
    2: size,
    3: wifi,
    4: noise,
  };

  useEffect(() => {
    onTabChange(activeTab);
  }, [activeTab, onTabChange]);

  // const handleBookmarkClick = useCallback(async () => {
  //   if (!spaceDetail) return;

  //   try {
  //     let response;

  //     if (spaceDetail.isSaved) {
  //       response = await deletePlaceBookmark(spaceId);
  //     } else {
  //       response = await postPlaceBookmark(spaceId);
  //     }

  //     if (response.isSuccess) {
  //       await refetchSpaceDetail();
  //     }
  //   } catch (error) {
  //     console.error('북마크 처리 중 오류 발생:', error);
  //   }
  // }, [spaceDetail, spaceId, refetchSpaceDetail]);

  if (!spaceDetail) {
    return <div>Loading...</div>;
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case '정보':
        return spaceDetail ? (
          <InfoTab
            placeDetail={{
              address: spaceDetail.address,
              phone: spaceDetail.phone,
              url: spaceDetail.url,
              operatingTimeList: spaceDetail.operatingTimeList,
              location: {
                latitude: spaceDetail.latitude,
                longitude: spaceDetail.longitude,
              },
            }}
          />
        ) : null;
      case '리뷰':
        return <ReviewTab />;
      default:
        return null;
    }
  };

  return (
    <BottomSheetWrapper>
      <HeaderContainer>
        <SpaceTitle>{name}</SpaceTitle>
        <IconsContainer>
          <IconButton onClick={() => console.log('채팅 클릭')}>
            <img src={chatIcon} alt="채팅" />
          </IconButton>
          <Bookmark placeId={spaceId} />
          {/* <IconButton onClick={handleBookmarkClick}>
            <img src={spaceDetail.isSaved ? bookmarkActive : bookmarkDefault} alt="북마크" />
          </IconButton> */}
        </IconsContainer>
      </HeaderContainer>

      <LocationContainer>
        <img src={locationIcon} alt="위치마커" />
        <SpaceLocation>{address}</SpaceLocation>
      </LocationContainer>

      <SpaceType>{category}</SpaceType>

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
          {moods?.map((mood, index) => (
            <ReplyBtn key={index} disabled={true} $fontSize={1.4} $fontWeight="regular">
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
        <TabIndicator $activeTab={activeTab} />
      </TabNavigationContainer>

      {renderTabContent()}
    </BottomSheetWrapper>
  );
};
