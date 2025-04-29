const argumentos = process.argv.slice(2);

let numero = parseInt(argumentos[0]);

if(numero > 0) {
    console.log(numero,"É positivo");
} else if (numero < 0) {
        console.log(numero, "É negativo");
    } else {
        console.log("É zero");
    }