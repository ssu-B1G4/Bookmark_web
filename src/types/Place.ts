export interface SearchPlace {
  placeId: number;
  name: string;
  size: string;
  outlet: string;
  wifi: string;
  isSaved: boolean;
  moods: string[];
  placeImgList: string[];
  reviewCount: number;
  longitude: number;
  latitude: number;
}

export interface RecommendPlace {
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
  img: string[];
}
