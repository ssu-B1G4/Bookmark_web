import { useEffect, useRef, useState, useCallback } from 'react';

import ReactDOMServer from 'react-dom/server';

import { CirclepathIcon } from '@/assets/Map/CirclepathIcon';
import { MarkerPinIcon } from '@/assets/Map/MarkerPinIcon';
import { MyLocationIcon } from '@/assets/Map/MyLocationIcon';
import { SelectedMarkerPinIcon } from '@/assets/Map/SelectedMarkerPinIcon';

import { LoadingSpinner } from '../Loading copy/LoadingSpinner';

import {
  LoadingContainer,
  MapContainer,
  MapWrapper,
  MapButton,
  MyLocationMarker,
} from './Map.style';
import { MapProps } from './MapProps';
import { useGeolocation } from './useGeolocation';

export const Map = ({
  searchPlaces = [],
  onMarkerClick,
  onReLocationClick,
  onMyLocationClick,
}: MapProps) => {
  const { naver } = window;
  const mapRef = useRef<HTMLDivElement>(null);
  const { location, loading } = useGeolocation();
  const [map, setMap] = useState<naver.maps.Map | null>(null);
  const [markers, setMarkers] = useState<naver.maps.Marker[]>([]);
  const [selectedPlaceId, setSelectedPlaceId] = useState<number | null>(null);

  /**
   * 중심 위치 조정 값입니다.
   * - 바텀시트에 지도 중심이 가려지지 않게 하기 위해 사용합니다.
   */
  const OFFSET_LAT = 0.0015;

  /**
   * 지도 초기화 함수
   *
   * - 네이버 지도를 초기화하고, 지도와 관련된 기본 설정 및 이벤트 리스너를 등록합니다.
   * - 초기 위치로 지도 중심을 설정하고, 현재 위치를 표시하는 마커를 추가합니다.
   *
   * 동작 설명:
   * 1. 지도 초기화 조건:
   *    - `loading`이 완료되었고, `map` 객체가 초기화되지 않은 경우에만 동작.
   *    - `naver` 객체와 `location` 값이 유효해야 함.
   * 2. 지도 옵션 설정:
   *    - `center`: 초기 지도 중심을 현재 위치로 설정.
   *    - `zoom`: 기본 줌 레벨(17) 설정.
   *    - `zoomControl`: 줌 컨트롤 버튼 비활성화.
   * 3. 현재 위치 마커 추가:
   *    - 현재 위치에 마커를 표시하며, 커스텀 스타일(`MyLocationMarker`) 적용.
   *
   * 반환값:
   * - 없음. 초기화된 `naver.maps.Map` 객체는 `setMap`으로 상태 업데이트.
   *
   * 종속성:
   * - `loading`: 현재 위치 데이터를 로드 중인지 여부.
   * - `location`: 사용자 현재 위치 객체.
   * - `naver`: 네이버 지도 객체.
   */
  const initializeMap = useCallback(() => {
    if (!loading && !map && naver && location) {
      const mapOptions = {
        center: new naver.maps.LatLng(location.lat - OFFSET_LAT, location.lng),
        zoom: 17,
        zoomControl: false,
      };
      const initializedMap = new naver.maps.Map(mapRef.current!, mapOptions);
      setMap(initializedMap);

      new naver.maps.Marker({
        position: new naver.maps.LatLng(location.lat, location.lng),
        map: initializedMap,
        icon: {
          content: `<div style="${MyLocationMarker.componentStyle.rules.join('')}"></div>`,
          anchor: new naver.maps.Point(12, 12),
        },
      });

      return;
    }
  }, [loading, location, naver]);

  /**
   * 지도에 마커 업데이트
   *
   * - 기존 마커를 제거하고, 새로운 데이터를 기반으로 마커를 생성하여 지도에 추가합니다.
   * - 각 마커는 클릭 이벤트를 통해 선택 상태를 변경하거나 바텀시트를 표시하도록 설정됩니다.
   *
   * 동작 설명:
   * 1. 기존 마커를 모두 지도에서 제거합니다.
   * 2. `searchPlaces` 데이터를 순회하며 새로운 마커를 생성:
   *    - 마커 위치를 데이터의 위도/경도로 설정.
   *    - 마커 아이콘을 선택된 상태(`selectedPlaceId`)에 따라 다르게 설정.
   * 3. 각 마커에 클릭 이벤트를 추가:
   *    - 마커 클릭 시 해당 마커의 ID를 `selectedPlaceId`로 설정.
   *    - 선택된 상태에서 다시 클릭하면 선택을 해제.
   *    - 마커 클릭 시 지도를 해당 마커 중심으로 이동하고 줌 레벨을 조정.
   * 4. 생성된 마커 배열을 상태로 저장하여 관리.
   *
   * 종속성:
   * - `map`: 네이버 지도 객체.
   * - `searchPlaces`: 마커를 생성할 데이터 목록.
   * - `selectedPlaceId`: 선택된 마커 ID.
   * - `onMarkerClick`: 마커 클릭 시 상위 컴포넌트로 ID를 전달하는 콜백.
   */
  const updateMarkers = useCallback(() => {
    if (map) {
      const newMarkers = searchPlaces.map((place) => {
        const isSelected = selectedPlaceId === place.placeId;

        const existingMarker = markers.find((marker) => {
          const markerPosition = marker.getPosition();
          return (
            markerPosition.lat() === place.latitude && markerPosition.lng() === place.longitude
          );
        });

        if (existingMarker) {
          existingMarker.setIcon({
            content: ReactDOMServer.renderToString(
              isSelected ? <SelectedMarkerPinIcon /> : <MarkerPinIcon />
            ),
          });
          return existingMarker;
        }

        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(place.latitude, place.longitude),
          map,
          icon: {
            content: ReactDOMServer.renderToString(
              isSelected ? <SelectedMarkerPinIcon /> : <MarkerPinIcon />
            ),
          },
        });

        naver.maps.Event.addListener(marker, 'click', () => {
          const clickedPlaceId = place.placeId;

          setSelectedPlaceId((prevPlaceId) => {
            if (prevPlaceId !== null) {
              console.log('Unselecting placeId:', clickedPlaceId);
              marker.setIcon({
                content: ReactDOMServer.renderToString(<MarkerPinIcon />),
              });
              return null;
            } else {
              console.log('Selecting new placeId:', clickedPlaceId);
              markers.forEach((m) => {
                m.setIcon({
                  content: ReactDOMServer.renderToString(<MarkerPinIcon />),
                });
              });
              marker.setIcon({
                content: ReactDOMServer.renderToString(<SelectedMarkerPinIcon />),
              });

              const markerPosition = marker.getPosition();
              const offsetPosition = new naver.maps.LatLng(
                markerPosition.lat() - OFFSET_LAT,
                markerPosition.lng()
              );
              map.setCenter(offsetPosition);
              map.setZoom(17);

              return clickedPlaceId;
            }
          });
        });

        return marker;
      });

      setMarkers(newMarkers);
    }
  }, [map, searchPlaces, onMarkerClick, selectedPlaceId]);

  /**
   * 현재 위치로 지도 이동
   *
   * - 사용자의 현재 위치를 기반으로 지도 중심을 이동합니다.
   * - 위치를 기준으로 지도 중심을 약간 조정하여 보정합니다(OFFSET_LAT 사용).
   *
   * 동작 설명:
   * 1. `location` 값이 유효한 경우:
   *    - 현재 위치에서 약간 보정된 `naver.maps.LatLng` 객체 생성.
   *    - 지도의 중심(`setCenter`)을 보정된 위치로 설정.
   * 2. `onMyLocationClick` 콜백 함수 호출:
   *    - 상위 컴포넌트에 현재 위치 정보 전달.
   */
  const handleMyLocationClick = async () => {
    if (map && location) {
      const adjustedPosition = new naver.maps.LatLng(location.lat - OFFSET_LAT, location.lng);
      map.setCenter(adjustedPosition);
      onMyLocationClick?.({ lat: location.lat, lng: location.lng });
    }
  };

  /**
   * 지도 중심 위치 재설정 버튼 클릭 시
   *
   * - 지도 중심 좌표를 계산하여 상위 컴포넌트에 전달합니다.
   *
   * 동작 설명:
   * 1. `map` 객체가 유효한 경우:
   *    - 지도 중심 좌표(`map.getCenter()`)를 가져옴.
   *    - `onReLocationClick` 콜백 함수 호출하여 상위 컴포넌트에 좌표 전달.
   */

  const handleReLocationClick = () => {
    if (map) {
      const center = map.getCenter();
      onReLocationClick?.({ lat: center.lat(), lng: center.lng() });
    }
  };

  /**
   * 이 `useEffect`는 지도(`map`) 객체에 클릭 이벤트를 등록합니다.
   *
   * - 동작 설명:
   *   1. 사용자가 지도에서 빈 공간을 클릭했을 때 실행됩니다.
   *   2. 선택된 마커(`selectedPlaceId`)가 존재하면:
   *      - 모든 마커의 아이콘을 기본 아이콘(`MarkerPinIcon`)으로 변경합니다.
   *      - 선택된 마커 ID(`selectedPlaceId`)를 `null`로 초기화합니다.
   * - 종속성:
   *   - `map`: 네이버 지도 객체로, 지도 클릭 이벤트를 등록하기 위해 필요합니다.
   *   - `markers`: 현재 지도에 표시된 마커 배열로, 각 마커의 상태를 업데이트합니다.
   *   - `selectedPlaceId`: 선택된 마커의 ID로, 클릭 이벤트 시 이를 확인하고 초기화합니다.
   */
  useEffect(() => {
    if (map) {
      // 지도 클릭 이벤트 등록
      naver.maps.Event.addListener(map, 'click', () => {
        if (selectedPlaceId !== null) {
          console.log('Map clicked, deselecting markers');
          // 모든 마커를 기본 아이콘으로 초기화
          markers.forEach((marker) => {
            marker.setIcon({
              content: ReactDOMServer.renderToString(<MarkerPinIcon />),
            });
          });

          // 선택된 마커 ID 초기화
          setSelectedPlaceId(null);
        }
      });
    }
  }, [map, markers, selectedPlaceId]);

  /**
   * 지도 초기화 및 설정
   *
   * - 동작 설명:
   *   1. `initializeMap()`을 호출하여 네이버 지도를 초기화합니다.
   *   2. 초기화된 지도 객체는 `setMap()`을 통해 `map` 상태에 저장됩니다.
   * - 초기화 동작:
   *   - 지도의 중심 좌표 설정
   *   - 줌 레벨 및 기타 옵션 설정
   *   - 초기 위치 마커 추가
   * - 종속성:
   *   - `initializeMap`: 지도 초기화 함수.
   *   - `map`: 현재 지도 상태로, 초기화 여부를 확인하기 위해 사용됩니다.
   */
  useEffect(() => {
    if (!map) {
      initializeMap();
    }
  }, [initializeMap, map]);

  /**
   * 이 `useEffect`는 `updateMarkers` 함수가 변경될 때마다 실행됩니다.
   * - 동작 설명:
   *   1. 현재 `searchPlaces` 데이터를 기반으로 지도에 마커를 업데이트합니다.
   *   2. 기존 마커를 제거하고, 새 마커를 생성하여 지도에 추가합니다.
   *   3. 각 마커에 클릭 이벤트를 등록하여 선택/해제 및 관련 동작을 처리합니다.
   * - 종속성:
   *   - `updateMarkers`: 지도에서 마커를 업데이트하는 함수입니다.
   */
  useEffect(() => {
    updateMarkers();
  }, [updateMarkers]);

  /**
   * 이 `useEffect`는 선택된 마커 ID(`selectedPlaceId`)가 변경될 때마다 실행됩니다.
   * - 동작 설명:
   *   1. 부모 컴포넌트에서 제공한 `onMarkerClick` 콜백 함수를 호출합니다.
   *   2. `onMarkerClick`에 현재 선택된 마커 ID를 전달합니다.
   *   3. 선택된 마커가 없는 경우(`selectedPlaceId === null`), `null`을 전달합니다.
   * - 종속성:
   *   - `selectedPlaceId`: 선택된 마커 ID로, 변경 시 부모 컴포넌트에 이를 알리기 위해 사용됩니다.
   *   - `onMarkerClick`: 부모 컴포넌트에서 제공한 콜백 함수입니다.
   */
  useEffect(() => {
    onMarkerClick?.(selectedPlaceId);
  }, [selectedPlaceId]);

  if (loading)
    return (
      <LoadingContainer>
        <LoadingSpinner />
        <div>로딩 중...</div>
      </LoadingContainer>
    );

  return (
    <MapContainer>
      <MapWrapper ref={mapRef} />
      <MapButton onClick={handleReLocationClick}>
        <MyLocationIcon />
      </MapButton>
      <MapButton onClick={handleMyLocationClick}>
        <CirclepathIcon />
      </MapButton>
    </MapContainer>
  );
};
