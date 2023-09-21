const phrases = [
    "feliz 21 fe setiembre amor",
    "teamo mucho mi bb hermosa",
    "Llegó la primavera y tu sonrisa alumbra más que un sol radiante",
    "Por más primaveras juntos disfrutando de nuestro amor y compañía",
    "Te entrego estas flores amarillas como símbolo de mi amor."
];

const images = [
    'https://img.asmedia.epimg.net/resizer/lc1JIpe8HVd0mYqlJMtTrexdKK8=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/33T3W4YVIZDDXC6XBGJT7MFWD4.jpg',
    'https://www.sorprendelima.pe/cdn/shop/articles/MAY3373_1445x.jpg?v=1664254563',
    'https://www.nacion.com/resizer/MxSAnf02I9pCd7co-gXLzP6GzAw=/1440x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gruponacion/5RD77QIUIRAJNHNLGURAOEYIMQ.jpg',
    'https://depor.com/resizer/AyrfhlitYsGi8jDgCj5NL8MpyDk=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BJ5FB4I5WJEWLGZLI7SZJRDMBU.jpg',
    'https://www.elheraldodechiapas.com.mx/doble-via/r6mjh8-flores-amarillas.jpeg/ALTERNATES/LANDSCAPE_1140/flores%20amarillas.jpeg'
];

const correctPassword = "BRITDBRAY14"; // Cambia "miContraseña" por la contraseña que desees.

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
}, 5000);