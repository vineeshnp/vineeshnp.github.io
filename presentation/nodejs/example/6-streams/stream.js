var fs = require('fs')

// fs.readFile('./chat.log', 'UTF-8', (err, chatLog) => { 
//     //the entire contents of the files is written to chatLog variable :o
//     console.log(`${chatLog.length}`); 
// })
// console.log(`Reading the file stream`);

//with stream
var stream = fs.createReadStream('./chat.log', 'UTF-8')
//now data will be flowing as chunks to the stream variable

var data = "";

stream.once('data', () => {
    process.stdout.write(`  Started writing the data \n`)
})

stream.on('data', (chunk) => { //when the data event is raised, we have a small chunk of that file
    process.stdout.write(`  chunk: ${chunk.length} |`)
    data += chunk;
})

stream.on('end', () => {
    console.log(`Stream has ended reading the file.`);
    console.log(data.length);
})