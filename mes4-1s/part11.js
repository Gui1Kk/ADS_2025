const argumentos = process.argv.slice(2);
let a= parseInt(argumentos[0]);
let b = parseInt(argumentos[1]);

if(a > b) {
    console.log("A maior que B");
} else if(b > a) {
    console.log("B maior que A");
} else {
    console.log("A e B São iguais");
}