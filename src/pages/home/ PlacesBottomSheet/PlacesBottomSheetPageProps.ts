import { PlacePreviewDTO, RecommendPlace } from '@/types/Place';

export type PlacesBottomSheetPageProps = {
  places: PlacePreviewDTO[] | RecommendPlace[];
  isLastPage: boolean;
  onTabChange: (tab: 'nearby' | 'bookmark') => void;
  loaderRef: React.RefObject<HTMLDivElement>;
  activeTab: 'nearby' | 'bookmark';
};
