//Spread - espalha
//Rest - recolhe

//operador rest
const obj1 = { a: 1, b: 2, c: 3 };
//o spread está sendo usado para copiar o obj1 para o obj2
const obj2 = { ...obj1, d: 4, e: 5 };
console.log(obj2);


function printItens(primeiro, segundo, ...resto) {
    console.log(primeiro);
    console.log(segundo);
    console.log(resto);
}

printItens(1,2,3,4,5,6);
