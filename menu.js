//visibilidad del menu hamburguesa

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
})

cerrar.addEventListener("click" , () => {
    nav.classList.remove("visible");
})

//Animacion menu hamburguesa en scroll

/*let ubicacionPrincipal= window.scrollY;

window.addEventListener('scroll',function(){
  let ubicacionActual= window.scrollY;

  if(ubicacionPrincipal <= ubicacionActual){
    jQuery('#abrir').fadeOut(500);
  }else{
    jQuery('#abrir').fadeIn(500);
  }

  ubicacionPrincipal=ubicacionActual;
})*/
