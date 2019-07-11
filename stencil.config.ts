import { Config } from '@stencil/core';

export const config: Config = {
    namespace: 'microbit',
    outputTargets: [
        { type: 'dist' },
        { type: 'docs-readme' }
    ],
    devServer: {
        reloadStrategy: 'pageReload'
    }
};
