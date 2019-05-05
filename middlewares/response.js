import Constants from '../configuration/constants'
import  logsUtil from '../utils/logs.js';
/**
 * 响应处理模块
 */
export default async function(ctx, next) {
  const start = new Date(); // 响应开始时间
  let intervals;
  try {
    intervals = new Date() - start;
    logsUtil.logRequest(ctx, intervals);     //记录响应日志
    await next()
  } catch (e) {
    intervals = new Date() - start;
    logsUtil.logError(ctx, e, intervals);//记录异常日志
    ctx.status = 200;
    ctx.body = {
      code: e.status,
      msg: Constants.ERRORS.HTTPERR[e.status] || e && e.message ? e.message : e.toString()
    };
  }
};
