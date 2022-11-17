const http = require("http");

http.createServer(function(req,res){
    res.write("<h1>Saludos desde Node JS</h1>");

}).listen(3000);


