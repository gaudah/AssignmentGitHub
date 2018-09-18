var fs = require("fs");
var dedupe = require('dedupe')

function showFile(file1) {
    var i,j;
	fs.readFile(file1, function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("read content: " + data.toString());
            var s1 = data.toString();
            var splitted = s1.split("\n");
            for(i=0;i<(splitted.length-1);i=i+4)
            {
              var array1 = [];
              for(j=i;j<i+4;j++)
              {
                   array1.push(splitted[j])
              }
	     var bb = dedupe(array1, value => value.msg)
 	     console.log("duplicated log entries after removal="+bb)
            
	    }
           
        });
    };

showFile('log.txt')
