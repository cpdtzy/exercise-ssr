import {build} from 'esbuild';

// noinspection SpellCheckingInspection
build({
    bundle: true,
    entryPoints: ['src/server/server.js'],
    watch: true,
    platform: 'node',
    target: ['node12'],
    outfile: 'dist/build.js',
})
    .then((...r) => {
        console.log(r, 'success');
    });
