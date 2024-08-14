//Exs de funções puras

function somar(a, b) {
    return a + b;
}


function isPar(numero) {
    return numero % 2 === 0;
}

console.log(somar(2,5));
console.log(isPar);

//Exs de funções impuras
function gerarNumeroAleatorio() {
    return Math.random();
}

function addElemento(elemento) {
    document.body.appendChild(elemento);
}

//ex de função de primeira ordem
function cumprimentar(nome) {
    console.log("Olá, " + nome);
}
const minhaFuncao = cumprimentar;


function criarOla(saudacao) {
    return function(nome) {
        console.log(saudacao + ", " + nome);
    };
}

const dizerOla = criarOla("Olá");
const dizerOi = criarOla("Oi");
