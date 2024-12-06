import { BaseResponse } from '@/types/BaseResponse';

import { IAuthService } from '../../interfaces/IAuthService';

export class DeleteWithdrawUseCase {
  constructor(private authService: IAuthService) {}

  async execute(): Promise<BaseResponse<void>> {
    return this.authService.withdraw();
  }
}
