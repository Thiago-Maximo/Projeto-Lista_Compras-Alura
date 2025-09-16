import {criarItemDaLista} from "./scripts/criarItemDaLista.js";
import verificarLstaVazia from "./scripts/verificarListaVazia.js";

const botaoAdicionar = document.getElementById("adicionar-item")

const listaDeCompras = document.getElementById("lista-de-compras");



botaoAdicionar.addEventListener("click", (evento) =>{
    evento.preventDefault();
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);

    verificarLstaVazia(listaDeCompras);
})

verificarLstaVazia(listaDeCompras);