/**
 * @author：eleven
 * @version：v0.0.1
 * 创建日期：2019/4/25
 * 历史修订：
 */
import Router from 'koa-router'
import logsUtil from '../utils/logs.js';
import _ from 'lodash'
import fs from 'fs'
import path from 'path'
import { Client } from '../rabbitMQ';

const router = new Router({
  prefix: '/api'
});
/**
 * 初始化d文件夹下定义的路由
 */
const initRouters = d => {
  // 获得当前文件夹下的所有的文件夹和文件
  const [dirs, files] = _(fs.readdirSync(d)).partition(p => fs.statSync(path.join(d, p)).isDirectory());
  // 映射文件
  files.forEach(file => {
    if (path.extname(file) === '.js') {
      let service = require(path.join(d, file));
      service.init && service.init(router);
    }
  });
};
new Client().then((res) => {
  logsUtil.logMQ('rabbitMQ is ready');
  global.MQ = res.Producer;
  initRouters(path.join(__dirname))
}).catch((e) => {
  logsUtil.logMQ(e)
});
module.exports = router;