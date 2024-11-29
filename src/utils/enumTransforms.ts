import { ReportFormData, ReviewFormData } from '@/types/ReviewPage/ReviewFormData';
import {
  Category,
  Mood,
  Noise,
  Outlet,
  PostReport,
  PostReview,
  Size,
  Wifi,
} from '@/types/review.type';

const moodMap: Record<string, Mood> = {
  '🎆 편안한': Mood.Comfortable,
  '🎉 신나는': Mood.Exciting,
  '🌌 차분한': Mood.Calm,
  '✨ 즐거운': Mood.Joyful,
  '🪑 아늑한': Mood.Cozy,
  '🍀 재미있는': Mood.Interesting,
};

const noiseMap: Record<string, Noise> = {
  조용함: Noise.Low,
  보통: Noise.Medium,
  활발함: Noise.High,
};

const outletMap: Record<string, Outlet> = {
  부족: Outlet.Few,
  보통: Outlet.Normal,
  넉넉: Outlet.Many,
};

const sizeMap: Record<string, Size> = {
  부족: Size.Small,
  보통: Size.Medium,
  넉넉: Size.Large,
};

const wifiMap: Record<string, Wifi> = {
  있어요: Wifi.On,
  없어요: Wifi.Off,
};

const categoryMap: Record<string, string> = {
  실내: Category.Indoor,
  야외: Category.Outdoor,
};

export const transformReviewData = (formData: ReviewFormData): PostReview => {
  const now = new Date();
  const writtenDate =
    now.toISOString().split('T')[0] + ' ' + now.toTimeString().split(' ')[0].substring(0, 5);

  const visitDate = now.toISOString().split('T')[0] + ' ' + formData.startTime;

  return {
    size: sizeMap[formData.spaceSize],
    visitStartTime: formData.startTime,
    visitEndTime: formData.endTime,
    writtenDate,
    congestion: formData.traffic,
    books: formData.books,
    outlet: outletMap[formData.socket],
    wifi: wifiMap[formData.wifi],
    content: formData.reviewText,
    visitDate,
    noise: noiseMap[formData.noise],
    moods: formData.atmosphere.map((mood) => moodMap[mood]),
  };
};

export const transformReportData = (formData: ReportFormData): PostReport => {
  const now = new Date();
  const writtenDate =
    now.toISOString().split('T')[0] + ' ' + now.toTimeString().split(' ')[0].substring(0, 5);

  return {
    name: formData.name,
    address: formData.address,
    size: sizeMap[formData.size],
    books: formData.books,
    outlet: outletMap[formData.outlet],
    wifi: wifiMap[formData.wifi],
    content: formData.content,
    writtenDate,
    noise: noiseMap[formData.noise],
    moods: formData.moods.map((mood) => moodMap[mood]),
    category: categoryMap[formData.category],
  };
};
