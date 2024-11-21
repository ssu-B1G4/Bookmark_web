import { PlaceWithCoordinates } from '@/types/Place';

export interface MapProps {
  searchPlaces?: PlaceWithCoordinates[];
  onMarkerClick?: (placeId: number | null) => void;
  onReLocationClick?: (center: { lat: number; lng: number }) => void;
  onMyLocationClick?: (center: { lat: number; lng: number }) => void;
}
