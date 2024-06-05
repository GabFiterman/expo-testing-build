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

app.listen(3000, () => {
    console.log('Proxy server is running on port 3000');
});

module.exports = app;
