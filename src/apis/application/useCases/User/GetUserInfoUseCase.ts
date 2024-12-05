import { BaseResponse } from '@/types/BaseResponse';
import { UserInfo } from '@/types/User';

import { IUserService } from '../../interfaces/IUserService';

export class GetUserInfoUseCase {
  constructor(private userService: IUserService) {}

  async execute(): Promise<BaseResponse<UserInfo>> {
    return this.userService.getUserInfo();
  }
}
