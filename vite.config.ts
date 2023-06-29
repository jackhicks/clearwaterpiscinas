import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv('development', process.cwd(), '');
  const processEnvValues = {
    'process.env': Object.entries(env).reduce((prev, [key, val]) => {
      console.log(key, val);
      return {
        ...prev,
        [key]: val,
      };
    }, {}),
  };

  return {
    plugins: [react()],
    server: {
      proxy: {
        // Using the proxy instance
        '/api': 'localhost:8000',
      },
    },
    define: processEnvValues,
  };
});
