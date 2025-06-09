import { Link } from "react-router-dom";

function ListaDeTarjetas({ pokemons }) {
    /* console.log(pokemons); */
    return (
        <div className="container">
            {pokemons.map(pokemon => <Tarjeta key={pokemon.id} pokemon={pokemon} onClick={() => Link} />)}
        </div>
    );
}

function Tarjeta({ pokemon }) {
    const { id, name, types, evolvesFrom } = pokemon;
    return (
        <>
            <Link to={`/detalle/${id}`} state={{ pokemon }} style={{ textDecoration: 'none', color: 'inherit' }}>
                <article className="pokemon pokemon__1">
                    <div className="article__up">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="" />
                        <span className="id">ID / {id}</span>
                    </div>
                    <div className="article__down">
                        <span className="pkmn__nombre">{name}</span>
                        <div className="typing">
                            <span className="typing typing__primary">{types[0].type.name}</span>
                            {types[1]?.type?.name && <span className="typing secondary">{types[1].type.name}</span>}
                        </div>
                        {evolvesFrom &&
                        <div className="evolve">
                            <div className="barra"></div>
                            <div className="evolves__from__text">
                                Evoluciona de: <br />
                                <span className="evolves__from">{evolvesFrom.trim()}</span>
                            </div>
                        </div>
                        }
                    </div>
                </article>
            </Link>
        </>
    )
}


export { ListaDeTarjetas, Tarjeta };