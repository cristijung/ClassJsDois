//interface
interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

//enum para definir as categorias do Livro
enum CategoriaLivro {
    Ficcao = "Ficção",
    NaoFiccao = "Não Ficção",
    Fantasia = "Fantasia",
    Historia = "História"
}

//interface estendida para inclusão de outras infos adicionais
interface LivroDetalhado extends Livro {
    categoria: CategoriaLivro;
    disponivel: boolean;
}

//criando o Livro
const livro1: LivroDetalhado = {
    titulo: "O Senhor dos Anéis",
    autor: "JRR Tolkien",
    anoPublicacao: 1954,
    categoria: CategoriaLivro.Fantasia,
    disponivel: true
};

//função que recebe um livro e exibe as infos detalhadas
function exibirDetalhesLivro(livro: LivroDetalhado): void {
    console.log(`
        Título: ${livro.titulo}
        Autor: ${livro.autor}
        Ano de Publicação: ${livro.anoPublicacao}
        Categoria: ${livro.categoria}
        Disponível: ${livro.disponivel ? "Sim" : "Não"}
    `);
}

exibirDetalhesLivro(livro1);