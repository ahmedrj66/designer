// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header Background Change on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Contact Form Submission Animation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show a simple loading animation
    const button = e.target.querySelector('button');
    button.textContent = 'Sending...';
    button.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for your message! I will get back to you soon.');
        button.textContent = 'Send Message';
        button.disabled = false;
        e.target.reset();
    }, 1000); // Simulate an API call
});


/* Basic Reset */
