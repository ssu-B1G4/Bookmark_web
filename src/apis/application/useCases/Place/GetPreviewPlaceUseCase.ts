import { BaseResponse } from '@/types/BaseResponse';
import { PlacePreviewDTO } from '@/types/Place';

import { IPlaceService } from '../../interfaces/IPlaceService';

export class GetPreviewPlaceUseCase {
  constructor(private placeService: IPlaceService) {}

  async execute(placeId: number): Promise<BaseResponse<PlacePreviewDTO>> {
    return this.placeService.getPreviewPlace(placeId);
  }
}
