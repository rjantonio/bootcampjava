import { getUsuarios } from "./api.js";
import { mostrarUsuarios } from "./ui.js";



getUsuarios()
    .then(mostrarUsuarios);