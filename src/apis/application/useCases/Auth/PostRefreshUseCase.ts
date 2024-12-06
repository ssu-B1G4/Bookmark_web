import { BaseResponse } from '@/types/BaseResponse';
import { RefreshTokenResponse } from '@/types/auth.type';

import { IAuthService } from '../../interfaces/IAuthService';

export class RefreshTokenUseCase {
  constructor(private authService: IAuthService) {}

  async execute(): Promise<BaseResponse<RefreshTokenResponse>> {
    return this.authService.refresh();
  }
}
