const URL_BASE = "https://pokeapi.co/api/v2/";
const PKMN_PP = 18;
const url = new URL(window.location.href); // o cualquier URL
const params = new URLSearchParams(url.search);
const paginaActual = params.get('paginaActual') || 1;

import { setListeners } from "./load.js";
setListeners();

async function getData(num) {
    const users = await fetch(`${URL_BASE}pokemon/${num}`);
    const data = await users.json();

    return data;
}
async function getDataPorNombre(name) {
    const users = await fetch(`${URL_BASE}pokemon/${name}`);
    const data = await users.json();

    return data;
}

async function getEvolve(num) {
    const specie = await fetch(`${num.species.url}`);
    
    const specie2 = await specie.json();
    /* console.log(specie2); */

    if (specie2.evolves_from_species === null) {
/*         console.log(specie2.evolves_from_species); */
        return specie2.evolves_from_species;
    } else {
/*         console.log(specie2.evolves_from_species.name); */
        return specie2.evolves_from_species.name;
    }

}


async function muestra(data) {
    const container = document.querySelector(".container");
    const miArticle = document.createElement("article");
    let miString = "";
    miArticle.classList.add(`pokemon`, `pokemon__${data.id}`);
    
    miString += `<div class="article__up"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png" alt=""><span class="id">ID / ${data.id}</span></div><div class="article__down"><span class="pkmn__nombre">${data.name}</span><div class="typing"><span class="typing typing__primary">`;
    
    miString += `${data.types[0].type.name}</span>`;

    if(data.types.length == 2) {
        miString += `<span class="typing typing__secondary">${data.types[1].type.name}</span>`;
    }

    miString += `</div></span>`;

    //por hacer evoluciones
    const evolvesFrom = await getEvolve(data);
    /* console.log(`${evolvesFrom}`); */
    if (evolvesFrom != null) {
        miString += `<div class="evolve"><div class="barra"></div><div class="evolves__from__text">Evoluciona de: <br> <span class="evolves__from">${evolvesFrom}</span></div></div>`;
    }

    miString += `</div>`;

    miArticle.innerHTML = miString;

    container.appendChild(miArticle);
}

async function procesos() {
    for (let i = (PKMN_PP * paginaActual - PKMN_PP + 1); i <= (PKMN_PP * paginaActual); i++) {
        const data = await getData(i);
        console.log(data);
        
        muestra(data);
    }
}

async function muestraFiltrado(lista, pag) {
    document.querySelector(".container").innerHTML = "";

    if (lista.length < PKMN_PP) {
        lista.forEach(async element => {
            let pkmnNombre = await getDataPorNombre(element);
            console.log(pkmnNombre);
            muestra(pkmnNombre);
        });
    } else {
        for (let i = (PKMN_PP * paginaActual - PKMN_PP + 1); i <= (PKMN_PP * paginaActual); i++) {
            let pkmnNombre = await getDataPorNombre(lista[i]);
            console.log(pkmnNombre);
            muestra(pkmnNombre);
        }
    }
}

procesos();

export { muestraFiltrado, procesos };