import React, { useEffect, useRef } from 'react';

import alert from '@/assets/SpacePage/alertCircleIcon.svg';
import Clock from '@/assets/SpacePage/clockIcon.svg';
import Phone from '@/assets/SpacePage/phoneIcon.svg';
import MapPin from '@/assets/SpacePage/spacemarker.svg';
import Globe from '@/assets/SpacePage/websiteIcon.svg';
import { ReadOnlyBookSearchBar } from '@/components/BookSearchBar/ReadOnlyBookSearchBar';
import { InfoTabProps } from '@/types/placeDetail';

import { Graph } from './Graph';
import {
  AlertIcon,
  AlertSection,
  ChartContainer,
  ChartSection,
  CongestionContainer,
  CongestionDescription,
  CongestionLevel,
  DayLabel,
  IconImage,
  InfoContainer,
  InfoContent,
  InfoItem,
  InfoMainText,
  InfoSection,
  InfoText,
  Label,
  MainContent,
  MapContainer,
  SearchAlertSection,
  SearchSection,
  TimeTable,
  TimeText,
  WarnText,
} from './InfoTab.style';

interface TimeData {
  hour: string;
  value: number;
  type: 'green' | 'yellow' | 'red';
}

const timeData: TimeData[] = [
  { hour: '08시', value: 20, type: 'green' },
  { hour: '09시', value: 25, type: 'green' },
  { hour: '10시', value: 32, type: 'green' },
  { hour: '11시', value: 35, type: 'green' },
  { hour: '12시', value: 38, type: 'yellow' },
  { hour: '13시', value: 40, type: 'yellow' },
  { hour: '14시', value: 42, type: 'yellow' },
  { hour: '15시', value: 47, type: 'yellow' },
  { hour: '16시', value: 35, type: 'green' },
  { hour: '17시', value: 36, type: 'green' },
  { hour: '18시', value: 45, type: 'yellow' },
  { hour: '19시', value: 60, type: 'red' },
  { hour: '20시', value: 55, type: 'red' },
  { hour: '21시', value: 30, type: 'green' },
  { hour: '22시', value: 15, type: 'green' },
  { hour: '23시', value: 10, type: 'green' },
];

export const InfoTab = ({ placeDetail }: InfoTabProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current || !window.naver || !placeDetail) {
      console.error('Required dependencies are not loaded');
      return;
    }

    try {
      const mapOptions: naver.maps.MapOptions = {
        center: new window.naver.maps.LatLng(
          placeDetail.location.latitude,
          placeDetail.location.longitude
        ),
        zoom: 17,
      };

      const mapInstance = new window.naver.maps.Map(mapRef.current, mapOptions);

      new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(
          placeDetail.location.latitude,
          placeDetail.location.longitude
        ),
        map: mapInstance,
      });

      return () => {
        if (mapInstance) {
          mapInstance.destroy();
        }
      };
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }, [placeDetail]);

  if (!placeDetail) {
    return <div>Loading...</div>;
  }

  const handleMapClick = () => {
    const { latitude, longitude } = placeDetail.location;
    const naverMapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(placeDetail.address)}?c=${longitude},${latitude},15,0,0,0,dh`;
    window.open(naverMapUrl, '_blank');
  };

  return (
    <InfoContainer>
      <InfoMainText>상세 정보</InfoMainText>
      <MapContainer onClick={handleMapClick}>
        <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
      </MapContainer>

      <InfoSection>
        <InfoItem>
          <IconImage src={MapPin} alt="위치" />
          <InfoContent>
            <InfoText>{placeDetail.address}</InfoText>
          </InfoContent>
        </InfoItem>

        {placeDetail.phone && (
          <InfoItem>
            <IconImage src={Phone} alt="전화번호" />
            <InfoContent>
              <InfoText>{placeDetail.phone}</InfoText>
            </InfoContent>
          </InfoItem>
        )}

        {placeDetail.url && (
          <InfoItem>
            <IconImage src={Globe} alt="웹사이트" />
            <InfoContent>
              <InfoText as="a" href={placeDetail.url} target="_blank" rel="noopener noreferrer">
                {placeDetail.url}
              </InfoText>
            </InfoContent>
          </InfoItem>
        )}

        <InfoItem>
          <IconImage src={Clock} alt="운영시간" />
          <InfoContent>
            <Label>운영시간</Label>
            <TimeTable>
              {Object.entries(placeDetail.operatingTimeList).map(([day, times]) => (
                <React.Fragment key={day}>
                  <DayLabel>{day}</DayLabel>
                  <TimeText>
                    {times.openTime ? `${times.openTime} ~ ${times.closeTime}` : '휴무'}
                  </TimeText>
                </React.Fragment>
              ))}
            </TimeTable>
          </InfoContent>
        </InfoItem>
      </InfoSection>

      <ChartSection>
        <InfoMainText>예측 공간 혼잡도</InfoMainText>
        <ChartContainer>
          <Graph data={timeData} />
        </ChartContainer>

        <CongestionContainer>
          <MainContent>
            <CongestionDescription>
              예측 공간 혼잡도는 <CongestionLevel $level="green">여유</CongestionLevel> 입니다
            </CongestionDescription>
          </MainContent>
          <AlertSection>
            <AlertIcon src={alert} alt="info" />
            <WarnText>
              사용자의 리뷰를 통계를 예측된 결과입니다.
              {'\n'}
              실제 혼잡도와 다를 수 있습니다.
            </WarnText>
          </AlertSection>
        </CongestionContainer>
      </ChartSection>

      <SearchSection>
        <InfoMainText>보유 도서</InfoMainText>
        <ReadOnlyBookSearchBar />
        <SearchAlertSection>
          <AlertIcon src={alert} alt="info" />
          <WarnText>
            사용자의 리뷰에 따라 보유 도서가 업데이트 됩니다.
            {'\n'}
            리뷰에 작성되지 않은 도서는 미등록 상태입니다.
          </WarnText>
        </SearchAlertSection>
      </SearchSection>
    </InfoContainer>
  );
};
