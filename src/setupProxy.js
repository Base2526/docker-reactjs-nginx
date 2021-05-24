// const proxy = require("http-proxy-middleware");
// module.exports = function(app){
//     app.use(proxy('/api', {target: "http://157.230.240.133/"}));
//     app.use(proxy('/nodejs', {target: "http://143.198.223.146:3000/"}));
// }

const createProxyMiddleware = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
        target: 'http://157.230.240.133',
        changeOrigin: true,
        })
    );
};