import { useNavigate } from 'react-router-dom';

import { getLogin } from '@/apis/getLogin';
import { useEffectOnce } from '@/hooks/useEffectOnce';
import { handleError } from '@/utils/error';
export const Oauth = () => {
  const navigate = useNavigate();

  useEffectOnce(() => {
    const handleLogin = async () => {
      try {
        const currentUrl = window.location.href;
        const code = new URL(currentUrl).searchParams.get('code');

        if (!code) throw new Error('인가코드가 없습니다.');

        const response = await getLogin(code);

        if (response.isSuccess) {
          console.log(response.result.accessToken);
          navigate('/test');
        }
      } catch (error) {
        handleError(error);
        navigate('/login');
      }
    };

    handleLogin();
  });

  return <div>로그인 처리 중...</div>;
};
