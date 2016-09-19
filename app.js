//Lets require/import the HTTP module
var http = require('http');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var fileUpload = require('express-fileupload');


var app = express();
app.use('/', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());

// on client
// add reference to jquery
 

app.post('/download-audio', function (req, res) {
	console.log(req.files)
	var file = req.files.file;
	file.mv(__dirname+"/test.wav",function(err){
		if (err){
			console.log(err);
		}
		else {
			console.log("success");
		}
	});
	//fs.writeFileSync("test.wav",req.body);
})

//Lets define a port we want to listen to
var PORT=8080; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
    fs.writeFileSync('test.txt','abc');
}

//Create a server
var server = http.createServer(app);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});


