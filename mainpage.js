document.addEventListener("DOMContentLoaded", () => {
    // Get elements
    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");

    // Check if elements exist before applying event listeners
    if (menuBtn && navMenu) {
        // Toggle menu on hamburger click
        menuBtn.addEventListener("click", () => {
        console.log("Hamburger was clicked"); // ← Does this show up?
        navMenu.classList.toggle("active");
        menuBtn.classList.toggle("open");
});

        // Optional: Close menu when a nav link is clicked
        const navLinks = navMenu.querySelectorAll("a");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                menuBtn.classList.remove("open");
            });
        });
    } else {
        console.error("Error: Menu button or navigation menu not found!");
    }
});
