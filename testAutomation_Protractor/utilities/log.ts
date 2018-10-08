
import * as winston from "winston"

winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, { timestamp: true });
winston.add(winston.transports.File, { filename: 'winston-basic.log' });
//winston.level="debug";
export {winston};
