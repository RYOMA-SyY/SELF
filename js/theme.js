// Theme Toggle Functionality
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    if (!themeToggle) return;

    const moonIcon = themeToggle.querySelector(".moon-icon");
    const sunIcon = themeToggle.querySelector(".sun-icon");

    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark-mode") {
        document.body.classList.add("dark-mode");
        if (moonIcon) moonIcon.style.display = "none";
        if (sunIcon) sunIcon.style.display = "block";
    } else {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        if (moonIcon) moonIcon.style.display = "block";
        if (sunIcon) sunIcon.style.display = "none";
    }

    // Toggle theme on button click
    themeToggle.addEventListener("click", () => {
        const isDarkMode = document.body.classList.contains("dark-mode");
        
        if (isDarkMode) {
            // Switch to light mode
            document.body.classList.remove("dark-mode");
            document.body.classList.add("light-mode");
            localStorage.setItem("theme", "light-mode");
            if (moonIcon) moonIcon.style.display = "block";
            if (sunIcon) sunIcon.style.display = "none";
        } else {
            // Switch to dark mode
            document.body.classList.remove("light-mode");
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark-mode");
            if (moonIcon) moonIcon.style.display = "none";
            if (sunIcon) sunIcon.style.display = "block";
        }
    });
});
