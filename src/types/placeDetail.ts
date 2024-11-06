export interface InfoTabProps {
  placeDetail: {
    address: string;
    phone: string;
    url: string;
    operatingTimeList: {
      [key: string]: {
        openTime?: string;
        closeTime?: string;
      };
    };
    location: {
      latitude: number;
      longitude: number;
    };
  };
}
