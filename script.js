

  var images = document.getElementsByClassName("image");

  // Agregar el evento click a cada imagen
  Array.from(images).forEach(function(image) {
    image.addEventListener("dblclick", toggleFullScreen);
  });
  
  // Función para alternar pantalla completa
  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      // Entrar en pantalla completa
      if (this.requestFullscreen) {
        this.requestFullscreen();
      } else if (this.mozRequestFullScreen) { // Firefox
        this.mozRequestFullScreen();
      } else if (this.webkitRequestFullscreen) { // Chrome, Safari y Opera
        this.webkitRequestFullscreen();
      } else if (this.msRequestFullscreen) { // Internet Explorer / Edge
        this.msRequestFullscreen();
      }
    } else {
      // Salir de pantalla completa
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // Chrome, Safari y Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // Internet Explorer / Edge
        document.msExitFullscreen();
      }
    }
  }

  jQuery(document).ready(function() {
    var offset = 160;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.up-icon').fadeIn(duration);
        } else {
            jQuery('.up-icon').fadeOut(duration);
        }
    });
    
    jQuery('.up-icon').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});

  