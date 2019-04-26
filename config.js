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
