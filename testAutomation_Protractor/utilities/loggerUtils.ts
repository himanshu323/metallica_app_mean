const log4js = require("log4js");
const timestamp = new Date().toJSON();
const logFileName = "logs/reporter" + timestamp + ".log";

log4js.configure({
  appenders: {
    reporter: { type: "file", filename: logFileName },
    console: { type: "console" }
  },
  categories: {
    default: { appenders: ["reporter", "console"], level: "info" },
    debug: { appenders: ["console"], level: "debug" },
    trace: { appenders: ["reporter", "console"], level: "trace" }
  }
});

const loggerInfo = log4js.getLogger();
const loggerDebug = log4js.getLogger("debug");
const loggerTrace = log4js.getLogger("trace");

export class logger {
  public static info(log: String) {
    loggerInfo.info(log);
  }
  public static warn(log: String) {
    loggerInfo.warn(log);
  }
  public static error(log: String) {
    loggerInfo.error(log);
  }
  public static debug(log: String) {
    loggerDebug.debug(log);
  }
  public static trace(log: String) {
    loggerTrace.trace(log);
  }
}
