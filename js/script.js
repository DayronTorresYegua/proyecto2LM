document.addEventListener("DOMContentLoaded", () => {
    // Código original para agregar productos
    const listaProductos = document.querySelector(".productos__lista");

    function agregarKatana(nombre, descripcion, imagen) {
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
        if (listaProductos) {
            listaProductos.appendChild(nuevoItem);
        }
    }

    // Añadir una katana de ejemplo si existe la lista de productos
    if (listaProductos) {
        agregarKatana("Kusanagi", "Katana legendaria de Orochimaru.", "assets/kusanagi.png");
    }

    // VERIFICAR SI ESTAMOS EN LA PÁGINA DE CONTACTO

    // Opción 1: Verificar por URL
    const esUrlContacto = window.location.href.includes("contacto.html") ||
        window.location.pathname.includes("contacto");

    // Opción 2: Verificar por existencia de elementos específicos de la página de contacto
    const formularioContacto = document.querySelector(".contacto__formulario");

    // Si estamos en la página de contacto (por URL o por elementos)
    if (esUrlContacto || formularioContacto) {
        console.log("Detectada página de contacto - aplicando estilos específicos a la información de empresa");

        // 2. Modificar estilos del título de información de empresa
        const tituloEmpresa = document.querySelector(".contacto__empresa__titulo");
        if (tituloEmpresa) {
            tituloEmpresa.style.paddingBottom = "8px";
            tituloEmpresa.style.fontWeight = "600";
        }

        // 3. Cambiar estilo de la descripción de la empresa
        const descripcionEmpresa = document.querySelector(".contacto__empresa__descripcion");
        if (descripcionEmpresa) {
            descripcionEmpresa.style.lineHeight = "1.6";
            descripcionEmpresa.style.fontStyle = "italic";
            descripcionEmpresa.style.fontSize = "1.05rem";
        }

        // 4. Estilizar la lista de información de contacto
        const listaContacto = document.querySelector(".contacto__empresa__lista");
        if (listaContacto) {
            listaContacto.style.listStyleType = "none";
            listaContacto.style.padding = "0";

            const itemsLista = listaContacto.querySelectorAll("li");
            itemsLista.forEach(item => {
                item.style.padding = "8px 0";
                item.style.borderBottom = "1px dotted #ddd";

                // Buscar el elemento <strong> dentro del li
                const etiqueta = item.querySelector("strong");
                if (etiqueta) {
                    etiqueta.style.width = "80px";
                    etiqueta.style.display = "inline-block";
                }
            });
        }
    } else {
        console.log("No es la página de contacto - no se aplican estilos específicos");
    }
});