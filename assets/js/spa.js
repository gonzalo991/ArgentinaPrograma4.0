//Archivo para la crearción de una spa
const main = document.getElementById('main');

//Atrapo los links atml y los recocrro
document.querySelectorAll("nav a").forEach(
    a => {
        a.addEventListener("click", ev => {
            //Evito la redirección con preventdefault
            ev.preventDefault();

            //Método Hash
            const { innerText } = ev.target;
            location.hash = innerText;
            a.style = 'active';
        })
    }
);

//Utilizo un evento de hashchange para el cambio de rutas
window.addEventListener("hashchange", ev => {
    const xhr = new XMLHttpRequest;
    const route = `./templates/${location.hash.slice(1)}.html`;
    xhr.open("GET", route);
    xhr.send();

    //Agrego un evento de load para atrapar los elementos de las rutas y cargarlos en la página
    xhr.addEventListener("load", ev => {
        const { response } = ev.target;
        main.innerHTML = response;
    })
});

//Vuelvo a repetir el procesa para que se ejecute en caso de haber cambiado de ruta
if (location.hash) {
    const xhr = new XMLHttpRequest;
    const route = `./templates/${location.hash.slice(1)}.html`;
    xhr.open("GET", route);
    xhr.send();

    xhr.addEventListener("load", ev => {
        const { response } = ev.target;
        main.innerHTML = response;
    })
}