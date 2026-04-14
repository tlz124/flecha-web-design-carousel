// Project data with detailed information
const projects = [
    {
        id: 0,
        title: "Local Flower Shop",
        category: "Small Business",
        description: "Modern florist website with online ordering and delivery",
        fullDescription: "A beautiful, user-friendly website for a local flower shop featuring an elegant gallery of floral arrangements, easy online ordering with customization options, and delivery scheduling. The site includes information about special occasion packages for weddings, funerals, and events. The design captures elegance and warmth while making it simple for customers to browse and order flowers for any occasion.",
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Online Ordering", "Local SEO"],
        liveLink: "https://tlz124.github.io/Watsons-Flowers/"
    },
    {
        id: 1,
        title: "Mexican Restaurant",
        category: "Small Business",
        description: "Authentic Mexican restaurant with menu and reservation system",
        fullDescription: "A vibrant website for a Mexican restaurant featuring an interactive menu with high-quality food photography, online reservation system, and information about catering services. The design reflects the restaurant's authentic atmosphere with warm colors and engaging visuals. Includes hours of operation, location details, and special events calendar.",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Reservation System", "Menu Display"],
        liveLink: "https://tlz124.github.io/restaurant/"
    },
    {
        id: 2,
        title: "Pet Grooming Salon",
        category: "Small Business",
        description: "Professional pet grooming services with appointment booking",
        fullDescription: "A comprehensive website for a pet grooming business featuring service descriptions, pricing information, and an easy-to-use appointment booking system. The site showcases grooming services for various pet types, includes customer testimonials, and provides care tips for pet owners. The friendly, approachable design appeals to pet lovers while maintaining professionalism.",
        image: "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Appointment Booking", "Service Catalog"],
        liveLink: "https://tlz124.github.io/pet-grooming/"
    },
    {
        id: 3,
        title: "Modern Dental Office",
        category: "Healthcare",
        description: "Contemporary dental practice with patient portal and services",
        fullDescription: "A professional website for a modern dental office featuring comprehensive service descriptions, dentist profiles, patient portal access, and online appointment scheduling. The site includes educational resources about dental health, insurance information, and virtual office tours. The clean, trustworthy design helps patients feel comfortable while emphasizing the practice's expertise and modern technology.",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Patient Portal", "Appointment System"],
        liveLink: "https://tlz124.github.io/dental-office-website/"
    },
    {
        id: 4,
        title: "Fitness Center",
        category: "Small Business",
        description: "Modern fitness business with class schedules and membership options",
        fullDescription: "A dynamic website for a fitness business featuring class schedules, trainer profiles, membership pricing, and online sign-up capabilities. The site showcases fitness programs, includes success stories and testimonials, and provides information about facilities and equipment. The energetic design motivates visitors while making it easy to explore services and join.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Class Scheduling", "Membership Portal"],
        liveLink: "https://tlz124.github.io/fitness/"
    },
    {
        id: 5,
        title: "Architecture Firm",
        category: "Small Business",
        description: "Professional architecture business showcasing portfolio and services",
        fullDescription: "A sophisticated website for an architecture firm featuring a stunning portfolio gallery, detailed service descriptions, and project case studies. The site highlights the firm's design philosophy, team expertise, and past projects with high-quality imagery. The clean, modern design reflects architectural precision while making it easy for potential clients to explore work and request consultations.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Portfolio Gallery", "Project Showcase"],
        liveLink: "https://tlz124.github.io/architecture/"
    },
    {
        id: 6,
        title: "K-12 School Website",
        category: "Education",
        description: "Comprehensive school website for middle and high school students",
        fullDescription: "A modern, full-featured website designed for K-12 schools with a focus on middle and high school students. Features include student portals, parent access to grades and attendance, event calendars, staff directories, club and sports information, and news announcements. The responsive design works seamlessly on mobile devices for students and parents on the go.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Student Portal", "Event Calendar", "CMS"],
        liveLink: "https://tlz124.github.io/school/"
    },
    {
        id: 7,
        title: "Nonprofit Organization",
        category: "Education",
        description: "Versatile nonprofit website template for community organizations",
        fullDescription: "A flexible, professional website designed for nonprofit organizations. Features include mission statement display, program information, volunteer sign-up forms, donation integration, event calendars, and impact stories. The adaptable design can be customized for various causes and community organizations while maintaining a clean, trustworthy appearance that encourages engagement and support.",
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Donation Forms", "Volunteer Management"],
        liveLink: "https://tlz124.github.io/nonprofit/"
    },
    {
        id: 8,
        title: "Orthodontist Practice",
        category: "Healthcare",
        description: "Modern orthodontist website with treatment information and appointment scheduling",
        fullDescription: "A clean, professional website designed for an orthodontist practice. Features include detailed treatment information, before-and-after galleries, appointment scheduling, patient resources, and an FAQ section. The modern design builds trust and makes it easy for patients to learn about orthodontic services and book consultations online.",
        image: "https://tlz124.github.io/orthodontist/istockphoto-1274268165-612x612.webp",
        technologies: ["HTML5", "CSS3", "JavaScript", "Appointment Scheduling", "Patient Portal"],
        liveLink: "https://tlz124.github.io/orthodontist/"
    },
    {
        id: 9,
        title: "Beauty Supply Store",
        category: "Small Business",
        description: "Modern beauty supply website with curated products and elegant design",
        fullDescription: "A sophisticated website for Lumière Beauty Supply featuring curated beauty essentials from top brands. Includes product showcases, shopping categories, bestseller highlights, and a clean, elegant design that emphasizes luxury and quality.",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Product Catalog", "E-commerce Ready"],
        liveLink: "https://tlz124.github.io/Beauty"
    },
    {
        id: 10,
        title: "Contemporary Hair Salon",
        category: "Small Business",
        description: "Elegant hair salon website showcasing services and portfolio",
        fullDescription: "A luxurious website for Atelier Noir, a contemporary hair salon. Features include service listings with pricing, visual portfolio gallery, stylist information, appointment booking system, and sophisticated dark theme design that reflects the salon's modern aesthetic.",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Appointment Booking", "Portfolio Gallery"],
        liveLink: "https://tlz124.github.io/salon"
    },
    {
        id: 11,
        title: "Corporate Law Firm",
        category: "Professional Services",
        description: "Professional law firm website showcasing expertise and legal services",
        fullDescription: "A sophisticated website for Sterling & Associates, a corporate law firm specializing in mergers & acquisitions, securities law, and business litigation. Features include practice area details, attorney profiles, case results, consultation booking, and a professional design that conveys trust and expertise.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Consultation Booking", "Attorney Profiles"],
        liveLink: "https://tlz124.github.io/legal"
    }
];

// ===== Cookie Consent Functionality =====
const cookieConsent = document.getElementById('cookieConsent');
const acceptAllBtn = document.getElementById('acceptAll');
const rejectAllBtn = document.getElementById('rejectAll');
const managePreferencesBtn = document.getElementById('managePreferences');

// Check if user has already made a cookie choice
function checkCookieConsent() {
    const cookieChoice = localStorage.getItem('cookieConsent');
    if (!cookieChoice) {
        // Show cookie banner after a short delay
        setTimeout(() => {
            cookieConsent.classList.remove('hidden');
        }, 1000);
    }
}

acceptAllBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieConsent.classList.add('hidden');
});

rejectAllBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'rejected');
    cookieConsent.classList.add('hidden');
});

managePreferencesBtn.addEventListener('click', () => {
    // For now, just open accept dialog - could be expanded to show preferences modal
    alert('Cookie preferences: You can customize your cookie settings here. For this demo, we only use essential cookies for site functionality.');
    localStorage.setItem('cookieConsent', 'managed');
    cookieConsent.classList.add('hidden');
});

// Initialize cookie consent check
checkCookieConsent();

// ===== Hamburger Menu Functionality =====
const hamburgerBtn = document.getElementById('hamburgerBtn');
const menuOverlay = document.getElementById('menuOverlay');
const closeMenuBtn = document.getElementById('closeMenu');
const menuLinks = document.querySelectorAll('.menu-link');

// Open menu
hamburgerBtn.addEventListener('click', () => {
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close menu
closeMenuBtn.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close menu when clicking a link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close menu when clicking outside
menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ===== Project Modal Functionality =====
const projectModal = document.getElementById('projectModal');
const viewDetailsButtons = document.querySelectorAll('.view-details');

// Open project modal with details
viewDetailsButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const projectId = parseInt(button.getAttribute('data-project'));
        const project = projects[projectId];

        // Populate modal with project data
        document.getElementById('modalImage').src = project.image;
        document.getElementById('modalCategory').textContent = project.category;
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalDescription').textContent = project.description;
        document.getElementById('modalFullDescription').textContent = project.fullDescription;
        
        // Add technologies
        const techContainer = document.getElementById('modalTechnologies');
        techContainer.innerHTML = '';
        project.technologies.forEach(tech => {
            const techTag = document.createElement('span');
            techTag.className = 'tech-tag';
            techTag.textContent = tech;
            techContainer.appendChild(techTag);
        });

        // Update live link - use onclick to force it to work
        const liveLink = document.getElementById('modalLiveLink');
        if (liveLink) {
            liveLink.href = project.liveLink;
            liveLink.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                window.open(project.liveLink, '_blank', 'noopener,noreferrer');
                return false;
            };
        }

        // Show modal
        projectModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// ===== Legal Modals Functionality =====
const privacyModal = document.getElementById('privacyModal');
const accessibilityModal = document.getElementById('accessibilityModal');
const privacyLink = document.getElementById('privacyLink');
const accessibilityLink = document.getElementById('accessibilityLink');

// Open privacy modal
privacyLink.addEventListener('click', (e) => {
    e.preventDefault();
    privacyModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

// Open accessibility modal
accessibilityLink.addEventListener('click', (e) => {
    e.preventDefault();
    accessibilityModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

// Close modal functionality
const closeModalButtons = document.querySelectorAll('.close-modal');

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        if (modalId) {
            document.getElementById(modalId).style.display = 'none';
        } else {
            // Close project modal if no data-modal attribute
            projectModal.style.display = 'none';
        }
        document.body.style.overflow = 'auto';
    });
});

// Close modal when clicking outside (but not on links or content)
window.addEventListener('click', (e) => {
    // Don't close if clicking on a link inside the modal
    if (e.target.tagName === 'A' || e.target.closest('a')) {
        return;
    }
    
    if (e.target === projectModal) {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (e.target === privacyModal) {
        privacyModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (e.target === accessibilityModal) {
        accessibilityModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (projectModal.style.display === 'block') {
            projectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (privacyModal.style.display === 'block') {
            privacyModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (accessibilityModal.style.display === 'block') {
            accessibilityModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (menuOverlay.classList.contains('active')) {
            menuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

// ===== Consultation Form Handling =====
const consultationForm = document.getElementById('consultationForm');




// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for modal links
        if (href === '#privacyModal' || href === '#accessibilityModal') {
            return;
        }
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Add Scroll Effect to Navbar =====
let lastScroll = 0;
const navbar = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// ===== Intersection Observer for Fade-in Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe testimonial cards (kept from original)
const testimonialCards = document.querySelectorAll('.testimonial-card');
testimonialCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});


// =============================================================================
// 3D TURNTABLE CAROUSEL
// =============================================================================
// HOW IT WORKS (desktop):
//   • All 12 project cards are placed as children of .turntable-stage.
//   • Each card slot is rotated around the Y-axis by (360/12 * index) degrees,
//     then pushed outward along Z by RADIUS pixels.  Together this places every
//     card on the perimeter of an invisible circle.
//   • A requestAnimationFrame loop increments the stage's rotateY by a small
//     amount each frame, making the whole circle spin like a lazy Susan.
//   • The card closest to 0° (front / 12-o'clock) is detected each frame and
//     given the class .is-front, which enlarges it and adds the purple glow.
//   • Cards further from the front are faded and scaled down via inline style.
//   • Clicking a card snaps the nearest angle to the front.
//   • Hovering the wrapper pauses auto-rotation.
//
// HOW IT WORKS (mobile ≤768px):
//   • CSS overrides convert the stage into a horizontal flex row.
//   • JS sets translateX on the stage to slide to the active card.
//   • Touch swipe and Prev/Next buttons navigate between cards.
// =============================================================================

(function () {
    'use strict';

    // ── Configuration ──────────────────────────────────────────────────────────
    const RADIUS          = 650;   // px — circle radius (controls spacing)
    const AUTO_SPEED      = 0.18;  // degrees per frame at 60 fps
    const FRONT_SCALE     = 1.0;   // scale of the front card
    const BACK_SCALE      = 0.65;  // scale of the most-distant (back) card
    const FRONT_OPACITY   = 1.0;   // opacity of the front card
    const BACK_OPACITY    = 0.28;  // opacity of the most-distant card
    const MOBILE_BREAKPT  = 768;   // px — switch to flat carousel below this

    // ── DOM refs ────────────────────────────────────────────────────────────────
    const wrapper   = document.getElementById('turntableWrapper');
    const scene     = document.getElementById('turntableScene');
    const stage     = document.getElementById('turntableStage');
    const dotsContainer = document.getElementById('turntableDots');
    const hintEl    = document.getElementById('turntableHint');
    const prevBtn   = document.getElementById('turntablePrev');
    const nextBtn   = document.getElementById('turntableNext');

    if (!wrapper || !stage) return; // bail if HTML not present

    // ── State ───────────────────────────────────────────────────────────────────
    const TOTAL = projects.length;          // 12
    let   currentAngle   = 0;              // current stage rotation in degrees
    let   targetAngle    = 0;              // angle we are easing toward (desktop)
    let   isAutoSpinning = true;           // auto-rotation on/off
    let   isPaused       = false;          // hover pause
    let   rafId          = null;           // requestAnimationFrame handle
    let   isMobile       = window.innerWidth <= MOBILE_BREAKPT;

    // ── Build card DOM ──────────────────────────────────────────────────────────
    // Angle step between adjacent cards (degrees)
    const STEP = 360 / TOTAL;

    // Array to hold references to each card slot element
    const slots = [];
    const dots  = [];

    projects.forEach((project, index) => {

        // ── Slot (the 3D-positioned wrapper) ──
        const slot = document.createElement('div');
        slot.className = 'turntable-card-slot';
        slot.setAttribute('data-index', index);
        slot.setAttribute('role', 'tab');
        slot.setAttribute('aria-label', project.title);

        // Position on the circle: rotate by index*STEP then push out by RADIUS
        // (this is applied once; the stage itself rotates in the animation loop)
        slot.style.transform =
            `translateX(-50%) translateY(-50%) rotateY(${index * STEP}deg) translateZ(${RADIUS}px)`;

        // ── Card ──
        const card = document.createElement('div');
        card.className = 'turntable-card';

        // Image area
        const imgWrap = document.createElement('div');
        imgWrap.className = 'turntable-card__image';

        const img = document.createElement('img');
        img.src   = project.image;
        img.alt   = project.title;
        img.loading = index < 3 ? 'eager' : 'lazy'; // load first few eagerly

        // Overlay with "View Details" button
        const overlay = document.createElement('div');
        overlay.className = 'turntable-card__overlay';

        const viewBtn = document.createElement('button');
        viewBtn.className = 'view-details';
        viewBtn.setAttribute('data-project', index);
        viewBtn.innerHTML = `View Details <span class="arrow-icon">→</span>`;

        // ── Wire up the "View Details" button ──
        // It opens the existing project modal (same logic as original code)
        viewBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // don't also trigger slot click
            openProjectModal(index);
        });

        overlay.appendChild(viewBtn);
        imgWrap.appendChild(img);
        imgWrap.appendChild(overlay);

        // Info area
        const info = document.createElement('div');
        info.className = 'turntable-card__info';

        const cat = document.createElement('span');
        cat.className = 'turntable-card__category';
        cat.textContent = project.category;

        const title = document.createElement('h3');
        title.className = 'turntable-card__title';
        title.textContent = project.title;

        const desc = document.createElement('p');
        desc.className = 'turntable-card__description';
        desc.textContent = project.description;

        info.appendChild(cat);
        info.appendChild(title);
        info.appendChild(desc);

        // Assemble card
        card.appendChild(imgWrap);
        card.appendChild(info);
        slot.appendChild(card);
        stage.appendChild(slot);
        slots.push(slot);

        // ── Navigation dot ──
        const dot = document.createElement('button');
        dot.className = 'turntable-dot';
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-label', `Go to ${project.title}`);
        dot.addEventListener('click', () => rotateTo(index));
        dotsContainer.appendChild(dot);
        dots.push(dot);

        // ── Clicking the slot itself (not the button) also rotates to it ──
        slot.addEventListener('click', (e) => {
            // Ignore if user clicked the view-details button (already handled)
            if (e.target.closest('.view-details')) return;
            rotateTo(index);
        });
    });

    // ── Open the project detail modal ──────────────────────────────────────────
    // This mirrors the original viewDetailsButtons logic so the modal works
    // identically whether cards are in a grid or the turntable.
    function openProjectModal(projectId) {
        const project = projects[projectId];

        document.getElementById('modalImage').src           = project.image;
        document.getElementById('modalCategory').textContent = project.category;
        document.getElementById('modalTitle').textContent   = project.title;
        document.getElementById('modalDescription').textContent = project.description;
        document.getElementById('modalFullDescription').textContent = project.fullDescription;

        const techContainer = document.getElementById('modalTechnologies');
        techContainer.innerHTML = '';
        project.technologies.forEach(tech => {
            const tag = document.createElement('span');
            tag.className  = 'tech-tag';
            tag.textContent = tech;
            techContainer.appendChild(tag);
        });

        const liveLink = document.getElementById('modalLiveLink');
        if (liveLink) {
            liveLink.href = project.liveLink;
            liveLink.onclick = function (e) {
                e.preventDefault();
                e.stopPropagation();
                window.open(project.liveLink, '_blank', 'noopener,noreferrer');
                return false;
            };
        }

        document.getElementById('projectModal').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // ── Desktop: rotation helpers ───────────────────────────────────────────────

    /**
     * Returns the normalised angle difference in [-180, 180].
     * Positive = clockwise, negative = counter-clockwise.
     */
    function shortestDelta(from, to) {
        let delta = ((to - from) % 360 + 360) % 360;
        if (delta > 180) delta -= 360;
        return delta;
    }

    /**
     * Snap card `index` to the front (0°) by setting targetAngle.
     * The front position is where the stage rotation makes card[index]
     * face the viewer, i.e. stage needs to be at -(index * STEP) degrees.
     */
    function rotateTo(index) {
        if (isMobile) {
            // Mobile: updateUI handles the translate
            updateUI();
            return;
        }

        // Compute the raw target
        const raw = -(index * STEP);
        // Use shortest path from currentAngle
        const delta = shortestDelta(currentAngle, raw);
        targetAngle = currentAngle + delta;

        // Stop auto-spin once user explicitly picks a card
        isAutoSpinning = false;
    }

    /**
     * Given the current stage rotation, determine which card is closest to the
     * front (0°) and return its index.
     */
    function getFrontIndex(angle) {
        // Normalise to [0, 360)
        const norm = ((angle % 360) + 360) % 360;
        // Each card's ideal front angle is -(index * STEP) mod 360
        let bestIndex = 0;
        let bestDist  = Infinity;
        for (let i = 0; i < TOTAL; i++) {
            const cardFront = ((-(i * STEP)) % 360 + 360) % 360;
            let dist = Math.abs(norm - cardFront);
            if (dist > 180) dist = 360 - dist;
            if (dist < bestDist) {
                bestDist  = dist;
                bestIndex = i;
            }
        }
        return bestIndex;
    }

    /**
     * Update visual state of all card slots (scale, opacity, .is-front class)
     * based on the current stage rotation.
     */
    function updateCardVisuals(angle) {
        const norm = ((angle % 360) + 360) % 360;

        slots.forEach((slot, i) => {
            // Each card's natural "front" angle (in stage-rotation space)
            const cardFront = ((-(i * STEP)) % 360 + 360) % 360;

            // Angular distance from the front (0 = at front, 180 = at back)
            let dist = Math.abs(norm - cardFront);
            if (dist > 180) dist = 360 - dist; // normalise to [0, 180]

            // t = 0 → front, t = 1 → back
            const t = dist / 180;

            // Interpolate scale and opacity
            const scale   = FRONT_SCALE   - t * (FRONT_SCALE   - BACK_SCALE);
            const opacity = FRONT_OPACITY - t * (FRONT_OPACITY - BACK_OPACITY);

            // Apply inline styles — CSS transition on the card handles smoothness
            slot.style.scale   = scale;    // CSS scale (separate from transform)
            slot.style.opacity = opacity;
            // z-index: front card is on top; back card is at the bottom
            slot.style.zIndex  = Math.round((1 - t) * 100);

            // Mark the front card
            if (dist < STEP / 2) {
                slot.classList.add('is-front');
            } else {
                slot.classList.remove('is-front');
            }
        });
    }

    // ── Desktop animation loop ──────────────────────────────────────────────────

    function desktopAnimate() {
        if (!isMobile) {
            if (!isPaused) {
                if (isAutoSpinning) {
                    // Continuous slow spin
                    currentAngle += AUTO_SPEED;
                    targetAngle   = currentAngle; // keep target in sync
                } else {
                    // Ease toward target angle
                    const delta = shortestDelta(currentAngle, targetAngle);
                    if (Math.abs(delta) > 0.05) {
                        currentAngle += delta * 0.08; // 8% per frame easing
                    } else {
                        currentAngle = targetAngle;
                    }
                }
            }

            // Apply the rotation to the stage element
            stage.style.transform =
                `translateX(-50%) translateY(-50%) rotateY(${currentAngle}deg)`;

            // Update card visuals and UI
            updateCardVisuals(currentAngle);
            updateUI();
        }

        rafId = requestAnimationFrame(desktopAnimate);
    }

    // ── Hover pause ─────────────────────────────────────────────────────────────
    wrapper.addEventListener('mouseenter', () => { isPaused = true;  });
    wrapper.addEventListener('mouseleave', () => { isPaused = false; });

    // ── Mobile: touch start (kept here for touchStartX/Time tracking) ────────────
    let touchStartX    = 0;
    let touchStartTime = 0;

    stage.addEventListener('touchstart', (e) => {
        touchStartX    = e.touches[0].clientX;
        touchStartTime = Date.now();
    }, { passive: true });

    // ── Resize handler — switch between desktop and mobile modes ────────────────
    function handleResize() {
        const wasMobile = isMobile;
        isMobile = window.innerWidth <= MOBILE_BREAKPT;

        if (wasMobile !== isMobile) {
            if (isMobile) {
                // Entering mobile: reset 3D, apply flat translate
                stage.style.transform = '';
                slots.forEach((slot) => {
                    slot.style.transform = '';
                    slot.style.scale     = '';
                    slot.style.opacity   = '';
                });
                updateUI(); // updateUI handles the mobile translate
            } else {
                // Entering desktop: reset flat translate, resume 3D
                stage.style.transform =
                    `translateX(-50%) translateY(-50%) rotateY(${currentAngle}deg)`;
                slots.forEach((slot, i) => {
                    slot.style.transform =
                        `translateX(-50%) translateY(-50%) rotateY(${i * STEP}deg) translateZ(${RADIUS}px)`;
                });
                isAutoSpinning = true;
            }
        }
        updateUI();
    }

    window.addEventListener('resize', handleResize);

    // ── Hint text animation ─────────────────────────────────────────────────────
    // Show hint briefly after a 1.5s delay, then fade it out
    if (hintEl) {
        setTimeout(() => {
            hintEl.classList.add('is-visible');
            setTimeout(() => {
                hintEl.classList.remove('is-visible');
                hintEl.classList.add('is-hidden');
            }, 3500); // visible for 3.5 s
        }, 1500);
    }

    // ── Filter buttons — rebuild visible set and re-index the carousel ──────────
    // Strategy: maintain a `visibleIndices` array (subset of 0–11).
    // The carousel always shows only those cards; non-visible slots are hidden.
    // rotateTo / prev / next all operate on visibleIndices positions.

    let visibleIndices = projects.map((_, i) => i); // all 12 by default
    let activeVisible  = 0; // position within visibleIndices

    /**
     * Apply the current filter: hide non-matching slots, rebuild dots,
     * snap to the first matching card.
     */
    function applyFilter(filterValue) {
        // Rebuild visible set
        visibleIndices = projects
            .map((p, i) => ({ p, i }))
            .filter(({ p }) => filterValue === 'all' || p.category === filterValue)
            .map(({ i }) => i);

        activeVisible = 0;

        // Show/hide slots
        slots.forEach((slot, i) => {
            if (visibleIndices.includes(i)) {
                slot.style.visibility = '';
                slot.style.pointerEvents = '';
            } else {
                slot.style.visibility = 'hidden';
                slot.style.pointerEvents = 'none';
            }
        });

        // Rebuild dots for visible cards only
        dotsContainer.innerHTML = '';
        dots.length = 0;

        visibleIndices.forEach((origIdx, visPos) => {
            const dot = document.createElement('button');
            dot.className = 'turntable-dot';
            dot.setAttribute('role', 'tab');
            dot.setAttribute('aria-label', `Go to ${projects[origIdx].title}`);
            dot.addEventListener('click', () => {
                activeVisible = visPos;
                rotateToVisible(visPos);
            });
            dotsContainer.appendChild(dot);
            dots.push(dot);
        });

        // Snap to first visible card
        if (visibleIndices.length > 0) {
            rotateToVisible(0);
        }
    }

    /**
     * Rotate to a position within the *visible* set (not the raw project index).
     */
    function rotateToVisible(visPos) {
        activeVisible = ((visPos % visibleIndices.length) + visibleIndices.length) % visibleIndices.length;
        const origIdx = visibleIndices[activeVisible];
        rotateTo(origIdx);
        updateUI();
    }

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyFilter(btn.getAttribute('data-filter'));
        });
    });

    // ── Arrow buttons (flanking the dots — always visible on desktop & mobile) ──
    // Wire the existing prev/next buttons to work on desktop too (not just mobile)
    prevBtn.addEventListener('click', () => {
        if (isMobile) {
            // Mobile slides through all visible cards
            const newPos = (activeVisible - 1 + visibleIndices.length) % visibleIndices.length;
            rotateToVisible(newPos);
        } else {
            const newPos = (activeVisible - 1 + visibleIndices.length) % visibleIndices.length;
            rotateToVisible(newPos);
        }
    });

    nextBtn.addEventListener('click', () => {
        const newPos = (activeVisible + 1) % visibleIndices.length;
        rotateToVisible(newPos);
    });

    // ── Keyboard navigation (updated to use visibleIndices) ─────────────────────
    wrapper.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            rotateToVisible((activeVisible - 1 + visibleIndices.length) % visibleIndices.length);
        } else if (e.key === 'ArrowRight') {
            rotateToVisible((activeVisible + 1) % visibleIndices.length);
        } else if (e.key === 'Enter' || e.key === ' ') {
            openProjectModal(visibleIndices[activeVisible]);
        }
    });

    // ── Mobile touch swipe (updated) ─────────────────────────────────────────────
    stage.addEventListener('touchend', (e) => {
        if (!isMobile) return;
        const dx       = e.changedTouches[0].clientX - touchStartX;
        const duration = Date.now() - touchStartTime;
        if (Math.abs(dx) > 40 && duration < 400) {
            if (dx < 0) {
                rotateToVisible((activeVisible + 1) % visibleIndices.length);
            } else {
                rotateToVisible((activeVisible - 1 + visibleIndices.length) % visibleIndices.length);
            }
        }
    });

    // ── updateUI: highlight correct dot and sync mobile translate ────────────────
    function updateUI() {
        // Which raw project index is at the front?
        const frontRawIndex = isMobile
            ? (visibleIndices[activeVisible] ?? 0)
            : getFrontIndex(currentAngle);

        // Find its position within visibleIndices
        const frontVisPos = visibleIndices.indexOf(frontRawIndex);

        dots.forEach((dot, i) => {
            if (i === frontVisPos) {
                dot.classList.add('is-active');
                dot.setAttribute('aria-selected', 'true');
            } else {
                dot.classList.remove('is-active');
                dot.setAttribute('aria-selected', 'false');
            }
        });

        slots.forEach((slot, i) => {
            slot.setAttribute('aria-selected', i === frontRawIndex ? 'true' : 'false');
        });

        // Mobile: translate stage so active visible card is centered
        if (isMobile) {
            // Find the position of the active card in the full slot list
            // On mobile the stage is a flex row of ALL slots (visible + hidden)
            // We slide to the raw slot index
            const rawIdx = visibleIndices[activeVisible] ?? 0;
            stage.style.transform = `translateX(${-rawIdx * 100}%)`;

            // Mark is-front
            slots.forEach((slot, i) => {
                if (i === rawIdx) slot.classList.add('is-front');
                else slot.classList.remove('is-front');
            });
        }
    }

    // ── Initialise ──────────────────────────────────────────────────────────────
    // applyFilter builds the dots and sets visibility; call it once on load
    applyFilter('all');

    // Kick off the RAF loop (desktop uses it; on mobile it just idles)
    desktopAnimate();

})(); // end turntable IIFE


// ===== Portfolio Filter Functionality (legacy grid) — superseded by turntable =====
// The filter logic above (inside the turntable IIFE) replaces the old grid filter.
// The code below is kept as a no-op stub so existing references don't throw errors.


// ===== Hero Canvas Node Network Effect =====
(function() {
    const heroCanvas = document.getElementById('heroCanvas');
    if (!heroCanvas) return;
    
    const ctx = heroCanvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null, radius: 150 };
    let animationFrameId = null;
    
    function resizeCanvas() {
        heroCanvas.width = heroCanvas.offsetWidth;
        heroCanvas.height = heroCanvas.offsetHeight;
        initParticles();
    }
    
    function initParticles() {
        const width = heroCanvas.width;
        const height = heroCanvas.height;
        const isMobile = width <= 768;
        const isPortrait = width < height;
        
        // Adjust particle count based on screen size and orientation
        let particleCount;
        if (isMobile) {
            particleCount = isPortrait ? 30 : 40; // Fewer in portrait mode
        } else {
            particleCount = 80;
        }
        
        // Calculate connection distance based on screen size
        const connectionDistance = isMobile ? 100 : 150;
        
        particles = Array.from({ length: particleCount }, () => new Particle(connectionDistance));
    }
    
    class Particle {
        constructor(connectionDistance) {
            this.connectionDistance = connectionDistance;
            this.x = Math.random() * heroCanvas.width;
            this.y = Math.random() * heroCanvas.height;
            
            // Slower movement on mobile for smoother performance
            const speedMultiplier = window.innerWidth <= 768 ? 0.3 : 0.5;
            this.vx = (Math.random() - 0.5) * speedMultiplier;
            this.vy = (Math.random() - 0.5) * speedMultiplier;
            
            // Slightly larger nodes on mobile for better visibility
            this.radius = window.innerWidth <= 768 ? 2.5 : 2;
            this.baseRadius = this.radius;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            // Bounce off edges
            if (this.x < 0 || this.x > heroCanvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > heroCanvas.height) this.vy *= -1;
            
            // Clamp position within bounds
            this.x = Math.max(0, Math.min(heroCanvas.width, this.x));
            this.y = Math.max(0, Math.min(heroCanvas.height, this.y));
            
            // Mouse interaction (desktop only for performance)
            if (mouse.x !== null && window.innerWidth > 768) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < mouse.radius) {
                    // Repel from mouse
                    const angle = Math.atan2(dy, dx);
                    const force = (mouse.radius - distance) / mouse.radius;
                    this.x -= Math.cos(angle) * force * 2;
                    this.y -= Math.sin(angle) * force * 2;
                    this.radius = this.baseRadius * (1 + force * 0.5);
                } else {
                    this.radius = this.baseRadius;
                }
            } else {
                this.radius = this.baseRadius;
            }
        }
        
        draw() {
            // Glowing node effect
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'rgba(102, 126, 234, 0.8)';
            ctx.fillStyle = 'rgba(102, 126, 234, 0.9)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
        }
        
        connect(otherParticle) {
            const dx = otherParticle.x - this.x;
            const dy = otherParticle.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < this.connectionDistance) {
                // Fade connection based on distance
                const opacity = (1 - distance / this.connectionDistance) * 0.5;
                
                // Gradient line for better visual effect
                const gradient = ctx.createLinearGradient(this.x, this.y, otherParticle.x, otherParticle.y);
                gradient.addColorStop(0, `rgba(102, 126, 234, ${opacity})`);
                gradient.addColorStop(0.5, `rgba(118, 75, 162, ${opacity})`);
                gradient.addColorStop(1, `rgba(102, 126, 234, ${opacity})`);
                
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.stroke();
            }
        }
    }
    
    // Mouse/Touch tracking
    heroCanvas.addEventListener('mousemove', (e) => {
        const rect = heroCanvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    
    heroCanvas.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });
    
    // Touch support (simplified for mobile)
    heroCanvas.addEventListener('touchstart', (e) => {
        if (window.innerWidth <= 768) return; // Disable on mobile for performance
        const rect = heroCanvas.getBoundingClientRect();
        const touch = e.touches[0];
        mouse.x = touch.clientX - rect.left;
        mouse.y = touch.clientY - rect.top;
    });
    
    heroCanvas.addEventListener('touchmove', (e) => {
        if (window.innerWidth <= 768) return;
        e.preventDefault();
        const rect = heroCanvas.getBoundingClientRect();
        const touch = e.touches[0];
        mouse.x = touch.clientX - rect.left;
        mouse.y = touch.clientY - rect.top;
    });
    
    heroCanvas.addEventListener('touchend', () => {
        mouse.x = null;
        mouse.y = null;
    });
    
    resizeCanvas();
    
    // Debounced resize handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resizeCanvas, 250);
    });
    
    // Animation loop with performance optimization
    let lastFrameTime = 0;
    const targetFPS = window.innerWidth <= 768 ? 30 : 60; // Lower FPS on mobile
    const frameInterval = 1000 / targetFPS;
    
    function animateParticles(currentTime) {
        animationFrameId = requestAnimationFrame(animateParticles);
        
        const deltaTime = currentTime - lastFrameTime;
        
        if (deltaTime < frameInterval) return;
        
        lastFrameTime = currentTime - (deltaTime % frameInterval);
        
        // Clear with slight trail effect
        ctx.fillStyle = 'rgba(26, 35, 62, 0.05)';
        ctx.fillRect(0, 0, heroCanvas.width, heroCanvas.height);
        
        // Update and draw particles
        particles.forEach((particle, i) => {
            particle.update();
            particle.draw();
            
            // Connect to nearby particles
            for (let j = i + 1; j < particles.length; j++) {
                particle.connect(particles[j]);
            }
        });
    }
    
    animateParticles(0);
    
    // Pause animation when tab is not visible (performance optimization)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
        } else {
            if (!animationFrameId) {
                animateParticles(0);
            }
        }
    });
})();

const dateInput = document.getElementById('preferred_date');
dateInput.addEventListener('focus', function() {
    this.type = 'date';
});
dateInput.addEventListener('blur', function() {
    if (!this.value) {
        this.type = 'text';
    }
});


