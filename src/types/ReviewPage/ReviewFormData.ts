export interface ReviewFormData {
  visitPlace: string;
  bookTitle: string;
  author: string;
  reviewText: string;
  images: File[];
  startTime: string;
  endTime: string;
  traffic: number;
  spaceSize: string;
  wifi: string;
  socket: string;
  noise: string;
  atmosphere: string[];
}

export interface ReportFormData {
  visitPlace: string;
  bookTitle: string;
  author: string;
  reviewText: string;
  images: File[];
  startTime: string;
  endTime: string;
  spaceCategory: string;
  traffic: number;
  spaceSize: string;
  wifi: string;
  socket: string;
  noise: string;
  atmosphere: string[];
}
