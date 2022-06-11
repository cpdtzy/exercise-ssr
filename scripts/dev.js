import express from 'express';

const app = express();

// noinspection SpellCheckingInspection
// serve({
//     host: 'localhost',
//     port: 4000,
//     servedir: resolve('src/pages'),
// }, {
//     entryPoints: [resolve('src/pages/index.js')],
//     bundle: true,
//     minify: true,
//     sourcemap: true,
//     target: ['node10.4'],
//     platform: 'node',
//     outdir: 'src/pages/dist',
// })
//     .then(server => {
//         const {host, port} = server;

        // app.get('/', function (req, res) {
        //     res.send(home);
        // });
        //
        // const loaded = () => console.log(`localhost:3000`);
        // app.listen(3000, loaded);
    // });
const renderBody = (content = 'Hello, world!') => {
    return (
        `<!DOCTYPE html>
        <html lang="zh-CN">
            <head>
                <meta charset="utf-8">
                <title>test</title>
            </head>
            <body>
                ${content}
            </body>
        </html>`
    )
};

app.get('/', function (req, res) {
    res.send(renderBody());
});

const loaded = () => console.log(`localhost:3000`);
app.listen(3000, loaded);
