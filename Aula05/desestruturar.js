//desestruturando

//com atribuição normal, padrão
const pessoa = { nome: 'Ana' };
const { nome, idade = 30, altura = 1.75 } = pessoa;
console.log(nome);
console.log(idade);
console.log(altura);

//parâmetro de função
function printDados( { name, age }) {
    console.log(`Nome: ${name}, idade: ${age}`);
}

const person = { name: 'Pafúncio', age: 34 };
printDados(person);

