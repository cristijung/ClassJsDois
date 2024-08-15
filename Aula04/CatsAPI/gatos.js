//https://thecatapi.com/
//fetch: função do Js moderno que permite realizar requisições HTTP/HTTPS de forma assíncrona para que possamos
//buscar recursos da rede como dados de uma API
//é nativo e bem mais simplificado e flexível do que o antigo XMLHttpRequest.

//função para o btn
document.getElementById('fetch-cat').addEventListener('click', async() => {
    const catImages = await fetchCatImages(10);
    const catContainer = document.getElementById('cat-container');
    catContainer.innerHTML = '';

    catImages.forEach(catImage => {
        const card = createCard(catImage);
        catContainer.appendChild(card);
    });
});

//função async responsável por obter imagens da API de gatos
async function fetchCatImages(numberOfImages) {
    try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${numberOfImages}`);
        if (!response.ok) {
            throw new Error("Ocorreu um erro de conexão" + response.statusText);            
        }
        const data = await response.json();
        return data.map(item => item.url);
    } catch (error) {
        console.error('Ocorreu um erro com a operação fetch', error);
        return[];
    }    
}


function createCard(imageUrl) {
    const card = document.createElement('div');
    card.className = 'card col-md-4 mb-4 mx-1';
    card.innerHTML = `
        <img src="${imageUrl}" class="card-img-top" alt="Imagem de gatos" />
        <div class="card-body">
            <h3>Gatos Lindos</h3>
            <p class="card-text">Gatitos bonitinhos, fofos e maravilhosos</p>
        </div>
    `;

    return card;
}