
async function init() {
    await unirTextos('Oi eu sou Async Await!').then(result => {
        console.log(result);
    });
}
init();
