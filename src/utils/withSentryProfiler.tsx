import { ComponentType } from 'react';

import { withProfiler } from '@sentry/react';

export function withSentryProfiler<P extends object>(
  WrappedComponent: ComponentType<P>,
  componentName: string
) {
  return withProfiler(WrappedComponent, { name: componentName });
}
