import { Cookies } from 'react-cookie';

class TokenService {
  private cookie = new Cookies();

  setAccessToken(token: string) {
    this.cookie.set('accessToken', token, {
      path: '/',
      secure: true,
      sameSite: 'strict',
    });
  }

  getAccessToken() {
    return this.cookie.get('accessToken');
  }

  setRefreshToken(token: string) {
    this.cookie.set('refreshToken', token, {
      path: '/',
      secure: true,
      sameSite: 'strict',
    });
  }

  getRefreshToken() {
    return this.cookie.get('refreshToken');
  }

  isLoggedIn(): boolean {
    const accessToken = this.getAccessToken();
    const refreshToken = this.getRefreshToken();
    return !!(accessToken && refreshToken);
  }

  logout() {
    this.cookie.remove('accessToken', { path: '/' });
    this.cookie.remove('refreshToken', { path: '/' });
    sessionStorage.removeItem('user');
  }
}

export const api = new TokenService();
