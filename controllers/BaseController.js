/**
 * @author：eleven
 * @version：v0.0.1
 * 创建日期：2019/5/5
 * 历史修订：
 */
export default class BaseController {

  /**
   * [info description]
   * @method info
   * @param  {[type]} msg [description]
   * @return {[type]}     [description]
   */
  info(msg) {
    logger.info(msg);
  }

  /**
   * [err description]
   * @method err
   * @param  {[type]} msg [description]
   * @return {[type]}     [description]
   */
  err(msg) {
    logger.err(msg);
  }

  /**
   * [warn description]
   * @method warn
   * @param  {[type]} msg [description]
   * @return {[type]}     [description]
   */
  warn(msg) {
    logger.warn(msg);
  }
}