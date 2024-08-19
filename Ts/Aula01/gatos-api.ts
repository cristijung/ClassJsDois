enum CategoriaGato {
    Engracado = "Funny",
    Gordo = "Chubby",
    Fofo = "Fluffy"
}

type DadosGato = {
    id: string;
    url: string;
    categories?: {id: number; name: string }[]; //com o '?', tornamos a categories opcional
};

async function buscarImagemGato(categoria: CategoriaGato): Promise<DadosGato> {
    const apiUrl = `https://api.thecatapi.com/v1/images/search?category=${categoria}`;
    const resposta = await fetch(apiUrl);

    if (!resposta.ok) {
        throw new Error(`Erro na requisição: ${resposta.status} ${resposta.statusText}`);
    }

    const dados: DadosGato[] = await resposta.json();
    return dados[0]; //retorna somente o primeiro gato da lista
}

function exibirInfosGatos(gato: DadosGato): void {
    console.log(`
        Id do Gato: ${gato.id}
        URL da imagem: ${gato.url}
        Categorias: ${gato.categories ? gato.categories.map(cat => cat.name).join(', '): 'N/A'}
    `);
}

buscarImagemGato(CategoriaGato.Engracado)
.then(exibirInfosGatos)
.catch(error => console.error(error));


  