import { useEffect, useState, useRef } from "react";

function Reloj() {

    const [hora, setHora] = useState(new Date().toString().substring(16,24));
     const timeoutRef = useRef(false); // Solo ejecutamos una vez el timeout por render

    if (!timeoutRef.current) {
        timeoutRef.current = true;
        setTimeout(() => {
            setHora(new Date().toString().substring(16, 24));
            timeoutRef.current = false; // Permitimos que vuelva a ejecutar en el próximo render
        }, 1000);
    }

    useEffect(() => {
        console.log("Ay si pap que rico")
        setHora(new Date().toString().substring(16,24));
    },
    [hora]);

    setTimeout



    return (
        <div>Reloj: {hora}</div>
    )
    
}

export { Reloj };