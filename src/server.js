import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import Routes from './routes';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('*', (req, res) => {
    const content = ReactDOMServer.renderToString(
        <StaticRouter location={req.url}>
            <Routes />
        </StaticRouter>
    );

    const html = `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
            </body>
        </html>
    `
    
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    })
    res.end(html);
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})