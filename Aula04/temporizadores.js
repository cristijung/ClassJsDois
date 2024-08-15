//ex1 de temporizador
//setTimeout();

function operacaoAssincrona(tempo, callback) {
    console.log("Iniciando a operação assíncrona ....");

    setTimeout(function() {
        console.log(`Operação assíncrona concluída após ${tempo} milssegundos`);
        callback()
    }, tempo)

}

function buscaCallBack() {
    console.log('Callback executado! A operação foi concluída!');
}

operacaoAssincrona(5000, buscaCallBack);

//ex2
function ola() {
    console.log('Olá mundo ....');    
}
setTimeout(ola, 3000);

//ex 3
//setInterval
function mostrarHora() {
    const agora = new Date();
    console.log(`Hora atual: ${agora.toLocaleTimeString()}`);
}

const intervalo = setInterval(mostrarHora, 2000);

setTimeout(() => {
    clearInterval(intervalo);
    console.log('Hora parada');
}, 1000);

//ex4
function hora() {
    const agoraDois = new Date();
    const opcoes = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    console.log(`Hora atual: ${agoraDois.toLocaleTimeString('pt-br', opcoes)}`);
}

setInterval(hora, 1000); 

