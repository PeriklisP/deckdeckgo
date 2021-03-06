import {Config} from '@stencil/core';

import {sass} from '@stencil/sass';
import {postcss} from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

import builtins from 'rollup-plugin-node-builtins';

export const config: Config = {
  namespace: 'deckdeckgo-remote',
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ],
  plugins: [
    sass(),
    postcss({
      plugins: [autoprefixer()]
    }),
    builtins()
  ],
  nodeResolve: {
    browser: true
  }
};
