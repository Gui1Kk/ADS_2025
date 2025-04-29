const argumentos = process.argv.slice(2);

let vel = parseInt(argumentos[0])

let max = 120;
let min = 0;

if(vel >= 0 && vel <= 120) {
    console.log("Dentro da velocidade permitida");
} else {
    console.log("Fora da velocidade permitida");
}