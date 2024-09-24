// VARIÁVEL DE TEXTO E NÚMERO USANDO LET E CONST

//      1.   CONST

// Declarar e atribuir valores
const frutaBoa = "Caju";
const idade = 25;

// Mostrar os valores
console.log(frutaBoa);
console.log(idade);

// Tentar mudar - Deve dar erro, pois const não pode ser mudada
frutaBoa = "maçã";
idade = 18;

// Mostrar - para ver que os vlores não mudaram
console.log(frutaBoa);
console.log(idade);

//      2.    LET

// Declarar atribuit e mostrar
let frutaQualquer = "Framboesa";
let numeroQualquer = 2024;

console.log(frutaQualquer);
console.log(numeroQualquer);

// Mudar os valores, e mostrar para ver a mudança
frutaQualquer = "Abacaxi";
numeroQualquer = numeroQualquer + 2;

console.log(frutaQualquer);
console.log(numeroQualquer);

// Como padrão para as atividade usaremos sempre const
// A não ser que seja preciso mudar o valor da variável, então usaremos let
