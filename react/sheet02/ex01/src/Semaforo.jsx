import { useState } from "react";

function Semaforo() {

    const colors = ['rojo', 'amarillo', 'verde'];
    const [activo, setActivo] = useState('verde');

    function cambia() {
        const indice = colors.indexOf(activo);
        const siguiente = (indice + 1) % colors.length;
        setActivo(colors[siguiente]);
    }

    function estilo(color) {
        return { opacity: activo == color ? 1 : .75 }
    }

    return (
        <div className="semaforo semaforo--container">
            <div style={estilo('rojo')} className={`semaforo semaforo--rojo`}></div>
            <div style={estilo('amarillo')} className={`semaforo semaforo--amarillo`}></div>
            <div style={estilo('verde')} className={`semaforo semaforo--verde`}></div>
            <button onClick={cambia}>Siguiente</button>
        </div>
    );
}

export { Semaforo };