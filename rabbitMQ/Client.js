/**
 * @author：eleven
 * @version：v0.0.1
 * 创建日期：2019/4/26
 * 历史修订：
 */
import amqp from 'amqplib/callback_api';
import logsUtil from '../utils/logs.js';
import Producer from './Producer';
import conf from '../config'

export default class Client {
  constructor() {
    return new Promise((resolve, reject) => {
      amqp.connect('amqp://' + conf.mq.user + ':' + conf.mq.password + '@' + conf.mq.host + ':' + conf.mq.port, this.onConnect.bind(this, resolve))
    })
  }

  onConnect(resolve, err, conn) {
    if (err !== null) return this.bail(err);
    conn.createChannel((err, ch) => {
      if (err !== null) return this.bail(err);
      ch.assertQueue('222', {exclusive: true}, (err, ok) => {
        if (err !== null) return this.bail(err);
        this.initClient(resolve, ch, ok)
      });
    });
  }

  initClient(resolve, ch, ok) {
    resolve({Producer: new Producer(ch, ok)});
  }

  bail(err) {
    logsUtil.logMQ(err)
  }
}