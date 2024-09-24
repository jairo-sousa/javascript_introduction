// VALOR BOOLEANO

let tenhoChocolate = true;

// SE tenhoChocolate Estou feliz
if (tenhoChocolate) {
    console.log("Estou feliz");
}

// SE NÃO tenhoChocolate Estou triste
// Sinal de exclamação sigifica não ou negação
if (!tenhoChocolate) {
    console.log("Um dia fui feliz, agora um vazio invade meu corpo e alma");
}

// VARIÁVEL BOOLEANA APARTIR DE OUTRAS 2 BOOLEANAS
let tenhoAcessoWifi = false;

let estouMuitoFeliz = tenhoChocolate & tenhoAcessoWifi;

// SE estouMuitoFeliz ...
if (estouMuitoFeliz) {
    console.log("Que satisfação...");
}

// SE não estouMuitoFeliz ...
if (!estouMuitoFeliz) {
    console.log("Não se pode ganhar todas");
}
