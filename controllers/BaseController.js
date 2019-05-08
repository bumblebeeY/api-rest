/**
 * @author：eleven
 * @version：v0.0.1
 * 创建日期：2019/5/5
 * 历史修订：
 */
export default class BaseController {
  constructor() {

  }

  /**
   * 生成MQ的消息
   * @param ctrl 调用的控制类
   * @param func 调用的方法名
   * @param ctx koa上下文
   * @returns {{ctrl: *, func: *, params: *}}
   */
  generateMsg(ctrl, func, ctx) {
    const params = this.extractParams(ctx);
    return {
      ctrl,
      func,
      params
    }
  }

  /**
   * 提取请求的参数
   * @param ctx koa上下文
   */
  extractParams(ctx) {
    if (ctx.method === 'GET') {
      return ctx.query;
    } else {
      return ctx.body;
    }
  }

  extractResponse(msg) {
    return JSON.parse(msg.content)
  }
}