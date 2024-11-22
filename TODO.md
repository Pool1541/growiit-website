# TODO

## v1.0

- [x] Modificar el alineado de los subtítulos en mobile. Actualmente están al centro pero deben estar a la izquierda al igual que las descripciones.

- [x] Corregir el ancho de las cards de planes en tablet. El grid es de 12 columnas y las cards en ese tamaño ocupan solo 1.

- [x] Corregir el hero para pantallas de laptop pequeñas. El texto y la imagen son muy grandes.

- [x] Cambiar los anchor del componente blog card por Links de Nextjs.

- [x] Corregir espaciado entre secciones en la página de inicio.

- [x] Reducir el padding del componente Wrapper en mobile.

- [x] Corregir la etiqueta del título de cada slide del carousel, actualmente hay un h1 por cada slide, debería haber solo 1 h1.

- [x] Cambiar el color de fondo del navbar en mobile.

- [x] Corregir el tamaño del navbar, actualmente tiene un ancho máximo de 500px.

- [x] Agregar diseño responsivo en la vista de artículos.

- [x] Actualizar el copy de la página de inicio para incluir palabras clave.

- [ ] Mejorar el border radius de la imagen del hero manteniendo la consistencia entre todos sus lados, 36px en todos los lados es una buena opción.

- [ ] Agregar la información de OG y Twitter en la metadata de la página de Artículo.

- [x] En la función de creación de slugs para los artículos, cambiar las letras ñ por n.

- [ ] Crear las funciones necesarias para obtener los artículos desde las diferentes vistas. (últimos publicados, más populares y recomendaciones)

- [ ] Crear la función para suscribirse al newsletter.

- [ ] Completar el diseño del formulario para suscribirse al newsletter.

- [ ] Implementar CI/CD para la publicación de artículos.

- [ ] Implementar git hooks para la ejecución del linter y hacer build del proyecto antes de hacer push.


## v1.1

- [ ] Componetizar las secciones ya que hay algunos elementos que se repiten, como el título y descripción de las secciones, también el contenedor de secciones.

- [ ] Implementar funcionalidad que permita identificar los artículos más populares por visitas.

- [ ] Modificar los esquemas json+ld de blog para incluir solo los artículos populares.

- [ ] Limitar a 4 los artículos mostrados en la página de inicio.

- [ ] Mejorar la accesibilidad de la página.

- [ ] Bloquear la incrustación por iframe de la web. ```Sec-Fetch-Site: same-origin```
[Documentación](https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy)
  
  ```javascript
  const nextConfig = {
    async headers() {
      headers: [
        key: 'Content-Security-Policy',
        value: "frame-ancestors 'none'"
      ]
    }
  }
  ```
