//listas
//funções
//condicionais

//lista - array
let frutas = ['Maçã', 'Banana', 'Tomate', 'Abacaxi', 'Morango'];
console.log(frutas);

//lista de objetos
let estudantes = [
    { nome: 'Ana Banana', idade: 12 },
    { nome: 'Bia', idade: 13 },
    { nome: 'Carlos', idade: 14 },
    { nome: 'Pafúncio', idade: 16 },
];
console.log(estudantes);

//funções
//operadores de incremento
//pré-incremento: a variável é incrementada antes de ser usada
//pós-incremento: a variável é usada ANTES de ser incrementada
function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i]
    }
    return soma / notas.length;
}

function verificarStatusAluno(notas) {
    const media = calcularMedia(notas);

    if (media >= 7) {
        return 'Aprovado';
    } else if (media >= 5 && media < 7 ) {
        return 'Recuperação';
    } else {
        return 'Reprovado';
    }
}

const notasAluno = [5, 4, 2];
const situacao = verificarStatusAluno(notasAluno);
console.log(`O aluno está ${situacao}`);
