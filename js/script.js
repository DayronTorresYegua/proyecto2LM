// Esta función se ejecutará cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM completamente cargado - iniciando script");

    // Verificar en qué página estamos (para depuración)
    console.log("URL actual:", window.location.href);
    console.log("Pathname:", window.location.pathname);

    // Código original para agregar productos
    const listaProductos = document.querySelector(".productos__lista");
    if (listaProductos) {
        agregarKatana("Kusanagi", "Katana legendaria de Orochimaru.", "assets/kusanagi.png");
    }

    manejarPaginaContacto();

    manejarPromociones();

    manejarPaginaServicios();
});

// Función para agregar katanas
function agregarKatana(nombre, descripcion, imagen) {
    const listaProductos = document.querySelector(".productos__lista");
    if (!listaProductos) return;

    // Crear el elemento <li>
    const nuevoItem = document.createElement("li");
    nuevoItem.classList.add("productos__item");

    // Crear la imagen
    const img = document.createElement("img");
    img.classList.add("productos__imagen");
    img.src = imagen;
    img.alt = `Imagen de ${nombre}`;

    // Crear el título con createElement y createTextNode
    const titulo = document.createElement("h3");
    titulo.classList.add("productos__nombre");
    titulo.appendChild(document.createTextNode(nombre));

    // Crear la descripción con createTextNode
    const desc = document.createElement("p");
    desc.classList.add("productos__descripcion");
    desc.appendChild(document.createTextNode(descripcion));

    // Agregar elementos al <li>
    nuevoItem.append(img, titulo, desc);

    // Insertar el nuevo producto en la lista
    listaProductos.appendChild(nuevoItem);
}

// Función para manejar la página de contacto
function manejarPaginaContacto() {
    // Verificar si estamos en la página de contacto
    const esUrlContacto = window.location.href.includes("contacto.html") ||
        window.location.pathname.includes("contacto");
    const formularioContacto = document.querySelector(".contacto__formulario");

    // Si estamos en la página de contacto (por URL o por elementos)
    if (esUrlContacto || formularioContacto) {
        console.log("Detectada página de contacto - aplicando estilos específicos");

        // Modificar estilos del título de información de empresa
        const tituloEmpresa = document.querySelector(".contacto__empresa__titulo");
        if (tituloEmpresa) {
            tituloEmpresa.style.paddingBottom = "8px";
            tituloEmpresa.style.fontWeight = "600";
        }

        // Cambiar estilo de la descripción de la empresa
        const descripcionEmpresa = document.querySelector(".contacto__empresa__descripcion");
        if (descripcionEmpresa) {
            descripcionEmpresa.style.lineHeight = "1.6";
            descripcionEmpresa.style.fontStyle = "italic";
            descripcionEmpresa.style.fontSize = "1.05rem";
        }

        // Estilizar la lista de información de contacto
        const listaContacto = document.querySelector(".contacto__empresa__lista");
        if (listaContacto) {
            listaContacto.style.listStyleType = "none";
            listaContacto.style.padding = "0";

            const itemsLista = listaContacto.querySelectorAll("li");
            itemsLista.forEach(item => {
                item.style.padding = "0.5rem 0";
                item.style.borderBottom = "1px dotted #ddd";

                // Buscar el elemento <strong> dentro del li
                const etiqueta = item.querySelector("strong");
                if (etiqueta) {
                    etiqueta.style.width = "5rem";
                    etiqueta.style.display = "inline-block";
                }
            });
        }
    } else {
        console.log("No es la página de contacto - no se aplican estilos específicos");
    }
}

// Función para manejar promociones
function manejarPromociones() {
    console.log("Buscando promociones...");
    const promocionesContenedor = document.querySelector(".promociones__contenedor");
    console.log("Contenedor de promociones:", promocionesContenedor);

    // Verificar si el contenedor existe
    if (promocionesContenedor) {
        // Seleccionar todas las promociones
        const promociones = promocionesContenedor.querySelectorAll(".promocion");
        console.log("Número de promociones encontradas:", promociones.length);

        // Verificar si hay al menos una promoción para eliminar
        if (promociones.length > 0) {
            // Eliminar la segunda oferta (índice 1)
            const indiceAEliminar = 1;
            console.log("Intentando eliminar promoción en índice:", indiceAEliminar);

            if (promociones[indiceAEliminar]) {
                promociones[indiceAEliminar].remove();
                console.log("Oferta eliminada correctamente");
            } else {
                console.log("La promoción en el índice especificado no existe");
            }
        } else {
            console.log("No se encontraron promociones para eliminar");
        }
    } else {
        console.log("No se encontró el contenedor de promociones");
    }
}

// Función para manejar la página de servicios
function manejarPaginaServicios() {
    // Múltiples formas de detectar la página
    const esUrlServicios = window.location.href.includes("adicional.html") ||
        window.location.pathname.includes("adicional");
    const seccionKenjutsu = document.querySelector(".servicios__kenjutsu");

    console.log("Comprobación página servicios:", {
        urlActual: window.location.href,
        urlIncluyeAdicional: window.location.href.includes("adicional.html"),
        pathnameIncluyeAdicional: window.location.pathname.includes("adicional"),
        existeSeccionKenjutsu: !!seccionKenjutsu,
        esUrlServicios: esUrlServicios
    });

    // Si estamos en la página de servicios
    if (esUrlServicios || seccionKenjutsu) {
        console.log("Detectada página de servicios - añadiendo botón");

        // Si no encontramos la sección anteriormente, buscamos de nuevo
        const seccion = seccionKenjutsu || document.querySelector(".servicios__kenjutsu");

        if (seccion) {
            const textoKenjutsu = seccion.querySelector(".kenjutsu__texto");

            if (textoKenjutsu) {
                const descripcionKenjutsu = textoKenjutsu.querySelector(".kenjutsu__descripcion");

                if (descripcionKenjutsu) {
                    console.log("Encontrada descripción - creando botón");

                    // Crear el botón
                    const botonKenjutsu = document.createElement("a");
                    botonKenjutsu.classList.add("kenjutsu__boton");
                    botonKenjutsu.href = "#";
                    botonKenjutsu.textContent = "Más información";

                    // Aplicar estilos al botón con los colores de la página
                    botonKenjutsu.style.display = "inline-block";
                    botonKenjutsu.style.backgroundColor = "#56e39f"; // --primary
                    botonKenjutsu.style.color = "#3b2c35"; // --secondary
                    botonKenjutsu.style.padding = "10px 20px";
                    botonKenjutsu.style.margin = "15px 0";
                    botonKenjutsu.style.borderRadius = "5px";
                    botonKenjutsu.style.textDecoration = "none";
                    botonKenjutsu.style.fontWeight = "bold";
                    botonKenjutsu.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";

                    // Efectos de hover
                    botonKenjutsu.addEventListener("mouseenter", function() {
                        this.style.backgroundColor = "#3b2c35"; // --secondary
                        this.style.color = "#56e39f"; // --primary
                        this.style.transform = "scale(1.05)";
                        this.style.transition = "all 0.3s ease";
                    });

                    botonKenjutsu.addEventListener("mouseleave", function() {
                        this.style.backgroundColor = "#56e39f"; // --primary
                        this.style.color = "#3b2c35"; // --secondary
                        this.style.transform = "scale(1)";
                    });

                    // Añadir el botón después de la descripción
                    textoKenjutsu.appendChild(botonKenjutsu);
                    console.log("Botón añadido correctamente");
                } else {
                    console.log("No se encontró la descripción de Kenjutsu");
                }
            } else {
                console.log("No se encontró el contenedor de texto");
            }
        } else {
            console.log("No se encontró la sección de Kenjutsu");
        }
    } else {
        console.log("No estamos en la página de servicios");
    }
}