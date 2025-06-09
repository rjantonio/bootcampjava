import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom';
import { ListaDeTarjetas } from './Tarjetas.jsx'
import { Boton } from './Boton.jsx'
import { useEffect, useState } from "react";

const URL_BASE = "https://pokeapi.co/api/v2/";
const PKMN_PP = 18;
/* const url = new URL(window.location.href); // o cualquier URL
const params = new URLSearchParams(url.search); */

async function getData(num) {
    const users = await fetch(`${URL_BASE}pokemon/${num}`);
    const data = await users.json();

    return data;
}

async function procesos(paginaActual) {
  let listaPokemon = [];

    for (let i = (PKMN_PP * paginaActual - PKMN_PP + 1); i <= (PKMN_PP * paginaActual); i++) {
        const data = await getData(i);
        /* console.log(data); */
        const evolvesFrom = await getEvolve(data);
        
        listaPokemon.push({...data, evolvesFrom});
    }
    return listaPokemon;
}

async function getEvolve(num) {
    const specie = await fetch(num.species.url);
    
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

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);

  useEffect(() => {
    async function cargarPokemons() {
      const datos = await procesos(paginaActual);
      setPokemons(datos);
    }
    cargarPokemons();
  }, [paginaActual]);

   function cambiaPagina(direccion) {
    setPaginaActual(prev => {
      if (direccion === "prev" && prev > 1) return prev - 1;
      else if (direccion === "next") return prev + 1;
      return prev;
    });
  }

  return (
    <>
      <div className="oreja oreja__l"></div>
      <div className="oreja oreja__r"></div>
      <div className="moflete moflete__l"></div>
      <div className="moflete moflete__r"></div>


      <main>
          <div className="container__todo">

              <Boton type={'previous'} text={'←'} pag={paginaActual} onClick={() => cambiaPagina("prev")} ></Boton>
              <Boton type={'next'} text={'→'} pag={paginaActual} onClick={() => cambiaPagina("next")} ></Boton>

              <input type="text" className="filtro" placeholder="Filtra Pokemons por nombre..."/>
              <ListaDeTarjetas pokemons={pokemons} />
          </div>
      </main>
    </>
  )
}

export default App
