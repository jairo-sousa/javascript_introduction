// IF

// SE A DADE É MAIOR OU IGUAL QUE 18, A PESSOA É ADULTA
// MAIOR: >      |       MAIOR OU IGUAL: >=
// SE É MENOR QUE 18, NÃO É ADULTA

const idade = prompt("Digite sua idade");

// SE IDADE É MAIR OU IGUAL À 18
if (idade >= 18) {
    console.log("É UMA PESSOA ADULTA");
}

// SE IDADE É MENOR QUE 18
if (idade < 18) {
    console.log("NÃO É UMA PESSOA ADULTA");
}

// SE COME AÇUCAR, CUIDADO PARA NÃO ENGORDAR
// IGUAL: ===

const comeAcucar = prompt("Você come açúcar? (digite sim ou nao, minúsculo)");

// SE comeAcucar É IGUAL À sim
if (comeAcucar === "sim") {
    console.log("Cuidado para não engordar");
}

// SE comeAcucar É IGUAL À nao
if (comeAcucar === "nao") {
    console.log("Você parece ser saldável");
}
