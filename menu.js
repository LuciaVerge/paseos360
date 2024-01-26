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


//animacion infinita del slider de logos

document.addEventListener('DOMContentLoaded', function () {
  const brands = document.querySelector('ul.brands');
  const total_brands = brands.children.length;

  document.documentElement.style.setProperty('--total-brand', total_brands);

  for (let i = 0; i < total_brands; i++) {
      brands.appendChild(brands.children[i].cloneNode(true));
  }
})