import {build} from 'esbuild';
import nodemon from 'nodemon';

// noinspection SpellCheckingInspection
build({
    bundle: true,
    entryPoints: [
        'src/clinet/index.jsx',
        'src/server/index.js',
    ],
    watch: true,
    platform: 'node',
    target: ['node12'],
    outdir: 'dist',
})
    .then((...r) => {
        console.log(r, 'success');
        nodemon({
            script: 'dist/server/index.js',
        });
    });
