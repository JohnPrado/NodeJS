const express = require ("express");


const server = express();


server.get("/", function(req,res){
    res.send("<h1>los saludos desde un servidor express con Node JS</h1>");
    res.end;
});

server.listen(3000, function(){
    console.log("servidor escuchando en puerto 3000");
});

console.log("Hemos Terminado!");