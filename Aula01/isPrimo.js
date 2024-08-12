//Números primos
//Objetivo
//Criar uma função que encontra e exibe no terminal todos os pares de nºs primos
//gemeos de 0 até 200.

function isPrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function encontrarPrimosGemeos(N) {
    for (let i = 2; i <= N - 2; i++) {
        if (isPrimo(i) && isPrimo(i + 2)) {
            console.log(`(${i}, ${i + 2})`);
        }
    }
}
encontrarPrimosGemeos(200);