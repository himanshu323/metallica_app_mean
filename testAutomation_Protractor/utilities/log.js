"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
exports.winston = winston;
winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, { timestamp: true });
winston.add(winston.transports.File, { filename: 'winston-basic.log' });
//# sourceMappingURL=log.js.map