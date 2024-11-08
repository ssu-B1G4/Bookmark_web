import { useState, useEffect, useCallback } from 'react';

interface Location {
  lat: number;
  lng: number;
}

export const useGeolocation = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getLocation = useCallback(() => {
    if (!navigator.geolocation) {
      console.error('Geolocation is not supported by this browser.');
      setLoading(false);
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLoading(false);
      },
      (error) => {
        console.error('Error fetching geolocation:', error);
        setLoading(false);
      }
    );
  }, []);

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  return { location, loading, getLocation };
};
