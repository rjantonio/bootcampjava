import { useState } from "react";

function Form() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    return (
        <>
            <form action="#" onSubmit={() => {
                e.preventDefault();
                console.log(formData);
            }}>
                <p><label htmlFor="Nombre">Nombre: </label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/></p>
                <p><label htmlFor="Email">Email: </label>
                <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/></p>
                <p><label htmlFor="Contraseña">Contraseña: </label>
                <input type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}/></p>
                <input type="button" value="Enviar" onClick={() => console.log(formData)}/>
            </form>
        </>
    );
}

export { Form };