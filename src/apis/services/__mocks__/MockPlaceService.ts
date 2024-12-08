import { IPlaceService } from '@/apis/application/interfaces/IPlaceService';
import { BaseResponse } from '@/types/BaseResponse';
import { Filter, SearchFilter } from '@/types/Filter';
import {
  SearchPlaceResponse,
  BookmarkPlaceResponse,
  RecommendedPlacesResponse,
} from '@/types/PageResponse';
import { PlacePreviewDTO, DetailPlace } from '@/types/Place';

export class MockPlaceService implements IPlaceService {
  /**
   * 근처 공간 목록 조회 Mock 데이터
   * @param params 필터
   * @returns 검색된 Mock 공간 목록
   */
  async getNearbyPlaces(params: Filter): Promise<BaseResponse<SearchPlaceResponse>> {
    console.log(params);

    const mockData: PlacePreviewDTO[] = [
      {
        placeId: 1,
        name: '숭실대학교 중앙도서관',
        size: '부족',
        outlet: '부족',
        wifi: '없어요',
        isSaved: true,
        moods: ['🎆 편안한', '🪑 아늑한'],
        placeImgList: [
          'https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVEJTkyJThEJUVBJUIyJUJEfGVufDB8fDB8fHww',
          'https://media.istockphoto.com/id/1822247032/ko/%EC%82%AC%EC%A7%84/%EA%B0%80%EC%9D%84-%EC%8A%A4%EC%9C%84%EC%8A%A4-%EC%95%8C%ED%94%84%EC%8A%A4%EC%9D%98-%EA%B5%AC%EB%B6%88%EA%B5%AC%EB%B6%88%ED%95%9C-%EB%8F%84%EB%A1%9C%EC%9D%98-%EC%A1%B0%EA%B0%90%EB%8F%84.webp?a=1&b=1&s=612x612&w=0&k=20&c=TC5Qc3BDR3a0cAEX7p-h4XLZjH5B76DctOcSkGU9WBk=',
        ],
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
        placeImgList: [
          'https://media.istockphoto.com/id/1756133188/ko/%EC%82%AC%EC%A7%84/tra-linh-cao-bang-%EC%A7%80%EB%B0%A9-%EB%B2%A0%ED%8A%B8%EB%82%A8%EC%9D%98-thung-%EC%82%B0%EC%97%90%EC%84%9C-%EA%B0%95%EC%97%90%EC%84%9C-%EB%82%9A%EC%8B%9C%ED%95%98%EB%8A%94-%EC%96%B4%EB%B6%80%EC%9D%98-%EB%AA%A8%EC%8A%B5-%ED%98%B8%EC%88%98-%ED%9D%90%EB%A6%BC-%EC%9E%90%EC%97%B0.webp?a=1&b=1&s=612x612&w=0&k=20&c=gJmakGX-BZRrPsuwTsHPoHhIB9UsD8CHSQOOLif3KQk=',
          'https://media.istockphoto.com/id/1952691914/ko/%EC%82%AC%EC%A7%84/%EA%B7%B8%EB%A6%AC%EC%8A%A4-%ED%81%AC%EB%A0%88%ED%83%80-%EC%84%AC%EC%97%90%EC%84%9C-%EC%B9%B4%EC%95%BD-%ED%83%80%EA%B8%B0.webp?a=1&b=1&s=612x612&w=0&k=20&c=z519_hKDKhkJ0nQu0heCKBVdqzGk6nTIw6N3gzBq0_A=',
        ],
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
        placeImgList: [
          'https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVEJTkyJThEJUVBJUIyJUJEJUVEJTk5JTk0fGVufDB8fDB8fHww',
          'https://plus.unsplash.com/premium_photo-1666792561369-88127aa152ed?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D',
        ],
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
        placeImgList: [
          'https://plus.unsplash.com/premium_photo-1666812420629-a804b5727a0f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
          'https://plus.unsplash.com/premium_photo-1666963259148-5d340377085f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
        ],
        reviewCount: 0,
        longitude: 126.9067575,
        latitude: 37.5519413,
      },
    ];

    return {
      isSuccess: true,
      code: 'PLACE2004',
      message: '근처 공간 조회가 완료되었습니다.',
      result: {
        placePreviewDTOList: mockData,
        listSize: 1,
        totalPage: 1,
        totalElements: 1,
        isFirst: true,
        isLast: true,
      },
    };
  }

  /**
   * 공간 검색 Mock 데이터
   * @param params 검색 필터
   * @returns 검색된 Mock 공간 목록
   */
  async getSearchPlaces(params: SearchFilter): Promise<BaseResponse<SearchPlaceResponse>> {
    console.log(params);

    const mockData: PlacePreviewDTO[] = [
      {
        placeId: 1,
        name: '숭실대학교 중앙도서관',
        size: '부족',
        outlet: '부족',
        wifi: '없어요',
        isSaved: true,
        moods: ['🎆 편안한', '🪑 아늑한'],
        placeImgList: [
          'https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVEJTkyJThEJUVBJUIyJUJEfGVufDB8fDB8fHww',
          'https://media.istockphoto.com/id/1822247032/ko/%EC%82%AC%EC%A7%84/%EA%B0%80%EC%9D%84-%EC%8A%A4%EC%9C%84%EC%8A%A4-%EC%95%8C%ED%94%84%EC%8A%A4%EC%9D%98-%EA%B5%AC%EB%B6%88%EA%B5%AC%EB%B6%88%ED%95%9C-%EB%8F%84%EB%A1%9C%EC%9D%98-%EC%A1%B0%EA%B0%90%EB%8F%84.webp?a=1&b=1&s=612x612&w=0&k=20&c=TC5Qc3BDR3a0cAEX7p-h4XLZjH5B76DctOcSkGU9WBk=',
        ],
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
        placeImgList: [
          'https://media.istockphoto.com/id/1756133188/ko/%EC%82%AC%EC%A7%84/tra-linh-cao-bang-%EC%A7%80%EB%B0%A9-%EB%B2%A0%ED%8A%B8%EB%82%A8%EC%9D%98-thung-%EC%82%B0%EC%97%90%EC%84%9C-%EA%B0%95%EC%97%90%EC%84%9C-%EB%82%9A%EC%8B%9C%ED%95%98%EB%8A%94-%EC%96%B4%EB%B6%80%EC%9D%98-%EB%AA%A8%EC%8A%B5-%ED%98%B8%EC%88%98-%ED%9D%90%EB%A6%BC-%EC%9E%90%EC%97%B0.webp?a=1&b=1&s=612x612&w=0&k=20&c=gJmakGX-BZRrPsuwTsHPoHhIB9UsD8CHSQOOLif3KQk=',
          'https://media.istockphoto.com/id/1952691914/ko/%EC%82%AC%EC%A7%84/%EA%B7%B8%EB%A6%AC%EC%8A%A4-%ED%81%AC%EB%A0%88%ED%83%80-%EC%84%AC%EC%97%90%EC%84%9C-%EC%B9%B4%EC%95%BD-%ED%83%80%EA%B8%B0.webp?a=1&b=1&s=612x612&w=0&k=20&c=z519_hKDKhkJ0nQu0heCKBVdqzGk6nTIw6N3gzBq0_A=',
        ],
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
        placeImgList: [
          'https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVEJTkyJThEJUVBJUIyJUJEJUVEJTk5JTk0fGVufDB8fDB8fHww',
          'https://plus.unsplash.com/premium_photo-1666792561369-88127aa152ed?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D',
        ],
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
        placeImgList: [
          'https://plus.unsplash.com/premium_photo-1666812420629-a804b5727a0f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
          'https://plus.unsplash.com/premium_photo-1666963259148-5d340377085f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
        ],
        reviewCount: 0,
        longitude: 126.9067575,
        latitude: 37.5519413,
      },
    ];

    return {
      isSuccess: true,
      code: 'PLACE2005',
      message: '공간 검색 결과 조회가 완료되었습니다.',
      result: {
        placePreviewDTOList: mockData,
        listSize: 1,
        totalPage: 1,
        totalElements: 1,
        isFirst: true,
        isLast: true,
      },
    };
  }

  /**
   * 저장 공간 목록 조회 Mock 데이터
   * @param page 조회할 페이지 번호
   * @returns 북마크된 Mock 공간 목록
   */
  async getBookmarkPlaces(page: number): Promise<BaseResponse<BookmarkPlaceResponse>> {
    console.log(page);

    const mockData = [
      {
        placeId: 1,
        name: 'eea',
        address: '서울 동작구 서달로 161-1 2층',
        img: 'https://plus.unsplash.com/premium_photo-1675019221938-9db812a556a2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8',
      },
      {
        placeId: 2,
        name: '인생맥주',
        address: '서울 동작구 서달로 161-1 2층',
        img: 'https://plus.unsplash.com/premium_photo-1666792562882-8bd04befec7e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8',
      },
      {
        placeId: 3,
        name: '역할맥',
        address: '서울 동작구 서달로 161-1 2층',
        img: 'https://plus.unsplash.com/premium_photo-1666896899870-57ee907c1f3d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',
      },
    ];

    return {
      isSuccess: true,
      code: 'PLACE2004',
      message: '공간 저장 리스트 조회가 완료되었습니다..',
      result: {
        bookmarkPlaceList: mockData,
        listSize: 1,
        totalPage: 1,
        totalElements: 1,
        isFirst: true,
        isLast: true,
      },
    };
  }

  /**
   * 공간 미리보기 조회 Mock 데이터
   * @param placeId 조회할 공간의 ID
   * @returns 미리보기 Mock 공간 정보
   */
  async getPreviewPlace(placeId: number): Promise<BaseResponse<PlacePreviewDTO>> {
    console.log(placeId);

    const mockData: PlacePreviewDTO = {
      placeId: 1,
      name: 'eea',
      size: '보통',
      outlet: '넉넉',
      wifi: '있어요',
      moods: ['✨ 즐거운', '🪑 아늑한'],
      reviewCount: 10,
      isSaved: true,
      placeImgList: [
        'https://plus.unsplash.com/premium_photo-1675019219609-0ccc4719d635?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8',
        'https://plus.unsplash.com/premium_photo-1675019221458-721a14f0f86f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8',
        'https://plus.unsplash.com/premium_photo-1673277149019-b671fdaa4d3d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8',
      ],
      longitude: 126.9575041,
      latitude: 37.4966895,
    };

    return {
      isSuccess: true,
      code: 'PLACE2002',
      message: '공간 미리보기 조회가 완료되었습니다.',
      result: mockData,
    };
  }

  /**
   * 공간 상세보기 Mock 데이터
   * @param placeId 조회할 공간의 ID
   * @returns 공간 상세 Mock 정보
   */
  async getDetailPlaces(placeId: number): Promise<BaseResponse<DetailPlace>> {
    console.log(placeId);

    const mockData: DetailPlace = {
      placeId: 1,
      placeImgList: [
        'https://plus.unsplash.com/premium_photo-1666812868903-281253daf3e6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8',
        'https://plus.unsplash.com/premium_photo-1672897718407-4cc44e44b551?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8',
      ],
      name: '숭실대학교 중앙도서관',
      address: '서울 동작구',
      isSaved: true,
      category: '도서관',
      outlet: '부족',
      size: '보통',
      wifi: '있어요',
      noise: '조용함',
      moods: ['🎆 편안한', '🪑 아늑한'],
      longitude: 126.9575041,
      latitude: 37.4966895,
      phone: '02-123-4567',
      url: 'https://oasis.ssu.ac.kr/',
      operatingTimeList: {
        월요일: { openTime: '09:00', closeTime: '18:00' },
        화요일: { openTime: '09:00', closeTime: '18:00' },
        수요일: { openTime: '09:00', closeTime: '18:00' },
        목요일: { openTime: '09:00', closeTime: '18:00' },
        금요일: { openTime: '09:00', closeTime: '18:00' },
        토요일: { openTime: '10:00', closeTime: '14:00' },
        일요일: { openTime: '휴무', closeTime: '휴무' },
      },
    };

    return {
      isSuccess: true,
      code: 'PLACE2003',
      message: '공간 상세보기가 완료되었습니다.',
      result: mockData,
    };
  }

  /**
   * 추천 공간 목록 조회 Mock 데이터
   * @param page 조회할 페이지 번호
   * @returns 추천 공간 목록 Mock 데이터
   */
  async getRecommendPlace(page: number): Promise<BaseResponse<RecommendedPlacesResponse>> {
    console.log(page);

    const mockData: PlacePreviewDTO[] = [
      {
        placeId: 1,
        name: '추천 장소 1',
        size: '보통',
        outlet: '보통',
        wifi: '있어요',
        moods: ['🎉 신나는', '🌌 차분한'],
        reviewCount: 5,
        longitude: 126.937996,
        latitude: 37.497447,
        isSaved: false,
        placeImgList: [
          'https://plus.unsplash.com/premium_photo-1672947572739-8bd7625d60d3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQyfHx8ZW58MHx8fHx8',
        ],
      },
      {
        placeId: 2,
        name: '추천 장소 2',
        size: '보통',
        outlet: '보통',
        wifi: '있어요',
        moods: ['🎉 신나는', '🌌 차분한'],
        reviewCount: 5,
        longitude: 126.956548,
        latitude: 37.499115,
        isSaved: true,
        placeImgList: [
          'https://plus.unsplash.com/premium_photo-1672947572739-8bd7625d60d3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQyfHx8ZW58MHx8fHx8',
        ],
      },
      {
        placeId: 3,
        name: '추천 장소 3',
        size: '보통',
        outlet: '보통',
        wifi: '있어요',
        moods: ['🎉 신나는', '🌌 차분한'],
        reviewCount: 5,
        longitude: 126.953717,
        latitude: 37.5009,
        isSaved: true,
        placeImgList: [
          'https://plus.unsplash.com/premium_photo-1672947572739-8bd7625d60d3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQyfHx8ZW58MHx8fHx8',
        ],
      },
      {
        placeId: 4,
        name: '추천 장소 4',
        size: '보통',
        outlet: '보통',
        wifi: '있어요',
        moods: ['🎉 신나는', '🌌 차분한'],
        reviewCount: 5,
        longitude: 126.942839,
        latitude: 37.501278,
        isSaved: false,
        placeImgList: [
          'https://plus.unsplash.com/premium_photo-1672947572739-8bd7625d60d3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQyfHx8ZW58MHx8fHx8',
        ],
      },
    ];

    return {
      isSuccess: true,
      code: 'PLACE2006',
      message: '추천 공간 목록 조회가 완료되었습니다.',
      result: {
        placePreviewDTOList: mockData,
        listSize: 1,
        totalPage: 1,
        totalElements: 1,
        isFirst: true,
        isLast: true,
      },
    };
  }

  /**
   * 공간 저장 Mock 데이터
   * @param placeId 북마크할 공간의 ID
   * @returns 요청 결과 Mock 메시지
   */
  async postBookmarkPlace(placeId: number): Promise<BaseResponse<string>> {
    console.log(placeId);

    return {
      isSuccess: true,
      code: 'PLACE2006',
      message: '공간 저장(북마크)가 완료되었습니다.',
      result: '공간 저장(북마크)가 완료되었습니다.',
    };
  }

  /**
   * 공간 저장 해제 Mock 데이터
   * @param placeId 북마크 취소할 공간의 ID
   * @returns 요청 결과 Mock 메시지
   */
  async deleteBookmarkPlace(placeId: number): Promise<BaseResponse<string>> {
    console.log(placeId);

    return {
      isSuccess: true,
      code: 'PLACE2007',
      message: '공간 저장(북마크) 해제가 완료되었습니다.',
      result: '공간 저장(북마크) 해제가 완료되었습니다.',
    };
  }
}
