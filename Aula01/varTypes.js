//Tipos de variáveis
//Tipos de dados

//Ex 1 - usando var
var altura = 6;
var comprimento = 22;
area = altura * comprimento;
var area; //inicializando a var depois

console.log(area);

//Ex 2 - usando let
let areas;
let alturas = 8;
let comprimentos = 22;
areas = alturas * comprimentos;
console.log(areas);

//Ex 3 - usando let
// function exemploEscopo() {
//     if (true) {
//         let mensagem = "Olá, sou um escopo de bloco!"
//     }
//     console.log(mensagem); --> //tenta acessar a let mensagem fora do bloco, porém como está fora do escopo ele retorna um erro
// }

// exemploEscopo();


// Ex 4 - usando const
const forma = "quadrado";
const alturaTres = 12;
const comprimentoTres = 22;
let areaTres;

if (forma === 'quadrado') {
    areaTres = alturaTres * comprimentoTres;
} else {
    areaTres = (alturaTres * comprimentoTres) / 2;
}

console.log(areaTres);

//Ex 5 - mudando os valores atribuídos
let idade = '22';
idade = 26;

console.log(idade)