// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('nav-menu-active');
            navToggle.classList.toggle('nav-toggle-active');
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only prevent default for anchor links
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = 70; // Height of fixed header
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
                
                // Close mobile menu if open
                if (navMenu.classList.contains('nav-menu-active')) {
                    navMenu.classList.remove('nav-menu-active');
                    navToggle.classList.remove('nav-toggle-active');
                }
            }
        });
    });
    
    // Header background on scroll
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });
    }
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Let Netlify handle the form submission
            // This is just for user feedback
            const submitBtn = this.querySelector('button[type="submit"]');
            
            if (submitBtn) {
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                // Re-enable after a short delay (Netlify will redirect)
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 3000);
            }
        });
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.work-item, .stat-item, .about-text, .contact-info');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Stats counter animation
    const statsNumbers = document.querySelectorAll('.stat-number');
    
    const animateStats = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalNumber = target.textContent;
                const number = parseInt(finalNumber.replace(/\D/g, ''));
                const suffix = finalNumber.replace(/\d/g, '');
                
                if (number && !target.classList.contains('animated')) {
                    target.classList.add('animated');
                    animateCounter(target, 0, number, suffix, 2000);
                }
            }
        });
    };
    
    const statsObserver = new IntersectionObserver(animateStats, {
        threshold: 0.5
    });
    
    statsNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
    
    function animateCounter(element, start, end, suffix, duration) {
        const startTime = performance.now();
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const current = Math.floor(start + (end - start) * easeOutCubic(progress));
            element.textContent = current + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        requestAnimationFrame(update);
    }
    
    function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }
});

// Add CSS for mobile navigation
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 70px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 70px);
            background-color: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            transition: left 0.3s ease;
            z-index: 999;
        }
        
        .nav-menu-active {
            left: 0;
        }
        
        .nav-toggle-active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .nav-toggle-active span:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle-active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
        
        .nav-link {
            font-size: 1.25rem;
        }
    }
    
    .header-scrolled {
        background-color: rgba(255, 255, 255, 0.98) !important;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

document.head.appendChild(style);