/**
 * @author：eleven
 * @version：v0.0.1
 * 创建日期：2019/4/25
 * 历史修订：
 */
const CONF = {
  port:6001,
  //数据库配置
  mq:{
    host:'39.105.209.146',
    port:'15672',
    user:'admin',
    password:'gy11070809xam',
    maxAge:1800000,
    redis_maxAge:1800
  },
  mysql: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    db: 'api',
    pass: 'gy11070809xam',
    char: 'utf8mb4'
  },
};
module.exports = process.env.NODE_ENV === 'production' ? Object.assign({}, CONF, require('/data/config/api-resr.js')) : CONF;
