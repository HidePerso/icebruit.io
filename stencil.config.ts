import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'bruit',
  srcDir: 'src',
  bundles: [{ components: ['bruit-modal', 'bruit-io', 'bruit-rating'] }],
  outputTargets: [
    {
      type: 'dist',
      copy: [
        { src: 'start.js', dest: './../start.js' }
      ]
    },
    {
      type: 'dist-self-contained',
      dir: 'dist2',
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ],

  plugins: [sass()],
  hashFileNames: false
};
