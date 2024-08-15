//ex com farmácia ..


//array de objetos
const medicamentos = [
    { nome: "Paracetamol", preco: 15.90, estoque: 50 },
    { nome: "Dipirona", preco: 22.50, estoque: 30 },
    { nome: "Ibuprofeno", preco: 18.00, estoque: 20 },
    { nome: "Amoxicilina", preco: 35.00, estoque: 10 },
    { nome: "Loratadina", preco: 12.00, estoque: 40 }
  ];
  
  //listar medicamentos com estoque baixo -- usando filter
  function listarEstoqueBaixo(limite) {
    return medicamentos.filter(medicamento => medicamento.estoque < limite);
  }
  
  //calcular o valor total do estoque -- usando map e reduce
  function calcularValorTotalEstoque() {
    const valores = medicamentos.map(medicamento => medicamento.preco * medicamento.estoque);
    return valores.reduce((total, valor) => total + valor, 0);
  }
  
  //loopsss 
  console.log("Medicamentos com estoque baixo:");
  const estoqueBaixo = listarEstoqueBaixo(15);
  for (let i = 0; i < estoqueBaixo.length; i++) {
    console.log(`- ${estoqueBaixo[i].nome}: ${estoqueBaixo[i].estoque} unidades`);
  }  
  
  let i = 0;
  console.log("\nLista de todos os medicamentos:");
  do {
    console.log(`- ${medicamentos[i].nome}: R$ ${medicamentos[i].preco.toFixed(2)}`);
    i++;
  } while (i < medicamentos.length);
  
  const valorTotal = calcularValorTotalEstoque();
  console.log(`\nValor total do estoque: R$ ${valorTotal.toFixed(2)}`);
  