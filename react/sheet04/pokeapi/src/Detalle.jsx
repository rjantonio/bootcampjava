import { useParams, useLocation, Link } from "react-router-dom";

function Detalle() {

    const { id } = useParams();
    const location = useLocation();
    const pokemon = location.state?.pokemon;
    const { name, types, evolvesFrom } = pokemon;

    return (
        <>
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
            <Link to={"/"}><button>Volver</button></Link>
        </>
    )
}

export { Detalle };