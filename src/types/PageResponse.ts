import { PlacePreviewDTO, BookmarkPlace, RecommendPlace } from './Place';

export type PageResponse<T, K extends string> = {
  [P in K]: T[];
} & {
  listSize: number;
  totalPage: number;
  totalElements: number;
  isFirst: boolean;
  isLast: boolean;
};

/**
 * 아래와 같은 API Response DTO입니다.
 * - 근처 공간 조회
 * - 공간 검색
 */
export type SearchPlaceResponse = PageResponse<PlacePreviewDTO, 'placePreviewDTOList'>;

/**
 * 아래와 같은 API Response DTO입니다.
 * - 저장 공간 목록 조회
 */
export type BookmarkPlaceResponse = PageResponse<BookmarkPlace, 'bookmarkPlaceList'>;

/**
 * 아래와 같은 API Respons DTO입니다.
 * - 추천 공간 목록 조회
 */
export type RecommendedPlacesResponse = PageResponse<RecommendPlace, 'placeList'>;
