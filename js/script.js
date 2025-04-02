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


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input, textarea, select");

    const errorMessages = {
        "nombre": "El nombre debe de tener al menos 3 letras",
        "email": "Ingresa un correo electrónico válido. EJ: ejemplo@gmail.com",
        "telefono": "El teléfono debe contener entre 9 y 15 dígitos.",
        "asunto": "El asunto no puede estar vacío.",
        "mensaje": "El mensaje debe tener al menos 10 caracteres.",
        "preferencia": "Selecciona una opción de contacto."
    };

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let isValid = true;

        inputs.forEach(input => {
            if (!validateInput(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            showSuccess("Formulario enviado correctamente");
            form.reset();
        }
    });

    form.addEventListener("input", (event) => {
        validateInput(event.target);
    }, true); // Bubble phase

    function validateInput(input) {
        const errorMessage = input.nextElementSibling;
        if (errorMessage && errorMessage.classList.contains("error-message")) {
            errorMessage.remove();
        }

        if (!input.checkValidity()) {
            const customMessage = errorMessages[input.name] || "Campo inválido.";
            showError(input, customMessage);
            return false;
        }
        return true;
    }

    function showError(input, message) {
        const error = document.createElement("span");
        error.classList.add("error-message");
        error.textContent = message;
        input.insertAdjacentElement("afterend", error);
    }

    function showSuccess(message) {
        alert(message); // Puedes cambiar esto por otro método visual
    }
});