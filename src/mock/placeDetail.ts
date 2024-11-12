export interface PlaceDetailResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    placeId: number;
    placeImgList: string[];
    name: string;
    address: string;
    isSaved: boolean;
    category: string;
    outlet: string;
    size: string;
    wifi: string;
    noise: string;
    moods: string[];
    longitude: number;
    latitude: number;
    phone: string;
    url: string;
    operatingTimeList: {
      [key: string]: {
        closeTime?: string;
        openTime?: string;
      };
    };
  };
}

export const mockPlaceDetail: PlaceDetailResponse = {
  isSuccess: true,
  code: 'PLACE2003',
  message: '공간 상세보기가 완료되었습니다.',
  result: {
    placeId: 1,
    placeImgList: ['url1', 'url3'],
    name: '숭실대학교 중앙도서관',
    address: '서울 동작구 상도로 369 숭실대학교',
    isSaved: true,
    category: '야외 공간',
    outlet: '부족',
    size: '부족',
    wifi: '없어요',
    noise: '조용함',
    moods: ['🎆 편안한', '🪑 아늑한'],
    longitude: 126.9575041,
    latitude: 37.4966895,
    phone: '02-0000-1111',
    url: 'a.com',
    operatingTimeList: {
      월요일: {
        closeTime: '23:00',
        openTime: '15:00',
      },
      화요일: {
        closeTime: '13:00',
        openTime: '06:00',
      },
      수요일: {
        closeTime: '23:00',
        openTime: '10:00',
      },
      목요일: {
        closeTime: '18:00',
        openTime: '07:00',
      },
      금요일: {
        closeTime: '00:00',
        openTime: '00:00',
      },
      토요일: {
        closeTime: '02:00',
        openTime: '14:00',
      },
      일요일: {},
    },
  },
};
