/**
 * @author：eleven
 * @version：v0.0.1
 * 创建日期：2019/4/25
 * 历史修订：
 */
const Router = require('koa-router');
const router = new Router({
  prefix: '/api'
});
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
/**
 * 初始化d文件夹下定义的路由
 */
const initRouters = (d => {
  // 获得当前文件夹下的所有的文件夹和文件
  const [dirs, files] = _(fs.readdirSync(d)).partition(p => fs.statSync(path.join(d, p)).isDirectory());
  // 映射文件
  files.forEach(file => {
    if (path.extname(file) === '.js') {
      let service = require(path.join(d, file));
      service.init && service.init(router);
    }
  });
})(path.join(__dirname));
module.exports = router;