const copasSonido = [
    '../../../img/copas/copas sonido/copa1S.svg',
    '../../../img/copas/copas sonido/copa2S.svg',
    '../../../img/copas/copas sonido/copa3S.svg',
    '../../../img/copas/copas sonido/copa4S.svg',
    '../../../img/copas/copas sonido/copa5S.svg',
    '../../../img/copas/copas sonido/copa6S.svg'
];

const copasSinSonido = [
    '../../../img/copas/copas sin sonido/copa1NS.svg', 
    '../../../img/copas/copas sin sonido/copa2NS.svg',
    '../../../img/copas/copas sin sonido/copa3NS.svg',
    '../../../img/copas/copas sin sonido/copa4NS.svg',
    '../../../img/copas/copas sin sonido/copa5NS.svg',
    '../../../img/copas/copas sin sonido/copa6NS.svg'
];

const imgClasses = [
    '.img-1',
    '.img-2',
    '.img-3',
    '.img-4',
    '.img-5',
    '.img-6'
];

let activeCup = -1;
let animationSequence = [];
let userSequence = [];
let animationCount = 0;
let currentCups = 3; // Inicialmente solo 3 copas
let maxCups = 6;
let roundCount = 3; // Número de animaciones por secuencia
let maxRounds = 10;
let playing = false;
let timer;
let timeLeft = 30;

// Elemento del contador en HTML
const timeDisplay = document.getElementById('tiempo');

// Mostrar solo las primeras `currentCups` copas
const mostrarCopasIniciales = () => {
    for (let i = 0; i < maxCups; i++) {
        const copaElemento = document.querySelector(imgClasses[i]);
        copaElemento.style.display = (i < currentCups) ? 'block' : 'none';
    }
}

// Función para obtener un número aleatorio entre 0 y el número actual de copas
const numeroAleatorio = () => {
    return Math.floor(Math.random() * currentCups);
}

// Cambiar la copa a una con animación (sonido)
const cambiarCopaAnimada = () => {
    let nuevoNumero;

    do {
        nuevoNumero = numeroAleatorio();
    } while (nuevoNumero === activeCup);

    const copaElemento = document.querySelector(imgClasses[nuevoNumero]);

    if (activeCup !== -1) {
        const copaAnterior = document.querySelector(imgClasses[activeCup]);
        copaAnterior.src = copasSinSonido[activeCup];
    }

    copaElemento.src = copasSonido[nuevoNumero];
    activeCup = nuevoNumero;

    animationSequence.push(nuevoNumero);

    if (animationSequence.length === roundCount) {
        detenerAnimacion();
        hacerCopasBotones();
        iniciarTemporizador(); // Iniciar el temporizador cuando la secuencia esté completa
    }
}

let intervalId;
const iniciarAnimacion = (intervalo) => {
    animationSequence = [];
    clearInterval(timer); // Reiniciar el temporizador al inicio de una nueva secuencia
    timeLeft = 30; // Reiniciar el tiempo a 30 segundos
    timeDisplay.textContent = timeLeft;
    
    intervalId = setInterval(() => {
        cambiarCopaAnimada();
    }, intervalo);
}

const detenerAnimacion = () => {
    clearInterval(intervalId);
    playing = true;
}

const hacerCopasBotones = () => {
    imgClasses.forEach((imgClass, index) => {
        const copaElemento = document.querySelector(imgClass);
        if (index < currentCups) { // Solo permitir clicks en las copas visibles
            copaElemento.style.cursor = 'pointer';
            copaElemento.addEventListener('click', () => {
                if (playing) {
                    userSequence.push(index);
                    verificarSecuencia();
                }
            });
        }
    });
}

const verificarSecuencia = () => {
    for (let i = 0; i < userSequence.length; i++) {
        if (userSequence[i] !== animationSequence[i]) {
            alert("Game Over");
            resetGame();
            return;
        }
    }

    if (userSequence.length === animationSequence.length) {
        alert("¡Lo hiciste bien!");
        clearInterval(timer);  // Detener el temporizador al completar la secuencia
        siguienteRonda();
    }
}

const siguienteRonda = () => {
    userSequence = [];
    animationCount += roundCount;

    // Si aún no hemos mostrado todas las copas, añadir una nueva
    if (currentCups < maxCups) {
        currentCups++;
        mostrarCopasIniciales(); // Mostrar la siguiente copa
    }

    // Aumentar la longitud de la secuencia si ya están todas las copas visibles
    if (currentCups === maxCups && roundCount < maxCups) {
        roundCount++;
    }

    if (animationCount >= maxRounds) {
        alert("¡Felicitaciones! Has completado el juego.");
        resetGame();
    } else {
        iniciarAnimacion(2000);
    }
}

const resetGame = () => {
    playing = false;
    animationSequence = [];
    userSequence = [];
    animationCount = 0;
    currentCups = 3; // Volver a las 3 copas iniciales
    roundCount = 3; // Restablecer el número de animaciones por secuencia
    timeLeft = 30;
    clearInterval(timer);  // Detener el temporizador si el juego se reinicia
    timeDisplay.textContent = timeLeft;  // Reiniciar el tiempo mostrado
    mostrarCopasIniciales(); // Mostrar solo las copas iniciales
    iniciarAnimacion(2000);
}

// Temporizador de 30 segundos
const iniciarTemporizador = () => {
    clearInterval(timer); // Asegúrate de que no haya temporizadores previos corriendo
    timeLeft = 30; // Reiniciar el tiempo a 30 segundos
    timeDisplay.textContent = timeLeft;
    
    timer = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Game Over - Tiempo agotado");
            resetGame();
        }
    }, 1000);  // Actualizar cada segundo
}

mostrarCopasIniciales(); // Mostrar solo las copas iniciales al inicio del juego
iniciarAnimacion(2000); // Iniciar la animación con 3 copas