import {build} from 'esbuild';
import * as Process from "process";

// TODO: 开发模式下，当前模式不利于调试
// noinspection SpellCheckingInspection
build({
    bundle: true,
    entryPoints: ['src/server/server.js'],
    platform: 'node',
    target: ['node12'],
    outfile: 'dist/build.js',
})
    .then(() => {
        Process.exit(1);
    });
