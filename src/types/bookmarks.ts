//   export interface ReviewPreview {
//     reviewId: number;
//     nickname: string;
//     visitDate: string;
//     content: string;
//     reviewImgs: string[];
//   }

export interface BookmarkResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: string;
}

export interface GetBookmarkResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    bookmarkPlaceList: BookmarkPlace[];
    listSize: number;
    totalPage: number;
    totalElements: number;
    isFirst: boolean;
    isLast: boolean;
  };
}

export interface BookmarkPlace {
  placeId: number;
  name: string;
  address: string;
  img: string;
}
