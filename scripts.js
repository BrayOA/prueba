const cuetes = document.querySelectorAll('.cuete');

function reubicarYAnimar() {
    cuetes.forEach(cuete => {
        // Asigna una posición aleatoria en la ventana para cada cuete
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);
        
        cuete.style.left = `${x}px`;
        cuete.style.top = `${y}px`;
        
        // Reinicia la animación
        cuete.style.animation = 'none';
        setTimeout(() => {
            cuete.style.animation = 'explosion 1s forwards';
        }, 10);
    });
}

const mensajes = [
    'Te amo, mi amor',
    'Apuich bb',
    'xd amor'
];

let indiceMensaje = 0;

function toggleGreeting() {
    const greetingElement = document.getElementById('greeting');
    
    greetingElement.classList.add('fade-out');

    setTimeout(() => {
        greetingElement.textContent = mensajes[indiceMensaje];
        greetingElement.classList.remove('fade-out');
        
        // Incrementar el índice y resetearlo si es necesario
        indiceMensaje++;
        if (indiceMensaje >= mensajes.length) {
            indiceMensaje = 0;
        }
    }, 500);  // La duración de la transición es de 0.5 segundos, así que esperamos ese tiempo antes de cambiar el texto.
}

// Cambia el contenido cada 5 segundos
setInterval(toggleGreeting, 5000);
