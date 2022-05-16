import {Produto} from "produto.js"
import { postarPrduto } from "./produto.js"



const adidasallstar = new Produto('adidas Allstar', 'https://assets.adidas.com/images/w_600,f_auto,q_auto/95cb4aeed4e54a198160ab4900c13b93_9366/Tenis_Grand_Court_SE_Preto_FW6690_01_standard.jpg', 'Vibe vintage com alma nova. Este tênis tem design limpo e contemporâneo com a essência dos modelos usados nas quadras nos anos 70. Esta versão tem sobreposições de camurça macia e cabedal de couro texturizado.','249,99')


window.onload = function postarPrduto(){
    var localPost = document.getElementById('container')
    localPost.innerHTML += `<div id="produto">
    <h2 class="produto__nome">${Produto.nome}</h2>
    <img src= ${Produto.imagem} alt="" id="produto__imagem">
    <p class="produto__descrição">${Produto.descricao}</p>
    <p class="produto__valor">${Produto.valor}</p>
</div>`
}