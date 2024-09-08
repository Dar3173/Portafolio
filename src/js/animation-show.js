document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.container-disenos .imagenes');

    const observerOptions = {
      threshold: 0.1 // Se activa cuando el 10% del elemento está visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transform = 'scale(1)';
        } else {
          entry.target.style.transform = 'scale(0)';
        }
      });
    }, observerOptions);

    // Observa cada imagen seleccionada
    images.forEach(image => {
      observer.observe(image);
    });
  });
