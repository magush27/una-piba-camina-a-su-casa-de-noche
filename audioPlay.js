let audiounapiba = document.querySelector('#audioJuego');
var imagen =  document.getElementById("musicaOnOff");
var clickConteo = 0;


function cambiarIconoMusica() {
    if (imagen.getAttribute('src') == "img/soundoff.png")
    {
        imagen.src = "img/soundon.png";
        audiounapiba.play();
        console.log("hola")
    }
    else
    {
        imagen.src = "img/soundoff.png";
        audiounapiba.pause();
    }
}


   
