const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    menuBtn.textContent = nav.classList.contains("active")
        ? "vicky@debian:~$ tree"
        : "vicky@debian:~$ ls";
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuBtn.textContent = "vicky@debian:~$ ls";
    });
});

// Smooth reveal
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: .1 });

document.querySelectorAll(".content-section").forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = ".7s";
    observer.observe(section);
});
