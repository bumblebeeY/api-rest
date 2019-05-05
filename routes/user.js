/**
 * @author：eleven
 * @version：v0.0.1
 * 创建日期：2019/4/26
 * 历史修订：
 */
import { UserController } from '../controllers'

const User = {
  init(router) {
    const userController = new UserController(global.MQ);
    router.get('/user/login', userController.login.bind(userController));
  }
};

module.exports = User;