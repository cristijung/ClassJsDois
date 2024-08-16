//operador spread

//ex1 - concatenando os arrays
const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];

const todosNumeros = [...numeros1, ...numeros2];
console.log(todosNumeros);

//ex2 - clonando array
const original = [1, 2, 3, 4];
const copia = [...original];

console.log(copia);

//ex2 - passando argumentos
function soma(a, b, c) {
    return a + b + c;
}

const numeros = [10, 20, 30];
const resultado = soma(...numeros);

console.log(resultado);

//ex 3 - mesclando objetos
const pessoa1 = { nome: "Ana", idade: 30 };
const dados = { cidade: "Porto Alegre", profissao: "Analista" };
const pessoaCompleta = { ...pessoa1, ...dados };
console.log(pessoaCompleta);

//ex 4 - add propriedades a um objeto --> clonar e estender
//neste ex ao mesclar os dois objetos, qdo houver propriedades com o mesmo nome
//sobrescreve e prevalece o último valor
const produto = { nome: 'Camiseta', preco: 50 };
const produtoComDesconto = { ...produto, preco: 150 };

//ex5 - com map
const produtos = [
    { nome: 'Camiseta', preco: 50 },
    { nome: 'Calça', preco: 150 },
    { nome: 'Tênis', preco: 789 }
];

const produtosComDesconto = produtos.map(produto => ({
    ...produto,
    precoComDescontos: produto.preco * 0.9
}));

console.log(produtosComDesconto);

//ex 6 com filter
const pessoas = [
    { nome: 'Ana', idade: 30, cidade: 'Porto Alegre' },
    { nome: 'Beto', idade: 25, cidade: 'Nova Prata' },
    { nome: 'Bia', idade: 77, cidade: 'Caxias do Sul' },
    { nome: 'Marcos', idade: 50, cidade: 'Bento Gonçalves' },
    { nome: 'Paula', idade: 65, cidade: 'Nova Prata' },
    { nome: 'Marisa', idade: 85, cidade: 'Nova Prata' },
    { nome: 'Paulina', idade: 35, cidade: 'São Paulo' },
];

const pessoasDeNovaPrataComIdade = pessoas.filter(pessoa => pessoa.cidade === 'Nova Prata')
.map(pessoa => ({
    ...pessoas,
    temIdadeParaViajarComIdosos: pessoa.idade >= 60
}));

console.log(pessoasDeNovaPrataComIdade);



