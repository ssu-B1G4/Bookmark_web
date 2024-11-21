import { BaseResponse } from '@/types/BaseResponse';
import { BookmarkPlaceResponse } from '@/types/PageResponse';

import { IPlaceService } from '../../interfaces/IPlaceService';

export class GetBookmarkPlacesUseCase {
  constructor(private placeService: IPlaceService) {}

  async execute(page: number): Promise<BaseResponse<BookmarkPlaceResponse>> {
    return this.placeService.getBookmarkPlaces(page);
  }
}
