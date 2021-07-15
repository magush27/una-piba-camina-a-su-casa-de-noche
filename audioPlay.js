let audiounapiba = document.querySelector('#audioJuego')

function reproducirAudio(){
    audiounapiba.volume = 0.2;
    audiounapiba.play()
    console.log("Reproducir audio")
}

document.addEventListener('click', reproducirAudio)