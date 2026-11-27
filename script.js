
document.addEventListener("DOMContentLoaded", () => {

    // Animasi elemen ketika halaman di-scroll
    const revealTargets = document.querySelectorAll(
        ".section-content, .skill-card, .language-card, .project-card, .certificate-card, .contact-card"
    );

    revealTargets.forEach((element) => {
        element.classList.add("reveal");
    });

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries, currentObserver) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        currentObserver.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -35px 0px"
            }
        );

        revealTargets.forEach((element) => {
            observer.observe(element);
        });

    } else {
        revealTargets.forEach((element) => {
            element.classList.add("visible");
        });
    }

    // Navigasi aktif sesuai section yang sedang dibuka
    const sections = document.querySelectorAll(
        "#home, #about, #skills, #languages, #projects, #certificates, #contact"
    );

    const navLinks = document.querySelectorAll(".nav-menu a");

    if ("IntersectionObserver" in window) {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    navLinks.forEach((link) => {
                        const isCurrent =
                            link.getAttribute("href") === `#${entry.target.id}`;

                        link.classList.toggle("active", isCurrent);
                    });
                });
            },
            {
                rootMargin: "-35% 0px -55% 0px"
            }
        );

        sections.forEach((section) => {
            sectionObserver.observe(section);
        });
    }

});
