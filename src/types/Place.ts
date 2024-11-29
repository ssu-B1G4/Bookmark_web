import { OperatingTime } from './OperatingTime';

export type SizeStatus = '부족' | '보통' | '넉넉';
export type OutletStatus = '부족' | '보통' | '넉넉';
export type WifiStatus = '있어요' | '없어요';
export type NoiseStatus = '조용함' | '보통' | '생기있음';
export type MoodType =
  | '🎆 편안한'
  | '🎉 신나는'
  | '🌌 차분한'
  | '✨ 즐거운'
  | '🪑 아늑한'
  | '🍀 재미있는';

/**
 * 지도에서 위도와 경도로 마커를 표시하기 위한 공통 타입 정의입니다.
 */
export interface PlaceWithCoordinates {
  placeId: number;
  latitude: number;
  longitude: number;
}

/**
 * 아래와 같은 PageResponse T의 DTO입니다.
 * - 근처 공간 조회
 * - 공간 검색
 */
export interface PlacePreviewDTO extends PlaceWithCoordinates {
  name: string;
  size: SizeStatus;
  outlet: OutletStatus;
  wifi: WifiStatus;
  isSaved: boolean;
  moods: MoodType[];
  placeImgList: string[];
  reviewCount: number;
}

/**
 * 아래와 같은 API Response DTO입니다.
 * - 저장 공간 목록 조회
 */
export interface DetailPlace extends PlaceWithCoordinates {
  placeImgList: string[];
  name: string;
  address: string;
  isSaved: boolean;
  category: string;
  outlet: OutletStatus;
  size: SizeStatus;
  wifi: WifiStatus;
  noise: NoiseStatus;
  moods: MoodType[];
  phone: string;
  url: string;
  operatingTimeList: {
    월요일: OperatingTime;
    화요일: OperatingTime;
    수요일: OperatingTime;
    목요일: OperatingTime;
    금요일: OperatingTime;
    토요일: OperatingTime;
    일요일: OperatingTime;
  };
}

/**
 * 아래와 같은 PageResponse T의 DTO입니다.
 * - 저장 공간 목록 조회
 */
export interface BookmarkPlace {
  placeId: number;
  name: string;
  address: string;
  img: string;
}

/**
 * 아래와 같은 API Response DTO입니다.
 * - 공간 미리보기 조회
 */
export interface PreviewPlace {
  placeId: number;
  name: string;
  size: SizeStatus;
  outlet: OutletStatus;
  wifi: WifiStatus;
  mood1: MoodType;
  mood2: MoodType;
  reviewCount: number;
  isSaved: boolean;
  imgList: string[];
}

/**
 * 아래와 같은 PageResponse T의 DTO입니다.
 * - 추천 공간 목록 조회
 */
export interface RecommendPlace extends PlaceWithCoordinates {
  name: string;
  size: SizeStatus;
  outlet: OutletStatus;
  wifi: WifiStatus;
  mood1: MoodType;
  mood2: MoodType;
  reviewCount: number;
  isSaved: boolean;
  img: string;
}
