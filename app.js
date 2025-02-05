// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const nombresAmigos = [];
const MAX_NOMBRES = 10;

const agregarAmigo = () => {
    const nombreInput = document.getElementById("amigo");
    const nombre = nombreInput.value.trim();

    if (nombre === "") {
        mostrarMensaje("Por favor, ingresa un nombre.", "error");
        return;
    }

    if (nombresAmigos.includes(nombre)) {
        mostrarMensaje("Este nombre ya está en la lista.", "error");
        return;
    }

    if (nombresAmigos.length >= MAX_NOMBRES) {
        mostrarMensaje(`Solo puedes agregar un máximo de ${MAX_NOMBRES} nombres.`, "error");
        return;
    }

    nombresAmigos.push(nombre);
    nombreInput.value = "";
    actualizarListaAmigos();
    mostrarMensaje("Nombre agregado correctamente.", "success");
};

const actualizarListaAmigos = () => {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    nombresAmigos.forEach((nombre, index) => {
        const li = document.createElement("li");
        li.textContent = nombre;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("button-eliminar");
        botonEliminar.onclick = () => eliminarNombre(index);

        li.appendChild(botonEliminar);
        listaAmigos.appendChild(li);
    });
};

const eliminarNombre = (index) => {
    nombresAmigos.splice(index, 1);
    actualizarListaAmigos();
    mostrarMensaje("Nombre eliminado correctamente.", "success");
};

const sortearAmigo = () => {
    if (nombresAmigos.length === 0) {
        mostrarMensaje("No hay amigos en la lista. Agrega algunos nombres primero.", "error");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
    const nombreSorteado = nombresAmigos[indiceAleatorio];

    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `
        <div class="resultado-sorteo">
            <h2>¡El amigo sorteado es:</h2>
            <p class="nombre-sorteado">${nombreSorteado}</p>
        </div>
    `;
};

const mostrarMensaje = (mensaje, tipo) => {
    const mensajeElement = document.getElementById("mensaje");
    mensajeElement.textContent = mensaje;
    mensajeElement.className = `mensaje ${tipo}`;

    setTimeout(() => {
        mensajeElement.textContent = "";
        mensajeElement.className = "mensaje";
    }, 3000);
};

const reiniciarLista = () => {
    nombresAmigos.length = 0;
    actualizarListaAmigos();
    document.getElementById("resultado").innerHTML = "";
    mostrarMensaje("La lista se ha reiniciado correctamente.", "success");
};
