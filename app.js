const Koa = require('koa');
const app = new Koa();
const http = require('http');
const views = require('koa-views');
const response = require('./middlewares/response');
const bodyParser = require('./middlewares/bodyparser');
const logsUtil = require('./utils/logs.js');
const conf = require('./config');
app.use(views(__dirname + '/views', {map: {html: 'underscore'}}));
// 使用响应处理中间件
app.use(response);
// 解析请求体
app.use(bodyParser());

// 引入路由分发
const router = require('./routes');
app.use(router.routes()).use(router.allowedMethods());

let server = http.createServer(app.callback());
server.listen(conf.port, function listening() {
  logsUtil.logInfo(`服务器启动成功！端口：${ conf.port}`);
});
