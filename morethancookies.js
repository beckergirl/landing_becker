/* imágenes portada */

document.addEventListener("DOMContentLoaded", function() {
    let imagenes = [
        "img/tulipanes_2.jpg",
        "img/cono.JPG",
        "img/broche.jpg",
        "img/pieza_unica.JPG",
       /*  "img/menta.jpg", */
        "img/flores_1.jpg",
        "img/calder.JPG",
        "img/cono_jade_largo.jpg",
        "img/pieza_unica_amatista.jpg",
        "img/flores_2.jpg",
        "img/pieza_unica_escarabajo.JPG",
        "img/foto_12.JPG",
        "img/margaritas_2.JPG",
        "img/foto_2.jpg",
        "img/calavera_cuarzo rosa.jpg",
        "img/foto_3.jpg",
        "img/isadora_2.JPG",
        "img/foto_13.JPG",
        "img/tulipanes.jpg",
        "img/margaritas.JPG",
        "img/pieza_unica_2.JPG",
        "img/isadora_3.JPG",
        "img/foto_14.JPG",
        "img/flores_3.jpg",
        "img/foto_4.jpg",
        "img/foto_5.jpg",
        "img/broche_margarita.jpg",
        "img/foto_6.jpg",
        "img/foto_7.jpg",
        "img/pendientes_conchas.JPG",
        "img/flores_4.jpg",
        "img/isadora_4.JPG",
        "img/foto_8.jpg",
        "img/pendientes_palmera.JPG",
        "img/negro.png",
        "img/manos.JPG",
        "img/foto_9.jpg",
        "img/foto_10.jpg",
    ];
    let tiempoIntervalo = 500;

    let indiceImagenActual = 0;
    let fotoPortada = document.getElementById("foto_portada");

    function cambiarImagen() {
        fotoPortada.src = imagenes[indiceImagenActual];
        indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;
    }

    cambiarImagen();

    setInterval(cambiarImagen, tiempoIntervalo);
});