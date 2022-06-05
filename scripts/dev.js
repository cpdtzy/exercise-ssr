import { build, serve } from "esbuild";
import { resolve } from "path";
import express from 'express';

const app = express();

// noinspection SpellCheckingInspection
serve({
    host: 'localhost',
    port: 4000,
    servedir: resolve('src/pages'),
}, {
    entryPoints: [resolve('src/pages/index.js')],
    bundle: true,
    minify: true,
    sourcemap: true,
    resolveExtensions: ['.tsx', '.ts'],
    target: ['node10.4'],
    platform: 'node',
    outdir: 'src/pages/dist',
})
    .then(server => {
        const {host, port} = server;

        // app.get('/', function (req, res) {
        //     res.send('Hello, world');
        // });
        //
        // const loaded = () => console.log(`${host}:${port}`);
        // app.listen(port, host, loaded);
    });
