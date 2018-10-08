"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
class logger {
    static info(log) {
        loggerInfo.info(log);
    }
    static warn(log) {
        loggerInfo.warn(log);
    }
    static error(log) {
        loggerInfo.error(log);
    }
    static debug(log) {
        loggerDebug.debug(log);
    }
    static trace(log) {
        loggerTrace.trace(log);
    }
}
exports.logger = logger;
//# sourceMappingURL=loggerUtils.js.map