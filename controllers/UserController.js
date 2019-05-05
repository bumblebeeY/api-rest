/**
 * @author：eleven
 * @version：v0.0.1
 * 创建日期：2019/4/25
 * 历史修订：
 */
import BaseController from './BaseController';

export default class UserController extends BaseController {
  constructor(mq) {
    super();
    this.mq = mq;
  }

  async login(ctx, next) {
    const content = {
      class: 'user',
      func: 'getUserList',
      content: {}
    };
   const res =await this.mq.sendQueueMsg(content, 'order');
    console.log(res)
    ctx.body=res;
  }
}