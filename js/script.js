document.addEventListener("DOMContentLoaded", () => {
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
        listaProductos.appendChild(nuevoItem);
    }

    // Añadir una katana de ejemplo
    agregarKatana("Kusanagi", "Katana legendaria de Orochimaru.", "assets/kusanagi.png");
});
