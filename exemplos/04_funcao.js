// FUNCAO

// CRIAR UMA FUNÇÃO DE NOME comprimetar
function comprimentar() {
    console.log("Olá!");
    console.log("Seja bem vindo(a)");
}

// CHAMAR A FUNÇÃO 2 veses -> NOME DA FUNÇÃO SEGUIDO DE () (ABRE E FECHA PARENTESIS)
comprimentar();
comprimentar();

// CRIAR FUNCAO MOSTRAR DOBRO, PASSANDO UM NUMERO COMO PARAMETRO

let numeroQualquer = prompt("Digite um numero qualquer: ");

numeroQualquer = Number(numeroQualquer);

function mostrarDobro(numeroParametro) {
    // O DOBRO DE UM NÚMERO É ESSE NÚMERO VEZES 2. EXEMPLO -> numero * 2

    const dobro = numeroParametro * 2;

    console.log(`O dobro de ${numeroParametro} é: ${dobro}`);
}

// CHAMAR mostrarDobro 2 x
mostrarDobro(2);
mostrarDobro(3);

// SOMAR 2 NÚMEROS
// 2 PARÂMETROS SEPARADOS POR VÍRGULA
function somar(numeroA, numeroB, numeroC) {
    const somaDosNumeros = numeroA + numeroB + numeroC;

    console.log(`A soma dos número é: ${somaDosNumeros}`);
}

somar(6, 9, 2);
