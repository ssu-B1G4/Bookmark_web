interface Window {
  naver: {
    maps: {
      Map: new (element: HTMLElement, options: naver.maps.MapOptions) => naver.maps.Map;
      LatLng: new (lat: number, lng: number) => naver.maps.LatLng;
      Marker: new (options: naver.maps.MarkerOptions) => naver.maps.Marker;
      InfoWindow: new (options: naver.maps.InfoWindowOptions) => naver.maps.InfoWindow;
      Point: new (x: number, y: number) => Point;
      Event: {
        addListener: (instance: object, eventName: string, handler: () => void) => void;
      };
    };
  };
}

declare namespace naver.maps {
  interface MapOptions {
    center: LatLng;
    zoom: number;
    zoomControl?: boolean;
  }

  interface LatLng {
    lat: number;
    lng: number;
  }

  interface MarkerOptions {
    position: LatLng;
    map: Map;
    icon?: {
      content: string;
      anchor?: Point;
    };
  }

  interface InfoWindowOptions {
    content: string;
  }

  interface Map {
    setCenter: (center: LatLng) => void;
    setZoom: (zoom: number) => void;
  }

  interface Marker {
    setMap: (map: Map | null) => void;
    setPosition: (position: LatLng) => void;
  }

  interface InfoWindow {
    open: (map: Map, marker: Marker) => void;
    close: () => void;
  }
}
