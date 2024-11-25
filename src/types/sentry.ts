export interface UserInfo {
  id: string;
  email?: string;
  username?: string;
}

export interface ErrorContext {
  [key: string]: string | number | boolean;
}

export type SentryLogLevel = 'fatal' | 'error' | 'warning' | 'info' | 'debug';
