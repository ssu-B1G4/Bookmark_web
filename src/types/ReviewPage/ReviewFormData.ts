export interface ReviewFormData {
  visitPlace: string;
  books: Array<{ title: string; author: string }>;
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
  name: string;
  address: string;
  books: Array<{ title: string; author: string }>;
  images: File[];
  content: string;
  category: string;
  size: string;
  wifi: string;
  outlet: string;
  noise: string;
  moods: string[];
}
