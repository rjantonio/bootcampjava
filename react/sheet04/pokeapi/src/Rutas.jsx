import { Routes, Route } from 'react-router-dom';
import { Detalle } from './Detalle.jsx';
import  App  from './App.jsx'

function Rutas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/detalle/:id" element={<Detalle />} />
            </Routes>
        </>
    );
}

export { Rutas };