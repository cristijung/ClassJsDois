//função de primeira ordem

//ex1
const numeros = [1, 2, 3, 4, 5];

const numerosDobrados = numeros.map(function(numero) {
    return numero * 2;
});

console.log(numerosDobrados);

//ex2
const numPares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});
console.log(numPares);

//ex3
const soma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
});

const somar = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(soma);
console.log(somar);
