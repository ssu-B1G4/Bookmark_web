import axios from 'axios';

import { BaseResponse } from '@/types/BaseResponse';
import { Filter, SearchFilter } from '@/types/Filter';
import {
  SearchPlaceResponse,
  BookmarkPlaceResponse,
  RecommendedPlacesResponse,
} from '@/types/PageResponse';
import { PlacePreviewDTO, DetailPlace } from '@/types/Place';

import { IPlaceService } from '../application/interfaces/IPlaceService';

export class PlaceService implements IPlaceService {
  /**
   * 근처 공간 목록 조회 API 호출
   * @param params 필터
   * @returns 검색된 공간 목록
   */
  async getNearbyPlaces(params: Filter): Promise<BaseResponse<SearchPlaceResponse>> {
    try {
      const response = await axios.get<BaseResponse<SearchPlaceResponse>>('baseurl/places/nearby', {
        params,
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch nearby places: ${error}`);
    }
  }

  /**
   * 공간 검색 API 호출
   * @param params 검색 필터
   * @returns 검색된 공간 목록
   */
  async getSearchPlaces(params: SearchFilter): Promise<BaseResponse<SearchPlaceResponse>> {
    try {
      const response = await axios.get<BaseResponse<SearchPlaceResponse>>('baseurl/places', {
        params,
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch search places: ${error}`);
    }
  }

  /**
   * 저장 공간 목록 조회 API 호출
   * @param page 조회할 페이지 번호
   * @returns 북마크된 공간 목록
   */
  async getBookmarkPlaces(page: number): Promise<BaseResponse<BookmarkPlaceResponse>> {
    try {
      const response = await axios.get<BaseResponse<BookmarkPlaceResponse>>(
        `baseurl/places/bookmarks?page=${page}`
      );
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch bookmark places: ${error}`);
    }
  }

  /**
   * 공간 미리보기 조회 API 호출
   * @param placeId 조회할 공간의 ID
   * @returns 미리보기 공간 정보
   */
  async getPreviewPlace(placeId: number): Promise<BaseResponse<PlacePreviewDTO>> {
    try {
      const response = await axios.get<BaseResponse<PlacePreviewDTO>>(
        `baseurl/places/${placeId}/preview`
      );
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch preview place: ${error}`);
    }
  }

  /**
   * 공간 상세보기 API 호출
   * @param placeId 조회할 공간의 ID
   * @returns 공간 상세 정보
   */
  async getDetailPlaces(placeId: number): Promise<BaseResponse<DetailPlace>> {
    try {
      const response = await axios.get<BaseResponse<DetailPlace>>(
        `baseurl/places/${placeId}/details`
      );
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch detail place: ${error}`);
    }
  }

  /**
   * 추천 공간 목록 조회 API 호출
   * @param page 조회할 페이지 번호
   * @returns 추천 공간 목록
   */
  async getRecommendPlace(page: number): Promise<BaseResponse<RecommendedPlacesResponse>> {
    try {
      const response = await axios.get<BaseResponse<RecommendedPlacesResponse>>(
        `baseurl/places/recommend?page=${page}`
      );
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch recommended places: ${error}`);
    }
  }

  /**
   * 공간 저장 API 호출
   * @param placeId 북마크할 공간의 ID
   * @returns 요청 결과 메시지
   */
  async postBookmarkPlace(placeId: number): Promise<BaseResponse<string>> {
    try {
      const response = await axios.post<BaseResponse<string>>(`baseurl/places/${placeId}/bookmark`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to post bookmark place: ${error}`);
    }
  }

  /**
   * 공간 저장 해제 API 호출
   * @param placeId 북마크 취소할 공간의 ID
   * @returns 요청 결과 메시지
   */
  async deleteBookmarkPlace(placeId: number): Promise<BaseResponse<string>> {
    try {
      const response = await axios.delete<BaseResponse<string>>(
        `baseurl/places/${placeId}/bookmark`
      );
      return response.data;
    } catch (error) {
      throw new Error(`Failed to delete bookmark place: ${error}`);
    }
  }
}
