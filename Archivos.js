const fs = require("fs");


fs.writeFile("./texto.txt", "El hijo de rana.....", function(err){
    if (err){
        console.log(err);
            
    }
console.log("El archivo fue creado de manera exitosa");
});

console.log("termine la ejecucion");