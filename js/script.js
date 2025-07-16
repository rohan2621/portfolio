'use strict';

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize all functionality
        initNavigation();
        initScrollAnimations();
        initMobileMenu();
        initScrollIndicator();
        
        console.log('Portfolio website initialized successfully');
    } catch (error) {
        console.error('Error initializing portfolio:', error);
    }
});

// Navigation functionality
function initNavigation() {
    try {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section[id]');
        
        // Smooth scroll for navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').slice(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const headerOffset = 70;
                    const elementPosition = targetSection.offsetTop;
                    const offsetPosition = elementPosition - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const navMenu = document.querySelector('.nav-menu');
                    const hamburger = document.querySelector('.hamburger');
                    if (navMenu && hamburger) {
                        navMenu.classList.remove('active');
                        hamburger.classList.remove('active');
                    }
                }
            });
        });
        
        // Update active navigation link on scroll
        window.addEventListener('scroll', function() {
            let current = '';
            const scrollPosition = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
        
    } catch (error) {
        console.error('Error initializing navigation:', error);
    }
}

// Scroll animations using Intersection Observer
function initScrollAnimations() {
    try {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Add staggered animation for project cards
                    if (entry.target.classList.contains('projects-grid')) {
                        const cards = entry.target.querySelectorAll('.project-card');
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0)';
                            }, index * 100);
                        });
                    }
                    
                    // Add staggered animation for skills
                    if (entry.target.classList.contains('skills-grid')) {
                        const categories = entry.target.querySelectorAll('.skill-category');
                        categories.forEach((category, index) => {
                            setTimeout(() => {
                                category.style.opacity = '1';
                                category.style.transform = 'translateY(0)';
                            }, index * 150);
                        });
                    }
                }
            });
        }, observerOptions);
        
        // Observe sections and elements
        const elementsToObserve = document.querySelectorAll('section, .project-card, .skill-category');
        elementsToObserve.forEach(el => {
            // Set initial state for project cards and skill categories
            if (el.classList.contains('project-card') || el.classList.contains('skill-category')) {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'all 0.6s ease-out';
            }
            observer.observe(el);
        });
        
    } catch (error) {
        console.error('Error initializing scroll animations:', error);
    }
}

// Mobile menu functionality
function initMobileMenu() {
    try {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', function() {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
            
            // Close menu on window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        }
        
    } catch (error) {
        console.error('Error initializing mobile menu:', error);
    }
}

// Scroll indicator functionality
function initScrollIndicator() {
    try {
        const scrollIndicator = document.querySelector('.scroll-indicator');
        
        if (scrollIndicator) {
            // Hide scroll indicator when scrolling down
            window.addEventListener('scroll', function() {
                const scrollPosition = window.scrollY;
                const opacity = Math.max(0, 1 - scrollPosition / 300);
                scrollIndicator.style.opacity = opacity;
            });
            
            // Click to scroll to next section
            scrollIndicator.addEventListener('click', function() {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
        
    } catch (error) {
        console.error('Error initializing scroll indicator:', error);
    }
}

// Navbar background on scroll
window.addEventListener('scroll', function() {
    try {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        }
    } catch (error) {
        console.error('Error updating navbar on scroll:', error);
    }
});

// Typing animation for hero title (optional enhancement)
function initTypingAnimation() {
    try {
        const nameElement = document.querySelector('.name');
        if (nameElement) {
            const text = nameElement.textContent;
            nameElement.textContent = '';
            nameElement.style.opacity = '1';
            
            let index = 0;
            const typeSpeed = 100;
            
            function typeWriter() {
                if (index < text.length) {
                    nameElement.textContent += text.charAt(index);
                    index++;
                    setTimeout(typeWriter, typeSpeed);
                }
            }
            
            // Start typing animation after initial delay
            setTimeout(typeWriter, 1000);
        }
    } catch (error) {
        console.error('Error initializing typing animation:', error);
    }
}

// Parallax effect for hero section (optional enhancement)
function initParallaxEffect() {
    try {
        const hero = document.querySelector('.hero');
        if (hero) {
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                hero.style.transform = `translateY(${rate}px)`;
            });
        }
    } catch (error) {
        console.error('Error initializing parallax effect:', error);
    }
}

// Smooth reveal animations for elements
function revealOnScroll() {
    try {
        const reveals = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
        
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    } catch (error) {
        console.error('Error in reveal on scroll:', error);
    }
}

// Add scroll event listener for reveal animations
window.addEventListener('scroll', revealOnScroll);

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledReveal = throttle(revealOnScroll, 100);
window.addEventListener('scroll', throttledReveal);

// Add loading animation
window.addEventListener('load', function() {
    try {
        document.body.classList.add('loaded');
        
        // Optional: Add a loading screen that fades out
        const loader = document.querySelector('.loader');
        if (loader) {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
            }, 1000);
        }
    } catch (error) {
        console.error('Error handling page load:', error);
    }
});

// Error handling for images
document.addEventListener('DOMContentLoaded', function() {
    try {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('error', function() {
                console.warn('Image failed to load:', this.src);
                // You could set a fallback image here
                // this.src = 'path/to/fallback-image.jpg';
            });
        });
    } catch (error) {
        console.error('Error setting up image error handling:', error);
    }
});

// Contact form handling (if a form is added later)
function initContactForm() {
    try {
        const contactForm = document.querySelector('#contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(this);
                const data = Object.fromEntries(formData);
                
                // Here you would typically send the data to a server
                console.log('Contact form submitted:', data);
                
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Thank you for your message! I\'ll get back to you soon.';
                this.appendChild(successMessage);
                
                // Reset form
                this.reset();
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            });
        }
    } catch (error) {
        console.error('Error initializing contact form:', error);
    }
}

// Initialize contact form if present
document.addEventListener('DOMContentLoaded', initContactForm);

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    try {
        // ESC key closes mobile menu
        if (e.key === 'Escape') {
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
    } catch (error) {
        console.error('Error handling keyboard navigation:', error);
    }
});

// Console welcome message
console.log(`
🚀 Welcome to Rohan's Portfolio!
📧 Contact: timalsinarohan9@gmail.com
🔗 GitHub: https://github.com/rohan2621
💼 LinkedIn: https://www.linkedin.com/in/rohan2621/

Built with ❤️ using HTML, CSS, and JavaScript
`);
