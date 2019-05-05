/**
 * @author：eleven
 * @version：v0.0.1
 * 创建日期：2019/4/25
 * 历史修订：
 */
import Constants from './constants'

//  输出日志地址
const ERR_LOG_PATH = Constants.LOGGER.BASE_PATH + Constants.LOGGER.ERR_PATH + "/" + Constants.LOGGER.ERR_FILE_NAME;
const RES_LOG_PATH = Constants.LOGGER.BASE_PATH + Constants.LOGGER.RES_PATH + "/" + Constants.LOGGER.RES_FILE_NAME;
const HANDLE_LOG_PATH = Constants.LOGGER.BASE_PATH + Constants.LOGGER.HANDLE_PATH + "/" + Constants.LOGGER.HANDLE_FILE_NAME;
const MQ_LOG_PATH = Constants.LOGGER.BASE_PATH + Constants.LOGGER.MQ_PATH + "/" + Constants.LOGGER.MQ_FILE_NAME;
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
      "path": Constants.LOGGER.ERR_PATH
    },
    "resLogger": {
      "type": "dateFile",
      "filename": RES_LOG_PATH,
      "pattern": "-yyyy-MM-dd-hh.log",
      "alwaysIncludePattern": true,
      "encoding": "utf-8",
      "maxLogSize": 1000,
      "numBackups": 3,
      "path": Constants.LOGGER.RES_PATH
    },
    "handleLogger": {
      "type": "dateFile",
      "filename": HANDLE_LOG_PATH,
      "pattern": "-yyyy-MM-dd-hh.log",
      "alwaysIncludePattern": true,
      "encoding": "utf-8",
      "maxLogSize": 1000,
      "numBackups": 3,
      "path": Constants.LOGGER.HANDLE_PATH
    },
    "mqLogger": {
      "type": "dateFile",
      "filename": MQ_LOG_PATH,
      "pattern": "-yyyy-MM-dd-hh.log",
      "alwaysIncludePattern": true,
      "encoding": "utf-8",
      "maxLogSize": 1000,
      "numBackups": 3,
      "path": Constants.LOGGER.MQ_PATH
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
  "baseLogPath": Constants.LOGGER.BASE_PATH
}