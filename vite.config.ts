import { sentryVitePlugin } from '@sentry/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    sentryVitePlugin({
      org: 'soongsil-university-uz',
      project: 'javascript-react-bc',
    }),
  ],

  build: {
    sourcemap: true,
  },
});
