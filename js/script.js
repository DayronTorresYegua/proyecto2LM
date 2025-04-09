
function ejecutarCuandoEsteListo(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        fn();
    } else {
        setTimeout(() => ejecutarCuandoEsteListo(fn), 50);
    }
}

ejecutarCuandoEsteListo(() => {
    console.log("Ejecutando script después de la carga del DOM");

    console.log("URL actual:", window.location.href);
    console.log("Pathname:", window.location.pathname);

    const listaProductos = document.getElementsByClassName("productos__lista")[0];
    if (listaProductos) {
        agregarKatana("Kusanagi", "Katana legendaria de Orochimaru.", "assets/kusanagi.png");
    }

    manejarPaginaContacto();
    manejarPromociones();
    manejarPaginaServicios();
});

// Función para agregar katanas
function agregarKatana(nombre, descripcion, imagen) {
    const listaProductos = document.getElementsByClassName("productos__lista")[0];
    if (!listaProductos) return;

    const nuevoItem = document.createElement("li");
    nuevoItem.classList.add("productos__item");

    const img = document.createElement("img");
    img.classList.add("productos__imagen");
    img.src = imagen;
    img.alt = `Imagen de ${nombre}`;

    const titulo = document.createElement("h3");
    titulo.classList.add("productos__nombre");
    titulo.textContent = nombre;

    const desc = document.createElement("p");
    desc.classList.add("productos__descripcion");
    desc.textContent = descripcion;

    nuevoItem.append(img, titulo, desc);
    listaProductos.appendChild(nuevoItem);
}

function manejarPaginaContacto() {
    const esUrlContacto = window.location.href.includes("contacto.html") ||
        window.location.pathname.includes("contacto");
    const formularioContacto = document.getElementById("contacto-form");

    if (esUrlContacto || formularioContacto) {
        console.log("Detectada página de contacto - aplicando estilos específicos");

        const tituloEmpresa = document.getElementsByClassName("contacto__empresa__titulo")[0];
        if (tituloEmpresa) {
            tituloEmpresa.style.paddingBottom = "8px";
            tituloEmpresa.style.fontWeight = "600";
        }

        const descripcionEmpresa = document.querySelector(".contacto__empresa__descripcion");
        if (descripcionEmpresa) {
            descripcionEmpresa.style.lineHeight = "1.6";
            descripcionEmpresa.style.fontStyle = "italic";
            descripcionEmpresa.style.fontSize = "1.05rem";
        }

        const listaContacto = document.querySelector(".contacto__empresa__lista");
        if (listaContacto) {
            listaContacto.style.listStyleType = "none";
            listaContacto.style.padding = "0";

            const itemsLista = listaContacto.getElementsByTagName("li");
            for (let item of itemsLista) {
                item.style.padding = "0.5rem 0";
                item.style.borderBottom = "1px dotted #ddd";

                const etiqueta = item.getElementsByTagName("strong")[0];
                if (etiqueta) {
                    etiqueta.style.width = "5rem";
                    etiqueta.style.display = "inline-block";
                }
            }
        }
    }
}

function manejarPromociones() {
    console.log("Buscando promociones...");
    const promocionesContenedor = document.querySelector(".promociones__contenedor");
    if (promocionesContenedor) {
        const promociones = promocionesContenedor.getElementsByClassName("promocion");
        if (promociones.length > 1) {
            promociones[1].remove();
            console.log("Oferta eliminada correctamente");
        }
    }
}

function manejarPaginaServicios() {
    const esUrlServicios = window.location.href.includes("adicional.html") ||
        window.location.pathname.includes("adicional");
    const seccionKenjutsu = document.querySelector(".servicios__kenjutsu");

    if (esUrlServicios || seccionKenjutsu) {
        console.log("Detectada página de servicios - añadiendo botón");
        const textoKenjutsu = seccionKenjutsu?.querySelector(".kenjutsu__texto");
        const descripcionKenjutsu = textoKenjutsu?.querySelector(".kenjutsu__descripcion");

        if (descripcionKenjutsu) {
            const botonKenjutsu = document.createElement("button");
            botonKenjutsu.classList.add("kenjutsu__boton");
            botonKenjutsu.textContent = "Más información";
            botonKenjutsu.style.marginTop = "1rem";
            textoKenjutsu.appendChild(botonKenjutsu);
            console.log("Botón añadido correctamente");
        }
    }
}

// Eventos

document.addEventListener("DOMContentLoaded", function() {
    const filtros = document.querySelectorAll(".filtro");
    const productos = document.querySelectorAll(".nuevo__productos__item");

    filtros.forEach(filtro => {
        filtro.addEventListener("change", () => {
            aplicarFiltro();
        });
    });

    function aplicarFiltro() {
        const seleccionados = Array.from(filtros)
            .filter(f => f.checked)
            .map(f => f.value);

        productos.forEach(producto => {
            const categoria = producto.dataset.categoria;
            if (seleccionados.length === 0 || seleccionados.includes(categoria)) {
                producto.classList.remove("oculto");
            } else {
                producto.classList.add("oculto");
            }
        });
    }
});

// Formulario

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input, select");

    // Mapeo de validaciones y mensajes de error
    const validaciones = {
        nombre: {
            validar: value => value.length >= 3,
            mensaje: "El nombre debe tener al menos 3 letras."
        },
        email: {
            validar: value => value.includes("@") && value.includes("."),
            mensaje: "Ingresa un correo electrónico válido. EJ: example@gmail.com"
        },
        telefono: {
            validar: value => /^\d{9,15}$/.test(value),
            mensaje: "El teléfono debe tener entre 9 y 15 números."
        },
        asunto: {
            validar: value => value !== "",
            mensaje: "El asunto no puede estar vacío."
        },
        preferencia: {
            validar: value => value !== "",
            mensaje: "Selecciona una opción."
        }
    };

    inputs.forEach(input => {
        input.addEventListener("blur", () => validateField(input));
        input.addEventListener("input", () => validateField(input));
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let isValid = true;

        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            alert("Formulario enviado correctamente");
            form.reset();
            clearErrors();
        }
    });

    function validateField(input) {
        const value = input.value.trim();
        let errorSpan = input.nextElementSibling;
        if (!errorSpan || !errorSpan.classList.contains("error-message")) {
            errorSpan = document.createElement("span");
            errorSpan.classList.add("error-message");
            input.insertAdjacentElement("afterend", errorSpan);
        }

        let isValid = true;
        let errorMessage = "";

        const validador = validaciones[input.id];

        if (validador) {
            isValid = validador.validar(value);
            errorMessage = validador.mensaje;
        }

        if (!isValid) {
            errorSpan.textContent = errorMessage;
            return false;
        } else {
            errorSpan.textContent = "";
            return true;
        }
    }

    function clearErrors() {
        document.querySelectorAll(".error-message").forEach(error => error.textContent = "");
    }
});

// Galeria

document.addEventListener("DOMContentLoaded", function() {
    const galeriaLista = document.getElementById("galeria-lista");
    const botonAgregar = document.getElementById("agregar-imagen");

    // Función para agregar imagen
    function agregarImagen() {
        // Pedir la URL de la nueva imagen al usuario
        const urlImagen = prompt("Introduce la URL de la imagen:");

        if (urlImagen) {
            const nuevaImagen = document.createElement("li");
            nuevaImagen.classList.add("galeria__item");

            // Crear el elemento de imagen
            const img = document.createElement("img");
            img.classList.add("galeria__imagen");
            img.src = urlImagen;
            img.alt = "Imagen de galería";

            // Crear el botón de eliminar
            const botonEliminar = document.createElement("button");
            botonEliminar.classList.add("eliminar-imagen");
            botonEliminar.textContent = "Eliminar";
            botonEliminar.addEventListener("click", function() {
                nuevaImagen.remove();
            });

            // Añadir la imagen y el botón de eliminar a la nueva imagen
            nuevaImagen.appendChild(img);
            nuevaImagen.appendChild(botonEliminar);

            // Agregar la nueva imagen al contenedor de la galería
            galeriaLista.appendChild(nuevaImagen);
        }
    }

    // Función para eliminar imagen (ya lo manejamos en el botón de eliminar por cada imagen)
    galeriaLista.addEventListener("click", function(event) {
        if (event.target.classList.contains("eliminar-imagen")) {
            const imagen = event.target.closest(".galeria__item");
            imagen.remove();
        }
    });

    // Añadir el evento al botón de agregar imagen
    botonAgregar.addEventListener("click", agregarImagen);
});

// Carrito

document.addEventListener('DOMContentLoaded', () => {
    const productos = document.querySelectorAll('.nuevo__productos__item');

    productos.forEach(producto => {
        const nombre = producto.querySelector('.nuevo__productos__nombre').textContent;
        const precioTexto = producto.querySelector('.nuevo__productos__precio').textContent;
        const precio = parseFloat(precioTexto.replace('€', '').trim());

        // Crear botón
        const boton = document.createElement('button');
        boton.textContent = 'Añadir al carrito';
        boton.classList.add('btn-carrito');

        // Añadir evento al botón
        boton.addEventListener('click', () => {
            agregarAlCarrito(nombre, precio);
        });

        // Añadir botón al producto
        producto.appendChild(boton);
    });

    // Si estamos en la página del carrito, renderizar su contenido
    const contenedor = document.getElementById('carrito-contenido');
    if (contenedor) {
        renderizarCarrito(contenedor);
        actualizarTotalCarrito();
    }
});

function agregarAlCarrito(nombre, precio) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const productoExistente = carrito.find(producto => producto.nombre === nombre);

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({ nombre, cantidad: 1, precio });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`"${nombre}" se ha añadido al carrito.`);

    // Actualizar el total si estamos en la página del carrito
    if (document.getElementById('carrito-contenido')) {
        actualizarTotalCarrito();
    }
}

function renderizarCarrito(contenedor) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    contenedor.innerHTML = '';

    if (carrito.length === 0) {
        contenedor.innerHTML = '<p>El carrito está vacío.</p>';
        return;
    }

    carrito.forEach((producto, index) => {
        const div = document.createElement('div');
        div.classList.add('nuevo__productos__item');

        div.innerHTML = `
            <img class="nuevo__productos__imagen" src="assets/${producto.nombre.toLowerCase().replace(/\s/g, '-')}.png" alt="${producto.nombre}">
            <h2 class="nuevo__productos__nombre">${producto.nombre}</h2>
            <p class="nuevo__productos__descripcion">Cantidad: ${producto.cantidad}</p>
            <p class="nuevo__productos__precio">€${producto.precio.toFixed(2)} (c/u)</p>
            <p class="nuevo__productos__subtotal">Subtotal: €${(producto.precio * producto.cantidad).toFixed(2)}</p>
            <button class="btn-eliminar" data-index="${index}">Eliminar unidad</button>
        `;

        contenedor.appendChild(div);
    });

    // Añadir eventos a botones de eliminar
    const botonesEliminar = document.querySelectorAll('.btn-eliminar');
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', () => {
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            const index = parseInt(boton.getAttribute('data-index'));

            if (carrito[index].cantidad > 1) {
                carrito[index].cantidad--;
            } else {
                carrito.splice(index, 1);
            }

            localStorage.setItem('carrito', JSON.stringify(carrito));
            renderizarCarrito(contenedor);
            actualizarTotalCarrito();
        });
    });
}

function actualizarTotalCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let total = 0;

    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });

    const totalElemento = document.getElementById('carrito-total');
    if (totalElemento) {
        totalElemento.textContent = `€${total.toFixed(2)}`;
    }
}