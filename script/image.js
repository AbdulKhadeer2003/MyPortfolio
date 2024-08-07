document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById("image");
    const section = document.getElementById("about-section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                image.classList.add("animate");
            } else {
                image.classList.remove("animate");
            }
        });
    }, { threshold:0.5 }); // Adjust threshold as needed

    observer.observe(section);
});
