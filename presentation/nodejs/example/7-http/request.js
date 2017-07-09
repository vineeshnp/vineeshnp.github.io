var https = require('https');
var fs = require('fs');

var options = {
    hostname : 'google.com',
    port : 443,
    path : '',
    method : 'GET'
}

let req = https.request(options, (res) => {
            // it will come as a stream

            let responseBody = ""
            console.log('Response from started ');
            console.log('Server status :', res.statusCode);
            console.log('Response headers %j', res.headers); //%j will display as json
            //by default the encoding will be binary, lets make it UTF-8

            res.setEncoding('UTF-8')

            //for the first time
            res.once('data', (chunk) =>{
                console.log(chunk);
            })

            //on any data we recive
            res.on('data', (chunk) => {
                console.log(chunk.length);
                responseBody += chunk
            })

            res.on('end', () =>{
                fs.writeFile('file.html', responseBody, (err)=>{
                    if(err){
                        throw err
                    }
                    console.log('File writing completed');
                })
            })
        })

    req.on('error', (err) =>{
        throw err
    })

    //we are closing the request
    req.end();
        