const API_URL = "https://jsonplaceholder.typicode.com/users";

async function getUsuarios() {
    const users = await fetch(API_URL);
    const data = await users.json();

    return data;
}

export { getUsuarios };