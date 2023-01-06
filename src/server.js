const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('*', (req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    })
    res.end('hello 啊啊啊');
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})