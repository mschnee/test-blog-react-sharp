import clean from './clean';
import copy from './copy';
import run from './run';
import packBuilder from './webpack';

async function build() {
    await run(clean);
    await run(copy);
    await run(packBuilder);
}

export default build;