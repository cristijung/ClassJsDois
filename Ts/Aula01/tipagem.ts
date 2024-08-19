//ex1 - definindo tipos nas variáveis
//Somente exemplos de tipagem para verificar a sintaxe
//não são códigos funcionais

//tipos primitivos
let numero: number = 45;
const nome: string = "Alice";
let situacaoAluno: boolean = true;
let valorNulo: null = null;
let valorIndefinido: undefined = undefined;

//Arrays
let numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
let alunos: string[] = ["Ana", "Bia", "Marcelo"];

//Tuplas
// permite definir um array com um nº fixo de elementos e tipos especificos para cada elemento
let pessoa: [string, number] = ["Ana", 30];

//Enums
//Cria um conjunto de constantes nomeadas e definidas
enum Cor {
    vermelho,
    verde,
    azul,
    branco
}
let corFavorita: Cor = Cor.vermelho;

//Objetos
//Interface é um contrato de várias variáveis que serão utilizadas
//na aplicação
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
}

let meuCarro: Carro = {
    marca: "Toyota",
    modelo: "Algum",
    ano: 2014,    
};

//Literais
//Tem função de restringir o valore de uma variável e um conjunto específico de valores literais
let diracao: 'cima' | 'baixo' | 'esquerda' | 'direita' = 'cima';

//uniões
let codigo: string | number = 123456;
codigo = "abcdefg";

//com funções
function calcularMedia(notas: number[]): number {
    let soma: number = 0;
    for(let nota of notas) {
        soma += nota;
    }
    return soma / notas.length;
} 

let notasDosAlunos: number[] = [3, 7, 8, 9];
let media: number = calcularMedia(notasDosAlunos);
console.log("A média é: ", media);




