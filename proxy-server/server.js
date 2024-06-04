const express = require('express');
const httpProxy = require('http-proxy');
const cors = require('cors');

const proxy = httpProxy.createProxyServer({});
const app = express();

app.use(cors());

app.get('*', function (req, res) {
    console.log('Request', req.url);
    proxy.web(
        req,
        res,
        { target: `http://apprioalertacor.rio.rj.gov.br/`, changeOrigin: true },
        function (e) {
            console.log(e);
        }
    );
});

async function startServer() {
    const server = await app.listen(3000);
    console.log('Proxy Server started at port 3000');
}

startServer();
