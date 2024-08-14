//exemplo For in

const pessoa = {
    nome: "João",
    sobrenome: "Silva",
    idade: 30,
    cidade: "Porto Alegre"
  };
  
  for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
  }


//exemplo com while
let contador = 0;

while (contador < 5) {
  console.log("O valor: " + contador);
  contador++; //incrementa o contador em 1
}

//exemplo com do while
let contadorDois = 6; 

do {
  console.log("O valor do contador é: " + contadorDois);
  contadorDois++;
} while (contadorDois < 5); 

