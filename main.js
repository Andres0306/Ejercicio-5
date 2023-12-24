function cambiarColor(color) {
    var semaforo = document.getElementById('semaforo');
    switch (color) {
      case 'Verde':
        semaforo.style.backgroundImage = 'url(verde.png)';
        break;
      case 'Amarillo':
        semaforo.style.backgroundImage = 'url(amarillo.png)';
        break;
      case 'Rojo':
        semaforo.style.backgroundImage = 'url(rojo.png)';
        break;
    }
    console.log("El semáforo está en " + color);
  }
  
  function simularSemaforo() {
    cambiarColor("Verde");
  
    setTimeout(function () {
      cambiarColor("Amarillo");
  
      setTimeout(function () {
        cambiarColor("Rojo");
  
        setTimeout(function () {
          cambiarColor("Verde");
          simularSemaforo(); // Repetir el ciclo
        }, 2000); // Tiempo en Rojo
      }, 2000); // Tiempo en Amarillo
    }, 2000); // Tiempo en Verde
  }
  
  simularSemaforo(); // Iniciar el ciclo