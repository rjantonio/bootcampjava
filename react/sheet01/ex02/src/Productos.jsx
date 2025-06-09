function Producto(props) {
    console.log(props.data.nombre);
    return (
        <div>
            <p>Nombre: {props.data.nombre}</p>
            <p>Precio: {props.data.precio}</p>
            <p>Descripción: {props.data.descripcion}</p>
        </div>
    )
}

function ListaDeProductos({arr}) {
    return (
        <div>
            {arr.map((producto, index) => (
                <Producto key={index} data={producto} />
            ))}
        </div>
    );
}

export { Producto, ListaDeProductos };