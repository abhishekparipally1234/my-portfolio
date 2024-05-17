document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Skill bar animation
    window.addEventListener('scroll', () => {
        const skillsSection = document.querySelector('.skills');
        const skillsSectionTop = skillsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (skillsSectionTop < windowHeight - 100) {
            document.querySelectorAll('.skill-bar').forEach(bar => {
                const width = bar.dataset.width;
                bar.style.width = width + '%';
            });
        }
    });

    // Example of another interactive feature
    document.querySelector('.card').addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease-in-out';
    });

    document.querySelector('.card').addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});
