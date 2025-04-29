const argumentos = process.argv.slice(2);

let valor = parseInt(argumentos[0]);
console.log("Valor inserido:", valor);
console.log("Subtotal:", valor);

if(valor > 100) {
    let desconto = (valor * 0.9);
    let descontado = (valor * 0.1);
    console.log("Desconto:", descontado);
    console.log("Total:", desconto);
} else  {
    console.log("Desconto:", 0);
    console.log("Total:", valor);
}
