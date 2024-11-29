import { BaseResponse } from '@/types/BaseResponse';
import { SearchFilter } from '@/types/Filter';
import { SearchPlaceResponse } from '@/types/PageResponse';

import { IPlaceService } from '../../interfaces/IPlaceService';

export class GetSearchPlacesUseCase {
  constructor(private placeService: IPlaceService) {}

  async execute(params: SearchFilter): Promise<BaseResponse<SearchPlaceResponse>> {
    return this.placeService.getSearchPlaces(params);
  }
}
