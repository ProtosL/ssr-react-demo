import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 静态目录代理
app.use(express.static('dist/public'));

app.get('*', (req, res) => {
    const content = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url}>
                <Routes />
            </StaticRouter>
        </Provider>
    );

    const html = `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="/bundle_client.js"></script>
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