import { BaseResponse } from '@/types/BaseResponse';
import { PreviewPlace } from '@/types/Place';

import { IPlaceService } from '../../interfaces/IPlaceService';

export class GetPreviewPlaceUseCase {
  constructor(private placeService: IPlaceService) {}

  async execute(placeId: number): Promise<BaseResponse<PreviewPlace>> {
    return this.placeService.getPreviewPlace(placeId);
  }
}
