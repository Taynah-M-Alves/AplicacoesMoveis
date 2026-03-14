interface Produto {
    id:number,
    nome:string,
    preco:number,
    descricao?:string,
}
function formatarProduto(produto: Produto): string {

    if (produto.descricao){
        return `IDProduto: ${produto.id} - NomeProduto: ${produto.nome} -> DescricaoProduto${produto.descricao} - valor: R$ ${produto.preco} `
    }
    return `IDProduto: ${produto.id} - NomeProduto: ${produto.nome} - valor: R$ ${produto.preco} `
}
