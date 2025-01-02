window.onload = function() {
    var modal = document.getElementById("modalPopup");
    modal.style.display = "flex"; 
    var modalContent = modal.querySelector('.modal-content');
    setTimeout(() => {
        modalContent.classList.add('show');
    }, 100); // Añadir clase para animación
};

var closeBtn = document.querySelector(".close");
closeBtn.onclick = function() {
    var modal = document.getElementById("modalPopup");
    var modalContent = modal.querySelector('.modal-content');
    modalContent.classList.remove('show');
    setTimeout(() => {
        modal.style.display = "none";
    }, 300); // Esperar que termine la animación
};

window.onclick = function(event) {
    var modal = document.getElementById("modalPopup");
    var modalContent = modal.querySelector('.modal-content');
    if (event.target == modal) {
        modalContent.classList.remove('show');
        setTimeout(() => {
            modal.style.display = "none";
        }, 300); // Esperar que termine la animación
    }
};
