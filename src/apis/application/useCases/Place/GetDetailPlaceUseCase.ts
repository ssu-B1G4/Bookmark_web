import { BaseResponse } from '@/types/BaseResponse';
import { DetailPlace } from '@/types/Place';

import { IPlaceService } from '../../interfaces/IPlaceService';

export class GetDetailPlaceUseCase {
  constructor(private placeService: IPlaceService) {}

  async execute(placeId: number): Promise<BaseResponse<DetailPlace>> {
    return this.placeService.getDetailPlaces(placeId);
  }
}
