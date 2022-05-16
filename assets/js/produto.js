export class Produto{

    constructor(nome, imagem, descricao, valor){
        nome = this.nome
        imagem = this.imagem,
        descricao = this.descricao
        valor = this.valor

    }
}

export function postarPrduto(){
    var localPost = document.getElementById('container')
    localPost.innerHTML += `<div id="produto">
    <h2 class="produto__nome">${Produto.nome}</h2>
    <img src= ${Produto.imagem} alt="" id="produto__imagem">
    <p class="produto__descrição">${Produto.descricao}</p>
    <p class="produto__valor">${Produto.valor}</p>
</div>`
}