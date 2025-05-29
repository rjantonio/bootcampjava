const url = new URL(window.location.href); // o cualquier URL
const params = new URLSearchParams(url.search);
const paginaActual = params.get('paginaActual');
const URL_BASE = "https://pokeapi.co/api/v2/";

import { muestraFiltrado, procesos } from "./main.js";

function setListeners() {
    document.addEventListener('DOMContentLoaded', function() {
        const previous = document.querySelector('.pagination--previous');
        const next = document.querySelector('.pagination--next');
        const filter = document.querySelector('.filtro');

        filter.addEventListener('input', () => {
            fetchConFiltro(filter.value, paginaActual);
            //console.log(filter.value);
        });

        if(paginaActual > 1) {
            previous.style.color = "black";
            previous.style.cursor = "pointer";
            previous.addEventListener('click', () => {
                loadNext(parseInt(paginaActual) - 1);
            });
        }
        next.addEventListener('click', () => {
            loadNext(parseInt(paginaActual) + 1);
        });
    }, false);
}

function loadNext(pag) {
    location.href = `http://127.0.0.1:3000/bootcampjava/js/sheet07/index.html?paginaActual=${(pag) ?? 1}`;
}

async function fetchConFiltro(text, pag = 1) {
    
    let pkmnTodos = await fetch(`${URL_BASE}pokemon/?limit=1500`);
    let {results} = await pkmnTodos.json();
    let names = await arrayNombres(results);

    //console.log(names);

    let listaFiltrada = filtraArray(names, text);
    console.log(listaFiltrada);
    muestraFiltrado(listaFiltrada, pag);
}

function filtraArray(arr, text) {
    if(text == "") return procesos();
    let aux = [];
    arr.forEach(element => {
        if(!element.indexOf(text)) {
            aux.push(element);
        }
    });
    return aux;
}

async function arrayNombres(results) {
    return  await (results.map((e) => e.name))
}

export { setListeners };