var bunyan = require('bunyan');
var cluster = require('cluster');
var numCPUs = require('os').cpus().length;
var log = require('./logger.js')

if (cluster.isMaster) {

  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

// When a worker dies create another one
  cluster.on('exit', function(worker) {
    console.log('worker ' + worker.id +  ' died');
    cluster.fork();
  });


} else {

if (cluster.isWorker) {
   log.debug("hello")
   //log.info('worker with pid is' + process.pid);
   //change this line to Your Node.js app entry point.
   /* var log = bunyan.createLogger({name: "myapp"});
    log.info("hi");
    */
    require("./server.js");
}

}
