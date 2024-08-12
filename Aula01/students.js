//gestão de lista e notas de estudantes

let estudantes = [
    { nome: 'Ana', notas: [8, 6, 9] },
    { nome: 'Bia', notas: [8.5, 4, 5.8] },
    { nome: 'Bruno', notas: [9, 2, 7] },
    { nome: 'Marisa', notas: [7, 6, 6] },
    { nome: 'Paulo', notas: [5, 3, 2] },
];

function calcularMedia(notas) {
    let soma = notas.reduce((acc, notas) => acc + notas, 0);
    return soma / notas.length;
}

function mostrarMedias(estudantes) {
    estudantes.forEach((estudantes) => {
        let media = calcularMedia(estudantes.notas);
        console.log(`${estudantes.nome}: Média= ${media.toFixed(2)}`);
    });
}

//função para add estudante
function addEstudante(nome, notas) {
    estudantes.push({ nome: nome, notas: notas });
}

//função para localizar um estudante
function localizarEstudante(nome) {
    return estudantes.find((estudantes) => estudantes.nome === nome);
}

mostrarMedias(estudantes);

//add um novo estudante
addEstudante('Marcela', [8, 9, 8]);
console.log("\nLista de estudantes atualizada! ");
mostrarMedias(estudantes);

//localizar um estudante pelo nome e mostrar suas notas
let estudante = localizarEstudante('Marcela');
if (estudante) {
    console.log(`\nNotas de ${estudante.nome}: ${estudante.notas.join(', ')}`);
} else {
    console.log('Estudante não foi localizado.');
}






