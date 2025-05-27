let listaContainer = document.querySelector("ul");

async function mostrarUsuarios(lista) {
    lista.forEach(element => {
        let li = document.createElement("li");
        li.innerHTML = element.name;
        listaContainer.appendChild(li);
    });
}

export { mostrarUsuarios };