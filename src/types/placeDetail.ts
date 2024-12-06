export interface InfoTabProps {
  placeDetail: {
    address: string;
    phone: string | null;
    url: string | null;
    operatingTimeList: OperatingTimeList;
    location: {
      latitude: number;
      longitude: number;
    };
  };
}

export interface Review {
  reviewId: number;
  nickname: string;
  visitDate: string;
  content: string;
  reviewImgs?: string[];
}

interface OperatingTime {
  openTime: string;
  closeTime: string;
}

interface OperatingTimeList {
  월요일: OperatingTime;
  화요일: OperatingTime;
  수요일: OperatingTime;
  목요일: OperatingTime;
  금요일: OperatingTime;
  토요일: OperatingTime;
  일요일: OperatingTime;
}

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
    phone: string | null;
    url: string | null;
    operatingTimeList: OperatingTimeList;
  };
}
