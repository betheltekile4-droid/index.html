const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Mobile navigation menu
menuBtn.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuBtn.textContent = isOpen ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );
});

// Close the menu after selecting a section
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open navigation");
    });
});

// Automatically display the current year
document.getElementById("year").textContent =
    new Date().getFullYear();