import { useState } from "react";

function Tarea(props) {
    return (
        <li>{props.name}</li>
    )
}

function ListaDeTareas() {
    const [tarea, setTarea] = useState('');
    const [lista, setLista] = useState([]);

    return (
        <>
            
            <label htmlFor="Tarea">Tarea:</label>
            <input type="text" value={tarea} onChange={(e) => setTarea(e.target.value)}/>
            <button onClick={() => setLista([...lista, tarea])}>Enviar</button>

            <ul>
                {lista.map((e, index) => (
                    <li key={index}>{e}</li>
                ))}
            </ul>
        </>
    )
}

export { ListaDeTareas };