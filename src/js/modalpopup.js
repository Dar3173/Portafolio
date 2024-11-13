    window.onload = function() {
    var modal = document.getElementById("modalPopup");
    modal.style.display = "block"; 
    };

    var closeBtn = document.querySelector(".close");
    closeBtn.onclick = function() {
    var modal = document.getElementById("modalPopup");
    modal.style.display = "none";
    };

    window.onclick = function(event) {
    var modal = document.getElementById("modalPopup");
    if (event.target == modal) {
    modal.style.display = "none"; 
    }
    };

