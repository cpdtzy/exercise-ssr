import {build} from 'esbuild';
import * as Process from "process";

// noinspection SpellCheckingInspection
build({
    bundle: true,
    entryPoints: ['src/server/server.js'],
    platform: 'node',
    target: ['node12'],
    outfile: 'dist/build.js',
})
    .then(status => {
        console.log('已创建完成');
        status.stop();
    });
