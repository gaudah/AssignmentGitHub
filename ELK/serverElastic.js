const fs = require('fs')
const elasticsearch = require('elasticsearch');

var bunyan = require('bunyan');
var log = bunyan.createLogger({
    name: 'myapp',
    streams: [{
        level: 'info',
        stream: process.stdout // log INFO and above to stdout
    }, {
        level: 'error',
        path: 'myapp-error.log' // log ERROR and above to a file
    }]
});

log.info({status: 'started'}, 'message for everyone');

const esClient = new elasticsearch.Client({
    host: '127.0.0.1:9200',
    // log: 'error'
    log: 'info'
});

const bulkIndex = function bulkIndex(index, type, data) {
    log.info("came inside bulkIndex function")
    let bulkBody = [];
    var ii = 1
    data.forEach(item => {
        bulkBody.push({
            index: {
                _index: index,
                _type: type,
                _id: ii
            }

        });
         ii++
        bulkBody.push(item);
    });

    log.info("bulkBody is")
    esClient.bulk({body: bulkBody})
        .then(response => {
            console.log('here');
            log.info("here")
            let errorCount = 0;
            response.items.forEach(item => {
                if (item.index && item.index.error) {
                    console.log(++errorCount, item.index.error);
                }
            });
            console.log(
                `Successfully indexed ${data.length - errorCount}
       out of ${data.length} items`
            );
            log.info("Successfully indexed")
        })
        .catch(console.err);
};

function test() {
    log.info("came inside test function")
    log.info("articles are")

    fs.readFile('myapp-error17.log', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("read content: " + data.toString());
        var s1 = data.toString();
        var splitted = s1.split("\n");
        var array1 = []
        for (i = 0; i < (splitted.length - 1); i = i + 1) {
            array1.push(JSON.parse(splitted[i]))
        }
        console.log("File contents are ")
        console.log(array1)
        console.log("FILE CONTENTS ARE "+array1)

        bulkIndex('logsgenerated17', 'article', array1);

    })
};


test()


function indices() {
    return esClient.cat.indices({v: true})
        .then(console.log)
        .catch(err => console.error(`Error connecting to the es client: ${err}`));

};

indices()

function search(index, body) {
    return esClient.search({index: index, body: body});
};

let body = {
    size: 20,
    from: 0,
    query: {
        match_all: {}
    }
};


search('logsgenerated17',body)
    .then(results => {
        console.log(`found ${results.hits.total} items in ${results.took}ms`);
        console.log(`returned article titles:`);
        results.hits.hits.forEach(

            (hit, index) => console.log(
                `\t${body.from + ++index} - ${hit._source.msg}`
            )
        )
    })
    .catch(console.error);

