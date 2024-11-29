import { BaseResponse } from '@/types/BaseResponse';
import { Filter } from '@/types/Filter';
import { SearchPlaceResponse } from '@/types/PageResponse';

import { IPlaceService } from '../../interfaces/IPlaceService';

export class GetNearbyPlacesUseCase {
  constructor(private placeService: IPlaceService) {}

  async execute(params: Filter): Promise<BaseResponse<SearchPlaceResponse>> {
    return this.placeService.getNearbyPlaces(params);
  }
}
