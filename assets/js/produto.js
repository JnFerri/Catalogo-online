export class Produto{

    constructor(nome, imagem, descricao, valor){
        this.nome = nome
        this.imagem = imagem
        this.descricao = descricao
        this.valor = valor

        
    }

    postarProduto() {
        var post = `<div id="produto">
        <h2 class="produto__nome">${this.nome}</h2>
        <img src= ${this.imagem} alt="" id="produto__imagem">
        <p class="produto__descrição">${this.descricao}</p>
        <p class="produto__valor">${this.valor}</p>
    </div>`
    var localPost = document.getElementById('container')
    return localPost.innerHTML += post
    }
    
}



