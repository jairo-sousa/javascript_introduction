// PROMPT E INTERPOLAÇÃO DE STRING

//      1.  PROMPT

// Pedir dados ao usuário
const nome = prompt("Digite seu nome: ");
let idade = prompt("Digite sua idade: ");

// A idade está em formato de texto
// assim não se pode fazer operacões matemáticas
// Vamos converter para número
idade = Number(idade);

//      2.  DAR UM CONSOLE COM TEXTO E VARIÁVEIS JUNTOS (CONCATENADOS)

// 2.A Preparar e imprimir de uma vez
console.log(`Nossa, ${nome}, sua idade é ${idade} , está ficado velho(a)...`);
console.log(`Em 5 anos a idade será ${idade + 5}`);

// 2.B Preparar antes, imprimir depois

const idadeEmCincoAnos = idade + 5;
const textoPreparado = `${nome}, em 5 anos sua idade será: ${idadeEmCincoAnos}!`;

console.log(textoPreparado);
