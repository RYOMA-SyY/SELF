// Theme Toggle Functionality (supports multiple toggle buttons, e.g. top bar + bottom dock)
document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll(".theme-toggle-btn");
    if (!toggles.length) return;

    function paint() {
        const isDark = document.body.classList.contains("dark-mode");
        toggles.forEach((btn) => {
            const moonIcon = btn.querySelector(".moon-icon");
            const sunIcon = btn.querySelector(".sun-icon");
            if (moonIcon) moonIcon.style.display = isDark ? "none" : "block";
            if (sunIcon) sunIcon.style.display = isDark ? "block" : "none";
        });
    }

    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark-mode") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
    }
    paint();

    // Toggle theme on button click
    toggles.forEach((toggle) => {
        toggle.addEventListener("click", () => {
            const isDarkMode = document.body.classList.contains("dark-mode");

            if (isDarkMode) {
                // Switch to light mode
                document.body.classList.remove("dark-mode");
                document.body.classList.add("light-mode");
                localStorage.setItem("theme", "light-mode");
            } else {
                // Switch to dark mode
                document.body.classList.remove("light-mode");
                document.body.classList.add("dark-mode");
                localStorage.setItem("theme", "dark-mode");
            }
            paint();
        });
    });
});
