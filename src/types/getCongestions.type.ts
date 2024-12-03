// export interface congestionData {
//   hour: string;
//   value: number;
// }

export interface GraphResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    congestionData: {
      hour: string;
      value: number;
    }[];
  };
}

export interface CongestionResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    placeId: number;
    time: string;
    status: string;
  };
}
