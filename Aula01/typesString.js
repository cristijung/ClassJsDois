//métodos nativos de String no Js

const cidade = "Porto Alegre";
const municipio = "PORTO ALEGRE";
const maiusculo = cidade.toUpperCase();
console.log(cidade === maiusculo);
console.log(maiusculo === municipio);

const numUm = 456;
const numDois = "789";
const numTres = 12;
console.log(numUm + numTres + numDois); //aqui somou os 2 primeiros e concatenou com o terceiro
console.log(numUm + numDois + numTres); //aqui só houve a concatenação
console.log(numUm + Number(numDois) + numTres); //transforma a string para número



