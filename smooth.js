/*// Capturamos el evento de scroll
window.addEventListener('wheel', handleWheelScroll);

// Función para el desplazamiento suave
function handleWheelScroll(event) {
  event.preventDefault(); // Evitamos el desplazamiento predeterminado

  // Obtener la distancia de desplazamiento
  const delta = Math.sign(event.deltaY);
  const scrollDistance = 916; // Distancia de desplazamiento

  // Calcular la posición de desplazamiento
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const newPosition = scrollTop + (scrollDistance * delta);

  // Realizar el desplazamiento suave
  window.scrollTo({
    top: newPosition,
    behavior: 'smooth'
  });
}*/
