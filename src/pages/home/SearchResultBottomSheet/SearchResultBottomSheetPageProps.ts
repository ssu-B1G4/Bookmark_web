import { PlacePreviewDTO } from '@/types/Place';

export type SearchResultBottomSheetPageProps = {
  places: PlacePreviewDTO[];
  isLastPage: boolean;
  loaderRef: React.RefObject<HTMLDivElement>;
};
