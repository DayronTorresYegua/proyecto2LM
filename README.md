# Instrucciones del proyecto

## Descripción
**Bushido Blades** es un proyecto web dedicado a ofrecer una experiencia única para los entusiastas de las katanas y la cultura samurái. 
A través de una plataforma visualmente atractiva y fácil de navegar, el sitio web proporciona información sobre los servicios que ofrece la tienda, 
que van desde la personalización y el mantenimiento de katanas hasta clases de Kenjutsu, el arte tradicional de combate con katana.

### Características Principales

- **Personalización de Katanas**: Los usuarios pueden acceder a un servicio de personalización, donde tienen la oportunidad de crear una katana única que se ajuste a su estilo y necesidades personales.

- **Mantenimiento y Afilado**: Ofrecemos servicios de mantenimiento y afilado para garantizar que las katanas estén en óptimas condiciones, listos para su uso en cualquier momento.

- **Clases de Kenjutsu**: Bushido Blades también organiza clases de Kenjutsu, adecuadas para todos los niveles de habilidad. 
Los instructores son expertos en el arte del combate samurái y brindan formación tanto para principiantes como para avanzados.

### Estructura del Proyecto

El sitio está construido con **HTML5**, **CSS** y utiliza **buena semántica** para asegurar una estructura limpia y fácil de mantener. La web está diseñada para ser completamente funcional en diferentes dispositivos, con un enfoque en la accesibilidad y la experiencia del usuario.

### Objetivos del Proyecto

El principal objetivo de **Bushido Blades** es ofrecer una plataforma en línea eficiente, profesional y elegante donde los clientes puedan explorar y acceder a servicios relacionados con las katanas. Además, se busca crear una comunidad alrededor de la cultura samurái a través de la educación en Kenjutsu y la atención al detalle en cada katana personalizada.

## Instrucciones para visualización

1. Para poder visualizar el proyecto primero deberemos tener acceso al repositorio
2. Una vez con acceso al repositorio podemos tanto clonarlo como descargar los archivos
3. Si hemos decidido clonar lo que haremos sera iniciar el repositorio con el IDE que usemos
4. En caso de haber descargado los archivos lo que tendremos que hacer es abrir nuestro IDE y cargar los archivos dentro de este
5. Una vez hecho esto ya podremos iniciar el proyecto para poder visualizarlo

## Detalles

- He hecho uso de la etiqueta div en esta ocasion debido 
a que es la que mas se ajusta a lo quiero representar 
ya que seria menos eficiente hacerlo con alguna otra etiqueta

```html
    <section class="servicios__kenjutsu">
        <img class="kenjutsu__imagen" src="assets/Kenjutsu_001.jpg" alt="Clases de Kenjutsu">
        <div class="kenjutsu__texto">
            <h2 class="kenjutsu__titulo">Clases de Kenjutsu</h2>
            <p class="kenjutsu__descripcion">
                Clases de Kenjutsu: Domina el Arte del Combate con Katana
                En Bushido Blades, ofrecemos clases de Kenjutsu, el arte tradicional del combate con katana, impartidas por maestros experimentados.
                Nuestras sesiones están diseñadas para todos los niveles, desde principiantes que desean aprender los fundamentos
                hasta practicantes avanzados que buscan perfeccionar su técnica.
            </p>
        </div>
    </section>
```

- He tenido que usar la etiqueta div para poder crear un carrusel de imágenes debido a que de otra forma no quedaba bien hecho

```html
    <!-- Contenedor de imágenes -->
    <div class="carrusel-contenedor">
        <div class="carrusel-imagen">
            <img src="assets/enma2.png" alt="Imagen 1">
        </div>
        <div class="carrusel-imagen">
            <img src="assets/connor.png" alt="Imagen 2">
        </div>
        <div class="carrusel-imagen">
            <img src="assets/rin.png" alt="Imagen 3">
        </div>
        <div class="carrusel-imagen">
            <img src="assets/duncan.png" alt="Imagen 4">
        </div>
    </div>
```


# Funcionalidades de la Página

## 1. Agregar Productos (`agregarKatana`)

Esta funcionalidad permite añadir dinámicamente productos (katanas) a una lista de productos en la página. El script crea elementos HTML con la información del producto y los agrega a una lista existente.

**Propósito:**  
Mostrar productos de forma dinámica sin tener que codificarlos directamente en el HTML.

**Funcionamiento:**
- Crea un elemento `<li>` con una imagen, título y descripción del producto y lo añade a la lista.

**Uso:**
- Se ejecuta cuando se carga la página, añadiendo una katana llamada "Kusanagi" a la lista de productos si ésta existe.

**Ventaja:**
- Facilita el mantenimiento y actualización de los productos sin modificar el HTML.

---

## 2. Gestión de Página de Contacto (`manejarPaginaContacto`)

Esta funcionalidad aplica estilos específicos a elementos de la página de contacto para mejorar su presentación visual.

**Propósito:**
- Mejorar la presentación de la información de contacto de la empresa.

**Detección:**
- Utiliza dos métodos para detectar si estamos en la página de contacto: comprobación de URL y presencia de elementos específicos.

**Modificaciones:**
- Ajusta el espaciado y peso del título de la empresa.
- Modifica el estilo de la descripción (interlineado, estilo de fuente, tamaño).
- Aplica formato a la lista de contacto (elimina viñetas, agrega bordes, espaciado).

**Ventaja:**
- Permite aplicar estilos específicos a esta página sin necesidad de crear un archivo CSS adicional.

---

## 3. Gestión de Promociones (`manejarPromociones`)

Esta funcionalidad permite manipular dinámicamente las promociones mostradas en la página, específicamente eliminando una promoción concreta.

**Propósito:**
- Eliminar una promoción específica (la segunda) de la lista de promociones.

**Funcionamiento:**
- Busca el contenedor de promociones, selecciona todas las promociones disponibles y elimina la que está en el índice `1` (segunda promoción).

**Uso:**
- Se ejecuta al cargar la página para modificar la lista de promociones disponibles.

**Ventaja:**
- Permite actualizar las promociones mostradas sin modificar el HTML, útil para promociones temporales o rotativas.

---

## 4. Gestión de Página de Servicios (`manejarPaginaServicios`)

Esta funcionalidad añade un botón "Más información" a la sección de Kenjutsu en la página de servicios adicionales.

**Propósito:**
- Añadir interactividad a la sección de Kenjutsu con un botón para obtener más información.

**Detección:**
- Verifica si estamos en la página de servicios mediante comprobación de URL y elementos específicos.

**Implementación:**
- Crea un botón utilizando la etiqueta `<button>` que aprovecha los estilos CSS existentes.
- Añade un margen superior para separarlo de la descripción.
- Incluye un event listener para futuras funcionalidades.

**Ventaja:**
- Mejora la experiencia del usuario añadiendo interactividad y acceso a más información sobre el servicio de Kenjutsu.
