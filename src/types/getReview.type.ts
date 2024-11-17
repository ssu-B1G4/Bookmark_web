export interface ReviewPreview {
  reviewId: number;
  nickname: string;
  visitDate: string;
  content: string;
  reviewImgs: string[];
}

export interface ReviewResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    reviewPreviewList: ReviewPreview[];
    totalPages: number;
    totalElements: number;
    isFirst: boolean;
    isLast: boolean;
  };
}
