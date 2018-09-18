/**
 * Created by web on 5/24/17.
 **/

var logging = {
    "name": "NAD-User-Management-PREPROD",
    "level": "debug",
    "path": "log.txt"
  }
var bunyan         = require('bunyan'); // Bunyan dependency

var logger = bunyan.createLogger({
    name: logging.name,
    serializers: bunyan.stdSerializers,
    streams: [
        {
            level: logging.level,
            path: logging.path
        },
        {
            level: bunyan.ERROR,
            stream: process.stdout
        }, {
            level: bunyan.DEBUG,
            stream: process.stdout
        },
        {
            level: bunyan.INFO,
            stream: process.stdout
        }
    ]
});

module.exports = logger;
