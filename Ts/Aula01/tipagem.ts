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

//exemplo de interface estendida
//interface base para representar um animal
interface Animal {
    nome: string;
    especie: string;
    som(): void;
}
//interface estendida para representar o cachorro
interface Cachorro extends Animal {
    raca: string;
    abanarRabo(): void;
}

//criando o objeto
let meuCachorro: Cachorro = {
    nome: 'Otto',
    especie: 'canino',
    raca: 'srd',
    som: function() {
        console.log('au, au ...');
    },
    abanarRabo: function() {
        console.log('abanando o rabinho feliz da vida!!')
    }
};

meuCachorro.som();
meuCachorro.abanarRabo();

//Type
type Pessoa = {
    nome: string;
    idade: number;
    ativo: boolean;
};

//Type com tupla
//lat e long
type Coordenadas = [number, number]; 

//Type com união
type Status = 'ativo' | 'inativo' | 'pendente';

//Type com interseção
type PessoaComEndereco = Pessoa & {
    endereco: string;
};


//Literais
//Tem função de restringir o valor de uma variável e um conjunto específico de valores literais
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




