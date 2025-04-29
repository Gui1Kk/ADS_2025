const argumentos = process.argv.slice(2);

let numInteiro = parseInt(argumentos[0]);
let numDecimal = parseFloat(argumentos[1]);

let resultado = numInteiro + numDecimal;

console.log("A:", numInteiro);
console.log("B:", numDecimal);

console.log("A + B:", resultado);