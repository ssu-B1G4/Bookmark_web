import * as Sentry from '@sentry/react';

import { ErrorContext, SentryLogLevel, UserInfo } from '../types/sentry';

export const monitoringUtils = {
  captureError: (error: Error, context?: ErrorContext) => {
    Sentry.captureException(error, {
      extra: context,
      level: 'error',
    });
  },

  logEvent: (message: string, level: SentryLogLevel = 'info') => {
    Sentry.captureMessage(message, {
      level,
    });
  },

  setUserInfo: (user: UserInfo) => {
    Sentry.setUser(user);
  },

  setTag: (key: string, value: string) => {
    Sentry.setTag(key, value);
  },

  //   startTransaction: (name: string, operationName: string) => {
  //     return Sentry.startTransaction({
  //       name,
  //       op: operationName,
  //     });
  //   },
};
