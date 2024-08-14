//função de primeira ordem

//ex1
//map
const numeros = [1, 2, 3, 4, 5];

const numerosDobrados = numeros.map(function(numero) {
    return numero * 2;
});

console.log(numerosDobrados);

//ex2
//filter
const numPares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});
console.log(numPares);

//ex3
//reduce
const soma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
});

const somar = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(soma);
console.log(somar);

//ex4 - tabuada
//aplicando callback
function calcTabuada(numero) {
    for (let i = 0; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} X ${i} = ${resultado}`);
    }
}

calcTabuada(8);

//filter
const alunos = ['Ana', 'Bia', 'Caio', 'Teo', 'Lisa'];
const medias = [7, 5, 4, 9, 10];

const reprovados = alunos.filter((indice) => {
    return medias[indice] < 7;
});

console.log(reprovados);

//reduce
const salaJs = [6, 7, 8, 4, 10, 2];
const salaJava = [3, 10, 9, 9, 2, 4];
const salaReact = [5, 2, 10, 3];

function calcMedia(mediaDeSala) {
    const somaDasNotas = mediaDeSala.reduce((acumulado, nota) => acumulado + nota, 0);
    const medias = somaDasNotas / mediaDeSala.length;
    return medias
}

console.log(`A média da sala de Js é: ${calcMedia(salaJs)}`);
console.log(`A média da sala de Java é: ${calcMedia(salaJava)}`);
console.log(`A média da sala de React é: ${calcMedia(salaReact)}`);

//set
//para remover elementos duplicados de array
const meninos = ['Pafúncio', 'Jorge', 'Marcelo', 'Jorge'];
const meninas = ['Ana', 'Bia', 'Carla', 'Lia', 'Bia'];
const listaDeAlunos = meninos.concat(meninas);
//Arrar from - é um construtor, ele converte o 'Set' de volta para um array sem os elementos duplicados
//new Set(listaDeAlunos) - cria um objeto a partir do Array e armazena somente os elementos únicos
const listaSemDuplicado = Array.from(new Set(listaDeAlunos));
console.log(listaSemDuplicado);