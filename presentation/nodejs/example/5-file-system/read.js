var fs = require('fs');

var contents = fs.readFileSync("list.js", "UTF-8")

console.log(contents);

//Doing async

fs.readFile('list.js', 'UTF-8' ,(err, files) => {
    if (err){
        throw err;
    }

    console.log('list.js =>',files)
})

console.log('Reading Files...')