/**
 * @author：eleven
 * @version：v0.0.1
 * 创建日期：2019/4/25
 * 历史修订：
 */
import BaseController from './BaseController';
import Constants from '../configuration/constants'

export default class UserController extends BaseController {
  constructor(mq) {
    super();
    this.mq = mq;
  }

  /**
   * 登录接口
   * @param ctx
   * @returns {Promise<string>}
   */
  async login(ctx) {
    const userListMsg = this.generateMsg('UserController', 'getUserList', ctx);
    const userListRes = await this.mq.sendQueueMsg(userListMsg, Constants.MQ.QUEUE_COMMON);
    return ctx.body = this.extractResponse(userListRes);
  }
}