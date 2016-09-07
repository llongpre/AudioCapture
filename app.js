//Lets require/import the HTTP module
var http = require('http');
var fs = require('fs');
var audiorecorder = require('audio-recorder');
var recordrtc = require('recordrtc');

//Lets define a port we want to listen to
var PORT=8080; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
    fs.writeFileSync('test.txt','abc');
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});