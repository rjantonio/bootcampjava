function Tarjeta({nombre, apellido, ocupacion, imagenURL}) {
    return (
        <>
            <div className="tarjeta">
                <p>Nombre: {nombre}</p>
                <p>Apellido: {apellido}</p>
                <p>Ocupación: {ocupacion}</p>
                <p>Imagen: <img src={imagenURL} alt="" /></p>
            </div>
        </>
    );
}

function ListaDeTarjetas() {
    return (
        <>
            <div className="container--tarjeta">
                <Tarjeta nombre={"Juan"} apellido={"Jiménez"} ocupacion={"Mamporrero"} imagenURL={"https://img.freepik.com/vector-gratis/fondo-monocromatico-blanco-estilo-papel_52683-66443.jpg?semt=ais_items_boosted&w=740"}></Tarjeta>
                <Tarjeta nombre={"Juan"} apellido={"Jiménez"} ocupacion={"Mamporrero"} imagenURL={"https://img.freepik.com/vector-gratis/fondo-monocromatico-blanco-estilo-papel_52683-66443.jpg?semt=ais_items_boosted&w=740"}></Tarjeta>
                <Tarjeta nombre={"Juan"} apellido={"Jiménez"} ocupacion={"Mamporrero"} imagenURL={"https://img.freepik.com/vector-gratis/fondo-monocromatico-blanco-estilo-papel_52683-66443.jpg?semt=ais_items_boosted&w=740"}></Tarjeta>
            </div>
        </>
    );
}
export {Tarjeta, ListaDeTarjetas};