export interface TimeFormat {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}

interface Book {
  title: string;
  author: string;
}

export interface PostReview {
  size: Size;
  visitStartTime: string;
  visitEndTime: string;
  writtenDate: string;
  congestion: number;
  books: Book[];
  outlet: Outlet;
  wifi: Wifi;
  content: string;
  visitDate: string;
  noise: Noise;
  moods: Mood[];
}

export interface PostReport {
  name: string;
  address: string;
  size: Size;
  category: string;
  books: Book[];
  outlet: Outlet;
  wifi: Wifi;
  content: string;
  writtenDate: string;
  noise: Noise;
  moods: Mood[];
}

export interface ResponseReview {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    reviewId: number;
  };
}

export enum Category {
  Indoor = 'Indoor',
  Outdoor = 'Outdoor',
}

export enum DayOfWeek {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}

export enum Mood {
  Comfortable = 'Comfortable',
  Exciting = 'Exciting',
  Calm = 'Calm',
  Joyful = 'Joyful',
  Cozy = 'cozy',
  Interesting = 'interesting',
}

export enum Noise {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
}

export enum Outlet {
  Few = 'Few',
  Normal = 'Normal',
  Many = 'Many',
}

export enum Size {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

export enum Wifi {
  On = 'On',
  Off = 'Off',
}
