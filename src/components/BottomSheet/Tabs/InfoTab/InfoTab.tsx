import React, { useEffect, useRef } from 'react';

import Clock from '@/assets/SpacePage/clockIcon.svg';
import Phone from '@/assets/SpacePage/phoneIcon.svg';
import MapPin from '@/assets/SpacePage/spacemarker.svg';
import Globe from '@/assets/SpacePage/websiteIcon.svg';
import { InfoTabProps } from '@/types/placeDetail';

import {
  DayLabel,
  IconImage,
  InfoContainer,
  InfoContent,
  InfoItem,
  InfoMainText,
  InfoSection,
  InfoText,
  Label,
  MapContainer,
  TimeTable,
  TimeText,
} from './InfoTab.style';

export const InfoTab = ({ placeDetail }: InfoTabProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  const handleMapClick = () => {
    const { latitude, longitude } = placeDetail.location;
    const naverMapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(placeDetail.address)}?c=${longitude},${latitude},15,0,0,0,dh`;
    window.open(naverMapUrl, '_blank');
  };

  useEffect(() => {
    if (!mapRef.current || !window.naver) return;

    const mapOptions: naver.maps.MapOptions = {
      center: new naver.maps.LatLng(placeDetail.location.latitude, placeDetail.location.longitude),
      zoom: 17,
      zoomControl: false,
      draggable: false,
      pinchZoom: false,
      scrollWheel: false,
      keyboardShortcuts: false,
      disableDoubleTapZoom: true,
      disableDoubleClickZoom: true,
      disableTwoFingerTapZoom: true,
    };

    const mapInstance = new naver.maps.Map(mapRef.current, mapOptions);

    new naver.maps.Marker({
      position: new naver.maps.LatLng(
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
  }, [placeDetail.location]);

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
              <InfoText>{placeDetail.url}</InfoText>
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

      <InfoMainText>예측 공간 혼잡도</InfoMainText>
    </InfoContainer>
  );
};
