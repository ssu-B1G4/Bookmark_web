import { SizeStatus, MoodType, OutletStatus, NoiseStatus, WifiStatus } from './Place';

export type DayType = '월요일' | '화요일' | '수요일' | '목요일' | '금요일' | '토요일' | '일요일';

/**
 * 아래와 같은 API Request DTO입니다.
 * - 공간 검색
 */

export interface Filter {
  nowLongitude: number;
  nowLatitude: number;
  page: number;
  day?: DayType;
  time?: string;
  size?: SizeStatus;
  wifi?: WifiStatus;
  outlet?: OutletStatus;
  mood?: string;
  noise?: NoiseStatus;
}

export interface SearchFilter extends Filter {
  search: string;
}

/**
 * 필터값의 존재여부를 확인할 수 있는 함수입니다.
 * 홈화면에서 필터값의 존재 여부에 따라 각각의 필터 Button의 색상을 달리할때 사용합니다.
 */
export function hasFilterValue(filter: SearchFilter): { [key: string]: boolean } {
  return {
    day: !!filter.day,
    time: !!filter.time,
    size: !!filter.size,
    wifi: !!filter.wifi,
    outlet: !!filter.outlet,
    mood: !!filter.mood,
    noise: !!filter.noise,
  };
}

/**
 * Filter Request 등 MoodType에 이모지를 제외할때 사용합니다.
 */
export function removeEmojiFromMood(mood: MoodType): string {
  return mood.replace(/[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}]/gu, '').trim();
}

/**
 * Filter의 키를 한글로 변환할때 사용합니다.
 */
export function getKRFilterLabel(key: string): string {
  const filterLabels: { [key: string]: string } = {
    day: '요일',
    time: '시간',
    size: '공간 크기',
    wifi: '와이파이',
    outlet: '콘센트',
    mood: '분위기',
    noise: '소음',
  };

  return filterLabels[key] || key;
}
