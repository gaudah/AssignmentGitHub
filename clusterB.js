var bunyan = require('bunyan');
var cluster = require('cluster');
var numCPUs = require('os').cpus().length;
var log = require('./logger.js')
//var server = require('./server.js')

if (cluster.isMaster) {

  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  /*cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
  });*/

// When a worker dies create another one
  cluster.on('exit', function(worker) {
    console.log('worker ' + worker.id +  ' died');
    cluster.fork();
  });


} else {

    //require("./server.js");

if (cluster.isWorker) {
  //console.log('I am a worker');
   //console.log('worker with pid is' + process.pid);
   //var store = 'worker with pid is' + process.pid
   //log.info(store)
   ////////////////////////log.info("hi")
   log.debug("hi")
  // log.info({time:"hi"})
   //log.info('worker with pid is' + process.pid);
   //change this line to Your Node.js app entry point.
   /* var log = bunyan.createLogger({name: "myapp"});
    log.info("hi");
    var d = new Date();
    var n = d.getSeconds();
    console.log(n)
    //log.levels()
    //console.log(log.info("hi"))*/

    require("./server.js");
}

}
