import express from 'express';
import * as React from 'react';
import {renderToString} from "react-dom/server";
import Home from '../pages/Home.tsx';

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
                ${content}
            </body>
        </html>`
    )
};

app.get('/', function (req, res) {
    const dom = renderToString(React.createElement(Home));
    res.send(renderBody(dom));
});

const loaded = () => console.log(`localhost:3000`);
app.listen(3000, loaded);
