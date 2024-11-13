import { isAxiosError } from '@/types/error.type';

export const handleError = (error: unknown) => {
  const errorMessage = isAxiosError(error)
    ? error.response?.data?.message || error.message
    : error instanceof Error
      ? error.message
      : '알 수 없는 오류가 발생했습니다.';

  console.error('에러 발생:', error);
  alert(`오류가 발생했습니다: ${errorMessage}`);
};
