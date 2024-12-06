import * as Sentry from '@sentry/react';

export const initSentry = () => {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
    tracesSampleRate: 1.0,
    tracePropagationTargets: ['https://b1g4-bookmark.vercel.app/'],
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,

    // 에러 트래킹 추가 설정
    beforeSend(event) {
      // 특정 에러 무시
      if (event.exception) {
        const errorMessage = event?.exception?.values?.[0]?.value;
        if (errorMessage?.includes('무시할 에러 메시지')) {
          return null;
        }
      }
      return event;
    },

    // 환경 설정
    environment: import.meta.env.MODE,

    // 에러 그룹화 설정
    normalizeDepth: 5,

    // 브레드크럼 설정 (사용자 행동 추적)
    maxBreadcrumbs: 50,
  });
};
