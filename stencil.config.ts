import { Config } from '@stencil/core';
import builtins from 'rollup-plugin-node-builtins';

export const config: Config = {
    namespace: 'microbit',
    commonjs: {
        namedExports: {
            'node_modules/microbit-web-bluetooth/lib/index.js': ['getServices', 'requestMicrobit']
        }
    },
    plugins: [
        builtins(),
    ],
    outputTargets: [
        { type: 'dist' },
        { type: 'docs' },
        {
            type: 'www',
            serviceWorker: null
        }
    ]
};
