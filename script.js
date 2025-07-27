// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollAnimations();
    initializeSkillBars();
    initializeContactForm();
    initializeParallaxEffects();
});

// Navigation functionality
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation link highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navHeight = navbar.offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const scrollPosition = window.scrollY;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const sectionId = section.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in animation to elements
    const fadeElements = document.querySelectorAll('.about-item, .skill-card, .project-card, .contact-item');
    fadeElements.forEach((element, index) => {
        element.classList.add('fade-in');
        element.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(element);
    });

    // Add slide animations
    const leftElements = document.querySelectorAll('.hero-text');
    leftElements.forEach(element => {
        element.classList.add('slide-in-left');
        observer.observe(element);
    });

    const rightElements = document.querySelectorAll('.hero-image');
    rightElements.forEach(element => {
        element.classList.add('slide-in-right');
        observer.observe(element);
    });
}

// Skill bars animation
function initializeSkillBars() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.skill-progress');
                const percentage = progressBar.getAttribute('data-width');
                
                setTimeout(() => {
                    progressBar.style.width = percentage + '%';
                }, 300);
            }
        });
    }, { threshold: 0.5 });

    skillCards.forEach(card => {
        skillObserver.observe(card);
    });
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            showMessage('Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        showMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
        contactForm.reset();
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show message function
function showMessage(message, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = `form-message ${type}`;
    messageElement.textContent = message;
    
    // Style the message
    messageElement.style.cssText = `
        padding: 12px 16px;
        border-radius: 8px;
        margin-bottom: 20px;
        font-weight: 500;
        text-align: center;
        animation: slideDown 0.3s ease;
        ${type === 'success' ? 
            'background: #f0fff4; color: #22543d; border: 1px solid #9ae6b4;' : 
            'background: #fed7d7; color: #742a2a; border: 1px solid #feb2b2;'}
    `;
    
    // Insert message
    const form = document.getElementById('contact-form');
    form.insertBefore(messageElement, form.firstChild);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageElement.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => {
            messageElement.remove();
        }, 300);
    }, 5000);
}

// Parallax effects
function initializeParallaxEffects() {
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        
        // Hero parallax
        const hero = document.querySelector('.hero');
        if (hero) {
            const heroOffset = scrollTop * 0.5;
            hero.style.transform = `translateY(${heroOffset}px)`;
        }
        
        // Skill cards hover effect enhancement
        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible) {
                const offset = (scrollTop - card.offsetTop) * 0.1;
                card.style.transform = `translateY(${offset}px)`;
            }
        });
    });
}

// Typing animation for hero text
function initializeTypingAnimation() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid white';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                heroTitle.style.borderRight = 'none';
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
}

// Theme switcher (optional enhancement)
function initializeThemeSwitch() {
    const themeSwitch = document.createElement('button');
    themeSwitch.innerHTML = '<i class="fas fa-moon"></i>';
    themeSwitch.className = 'theme-switch';
    themeSwitch.style.cssText = `
        position: fixed;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        cursor: pointer;
        z-index: 1001;
        transition: all 0.3s ease;
        box-shadow: var(--shadow-md);
    `;
    
    document.body.appendChild(themeSwitch);
    
    themeSwitch.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        const icon = themeSwitch.querySelector('i');
        if (document.body.classList.contains('dark-theme')) {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    });
}

// Smooth reveal animation for sections
function initializeSectionReveal() {
    const sections = document.querySelectorAll('section');
    
    const revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.8s ease';
        revealObserver.observe(section);
    });
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
    
    .theme-switch:hover {
        transform: translateY(-50%) scale(1.1);
    }
    
    .nav-link.active {
        color: var(--primary-color);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Initialize all animations when page loads
window.addEventListener('load', function() {
    initializeSectionReveal();
    
    // Add a small delay before starting other animations
    setTimeout(() => {
        initializeTypingAnimation();
        initializeThemeSwitch();
    }, 500);
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll-heavy functions
window.addEventListener('scroll', throttle(function() {
    // Throttled scroll events go here
}, 16)); // ~60fps

// Add loading animation
document.addEventListener('DOMContentLoaded', function() {
    // Create and show loading screen
    const loader = document.createElement('div');
    loader.id = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <p>Loading...</p>
        </div>
    `;
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        color: white;
        font-family: 'Inter', sans-serif;
    `;
    
    const loaderStyle = document.createElement('style');
    loaderStyle.textContent = `
        .loader-content {
            text-align: center;
        }
        .loader-spinner {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(255,255,255,0.3);
            border-top: 3px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    
    document.head.appendChild(loaderStyle);
    document.body.appendChild(loader);
    
    // Hide loader after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                loader.remove();
                loaderStyle.remove();
            }, 500);
        }, 1000);
    });
});
