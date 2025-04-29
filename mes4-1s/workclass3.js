const argumentos = process.argv.slice(2);

let A = parseInt(argumentos[0]);
let B = parseInt(argumentos[1]);
let C = parseInt(argumentos[2]);

const maior = Math.max(A, B, C);
const menor = Math.min(A, B, C);
const medio = (A + B + C) - maior - menor;

console.log("Lados:", A, B, C);

if(maior >= (menor + medio)) {
    console.log("Não forma um triangulo"); 
} else if(A == B && B == C) {
    console.log("Triangulo Equilatero");
} else if(A == B && A != C || 
          A == C && A != B || 
          B == C && B != A) {
    console.log("Triangulo Isosceles");
} else if(A != B != C) {
    console.log("Triangulo Escaleno");
}