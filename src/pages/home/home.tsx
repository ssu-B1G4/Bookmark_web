import { useState } from 'react';

import { FilterIcon } from '@/assets/PlaceSearch/FilterIcon';
import { Map } from '@/components/Map/Map';
import { PlaceSearchBar } from '@/components/PlaceSearchBar/PlaceSearchBar';
import { ReplyBtn } from '@/components/ReplyBtn/ReplyBtn';
import { SearchPlace } from '@/types/Place';

import {
  Container,
  FilterBtn,
  FilterWrapper,
  MapWrapper,
  SearchBarWrapper,
  SearchWrapper,
} from './home.style';

const options = [
  { label: '분위기', selected: true },
  { label: '영업시간', selected: false },
  { label: '공간크기', selected: true },
  { label: '콘센트', selected: false },
  { label: '소음', selected: false },
];

export const Home = () => {
  const [searchPlaces, setSearchPlaces] = useState<SearchPlace[]>([]);

  const handleSearch = async (searchTerm: string) => {
    if (searchTerm) {
      const results: SearchPlace[] = await fetchSearchResults();
      setSearchPlaces(results);
    } else {
      setSearchPlaces([]);
    }
  };

  const fetchSearchResults = async (): Promise<SearchPlace[]> => {
    return [
      {
        placeId: 1,
        name: '숭실대학교 중앙도서관',
        size: '부족',
        outlet: '부족',
        wifi: '없어요',
        isSaved: true,
        moods: ['🎆 편안한', '🪑 아늑한'],
        placeImgList: ['url1', 'url3'],
        reviewCount: 1,
        longitude: 126.9575041,
        latitude: 37.4966895,
      },
      {
        placeId: 2,
        name: '동탄 복합문화센터',
        size: '보통',
        outlet: '보통',
        wifi: '있어요',
        isSaved: false,
        moods: ['✨ 즐거운', '🎆 편안한'],
        placeImgList: [],
        reviewCount: 0,
        longitude: 127.0754078,
        latitude: 37.2003384,
      },
      {
        placeId: 3,
        name: '김영삼 도서관숭',
        size: '보통',
        outlet: '넉넉',
        wifi: '있어요',
        isSaved: false,
        moods: ['✨ 즐거운', '🎆 편안한'],
        placeImgList: [],
        reviewCount: 0,
        longitude: 126.9499279,
        latitude: 37.5054078,
      },
      {
        placeId: 4,
        name: '카페 꼼마숭',
        size: '부족',
        outlet: '부족',
        wifi: '있어요',
        isSaved: false,
        moods: ['✨ 즐거운', '🪑 아늑한'],
        placeImgList: [],
        reviewCount: 0,
        longitude: 126.9067575,
        latitude: 37.5519413,
      },
    ];
  };

  return (
    <Container>
      <SearchWrapper>
        <SearchBarWrapper>
          <PlaceSearchBar onSearch={handleSearch} />
        </SearchBarWrapper>
        <FilterWrapper>
          <FilterBtn>
            <FilterIcon />
          </FilterBtn>
          {options.map((option) => (
            <ReplyBtn
              key={option.label}
              selected={true}
              $bgColor={option.selected ? 'rgba(236, 252, 229, 0.8)' : 'rgba(255, 255, 255, 0.8)'}
              $fontSize={1.4}
              $fontWeight={'light'}
            >
              {option.label}
            </ReplyBtn>
          ))}
        </FilterWrapper>
      </SearchWrapper>
      <MapWrapper>
        <Map searchPlaces={searchPlaces} />
      </MapWrapper>
    </Container>
  );
};
