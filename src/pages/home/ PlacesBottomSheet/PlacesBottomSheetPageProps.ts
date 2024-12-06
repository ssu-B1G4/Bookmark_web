import { PlacePreviewDTO, RecommendPlace } from '@/types/Place';

export type PlacesBottomSheetPageProps = {
  places: PlacePreviewDTO[] | RecommendPlace[];
  isLastPage: boolean;
  showTabs?: boolean;
  onTabChange?: (tab: 'nearby' | 'bookmark') => void;
  activeTab?: 'nearby' | 'bookmark';
  loaderRef?: React.RefObject<HTMLDivElement>;
};
