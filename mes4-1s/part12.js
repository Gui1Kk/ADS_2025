const argumentos = process.argv.slice(2);

let senha = argumentos[0];

let forca = senha.length;

if(senha.length < 8) {
    forca = forca - 100;
}

if(senha.includes("!")
    || senha.includes("@")
    || senha.includes("#")
    || senha.includes("$")
    || senha.includes("%")
    || senha.includes("&")
    || senha.includes("*")
    || senha.includes("(")
    || senha.includes(")")) {
        console.log("Senha possúi Simbolos +45 pontos");
        forca = forca + 45;
}
if(senha.toLowerCase() != senha) {
    console.log("Senha possui letras maiúsculas +15 pontos");
    forca = forca + 15;
}
if(senha.toUpperCase() != senha) {
    console.log("Senha possui letras minúsculas +10 pontos");
    forca = forca + 10;
}
if(senha.includes("1")
|| senha.includes("2")
|| senha.includes("3")
|| senha.includes("4")
|| senha.includes("5")
|| senha.includes("6")
|| senha.includes("7")
|| senha.includes("8")
|| senha.includes("9")
|| senha.includes("0")) {
    console.log("Senha possui número +30 pontos \n",);
    forca = forca + 30;
}
console.log("Força da senha:", forca);

if(forca <= 17) {
    console.log("Sua senha não tem 8 caracteres");
} else if(forca >= 18 && forca <= 60) {
    console.log("Sua senha é fraca");
} else {
    console.log("Sua senha é forte");
}