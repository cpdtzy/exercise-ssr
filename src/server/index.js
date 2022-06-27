import express from 'express';
import * as React from 'react';
import {renderToPipeableStream} from "react-dom/server";
import * as Pages from '../pages/index.tsx';

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

app.get('*', function (req, res) {
    const name = req.originalUrl.slice(1);
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

const loaded = () => console.log(`localhost:3000`);
app.listen(3000, loaded);
