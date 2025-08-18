// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function limpiarCampoDeEntrada() {
document.querySelector("#amigo").value = "";
}

// Función para agregar un amigo y actualizar la lista
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    if (nombre.trim() == "") {
        alert("Por favor, inserte un nombre.");
    } else {
        // Verifica si el amigo ya está en la lista
        if(amigos.includes(nombre)) {
            alert("Este nombre ya está en la lista.");
        } else {
            amigos.push(nombre);
            mostrarAmigos(); // Vuelve a renderizar la lista con el nuevo amigo
            limpiarCampoDeEntrada();
        }
    }
}

// Función para mostrar la lista de amigos
function mostrarAmigos() {
    // Selecciona el elemento UL donde se mostrarán los amigos por su ID
    // También se podría usar document.querySelector('#listaAmigos');
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpia la lista antes de añadir nuevos elementos 
    // (útil si la función se llama varias veces)
    listaAmigos.innerHTML = '';

    // Itera sobre el arreglo de amigos usando un bucle for. En conjunto,
    // realizan una de las tareas más comunes en el desarrollo web dinámico: 
    // crear un nuevo elemento, darle contenido y 
    // añadirlo a la página para que el usuario pueda verlo.
    for (let i = 0; i < amigos.length; i++) {
        // Crea un nuevo elemento LI para cada amigo
        // Crea un nuevo elemento HTML del tipo especificado
        // en la memoria del navegador,
        // pero todavía no lo hace visible en la página.
        // El argumento 'li' significa que el elemento a crear 
        // es un ítem de lista (<li>)
        // El elemento <li> recién creado (que por ahora está vacío) 
        // se asigna a una variable constante llamada nuevoAmigoLi
        // Se usa const porque la referencia a este elemento no cambiará.

        const nuevoAmigoLi = document.createElement('li');

        // toma el elemento <li> que se creó en el paso anterior 
        // y le añade el nombre del amigo como contenido de texto 
        // nuevoAmigoLi: Es el elemento <li> que creamos antes
        // .textContent: Es una propiedad de los elementos HTML
        // que permite establecer o obtener su contenido de texto.
        // Es una forma segura de añadir texto, ya que ignora 
        // cualquier etiqueta HTML que pudiera contener el texto,
        // evitando problemas de seguridad.
        // = amigos[i]: Asigna un valor a la propiedad textContent
        // establece el texto del <li> con un valor de la lista amigos
        // Por ejemplo, si amigos[i] es "Alexandra", 
        // el elemento <li> ahora contendrá el texto "Alexandra".

        nuevoAmigoLi.textContent = amigos[i];

        // Añade el elemento LI a la lista UL
        // Línea final para que el nuevo ítem de lista aparezca en la página web.
        // listaAmigos: variable que contiene una referencia 
        // a un elemento que ya existe en el HTML, típicamente 
        // una lista no ordenada (<ul>) o una lista ordenada (<ol>)
        // .appendChild(): Es un método que agrega un elemento 
        // como el último hijo de otro elemento.
        // (nuevoAmigoLi): Es el elemento que se va a añadir. 
        // En este caso, es nuestro <li> que ya tiene su texto.
        // Se toma el elemento <li> (creado y con texto) 
        // y se inserta al final de la lista 
        // representada por listaAmigos en el documento HTML, 
        // haciéndolo visible para el usuario.

        listaAmigos.appendChild(nuevoAmigoLi);
    }
}

function sortearAmigo() {
    let numeroMaximo = amigos.length;
    if (numeroMaximo == 0) {
        alert("No hay amigos para sortear");
        return;
    }
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
/*
//  depuración paso a paso:
    let aleatorio = Math.random();
    console.log(aleatorio);
    let escalado = aleatorio * numeroMaximo;
    console.log(escalado);
    let desescalado = Math.floor(escalado);
    console.log(desescalado);
    let numeroGenerado = desescalado + 1;
    console.log(numeroGenerado);
    console.log(numeroMaximo);
    console.log(amigos);
*/
    let resultadoAMostrar = document.getElementById("resultado");
    resultadoAMostrar.innerHTML = "El amigo secreto sorteado es: " + amigos[numeroGenerado - 1];
    return;
}


