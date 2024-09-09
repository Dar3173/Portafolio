document.addEventListener("DOMContentLoaded", () => {
    const $openClose = document.getElementById("open-close"),
          $aside = document.getElementById("aside");

    
    $aside.classList.add("desplegar");

    $openClose.addEventListener("click", () => {
        $aside.classList.toggle("desplegar");
    });
});
