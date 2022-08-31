import express from 'express';
import open from 'open';
import * as React from 'react';
import {renderToPipeableStream} from "react-dom/server";
import * as Pages from '../pages/index.tsx';
import * as Path from 'path';

const app = express();

const renderBody = (content = 'Hello, world!') => {
    return (
        `<!DOCTYPE html>
        <html lang="zh-CN">
            <head>
                <meta charset="utf-8">
                <title>test</title>
            </head>
            <body>
                <div id="app">
                    ${content}
                </div>
            </body>
        </html>`
    )
};

app.use('/dist', express.static(Path.join(__dirname, 'dist')))
app.get('*', function (req, res) {
    const reqUrl = req.originalUrl.slice(1);
    const name = reqUrl.length ? reqUrl : 'home';
    const templateName = name[0].toUpperCase() + name.slice(1);
    const Template  = Pages[templateName];

    const stream = renderToPipeableStream(
        React.createElement(Template),
        {
            bootstrapScripts: ['/dist/clinet/index.js'],
            onShellReady() {
                res.setHeader('Content-type', 'text/html');
                stream.pipe(res);
            },
            onAllReady() {
                res.end();
            },
        }
    );
});

const loaded = () => {
    const url = 'localhost:3000';
    console.log(url);
    open(`http://${url}`);
};
app.listen(3000, loaded);
