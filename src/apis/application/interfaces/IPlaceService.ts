import { BaseResponse } from '@/types/BaseResponse';
import { Filter, SearchFilter } from '@/types/Filter';
import {
  SearchPlaceResponse,
  BookmarkPlaceResponse,
  RecommendedPlacesResponse,
} from '@/types/PageResponse';
import { PreviewPlace, DetailPlace } from '@/types/Place';

export interface IPlaceService {
  /**
   * 근처 공간 목록 조회 API 호출 메서드
   * @param params 필터
   * @returns 검색된 공간 목록과 동일한 응답 객체
   */
  getNearbyPlaces(params: Filter): Promise<BaseResponse<SearchPlaceResponse>>;

  /**
   * 공간 검색 API 호출 메서드
   * @param params 검색 필터
   * @returns 검색된 공간 목록을 포함한 응답 객체
   */
  getSearchPlaces(params: SearchFilter): Promise<BaseResponse<SearchPlaceResponse>>;

  /**
   * 저장 공간 목록 조회 API 호출 메서드
   * @param page 조회할 페이지 번호
   * @returns 북마크된 공간 목록을 포함한 응답 객체
   */
  getBookmarkPlaces(page: number): Promise<BaseResponse<BookmarkPlaceResponse>>;

  /**
   * 공간 미리보기 조회 API 호출 메서드
   * @param placeId 조회할 공간의 ID
   * @returns 미리보기 공간 정보를 포함한 응답 객체
   */
  getPreviewPlace(placeId: number): Promise<BaseResponse<PreviewPlace>>;

  /**
   * 공간 상세보기 API 호출 메서드
   * @param placeId 조회할 공간의 ID
   * @returns 검색된 공간 목록을 포함한 응답 객체
   */
  getDetailPlaces(placeId: number): Promise<BaseResponse<DetailPlace>>;

  /**
   * 추천 공간 목록 조회(북마크 기반 추천) API 호출 메서드
   * @param page 조회할 페이지 번호
   * @returns 추천 공간 정보를 포함한 응답 객체
   */
  getRecommendPlace(page: number): Promise<BaseResponse<RecommendedPlacesResponse>>;

  /**
   * 공간 저장 API 호출 메서드
   * @param placeId 북마크할 공간의 ID
   * @returns 요청 결과 string 값
   */
  postBookmarkPlace(placeId: number): Promise<BaseResponse<string>>;

  /**
   * 공간 저장 해제 API 호출 메서드
   * @param placeId 북마크 취소할 공간의 ID
   * @returns 요청 결과 string 값
   */
  deleteBookmarkPlace(placeId: number): Promise<BaseResponse<string>>;
}
