import { useEffect, useState, useRef, useMemo } from 'react';

import { GetNearbyPlacesUseCase } from '@/apis/application/useCases/Place/GetNearbyPlacesUseCase';
import { GetPreviewPlaceUseCase } from '@/apis/application/useCases/Place/GetPreviewPlaceUseCase';
import { GetRecommendPlacesUseCase } from '@/apis/application/useCases/Place/GetRecommendPlacesUseCase';
import { GetSearchPlacesUseCase } from '@/apis/application/useCases/Place/GetSearchPlacesUseCase';
import { PlaceService } from '@/apis/services/PlaceService';
import { FilterIcon } from '@/assets/PlaceSearch/FilterIcon';
import { BottomSheet } from '@/components/BottomSheet/BottomSheet';
import { Map } from '@/components/Map/Map';
import { PlaceSearchBar } from '@/components/PlaceSearchBar/PlaceSearchBar';
import { ReplyBtn } from '@/components/ReplyBtn/ReplyBtn';
import { Filter, SearchFilter, hasFilterValue, getKRFilterLabel } from '@/types/Filter';
import { PlacePreviewDTO, RecommendPlace } from '@/types/Place';

import { FilterPage } from '../FilterPage/FilterPage';

import { PlaceBottomSheetPage } from './ PlaceBottomSheet/PlaceBottomSheetPage';
import { PlacesBottomSheetPage } from './ PlacesBottomSheet/PlacesBottomSheetPage';
import {
  Container,
  SearchWrapper,
  SearchBarWrapper,
  FilterWrapper,
  FilterBtn,
  ReplyBtnWrapper,
  MapWrapper,
} from './home.style';

export const Home = () => {
  const [placeData, setPlaceData] = useState<PlacePreviewDTO | null>(null);
  const [searchPlaces, setSearchPlaces] = useState<PlacePreviewDTO[] | RecommendPlace[]>([]);
  const [bottomSheetType, setBottomSheetType] = useState<
    'places' | 'filter' | 'placeDetails' | 'search'
  >('places');

  const [searchFilter, setSearchFilter] = useState<SearchFilter>({
    nowLongitude: 0,
    nowLatitude: 0,
    page: 1,
    search: '',
  });

  const [activeTab, setActiveTab] = useState<'nearby' | 'bookmark'>('nearby');
  const [isLastPage, setIsLastPage] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  const filterStatus = hasFilterValue(searchFilter);
  const filterWithoutSearch: Filter = (({ ...rest }) => rest)(searchFilter);

  const placeService = useMemo(() => new PlaceService(), []);

  const getNearbyPlacesUseCase = useMemo(
    () => new GetNearbyPlacesUseCase(placeService),
    [placeService]
  );

  const getRecommendPlacesUseCase = useMemo(
    () => new GetRecommendPlacesUseCase(placeService),
    [placeService]
  );

  const getSearchPlacesUseCase = useMemo(
    () => new GetSearchPlacesUseCase(placeService),
    [placeService]
  );
  const getPreviewPlaceUseCase = useMemo(
    () => new GetPreviewPlaceUseCase(placeService),
    [placeService]
  );

  /**
   * Circlepath 버튼 클릭 핸들러
   *
   * - 기기의 현재 위치를 받아와서 근처 공간 추천 API를 호출할때 사용합니다.
   * - 현재 지도 중심 좌표를 기준으로 장소 검색 API를 호출할때 사용합니다.
   * - 검색 결과를 `searchPlaces` 상태로 업데이트합니다.
   */
  const handleReLocationClick = async (mapCenter: { lat: number; lng: number }) => {
    setSearchFilter((prev) => ({
      ...prev,
      nowLatitude: mapCenter.lat,
      nowLongitude: mapCenter.lng,
    }));

    await fetchNearbyPlaces({
      ...filterWithoutSearch,
      nowLatitude: mapCenter.lat,
      nowLongitude: mapCenter.lng,
    });
  };

  /**
   * 근처 추천 공간 API 호출
   */
  const fetchNearbyPlaces = async (params: Filter) => {
    const cleanedParams = Object.fromEntries(
      Object.entries(params).filter(([, value]) => value !== '' && value !== null)
    );
    console.log('cleanedParams', cleanedParams);
    try {
      const response = await getNearbyPlacesUseCase.execute(cleanedParams as Filter);
      console.log('response', response);
      if (response.isSuccess) {
        setSearchPlaces(response.result.placePreviewDTOList);
        setIsLastPage(response.result.isLast);
      }
    } catch (error) {
      console.error('Failed to fetch nearby places:', error);
    }
  };

  /**
   * 북마크 추천 공간 API 호출
   */
  const fetchRecommendPlaces = async (page: number) => {
    try {
      const response = await getRecommendPlacesUseCase.execute(page);
      if (response.isSuccess) {
        setSearchPlaces(response.result.placeList);
        setIsLastPage(response.result.isLast);
      }
    } catch (error) {
      console.error('Failed to fetch recommend places:', error);
    }
  };

  /**
   * 공간 검색 결과 조회 API 호출
   */
  const fetchSearchPlaceData = async (searchTerm: string) => {
    try {
      const response = await getSearchPlacesUseCase.execute({
        ...searchFilter,
        search: searchTerm,
      });
      console.log('response', response);
      if (response.isSuccess) {
        setSearchPlaces(response.result.placePreviewDTOList);
      }
    } catch (error) {
      console.error('Failed to fetch search results', error);
    }
  };

  /**
   * 공간 미리보기 API 호출
   */
  const fetchPlaceData = async (placeId: number) => {
    try {
      const response = await getPreviewPlaceUseCase.execute(placeId);
      console.log('response', response);
      if (response.isSuccess) {
        setPlaceData(response.result);
      }
    } catch (error) {
      console.error('Failed to fetch place preview data:', error);
    }
  };

  /**
   * 마커 클릭 핸들러
   *
   * - 사용자가 지도에 표시된 마커를 클릭했을 때 호출됩니다.
   * - 클릭한 마커의 `placeId`를 `selectedPlaceId`로 설정하고, 바텀시트를 전환합니다.
   * - 같은 마커를 다시 클릭하면 선택을 해제하고, "places" 바텀시트로 돌아갑니다.
   */
  const handleMarkerClick = (placeId: number | null) => {
    if (placeId === null) {
      setBottomSheetType('places');
    } else {
      fetchPlaceData(placeId);
      setBottomSheetType('placeDetails');
    }
  };

  /**
   * 필터 버튼 클릭 핸들러
   *
   * - 필터 바텀시트를 열기 위해 호출됩니다.
   */
  const handleFilterClick = () => {
    setBottomSheetType('filter');
  };

  /**
   * 필터 페이지 닫기 핸들러
   *
   * - 필터 값을 `searchFilter` 상태에 반영하고, "places" 바텀시트로 전환합니다.
   */
  const handleFilterPageClose = (filterData: Filter) => {
    setSearchFilter((prev) => ({ ...filterData, search: prev.search }));
    setBottomSheetType('places');
  };

  /**
   * 검색 입력 변경 핸들러
   *
   * - 검색어를 기반으로 장소 검색 API를 호출합니다.
   * - 검색어가 비어 있으면 검색 API 호출을 건너뜁니다.
   * - 검색 결과를 `searchPlaces` 상태로 업데이트합니다.
   */
  const handleSearchInputChange = async (searchTerm: string) => {
    setSearchFilter((prev) => ({ ...prev, search: searchTerm }));

    if (searchTerm.trim() === '') {
      setBottomSheetType('places');
      fetchNearbyPlaces(searchFilter);
    } else {
      setBottomSheetType('search');
      fetchSearchPlaceData(searchTerm);
    }
  };

  useEffect(() => {
    if (activeTab === 'nearby') {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        const updatedFilter = {
          ...searchFilter,
          nowLatitude: latitude,
          nowLongitude: longitude,
        };

        setSearchFilter(updatedFilter);
        fetchNearbyPlaces(updatedFilter);
      });
    }
  }, [activeTab]);

  /**
   * 필터 값이 변경될때 마다 API 새로 호출
   *
   * - 검색어가 있는 경우, 공간 검색 결과 조회 API 호출
   * - 검색어가 없고, 활성화된 탭바가 nearby인 경우 근처 공간 추천 API 호출
   * - 공간 상세보기, 추천 공간 목록 조회 API의 경우 필터 파람이 상관없어서 제외됨
   */
  useEffect(() => {
    if (searchFilter.search.trim() === '') {
      if (activeTab === 'nearby') {
        fetchNearbyPlaces(searchFilter);
      }
    } else {
      fetchSearchPlaceData(searchFilter.search);
    }
  }, [searchFilter]);

  const RecommendSheet = () => {
    return (
      <BottomSheet minHeight={120}>
        <PlacesBottomSheetPage
          places={searchPlaces}
          isLastPage={isLastPage}
          loaderRef={loaderRef}
          activeTab={activeTab}
          onTabChange={(tab) => {
            setActiveTab(tab);
            if (tab === 'nearby') {
              fetchNearbyPlaces(searchFilter);
            } else {
              fetchRecommendPlaces(1);
            }
          }}
        />
      </BottomSheet>
    );
  };

  const FilterSheet = () => {
    return (
      <BottomSheet
        minHeight={window.innerHeight * 0.88}
        initialHeight={window.innerHeight * 0.88}
        maxHeight={window.innerHeight * 0.88}
        $zIndex={5}
      >
        <FilterPage defaultValues={filterWithoutSearch} onSearch={handleFilterPageClose} />
      </BottomSheet>
    );
  };

  const DetailSheet = () => {
    return (
      <BottomSheet minHeight={120} initialHeight={375} maxHeight={375}>
        <PlaceBottomSheetPage placeData={placeData} />
      </BottomSheet>
    );
  };

  const SearchSheet = () => {
    return (
      <BottomSheet minHeight={120}>
        <PlacesBottomSheetPage
          places={searchPlaces}
          isLastPage={isLastPage}
          showTabs={false}
          loaderRef={loaderRef}
        />
      </BottomSheet>
    );
  };

  const renderContent = () => {
    switch (bottomSheetType) {
      case 'places':
        return <RecommendSheet />;
      case 'filter':
        return <FilterSheet />;
      case 'placeDetails':
        return <DetailSheet />;
      case 'search':
        return <SearchSheet />;
    }
  };

  return (
    <Container>
      <SearchWrapper>
        <SearchBarWrapper>
          <PlaceSearchBar onSearch={handleSearchInputChange} />
        </SearchBarWrapper>
        <FilterWrapper>
          <FilterBtn onClick={handleFilterClick}>
            <FilterIcon />
          </FilterBtn>
          {Object.keys(filterStatus).map((key) => (
            <ReplyBtnWrapper key={key}>
              <ReplyBtn
                selected={filterStatus[key]}
                $bgColor={
                  filterStatus[key] ? 'rgba(236, 252, 229, 0.8)' : 'rgba(255, 255, 255, 0.8)'
                }
                $fontSize={1.4}
                $fontWeight={'light'}
              >
                {getKRFilterLabel(key)}
              </ReplyBtn>
            </ReplyBtnWrapper>
          ))}
        </FilterWrapper>
      </SearchWrapper>
      <MapWrapper>
        <Map
          searchPlaces={searchPlaces}
          onMarkerClick={handleMarkerClick}
          onReLocationClick={handleReLocationClick}
          onMyLocationClick={handleReLocationClick}
        />
      </MapWrapper>

      {renderContent()}
    </Container>
  );
};
