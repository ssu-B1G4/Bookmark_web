import { BaseResponse } from '@/types/BaseResponse';
import { RecommendedPlacesResponse } from '@/types/PageResponse';

import { IPlaceService } from '../../interfaces/IPlaceService';

export class GetRecommendPlacesUseCase {
  constructor(private placeService: IPlaceService) {}

  async execute(page: number): Promise<BaseResponse<RecommendedPlacesResponse>> {
    return this.placeService.getRecommendPlace(page);
  }
}
