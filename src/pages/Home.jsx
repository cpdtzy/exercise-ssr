import * as React from 'react';
import {renderToString} from "react-dom/server";

function Home() {
    return (
        <div>
            <h1>
                Hello, world!
            </h1>
            <h4>
                this is a test
            </h4>
        </div>
    );
}

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

const home = renderToString(<Home />);

export default renderBody(home);
