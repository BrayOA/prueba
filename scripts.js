const phrases = [
    "feliz 21 de  septiembre amor ❤️",
    "Te entrego estas flores amarillas como símbolo de mi amor ❤️",
    "Por más primaveras juntos disfrutando de nuestro amor ❤️",
    "En cada pétalo de esta flor amarilla, hay un pedacito de mi amor por ti 😍",
    "El amarillo de estas flores es el color de la felicidad que siento a tu lado 👩‍❤️‍💋‍👨"
];

const images = [
    'https://w0.peakpx.com/wallpaper/295/544/HD-wallpaper-for-you-cute-flower-yellow-valentine-funny-cat-tulip-pisica.jpg',
    'https://i.pinimg.com/736x/7c/6a/64/7c6a6478e9ca3486b9cafae42f47008f.jpg',
    'https://www.nacion.com/resizer/MxSAnf02I9pCd7co-gXLzP6GzAw=/1440x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gruponacion/5RD77QIUIRAJNHNLGURAOEYIMQ.jpg',
    'https://depor.com/resizer/AyrfhlitYsGi8jDgCj5NL8MpyDk=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BJ5FB4I5WJEWLGZLI7SZJRDMBU.jpg',
    'https://i.pinimg.com/originals/e8/e0/92/e8e092b2dd3f8e1afd68672c3f728702.gif'
];

const correctPassword = "140921"; // Cambia "miContraseña" por la contraseña que desees.

let currentPhraseIndex = 0;
let currentImageIndex = 0;

function changePhrase() {
    const phraseContainer = document.getElementById('phrase-container');
    phraseContainer.textContent = phrases[currentPhraseIndex];
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
}

function changeImage() {
    const displayedImage = document.getElementById('displayed-image');
    displayedImage.src = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

function checkPassword() {
    const passwordInput = document.getElementById('password-input');
    const errorMessage = document.getElementById('error-message');
    const content = document.getElementById('content');

    if (passwordInput.value === correctPassword) {
        document.getElementById('password-prompt').style.display = 'none';
        content.style.display = 'block';
        
        // Inicia el cambio de frases e imágenes
        changePhrase();
        changeImage();
        setInterval(changePhrase, 5000); 
        setInterval(changeImage, 5000); 
    } else {
        errorMessage.style.display = 'block';
    }
}

// Después de 5 segundos, oculta el loader y muestra el prompt de la contraseña.
setTimeout(function() {
    const loaderContainer = document.querySelector('.loader-container');
loaderContainer.style.display = 'none';

    document.getElementById('password-prompt').style.display = 'block';
}, 2000);


let img = ['😍', '❤️', '❣️', '🌻', '👩‍❤️‍💋‍👨', '👨‍💻', '👩‍⚕️'];

document.addEventListener('mousemove', function(e) {
    let body = document.querySelector('body');
    let emoji = document.createElement('span');
    let x = e.clientX; 
    let y = e.clientY;

    emoji.style.left = x + 'px';
    emoji.style.top = y + 'px';

    let icon = img[Math.floor(Math.random() * img.length)];
    emoji.innerText = icon;

    let size = Math.random() * 40;
    emoji.style.fontSize = (7 + size) + 'px';

    body.appendChild(emoji);

    setTimeout(function() {
        emoji.remove();
    }, 2000);
});

window.onload = function() {
    // Asegura que todas las imágenes estén cargadas
    const image = document.getElementById("displayed-image");
    if (image) {
        image.onload = function() {
            image.style.transform = "scale(1)"; // Tamaño original
            image.style.opacity = "1"; // Completamente visible
        }
        // Si la imagen ya está en caché y no dispara el evento onload
        if (image.complete) {
            image.onload();
        }
    }

    // ... el resto de tu código JS ...
};


