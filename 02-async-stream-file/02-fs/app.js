var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt','utf8');
console.log(greet);

var logFile = function(err,data){
    if(err){console.log(err.message)}
    else{
      console.log(data);
    }
}

var greet2 = fs.readFile(__dirname + '/greet.txt','utf8',logFile);
console.log('Done !');
console.log('Done again !');
