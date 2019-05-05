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
    port:'5672',
    user:'admin',
    password:'test',
    maxAge:1800000,
    redis_maxAge:1800
  },
  mysql: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    db: 'api',
    pass: 'test',
    char: 'utf8mb4'
  },
};
console.log(process.env.NODE_ENV);
export default process.env.NODE_ENV === 'production' ? Object.assign({}, CONF, require('./security.js')) : CONF;
