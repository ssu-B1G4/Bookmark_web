export interface Place {
  placeId: number;
  name: string;
  size: string;
  outlet: string;
  wifi: string;
  mood1: string;
  mood2: string;
  reviewCount: number;
  longtitude: string;
  latitude: string;
  isSaved: boolean;
  img: string;
}

export interface PlaceListResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    placeList: Place[];
    listSize: number;
    totalPage: number;
    totalElements: number;
    isFirst: boolean;
    isLast: boolean;
  };
}
