/**
 * @author：eleven
 * @version：v0.0.1
 * 创建日期：2019/4/26
 * 历史修订：
 */
import amqp from 'amqplib';
import logsUtil from '../utils/logs.js';
import conf from '../config'
import uuid from "node-uuid";
import Constants from '../configuration/constants'

const MQ_CONST = Constants.MQ;
const MQ_MSG_CONST = Constants.MQ_MSG;
export default class Client {
  constructor() {
    this.conn = null;
    return this.createConnect()
  }

  /**
   * 创建MQ 链接
   * @returns {Promise<{client: Client}>}
   */
  async createConnect() {
    try {
      this.conn = await amqp.connect('amqp://' + conf.mq.user + ':' + conf.mq.password + '@' + conf.mq.host + ':' + conf.mq.port);
      return { client: this };
    } catch (err) {
      throw err;
    }
  }

  /**
   * 发送消息
   * @param content 消息内容
   * @param type  请求的服务类型
   * @returns {Promise<*>}
   */
  async sendQueueMsg(content, type) {
    try {
      const ch = await this.conn.createChannel();
      return new Promise((resolve, reject) => {
        const correlationId = uuid();
        ch.assertQueue(MQ_CONST.QUEUE_API_REST).then(function (ok) {
          //监听消息
          content.needReply && ch.consume(MQ_CONST.QUEUE_API_REST, (msg) => {
            logsUtil.logMQ(MQ_MSG_CONST.RECEIVE_TYPE, JSON.stringify(msg.content));
            resolve(msg);
            ch.close();
          }, { noAck: true });
          // 发送mq消息
          ch.sendToQueue(type, Buffer.from(JSON.stringify(content)), {
            replyTo: MQ_CONST.QUEUE_API_REST,
            correlationId: correlationId
          });
          !content.needReply && resolve({ content: true });
          logsUtil.logMQ(MQ_MSG_CONST.SEND_TYPE, JSON.stringify(content))
        })
      })
    } catch (err) {
      return logsUtil.logMQ(MQ_MSG_CONST.ERR_WHEN_SEND, err)
    }
  }
}