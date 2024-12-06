import { BaseResponse } from '@/types/BaseResponse';
import { Filter, SearchFilter } from '@/types/Filter';
import {
  SearchPlaceResponse,
  BookmarkPlaceResponse,
  RecommendedPlacesResponse,
} from '@/types/PageResponse';
import { PlacePreviewDTO, DetailPlace } from '@/types/Place';
import { client } from '@/utils/axios';
import { handleError } from '@/utils/error';

import { IPlaceService } from '../application/interfaces/IPlaceService';

export class PlaceService implements IPlaceService {
  /**
   * 근처 공간 목록 조회 API 호출
   * @param params 필터
   * @returns 검색된 공간 목록
   */
  async getNearbyPlaces(params: Filter): Promise<BaseResponse<SearchPlaceResponse>> {
    try {
      const response = await client.get<BaseResponse<SearchPlaceResponse>>('/places/nearby', {
        params,
      });
      return response.data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  }

  /**
   * 공간 검색 API 호출
   * @param params 검색 필터
   * @returns 검색된 공간 목록
   */
  async getSearchPlaces(params: SearchFilter): Promise<BaseResponse<SearchPlaceResponse>> {
    try {
      const response = await client.get<BaseResponse<SearchPlaceResponse>>('/places', {
        params,
      });
      return response.data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  }

  /**
   * 저장 공간 목록 조회 API 호출
   * @param page 조회할 페이지 번호
   * @returns 북마크된 공간 목록
   */
  async getBookmarkPlaces(page: number): Promise<BaseResponse<BookmarkPlaceResponse>> {
    try {
      const response = await client.get<BaseResponse<BookmarkPlaceResponse>>(
        `/places/bookmarks?page=${page}`
      );
      return response.data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  }

  /**
   * 공간 미리보기 조회 API 호출
   * @param placeId 조회할 공간의 ID
   * @returns 미리보기 공간 정보
   */
  async getPreviewPlace(placeId: number): Promise<BaseResponse<PlacePreviewDTO>> {
    try {
      const response = await client.get<BaseResponse<PlacePreviewDTO>>(
        `/places/${placeId}/preview`
      );
      return response.data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  }

  /**
   * 공간 상세보기 API 호출
   * @param placeId 조회할 공간의 ID
   * @returns 공간 상세 정보
   */
  async getDetailPlaces(placeId: number): Promise<BaseResponse<DetailPlace>> {
    try {
      const response = await client.get<BaseResponse<DetailPlace>>(`/places/${placeId}/details`);
      return response.data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  }

  /**
   * 추천 공간 목록 조회 API 호출
   * @param page 조회할 페이지 번호
   * @returns 추천 공간 목록
   */
  async getRecommendPlace(page: number): Promise<BaseResponse<RecommendedPlacesResponse>> {
    try {
      const response = await client.get<BaseResponse<RecommendedPlacesResponse>>(
        `/places/recommend?page=${page}`
      );
      return response.data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  }

  /**
   * 공간 저장 API 호출
   * @param placeId 북마크할 공간의 ID
   * @returns 요청 결과 메시지
   */
  async postBookmarkPlace(placeId: number): Promise<BaseResponse<string>> {
    try {
      const response = await client.post<BaseResponse<string>>(`/places/${placeId}/bookmark`);
      return response.data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  }

  /**
   * 공간 저장 해제 API 호출
   * @param placeId 북마크 취소할 공간의 ID
   * @returns 요청 결과 메시지
   */
  async deleteBookmarkPlace(placeId: number): Promise<BaseResponse<string>> {
    try {
      const response = await client.delete<BaseResponse<string>>(`/places/${placeId}/bookmark`);
      return response.data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  }
}
