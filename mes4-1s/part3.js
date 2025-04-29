console.log("Calculadora de IMC")

let peso = 85;
let altura = 1.74;

let IMC = peso/(altura*altura)

console.log("Seu IMC é:", IMC)

// IMC < 18,5 = Abaixo do peso
// IMC entre 18,5 e 24,9 = Peso normal
// IMC entre 25 e 29,9 = Sobrepeso
// IMC entre 30 e 34,9 = Obesidade grau I
// IMC entre 35 e 39,9 = Obesidade grau II (Severa)
// IMC acima de 40 = Obesidade grau III (Morbida)