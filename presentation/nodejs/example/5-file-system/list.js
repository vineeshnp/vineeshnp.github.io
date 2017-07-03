var fs = require('fs');

var files = fs.readdirSync('/var'); //read the content with blocking request

console.log(files);

// Doing async

fs.readdir('/home', (err, files) => {
    if (err){
        throw err;
    }

    console.log('/home =>',files)
})

console.log('Reading Files...')