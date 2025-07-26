document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-links a, .header .logo, .btn').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.hash !== "") {
                e.preventDefault();
                const hash = this.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
                // Close burger menu if open on click
                if (window.innerWidth <= 768) {
                    const navLinks = document.querySelector('.nav-links');
                    const burger = document.querySelector('.burger-menu');
                    navLinks.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                }
            }
        });
    });

    // Burger menu functionality
    const burger = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navLinksLi = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle nav
        navLinks.classList.toggle('nav-active');

        // Animate links
        navLinksLi.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger animation
        burger.classList.toggle('toggle');
    });


    // Typing effect for tagline (optional)
    const typingTextElement = document.querySelector('.typing-text');
    if (typingTextElement) {
        const professions = ["Web Developer", "UI/UX Designer", "Front-end Developer", "Problem Solver"];
        let professionIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentProfession = professions[professionIndex];
            const currentText = isDeleting
                ? currentProfession.substring(0, charIndex - 1)
                : currentProfession.substring(0, charIndex + 1);

            typingTextElement.textContent = currentText;

            const typeSpeed = isDeleting ? 50 : 150;

            if (!isDeleting && charIndex === currentProfession.length) {
                setTimeout(() => isDeleting = true, 1000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                professionIndex = (professionIndex + 1) % professions.length;
            }

            charIndex += isDeleting ? -1 : 1;
            setTimeout(type, typeSpeed);
        }

        type(); // Start the typing effect
    }
});
