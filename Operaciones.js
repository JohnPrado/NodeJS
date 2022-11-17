function suma (a,b){
    return a+b;
}
function resta (a,b){
    return a-b;
}
function multiplicacion (a,b){
    return a*b;
}
function division (a,b){
    if (b==0){
        return("no se puede dividir entre cero");
    }else{
        return a/b;
    }
}

//console.log(division(50,0));


function saludo(n){
    console.log("hola",n)
}

exports.suma = suma;
exports.resta = resta;
exports.multiplicacion = multiplicacion;
exports.division = division;
exports.saludo = saludo;