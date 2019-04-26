/**
 * @author：eleven
 * @version：v0.0.1
 * 创建日期：2019/4/26
 * 历史修订：
 */
const controllers = require('../controllers');
const User ={
  init(router){
    router.post('/user/login', controllers.user.login);
  }
};
module.exports=User;