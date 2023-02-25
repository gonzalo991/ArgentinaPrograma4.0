const body = document.getElementById('body');
const descripcion = document.getElementById('descripcion');

//Función para utilizar los datos de la api
function crearUsuario(user) {

    const { avatar, email, first_name, last_name } = user;

    let body = ` 
    <div class="col-6">
        <img src='${avatar}' alt="imagen de portada del usuario" class="portada">
    </div>
    <div class="col-4 ms-3" id="datos">
        <h1 class="nombre">${first_name} ${last_name}</h1>
        <h2 class="ubicacion">Salta - Argentina</h2>
        <p class="nacimiento">15/08/1991</p>
        <p class="email">${email}</p>
    </div>`;

    descripcion.innerHTML = body;
}

/*Función asíncrona para traer los datos necesarios para
*crear un usuario y crearlo
*/
async function peticionDeDatos() {
    const response = await fetch('https://reqres.in/api/users/2');
    if (!response) return;

    const user = await response.json();
    console.log(user.data);
    crearUsuario(user.data)
}

//Uso de la función que pide los datos y crea el usuario
peticionDeDatos();