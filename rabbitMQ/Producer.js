/**
 * @author：eleven
 * @version：v0.0.1
 * 创建日期：2019/5/5
 * 历史修订：
 */
import conf from '../config'
import uuid from 'node-uuid';

export default class Producer {
  constructor(ch, ok) {
    this.ch = ch;
    this.ok = ok;
    this.ramdom = Date.now();
  }

  sendQueueMsg(content, type) {
    return new Promise((resolve, reject) => {
      this.ch.consume('222', (msg) => {
        this.ch.ack(msg);
        resolve({data:msg});
      }, { noAck: true });
      this.ch.sendToQueue('222', Buffer.from(JSON.stringify(content)));
    })
  }
}