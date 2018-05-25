module.exports = function () {

    const winston = require('winston');
    const fs = require('fs');
    const logDir = 'log';
    
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir);
    }
    
    const tsFormat = () => (new Date()).toLocaleTimeString();
    const logger = new (winston.Logger)({
      transports: [
        new (winston.transports.Console)({
          timestamp: tsFormat,
          level: 'debug'
        }),
        new (winston.transports.File)({
          level: 'debug',
          filename: `${logDir}/logs.log`,
          timestamp: tsFormat,
          maxsize:1000000,
          maxFiles:5
        })
      ]
    });
}