document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {
    document.getElementById("btn").addEventListener("click", crearTarea);
}

/**
 * Versión 2. Tantas listas de tareas como se quiera
 */
function crearTarea() {
    let lista = document.getElementById("lista1");

    if (lista == null) {
        let lista = document.createElement("div");
        document.getElementById("main").appendChild(lista);
        lista.setAttribute("id", "lista1"); //Antes de poner un atributo hay que hacer appenChild del nodo
        let titulo = document.createElement("h2");
        lista.appendChild(titulo);
        titulo.setAttribute("id", "titulo");
        titulo.textContent = "Lista 1"

        let tarea = document.createElement("div");
        lista.appendChild(tarea);
        tarea.setAttribute("id", "tarea");

        let newNombre = prompt("Nombre de la tarea");
        let newFecha = prompt("Fecha de finalización");

        let fecha = document.createElement("p");
        tarea.appendChild(fecha);
        fecha.setAttribute("id", "fecha");
        fecha.textContent = newFecha;
        tarea.appendChild(document.createElement("hr"))
        let nombre = document.createElement("p");
        tarea.appendChild(nombre);
        nombre.setAttribute("id", "nombre");
        nombre.textContent = newNombre;
    }
    else {
        let listas = document.getElementById("main").childNodes.length;
        if (listas < 2) {
            let newNombre = prompt("Nombre de la tarea");
            let newFecha = prompt("Fecha de finalización");
            let condicion = confirm("¿Quieres añadir la tarea a una nueva lista?");
            if (condicion) {
                crearNuevaLista(listas, newNombre, newFecha);
            }
            else {
                let lista = document.getElementById("lista1");
                let tarea = document.createElement("div");
                lista.appendChild(tarea);
                tarea.setAttribute("id", "tarea");

                let fecha = document.createElement("p");
                tarea.appendChild(fecha);
                fecha.setAttribute("id", "fecha");
                fecha.textContent = newFecha;
                tarea.appendChild(document.createElement("hr"))
                let nombre = document.createElement("p");
                tarea.appendChild(nombre);
                nombre.setAttribute("id", "nombre");
                nombre.textContent = newNombre;
            }
        } else {
            let newNombre = prompt("Nombre de la tarea");
            let newFecha = prompt("Fecha de finalización");
            let condicion2 = confirm("¿Quieres añadir la tarea a una nueva lista?");
            if (condicion2) {
                crearNuevaLista(listas, newNombre, newFecha);
            }
            else {
                let numLista = Number(prompt("¿A qué lista quieres añadir la tarea?"));
                if (numLista < 1 || numLista > listas || isNaN(numLista)) {
                    alert("No se ha añadido la tarea. La lista no existe");
                } else {
                    let lista = document.getElementById(`lista${numLista}`);
                    let tarea = document.createElement("div");
                    lista.appendChild(tarea);
                    tarea.setAttribute("id", "tarea");

                    let fecha = document.createElement("p");
                    tarea.appendChild(fecha);
                    fecha.setAttribute("id", "fecha");
                    fecha.textContent = newFecha;
                    tarea.appendChild(document.createElement("hr"))
                    let nombre = document.createElement("p");
                    tarea.appendChild(nombre);
                    nombre.setAttribute("id", "nombre");
                    nombre.textContent = newNombre;
                }
            }
        }
    }
}

function crearNuevaLista(listas, newNombre, newFecha) {
    let lista = document.createElement("div")
    document.getElementById("main").appendChild(lista);
    lista.setAttribute("id", `lista${listas+1}`); //Antes de poner un atributo hay que hacer appenChild del nodo
    let titulo = document.createElement("h2");
    lista.appendChild(titulo);
    titulo.setAttribute("id", "titulo");
    titulo.textContent = `Lista ${listas+1}`

    let tarea = document.createElement("div");
    lista.appendChild(tarea);
    tarea.setAttribute("id", "tarea");

    let fecha = document.createElement("p");
    tarea.appendChild(fecha);
    fecha.setAttribute("id", "fecha");
    fecha.textContent = newFecha;
    tarea.appendChild(document.createElement("hr"))
    let nombre = document.createElement("p");
    tarea.appendChild(nombre);
    nombre.setAttribute("id", "nombre");
    nombre.textContent = newNombre;
}

/**
 * Versión 1. Solo una lista de tareas
 */
// function crearTarea() {
//     let lista = document.getElementById("lista");

//     if (lista == null) {
//         let lista = document.createElement("div");
//         document.getElementById("main").appendChild(lista);
//         lista.setAttribute("id", "lista"); //Antes de poner un atributo hay que hacer appenChild del nodo

//         let tarea = document.createElement("div");
//         lista.appendChild(tarea);
//         tarea.setAttribute("id", "tarea");

//         let newNombre = prompt("Nombre de la tarea");
//         let newFecha = prompt("Fecha de finalización");

//         let fecha = document.createElement("p");
//         tarea.appendChild(fecha);
//         fecha.setAttribute("id", "fecha");
//         fecha.textContent = newFecha;
//         tarea.appendChild(document.createElement("hr"))
//         let nombre = document.createElement("p");
//         tarea.appendChild(nombre);
//         nombre.setAttribute("id", "nombre");
//         nombre.textContent = newNombre;
//     }
//     else {
//         let tarea = document.createElement("div");
//         lista.appendChild(tarea);
//         tarea.setAttribute("id", "tarea");

//         let newNombre = prompt("Nombre de la tarea");
//         let newFecha = prompt("Fecha de finalización");

//         let fecha = document.createElement("p");
//         tarea.appendChild(fecha);
//         fecha.setAttribute("id", "fecha");
//         fecha.textContent = newFecha;
//         tarea.appendChild(document.createElement("hr"))
//         let nombre = document.createElement("p");
//         tarea.appendChild(nombre);
//         nombre.setAttribute("id", "nombre");
//         nombre.textContent = newNombre;
//     }
// }