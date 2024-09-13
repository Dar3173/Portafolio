document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll('.container-disenos');

    const observerOptions = {
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);


    containers.forEach(container => {
        observer.observe(container);
    });
});
