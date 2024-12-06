import { IAuthService } from '../../interfaces/IAuthService';

export class PostLogoutUseCase {
  constructor(private authService: IAuthService) {}

  async execute(): Promise<void> {
    return this.authService.logout();
  }
}
