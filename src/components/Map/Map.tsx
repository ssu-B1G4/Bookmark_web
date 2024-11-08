import { useEffect, useRef, useState } from 'react';

import ReactDOMServer from 'react-dom/server';

import { CirclepathIcon } from '@/assets/Map/CirclepathIcon';
import { MarkerPinIcon } from '@/assets/Map/MarkerPinIcon';
import { MyLocationIcon } from '@/assets/Map/MyLocationIcon';
import { SelectedMarkerPinIcon } from '@/assets/Map/SelectedMarkerPinIcon';
import { SearchPlace } from '@/types/Place';

import { MapContainer, MapWrapper, MapButton, MyLocationMarker } from './Map.style';
import { useGeolocation } from './useGeolocation';

interface MapProps {
  searchPlaces?: SearchPlace[];
}

export const Map = ({ searchPlaces = [] }: MapProps) => {
  const { naver } = window;
  const centerOffset = 0;
  const mapRef = useRef<HTMLDivElement>(null);
  const { location, loading, getLocation } = useGeolocation();
  const [map, setMap] = useState<naver.maps.Map | null>(null);
  const [marker, setMarker] = useState<naver.maps.Marker | null>(null);
  const [selectedPlaceId, setSelectedPlaceId] = useState<number | null>(null);

  useEffect(() => {
    if (!loading && naver && naver.maps && location) {
      const mapOptions = {
        center: new naver.maps.LatLng(location.lat - centerOffset, location.lng),
        zoom: 17,
        zoomControl: false,
      };

      const initializedMap = new naver.maps.Map(mapRef.current!, mapOptions);
      setMap(initializedMap);

      const initialMarker = new naver.maps.Marker({
        position: new naver.maps.LatLng(location.lat, location.lng),
        map: initializedMap,
        icon: {
          content: `<div style="${MyLocationMarker.componentStyle.rules.join('')}"></div>`,
          anchor: new naver.maps.Point(12, 12),
        },
      });
      setMarker(initialMarker);

      searchPlaces.forEach((place) => {
        const position = new naver.maps.LatLng(place.latitude, place.longitude);

        const marker = new naver.maps.Marker({
          position,
          map: initializedMap,
          icon: {
            content:
              selectedPlaceId === place.placeId
                ? ReactDOMServer.renderToString(<SelectedMarkerPinIcon />)
                : ReactDOMServer.renderToString(<MarkerPinIcon />),
            anchor: new naver.maps.Point(22.5, 22.5),
          },
        });

        const infoWindow = new naver.maps.InfoWindow({
          content: `
            <div style="padding:10px;">
              <h4>${place.name}</h4>
              <p>크기: ${place.size}</p>
              <p>콘센트: ${place.outlet}</p>
              <p>와이파이: ${place.wifi}</p>
              <p>리뷰 수: ${place.reviewCount}</p>
              <div>${place.moods.join(', ')}</div>
            </div>
          `,
        });

        naver.maps.Event.addListener(marker, 'click', () => {
          setSelectedPlaceId((prevSelectedId) =>
            prevSelectedId === place.placeId ? null : place.placeId
          );
          infoWindow.open(initializedMap, marker);
        });
      });
    }
  }, [loading, location, searchPlaces, selectedPlaceId]);

  const handleLocationUpdate = () => {
    getLocation();

    if (map && location && marker) {
      const newPosition = new naver.maps.LatLng(location.lat, location.lng);
      map.setCenter(newPosition);
      marker.setPosition(newPosition);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <MapContainer>
      <MapWrapper ref={mapRef} />
      <MapButton>
        <CirclepathIcon />
      </MapButton>
      <MapButton onClick={handleLocationUpdate}>
        <MyLocationIcon />
      </MapButton>
    </MapContainer>
  );
};
