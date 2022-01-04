import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    scss: {
      includePaths: ['./src/style'],
    },
  }),

  kit: {
    adapter: adapter(),
    target: '#svelte',
    vite: {
      resolve: {
        alias: {
          '@components': resolve('./src/components/'),
        },
      },
    },
  },
};

export default config;
