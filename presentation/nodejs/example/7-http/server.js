var http = require('http');

//every time we make call to this server, the callback if the createServer will be initiated
var server = http.createServer(function(req, res){
    //request obeject contains all the information about request
    //like headers, data params, etc

    //res is the object that we returns back
    //any data that need to get back to user, is handled by res

    res.writeHead(200, {'Content-Type' : 'text/plain'}) //complete the response header
    // first we write the status code, 200
    // second argument contains all the other headers
    // content type says what sort of object we are responding with

    res.end('Hello World');
    //this will send the data
    // res.send could also be used
});  

//lets say server what ip and port it should listen to
server.listen(8080);

console.log('Server is listening on port 8080');