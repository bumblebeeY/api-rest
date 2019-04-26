/**
 * @author：eleven
 * @version：v0.0.1
 * 创建日期：2019/4/25
 * 历史修订：
 */
import { LOGGER } from './constants'
//  输出日志地址
const ERR_LOG_PATH = LOGGER.BASE_PATH + LOGGER.ERR_PATH + "/" + LOGGER.ERR_FILE_NAME;
const RES_LOG_PATH = LOGGER.BASE_PATH + LOGGER.RES_PATH + "/" + LOGGER.RES_FILE_NAME;
const HANDLE_LOG_PATH = LOGGER.BASE_PATH + LOGGER.HANDLE_PATH + "/" + LOGGER.HANDLE_FILE_NAME;
const MQ_LOG_PATH = LOGGER.BASE_PATH + LOGGER.MQ_PATH + "/" + LOGGER.MQ_FILE_NAME;
export default {
  //日志格式等设置
  appenders: {
    "rule-console": {"type": "console"},
    "errorLogger": {
      "type": "dateFile",
      "filename": ERR_LOG_PATH,
      "pattern": "-yyyy-MM-dd-hh.log",
      "alwaysIncludePattern": true,
      "encoding": "utf-8",
      "maxLogSize": 1000,
      "numBackups": 3,
      "path": LOGGER.ERR_PATH
    },
    "resLogger": {
      "type": "dateFile",
      "filename": RES_LOG_PATH,
      "pattern": "-yyyy-MM-dd-hh.log",
      "alwaysIncludePattern": true,
      "encoding": "utf-8",
      "maxLogSize": 1000,
      "numBackups": 3,
      "path": LOGGER.RES_PATH
    },
    "handleLogger": {
      "type": "dateFile",
      "filename": HANDLE_LOG_PATH,
      "pattern": "-yyyy-MM-dd-hh.log",
      "alwaysIncludePattern": true,
      "encoding": "utf-8",
      "maxLogSize": 1000,
      "numBackups": 3,
      "path": LOGGER.HANDLE_PATH
    },
    "mqLogger": {
      "type": "dateFile",
      "filename": MQ_LOG_PATH,
      "pattern": "-yyyy-MM-dd-hh.log",
      "alwaysIncludePattern": true,
      "encoding": "utf-8",
      "maxLogSize": 1000,
      "numBackups": 3,
      "path": LOGGER.MQ_PATH
    },
  },
  //供外部调用的名称和对应设置定义
  categories: {
    "default": {"appenders": ["rule-console"], "level": "all"},
    "resLogger": {"appenders": ["resLogger"], "level": "info"},
    "errorLogger": {"appenders": ["errorLogger"], "level": "error"},
    "handleLogger": {"appenders": ["handleLogger"], "level": "all"},
    "mqLogger": {"appenders": ["mqLogger"], "level": "info"}
  },
  "baseLogPath": LOGGER.BASE_PATH
}