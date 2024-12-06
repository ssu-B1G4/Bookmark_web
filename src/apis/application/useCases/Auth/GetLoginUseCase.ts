import { BaseResponse } from '@/types/BaseResponse';
import { LoginResult } from '@/types/getLogin.type';

import { IAuthService } from '../../interfaces/IAuthService';

export class LoginUseCase {
  constructor(private authService: IAuthService) {}

  async execute(code: string): Promise<BaseResponse<LoginResult>> {
    return this.authService.login(code);
  }
}
