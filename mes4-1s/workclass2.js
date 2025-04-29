const argumentos = process.argv.slice(2);

let Nlados = parseInt(argumentos[0]);

const Primeiro = Math.round(Math.random() * Nlados) + 1;
const Segundo = Math.round(Math.random() * Nlados) + 1;

console.log("Primeiro:", Primeiro);
console.log("Segundo:", Segundo);

if(Primeiro > Segundo)  {  
    console.log("Melhor:", Primeiro);
} else if(Segundo > Primeiro) {
    console.log("Melhor:", Segundo);
} else {
    console.log("Melhor:", "Ambos");
}