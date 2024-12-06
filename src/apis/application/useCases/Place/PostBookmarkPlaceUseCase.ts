import { IPlaceService } from '@/apis/application/interfaces/IPlaceService';
import { BaseResponse } from '@/types/BaseResponse';

export class PostBookmarkPlaceUseCase {
  constructor(private placeService: IPlaceService) {}

  async execute(placeId: number): Promise<BaseResponse<string>> {
    return this.placeService.postBookmarkPlace(placeId);
  }
}
