// Portfolio JavaScript - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initNavbar();
    initSmoothScrolling();
    initScrollAnimations();
    initContactForm();
    initParticleEffects();
    initTypingEffect();
    initCounters();
    initGalleryHover();
    initDarkMode();
    initEventSearch();
    initMagnateFeatures();
});

// Dark Mode Toggle
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const icon = darkModeToggle.querySelector('i');
    
    // Check for saved dark mode preference
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            showNotification('Modo oscuro activado', 'info');
        } else {
            localStorage.setItem('darkMode', null);
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            showNotification('Modo claro activado', 'info');
        }
    });
}

// Event Search and Filtering
function initEventSearch() {
    const searchInput = document.getElementById('eventSearch');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const eventsGrid = document.getElementById('eventsGrid');
    const noResults = document.getElementById('noResults');
    const eventCards = document.querySelectorAll('[data-category]');
    
    let currentFilter = 'all';
    let currentSearch = '';
    
    // Search functionality
    searchInput.addEventListener('input', function() {
        currentSearch = this.value.toLowerCase();
        filterEvents();
    });
    
    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            currentFilter = this.getAttribute('data-filter');
            filterEvents();
        });
    });
    
    function filterEvents() {
        let visibleCount = 0;
        
        eventCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const title = card.querySelector('h4').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            const categoryText = card.querySelector('.event-category').textContent.toLowerCase();
            
            const matchesSearch = currentSearch === '' || 
                title.includes(currentSearch) || 
                description.includes(currentSearch) || 
                categoryText.includes(currentSearch);
            
            const matchesFilter = currentFilter === 'all' || category === currentFilter;
            
            if (matchesSearch && matchesFilter) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Show/hide no results message
        if (visibleCount === 0) {
            noResults.style.display = 'block';
            eventsGrid.style.display = 'none';
        } else {
            noResults.style.display = 'none';
            eventsGrid.style.display = 'flex';
        }
    }
    
    // Add fadeIn animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
}

// Magnate Features - Enhanced Professional Elements
function initMagnateFeatures() {
    // Add floating badges to hero section
    addFloatingBadges();
    
    // Add achievement counters
    initAchievementCounters();
    
    // Add professional testimonials
    addTestimonials();
    
    // Add interactive timeline
    initTimeline();
    
    // Add success metrics
    initSuccessMetrics();
}

function addFloatingBadges() {
    const heroSection = document.querySelector('.hero-section');
    const badges = [
        { text: 'CEO', icon: 'fas fa-crown', color: '#fbbf24' },
        { text: 'Líder', icon: 'fas fa-star', color: '#3b82f6' },
        { text: 'Innovador', icon: 'fas fa-lightbulb', color: '#10b981' }
    ];
    
    badges.forEach((badge, index) => {
        const badgeElement = document.createElement('div');
        badgeElement.className = 'floating-badge';
        badgeElement.innerHTML = `
            <i class="${badge.icon}" style="color: ${badge.color}"></i>
            <span>${badge.text}</span>
        `;
        badgeElement.style.cssText = `
            position: absolute;
            top: ${20 + index * 15}%;
            right: ${10 + index * 5}%;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 25px;
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
            font-weight: 500;
            color: white;
            z-index: 3;
            animation: floatBadge 3s ease-in-out infinite;
            animation-delay: ${index * 0.5}s;
        `;
        heroSection.appendChild(badgeElement);
    });
    
    // Add floating animation
    const floatStyle = document.createElement('style');
    floatStyle.textContent = `
        @keyframes floatBadge {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(2deg); }
        }
    `;
    document.head.appendChild(floatStyle);
}

function initAchievementCounters() {
    const achievementCards = document.querySelectorAll('.achievement-card');
    
    achievementCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px) scale(1)';
            this.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
        });
    });
}

function addTestimonials() {
    const testimonials = [
        {
            name: "María González",
            position: "CEO, TechCorp",
            text: "Joshua transformó completamente nuestra cultura empresarial con su enfoque en neurociencias.",
            rating: 5
        },
        {
            name: "Carlos Rodríguez",
            position: "Director de Marketing",
            text: "Sus estrategias de persuasión han incrementado nuestras ventas en un 300%.",
            rating: 5
        },
        {
            name: "Ana Martínez",
            position: "Fundadora, StartupXYZ",
            text: "El mejor orador que he escuchado. Su charla sobre liderazgo cambió mi perspectiva.",
            rating: 5
        }
    ];
    
    // Add testimonials section after about section
    const aboutSection = document.getElementById('about');
    const testimonialsSection = document.createElement('section');
    testimonialsSection.className = 'section-padding bg-light';
    testimonialsSection.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center mb-5">
                    <h2 class="section-title">Testimonios</h2>
                    <div class="title-underline"></div>
                    <p class="section-subtitle">Lo que dicen mis clientes y colaboradores</p>
                </div>
            </div>
            <div class="row">
                ${testimonials.map(testimonial => `
                    <div class="col-lg-4 mb-4">
                        <div class="testimonial-card">
                            <div class="testimonial-rating">
                                ${'★'.repeat(testimonial.rating)}
                            </div>
                            <p class="testimonial-text">"${testimonial.text}"</p>
                            <div class="testimonial-author">
                                <h5>${testimonial.name}</h5>
                                <span>${testimonial.position}</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    aboutSection.parentNode.insertBefore(testimonialsSection, aboutSection.nextSibling);
    
    // Add testimonial styles
    const testimonialStyle = document.createElement('style');
    testimonialStyle.textContent = `
        .testimonial-card {
            background: var(--white);
            padding: 2rem;
            border-radius: 15px;
            box-shadow: var(--shadow-light);
            transition: all 0.3s ease;
            height: 100%;
            border-left: 4px solid var(--accent-color);
        }
        
        .dark-mode .testimonial-card {
            background: var(--dark-card);
        }
        
        .testimonial-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-heavy);
        }
        
        .testimonial-rating {
            color: #fbbf24;
            font-size: 1.2rem;
            margin-bottom: 1rem;
        }
        
        .testimonial-text {
            font-style: italic;
            color: var(--gray);
            margin-bottom: 1.5rem;
            line-height: 1.6;
        }
        
        .dark-mode .testimonial-text {
            color: var(--dark-text-secondary);
        }
        
        .testimonial-author h5 {
            color: var(--primary-color);
            margin-bottom: 0.25rem;
        }
        
        .dark-mode .testimonial-author h5 {
            color: var(--dark-text);
        }
        
        .testimonial-author span {
            color: var(--accent-color);
            font-size: 0.9rem;
            font-weight: 500;
        }
    `;
    document.head.appendChild(testimonialStyle);
}

function initTimeline() {
    const timeline = [
        { year: "2015", title: "Inicio en Neurociencias", description: "Comienza su especialización en neurociencias aplicadas al liderazgo" },
        { year: "2018", title: "Primera Charla", description: "Realiza su primera charla profesional sobre liderazgo" },
        { year: "2020", title: "Fundación de Empresa", description: "Fundador de 'Limpiando Mi Barrio'" },
        { year: "2023", title: "Reconocimiento", description: "Premio al Líder del Año" },
        { year: "2024", title: "Expansión", description: "Lanzamiento de programas de neurotecnología" }
    ];
    
    // Add timeline after experience section
    const experienceSection = document.getElementById('experience');
    const timelineSection = document.createElement('section');
    timelineSection.className = 'section-padding';
    timelineSection.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center mb-5">
                    <h2 class="section-title">Trayectoria</h2>
                    <div class="title-underline"></div>
                    <p class="section-subtitle">Mi camino hacia el éxito</p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="timeline">
                        ${timeline.map((item, index) => `
                            <div class="timeline-item ${index % 2 === 0 ? 'left' : 'right'}">
                                <div class="timeline-content">
                                    <div class="timeline-year">${item.year}</div>
                                    <h4>${item.title}</h4>
                                    <p>${item.description}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    experienceSection.parentNode.insertBefore(timelineSection, experienceSection.nextSibling);
    
    // Add timeline styles
    const timelineStyle = document.createElement('style');
    timelineStyle.textContent = `
        .timeline {
            position: relative;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .timeline::after {
            content: '';
            position: absolute;
            width: 6px;
            background: var(--accent-color);
            top: 0;
            bottom: 0;
            left: 50%;
            margin-left: -3px;
        }
        
        .timeline-item {
            padding: 10px 40px;
            position: relative;
            width: 50%;
        }
        
        .timeline-item::after {
            content: '';
            position: absolute;
            width: 25px;
            height: 25px;
            right: -17px;
            background: var(--accent-color);
            border: 4px solid var(--white);
            top: 15px;
            border-radius: 50%;
            z-index: 1;
        }
        
        .dark-mode .timeline-item::after {
            border-color: var(--dark-card);
        }
        
        .timeline-item.left {
            left: 0;
        }
        
        .timeline-item.right {
            left: 50%;
        }
        
        .timeline-item.right::after {
            left: -16px;
        }
        
        .timeline-content {
            padding: 20px 30px;
            background: var(--white);
            position: relative;
            border-radius: 15px;
            box-shadow: var(--shadow-light);
            transition: all 0.3s ease;
        }
        
        .dark-mode .timeline-content {
            background: var(--dark-card);
        }
        
        .timeline-content:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-medium);
        }
        
        .timeline-year {
            background: var(--accent-color);
            color: var(--white);
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-weight: 600;
            display: inline-block;
            margin-bottom: 1rem;
        }
        
        .timeline-content h4 {
            color: var(--primary-color);
            margin-bottom: 0.5rem;
        }
        
        .dark-mode .timeline-content h4 {
            color: var(--dark-text);
        }
        
        .timeline-content p {
            color: var(--gray);
            margin: 0;
        }
        
        .dark-mode .timeline-content p {
            color: var(--dark-text-secondary);
        }
        
        @media screen and (max-width: 768px) {
            .timeline::after {
                left: 31px;
            }
            
            .timeline-item {
                width: 100%;
                padding-left: 70px;
                padding-right: 25px;
            }
            
            .timeline-item.right {
                left: 0%;
            }
            
            .timeline-item.left::after,
            .timeline-item.right::after {
                left: 15px;
            }
        }
    `;
    document.head.appendChild(timelineStyle);
}

function initSuccessMetrics() {
    const metrics = [
        { number: "500+", label: "Charlas Realizadas", icon: "fas fa-microphone" },
        { number: "50+", label: "Empresas Atendidas", icon: "fas fa-building" },
        { number: "1000+", label: "Vidas Impactadas", icon: "fas fa-heart" },
        { number: "25+", label: "Certificaciones", icon: "fas fa-certificate" }
    ];
    
    // Add metrics section before footer
    const footer = document.querySelector('.footer');
    const metricsSection = document.createElement('section');
    metricsSection.className = 'section-padding bg-light';
    metricsSection.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center mb-5">
                    <h2 class="section-title">Métricas de Éxito</h2>
                    <div class="title-underline"></div>
                    <p class="section-subtitle">Números que hablan por sí solos</p>
                </div>
            </div>
            <div class="row">
                ${metrics.map(metric => `
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="metric-card">
                            <div class="metric-icon">
                                <i class="${metric.icon}"></i>
                            </div>
                            <div class="metric-number" data-target="${metric.number.replace('+', '')}">0</div>
                            <div class="metric-label">${metric.label}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    footer.parentNode.insertBefore(metricsSection, footer);
    
    // Add metric styles
    const metricStyle = document.createElement('style');
    metricStyle.textContent = `
        .metric-card {
            background: var(--white);
            padding: 2rem;
            border-radius: 15px;
            text-align: center;
            box-shadow: var(--shadow-light);
            transition: all 0.3s ease;
            border-top: 4px solid var(--accent-color);
        }
        
        .dark-mode .metric-card {
            background: var(--dark-card);
        }
        
        .metric-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-heavy);
        }
        
        .metric-icon {
            width: 80px;
            height: 80px;
            background: var(--gradient-accent);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
            font-size: 2rem;
            color: var(--white);
        }
        
        .metric-number {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--accent-color);
            margin-bottom: 0.5rem;
        }
        
        .metric-label {
            color: var(--gray);
            font-size: 1rem;
            font-weight: 500;
        }
        
        .dark-mode .metric-label {
            color: var(--dark-text-secondary);
        }
    `;
    document.head.appendChild(metricStyle);
    
    // Animate metrics on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const metricNumber = entry.target;
                const target = parseInt(metricNumber.getAttribute('data-target'));
                animateNumber(metricNumber, target);
                observer.unobserve(metricNumber);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.metric-number').forEach(metric => {
        observer.observe(metric);
    });
}

function animateNumber(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + '+';
    }, 50);
}

// Navbar functionality
function initNavbar() {
    const navbar = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 25, 41, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(10, 25, 41, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Active nav link highlighting
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
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
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loading', 'loaded');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.experience-card, .gallery-item, .skill-item, .contact-item, .event-card, .testimonial-card, .metric-card');
    animateElements.forEach(el => {
        el.classList.add('loading');
        observer.observe(el);
    });
}

// Contact form handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Enviando...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                // Show success message
                showNotification('¡Mensaje enviado exitosamente! Te contactaré pronto.', 'success');
                
                // Reset form
                this.reset();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Particle effects for neural network theme
function initParticleEffects() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;
    
    // Create floating particles
    for (let i = 0; i < 20; i++) {
        createParticle(heroSection);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(59, 130, 246, 0.3);
        border-radius: 50%;
        pointer-events: none;
        animation: float 6s ease-in-out infinite;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation-delay: ${Math.random() * 6}s;
    `;
    
    container.appendChild(particle);
}

// Add floating animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
        }
        50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .navbar-nav .nav-link.active {
        color: var(--accent-color) !important;
    }
    
    .navbar-nav .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Typing effect for hero title
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title .highlight');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after a delay
    setTimeout(typeWriter, 1000);
}

// Animated counters for stats
function initCounters() {
    const stats = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element) => {
        const target = parseInt(element.textContent.replace(/\D/g, ''));
        const suffix = element.textContent.replace(/\d/g, '');
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + suffix;
        }, 50);
    };
    
    // Observe stats for animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => observer.observe(stat));
}

// Gallery hover effects
function initGalleryHover() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.neural-network');
    
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbarCollapse.classList.remove('show');
            });
        });
    }
});

// Newsletter subscription
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter .btn');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('click', function(e) {
            e.preventDefault();
            const emailInput = this.parentElement.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (email && email.includes('@')) {
                showNotification('¡Gracias por suscribirte! Te mantendremos informado.', 'success');
                emailInput.value = '';
            } else {
                showNotification('Por favor, ingresa un email válido.', 'error');
            }
        });
    }
});

// Add error notification style
const errorStyle = document.createElement('style');
errorStyle.textContent = `
    .notification-error {
        background: #ef4444 !important;
    }
`;
document.head.appendChild(errorStyle);

// Performance optimization - Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add loading animation for page load
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Animate hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 500);
    }
});

// Add smooth reveal animation for sections
const revealSections = document.querySelectorAll('section');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

revealSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease';
    revealObserver.observe(section);
});

// Add cursor trail effect for neural theme
let mouseX = 0, mouseY = 0;
let trail = [];

document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    if (trail.length < 5) {
        trail.push({ x: mouseX, y: mouseY });
    } else {
        trail.shift();
        trail.push({ x: mouseX, y: mouseY });
    }
    
    updateTrail();
});

function updateTrail() {
    // Remove existing trail elements
    document.querySelectorAll('.cursor-trail').forEach(el => el.remove());
    
    // Create new trail elements
    trail.forEach((pos, index) => {
        const trailElement = document.createElement('div');
        trailElement.className = 'cursor-trail';
        trailElement.style.cssText = `
            position: fixed;
            width: ${6 - index}px;
            height: ${6 - index}px;
            background: rgba(59, 130, 246, ${0.3 - index * 0.05});
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${pos.x}px;
            top: ${pos.y}px;
            transition: all 0.1s ease;
        `;
        document.body.appendChild(trailElement);
    });
}

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: var(--gradient-accent);
    z-index: 10000;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
}); 