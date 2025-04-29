let PBi = 6
let SBi = 7.5
let TBi = 8.5
let QBi = 9

//Aqui é definido a nota que o aluno alcançou em cada bimestre.

console.log("Nota por Bimestre", "\n")

console.log("Primeiro:", PBi)
console.log("Segundo:", SBi)
console.log("Terceiro:", TBi)
console.log("Quarto:", QBi, "\n")

//O console exibe as informações de nota de cada bimestre.

const mediaBimestral = (PBi + SBi + TBi + QBi) / 4
console.log("Média bimestral:", mediaBimestral, "De Média", "\n", "\n", "\n")

/*Aqui é feito a Média bimestral, e o console a exibe. (Eu sei que vc não pediu, mas eu achei interessante mostrar,
mesmo sabendo que a media bimestral vai ser a mesma que a media dos dois semestre que é a mesma que a anual e bla bla blakkkkkkk.)*/

console.log("Nota por semestre", "\n")

const PSe = (PBi + SBi) / 2
const SSe = (TBi + QBi) / 2
const mediaAnual = (PSe + SSe) / 2
console.log("Primeiro:", PSe)
console.log("Segundo:", SSe, "\n")
console.log("Média anual:", mediaAnual, "De Média")

//Aqui é feito o calculo da média por semestre e depois a anual, e o console exibe as informações de nota de cada.