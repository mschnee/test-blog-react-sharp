import { readFileSync } from 'fs';
import { resolve } from 'path';

import * as webpack from 'webpack';
import * as Promise from 'bluebird';

const pWebpack = Promise.promisify(webpack);

async function packBuilder() {
    let config: string;

    if (process.env === 'production') {
        config = 'webpack.config.js';
    } else {
        config = 'webpack.config.js';
    }

    pWebpack(require(resolve(process.cwd(), config)))
        .then(stats => {
            if (stats.hasErrors) {
                console.error('Errors in build');
                console.log(stats.toString({
                    chunks: false,
                    colors: true
                }))
            }
        })
        .catch(err => {
            console.error(err);
        })
}

export default packBuilder;