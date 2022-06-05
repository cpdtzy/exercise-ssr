import {renderToString} from "react-dom/server";

import server from './http';
import Home from "../pages/index";

const renderBody = content => {
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

server.get('/', function (req, res) {
    res.send('Hello, world!');
});
