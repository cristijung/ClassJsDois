//Arrays

let frutas = ['Maçã', 'Banana', 'Laranja'];
console.log(frutas);
//acessar um elemento
console.log(frutas[0]);
console.log(frutas[2]);

//adicionando um elemento no final do array
frutas.push('Uva');
console.log(frutas);

//remover um elemento (primeiro)
frutas.shift();
console.log(frutas);

frutas.push('Maçã'); // add maçã novamente

//iterando sobre elementos do array
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

//usando o método foreach ára iterar
frutas.forEach(function(fruta){
    console.log(fruta);
})

//usando o método reduce
//método reduce soma (neste exemplo) os elementos acumulados e reduz para só um valor
const notas = [10, 4.5, 7, 8.6, 9, 2];
const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
const media = soma / notas.length;

console.log("A média das notas é: ", media);

//Array de objetos + métodos
const pessoas = [
    { nome: 'Alice', idade: 30 },
    { nome: 'Ana', idade: 28 },
    { nome: 'Bob', idade: 38 },
    { nome: 'Pafúncio', idade: 42 },
    { nome: 'Pafúncia', idade: 20 },
];

//localizando um índice com nome de Ana
const indiceAna = pessoas.findIndex(pessoa => pessoa.nome === 'Ana');
console.log('Qual é o índice de Ana: ', indiceAna);
const indiceMaior40 = pessoas.findIndex(pessoa => pessoa.idade > 40);
console.log('Pessoas com idade maior de 40 anos: ', indiceMaior40);

//concatenando
const frutass = [
    { nome: 'maçã', cor: 'vermelha' },
    { nome: 'laranja', cor: 'laranja' },
    { nome: 'uva', cor: 'roxo' },
];

const legumes = [
    { nome: 'cenoura', cor: 'laranja' },
    { nome: 'brócolis', cor: 'verde' },
    { nome: 'couve-flor', cor: 'branca e verde' },
];

const alimentos = frutass.concat(legumes);
console.log(alimentos);