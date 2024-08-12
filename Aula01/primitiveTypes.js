//tipos primitivos

const text1 = "oi";
const text2 = 'oi';
const text3 = "123.456789";
const text4 = "Ana Banana trouxe várias frutas";

//concatenando
const nome = "Ana";
const sobrenome = "Banana";
const idade = 35;
const dados = ("Nome: " + nome + sobrenome + " e tem " + idade + " anos."); //concatenação padrão
const infos = (`Nome: ${nome} com o sobrenome ${sobrenome} e tem ${idade}  anos.`); //template string - interpolação
console.log(dados);
console.log(infos);

let a = 2;
let b = 20;
console.log(`O valor da soma de a + b é: ${a + b} e não ${2 * a + b}!!!`);