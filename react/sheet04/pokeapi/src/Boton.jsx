import { useState } from "react";

function Boton({type, text, pag, onClick}) {

    return (
        <div className={`pagination pagination--${type}${(pag === 1 && type == 'previous') ? ' pagination--notallowed' : ''}`} onClick={onClick}>{text}</div>
    );
}

export {Boton};