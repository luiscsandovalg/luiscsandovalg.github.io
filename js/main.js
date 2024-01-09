const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas = Math.ceil(peliculas.length / 5);
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// ? ----- ----- Hover ----- -----
peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});


// BOTÓN IR ARRIBA:
// Mostrar el botón cuando el usuario se desplaza hacia abajo 20px desde la parte superior del documento
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("ir-arriba").style.display = "block";
    } else {
        document.getElementById("ir-arriba").style.display = "none";
    }
}

// Cuando el usuario hace clic en el botón, desplácese hasta la parte superior del documento
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// VIDEO reproducir de fondo
document.addEventListener('DOMContentLoaded', function () {
    const videoFondo = document.getElementById('video-fondo');

    videoFondo.addEventListener('ended', function () {
        // Redirige al usuario a la página normal
        window.location.href = 'index.php';
    });
});

//Desactivar el Botón de Presentación al Reproducir el Video:

document.addEventListener('DOMContentLoaded', function () {
    const videoFondo = document.getElementById('video-fondo');
    const botonReproducir = document.getElementById('reproducir-btn');
    const peliculaPrincipal = document.querySelector('.pelicula-principal');

    botonReproducir.addEventListener('click', function () {
        // Oculta el botón de reproducir
        botonReproducir.style.display = 'none';
        // Muestra el video
        videoFondo.classList.remove('oculto');
        // Habilita el sonido y reproduce el video
        videoFondo.muted = false;
        videoFondo.play();
        // Reemplaza el fondo con el video
        peliculaPrincipal.style.background = 'transparent';
    });

    videoFondo.addEventListener('ended', function () {
        // Redirige al usuario a la página normal al finalizar el video
        window.location.href = 'index.php';
    });
});



