import Koa from 'koa2'
import http from 'http';
import views from 'koa-views';
import response from './middlewares/response'
import bodyParser from './middlewares/bodyparser';
// 引入路由分发
import router from './routes'
import  logsUtil from './utils/logs.js';
import conf from './config'
const app = new Koa();
app.use(views(__dirname + '/views', {map: {html: 'underscore'}}));
// 使用响应处理中间件
app.use(response);
// 解析请求体
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

let server = http.createServer(app.callback());
server.listen(conf.port, function listening() {
  logsUtil.logInfo(`服务器启动成功！端口：${ conf.port}`);
});
