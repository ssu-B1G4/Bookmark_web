import { BaseResponse } from '@/types/BaseResponse';

import { IPlaceService } from '../../interfaces/IPlaceService';

export class DeleteBookmarkPlaceUseCase {
  constructor(private placeService: IPlaceService) {}

  async execute(placeId: number): Promise<BaseResponse<string>> {
    return this.placeService.deleteBookmarkPlace(placeId);
  }
}
