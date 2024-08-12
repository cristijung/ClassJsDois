//switch case
//arrays de objetos

function calcularTotal(item, quantidade) {
  let preco;

  switch (item) {
    case "1":
      preco = 10;
      break;
    case "2":
      preco = 15;
      break;
    case "3":
      preco = 22;
      break;
    case "4":
      preco = 78;
      break;
    default:
      console.log("Opção Inválida");
      return 0;
  }
  return preco * quantidade;
}

let menu = [
    { id: "1", nome:"Hamburguer", preco: 10 },
    { id: "2", nome:"Salada", preco: 15 },
    { id: "3", nome:"Pizza", preco: 22 },
    { id: "4", nome:"Vinho", preco: 78 }
]

function mostrarMenu() {
    console.log("Menu do Restaurante:");
    menu.forEach((item) => {
        console.log(`${item.id}: ${item.nome} - R$ ${item.preco}`);
    });
}

function fazerPedido(itemId, quantidade) {
    let total = calcularTotal(itemId, quantidade); 
        if (total > 0) {
            console.log(`Total a pagar: R$ ${total}`);
        }    
}

mostrarMenu();
//simulação de pedido
let itemSelecionado = "4";
let quantidadeSelecionada = 3;
fazerPedido(itemSelecionado, quantidadeSelecionada);

