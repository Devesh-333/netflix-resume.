/* ===== CSS RESET & VARIABLES ===== */
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    /* Colors */
    --color-primary: #000000;
    --color-text: #FFFFFF;
    --color-accent: #E50914;
    --color-secondary: #CCCCCC;
    --color-dark-gray: #141414;
    --color-medium-gray: #333333;
    
    /* Typography */
    --font-primary: 'Bebas Neue', cursive;
    --font-secondary: 'Roboto', sans-serif;
    
    /* Transitions */
    --transition-fast: 0.2s ease-out;
    --transition-medium: 0.4s ease-out;
    --transition-slow: 0.8s ease-out;
    
    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 3rem;
    --spacing-xl: 4rem;
    --spacing-xxl: 6rem;
    
    /* Shadows */
    --netflix-glow: 0 0 20px rgba(229, 9, 20, 0.5);
    --card-shadow: 0 8px 32px rgba(0, 0, 0, 0.7);
    
    /* Border radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    
    /* Z-index */
    --z-header: 1000;
    --z-modal: 2000;
    --z-overlay: 100;
}

/* ===== BASE STYLES ===== */
html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: var(--font-secondary);
    background-color: var(--color-primary);
    color: var(--color-text);
    line-height: 1.6;
    overflow-x: hidden;
}

/* ===== TYPOGRAPHY ===== */
h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-primary);
    font-weight: 400;
    line-height: 1.2;
}

.section__title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    color: var(--color-text);
    margin-bottom: var(--spacing-lg);
    text-transform: uppercase;
    letter-spacing: 2px;
}

/* ===== LAYOUT ===== */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
}

.section {
    padding: var(--spacing-xxl) 0;
    position: relative;
}

/* ===== HEADER ===== */
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: var(--z-header);
    background: linear-gradient(to bottom, rgba(0,0,0,0.9), transparent);
    transition: background var(--transition-medium);
}

.header--scrolled {
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(10px);
}

.header__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-sm) var(--spacing-md);
}

.header__brand .header__logo {
    font-family: var(--font-primary);
    font-size: 2rem;
    color: var(--color-accent);
    font-weight: bold;
}

.header__menu {
    display: flex;
    list-style: none;
    gap: var(--spacing-lg);
}

.header__link {
    color: var(--color-text);
    text-decoration: none;
    font-weight: 500;
    transition: color var(--transition-fast);
    position: relative;
}

.header__link:hover {
    color: var(--color-accent);
}

.header__link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--color-accent);
    transition: width var(--transition-medium);
}

.header__link:hover::after {
    width: 100%;
}

.header__mobile-toggle {
    display: none !important;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--spacing-xs);
}

.header__mobile-toggle span {
    width: 25px;
    height: 3px;
    background: var(--color-text);
    margin: 3px 0;
    transition: var(--transition-fast);
}

/* ===== HERO SECTION ===== */
.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.hero__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at center, rgba(229, 9, 20, 0.1) 0%, rgba(0, 0, 0, 0.9) 70%);
    animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 1; }
}

.hero__content {
    text-align: center;
    z-index: 2;
    max-width: 800px;
    padding: 0 var(--spacing-md);
}

.hero__name {
    font-size: clamp(3rem, 8vw, 6rem);
    margin-bottom: var(--spacing-md);
    background: linear-gradient(45deg, var(--color-text), var(--color-accent));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: fadeInUp 1s ease-out;
}

.hero__tagline {
    font-size: clamp(1.1rem, 2.5vw, 1.4rem);
    margin-bottom: var(--spacing-lg);
    color: var(--color-secondary);
    animation: fadeInUp 1s ease-out 0.3s both;
}

.hero__cta {
    display: inline-block;
    padding: 1rem 2rem;
    background: var(--color-accent);
    color: var(--color-text);
    text-decoration: none;
    border-radius: var(--radius-sm);
    font-weight: 600;
    transition: all var(--transition-medium);
    animation: fadeInUp 1s ease-out 0.6s both;
    box-shadow: var(--netflix-glow);
}

.hero__cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 30px rgba(229, 9, 20, 0.8);
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

/* ===== POSTER CARDS ===== */
.poster-card {
    background: var(--color-dark-gray);
    border-radius: var(--radius-lg);
    overflow: hidden;
    transition: transform var(--transition-medium);
    box-shadow: var(--card-shadow);
    position: relative;
    aspect-ratio: 2/3;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.poster-card:hover {
    transform: scale(1.05);
    box-shadow: var(--netflix-glow), var(--card-shadow);
}

.poster-card__image-container {
    position: relative;
    aspect-ratio: 2/3;
    overflow: hidden;
    flex: 0 0 auto;
}

.poster-card__image {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--color-medium-gray), var(--color-dark-gray));
    background-size: cover;
    background-position: center;
    transition: transform var(--transition-medium);
    object-fit: cover;
}

.poster-card__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-medium);
}

.poster-card:hover .poster-card__image,
.poster-card:hover .poster-card__image img {
    transform: scale(1.1);
}

.poster-card__overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
    padding: var(--spacing-md);
    transform: translateY(100%);
    transition: transform var(--transition-medium);
}

.poster-card:hover .poster-card__overlay {
    transform: translateY(0);
}

.poster-card__title {
    font-family: var(--font-primary);
    font-size: 1.5rem;
    color: var(--color-accent);
    margin-bottom: var(--spacing-xs);
}

.poster-card__subtitle {
    color: var(--color-secondary);
    font-size: 0.9rem;
}

.poster-card__details {
    padding: var(--spacing-md);
    flex: 1;
    display: flex;
    flex-direction: column;
}

.poster-card__heading {
    font-size: 1.3rem;
    margin-bottom: var(--spacing-xs);
    color: var(--color-text);
    line-height: 1.3;
}

.poster-card__company {
    color: var(--color-accent);
    font-weight: 600;
    margin-bottom: var(--spacing-xs);
}

.poster-card__duration {
    color: var(--color-secondary);
    font-size: 0.9rem;
    display: block;
    margin-bottom: var(--spacing-sm);
}

.poster-card__description {
    color: var(--color-secondary);
    font-size: 0.95rem;
    flex: 1;
    line-height: 1.4;
}

/* ===== EDUCATION SECTION ===== */
.education__card {
    max-width: 600px;
    margin: 0 auto;
}

/* ===== CAROUSEL ===== */
.carousel {
    position: relative;
    margin: var(--spacing-lg) 0;
    --carousel-gap: 24px;
}

.carousel__container {
    overflow: hidden;
    border-radius: var(--radius-lg);
    position: relative;
}

.carousel__track {
    display: flex;
    gap: var(--carousel-gap);
    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    will-change: transform;
    /* Center the track content on desktop/tablet */
    justify-content: center;
}

.carousel__item {
    flex: 0 0 auto;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    min-width: 0; /* Prevent flex item from growing */
}

.carousel__nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.8);
    border: 2px solid transparent;
    color: var(--color-text);
    font-size: 1.5rem;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
    transition: all var(--transition-fast);
    z-index: 10;
    opacity: 0;
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: auto;
}

.carousel:hover .carousel__nav:not(:disabled),
.carousel:focus-within .carousel__nav:not(:disabled) {
    opacity: 1;
}

.carousel__nav:hover:not(:disabled) {
    background: var(--color-accent);
    border-color: var(--color-accent);
    box-shadow: var(--netflix-glow);
    transform: translateY(-50%) scale(1.1);
}

.carousel__nav:focus {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
    opacity: 1;
}

.carousel__nav:disabled {
    opacity: 0.2;
    cursor: not-allowed;
    pointer-events: none;
}

.carousel__nav--prev {
    left: -24px;
}

.carousel__nav--next {
    right: -24px;
}

/* Pagination dots */
.carousel__pagination {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: var(--spacing-md);
}

.carousel__dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    border: none;
    cursor: pointer;
    transition: all var(--transition-fast);
    position: relative;
}

.carousel__dot:hover {
    background: rgba(255, 255, 255, 0.6);
    transform: scale(1.2);
}

.carousel__dot:focus {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
}

.carousel__dot--active {
    background: var(--color-accent);
    box-shadow: 0 0 8px rgba(229, 9, 20, 0.5);
}

.carousel__dot--active::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border: 2px solid var(--color-accent);
    border-radius: 50%;
    opacity: 0.3;
    animation: pulse-ring 2s ease-out infinite;
}

@keyframes pulse-ring {
    0% {
        transform: translate(-50%, -50%) scale(0.8);
        opacity: 1;
    }
    100% {
        transform: translate(-50%, -50%) scale(1.8);
        opacity: 0;
    }
}

/* Enhanced mobile slider for projects section */
@media (max-width: 768px) {
    .projects {
        /* Match certifications card sizing - roughly single card per view on mobile */
        --card-vw: calc(100vw - 4rem); /* Matches badges-grid with container padding (2rem each side) */
        --slider-pad: calc((100vw - var(--card-vw)) / 2);
        /* Prevent bleeding outside section */
        overflow: hidden;
    }
    
    .projects .carousel {
        position: relative;
        margin: var(--spacing-lg) 0;
    }
    
    .projects .carousel__container {
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-snap-stop: always;
        overscroll-behavior-x: contain;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: thin;
        scrollbar-color: var(--color-accent) transparent;
        border-radius: 0;
        /* Center cards using computed padding */
        padding: 0 var(--slider-pad);
        scroll-padding-left: var(--slider-pad);
        scroll-padding-right: var(--slider-pad);
        touch-action: pan-x;
    }
    
    .projects .carousel__track {
        display: flex;
        gap: 16px;
        align-items: stretch;
        padding: 0;
        /* Remove desktop centering on mobile */
        justify-content: flex-start;
    }
    
    .projects .carousel__item {
        flex: 0 0 var(--card-vw);
        min-width: var(--card-vw);
        max-width: var(--card-vw);
        scroll-snap-align: center;
        scroll-snap-stop: always;
        border-radius: inherit;
        transform: translateZ(0);
        backface-visibility: hidden;
        will-change: transform;
        /* Match certifications aspect ratio */
        aspect-ratio: 2 / 3;
    }
    
    /* Optimize poster images for mobile */
    .projects .poster-card__image {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: inherit;
        user-select: none;
        pointer-events: none;
        transform: translateZ(0);
    }
    
    .projects .carousel__container::-webkit-scrollbar {
        height: 4px;
    }
    
    .projects .carousel__container::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 2px;
    }
    
    .projects .carousel__container::-webkit-scrollbar-thumb {
        background: var(--color-accent);
        border-radius: 2px;
    }
    
    /* Hide desktop navigation arrows on mobile */
    .projects .carousel__nav {
        display: none !important;
    }
    
    /* Mobile slider arrows */
    .projects .mobile-slider__nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.7);
        border: 1px solid rgba(229, 9, 20, 0.3);
        color: var(--color-text);
        font-size: 1.2rem;
        width: 44px;
        height: 44px;
        min-width: 44px;
        min-height: 44px;
        border-radius: 50%;
        cursor: pointer;
        transition: all var(--transition-fast);
        z-index: 15;
        opacity: 0.8;
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        outline: none;
    }
    
    .projects .mobile-slider__nav:hover,
    .projects .mobile-slider__nav:focus {
        background: var(--color-accent);
        border-color: var(--color-accent);
        opacity: 1;
        transform: translateY(-50%) scale(1.05);
    }
    
    .projects .mobile-slider__nav:focus {
        box-shadow: 0 0 0 2px var(--color-accent);
    }
    
    .projects .mobile-slider__nav--prev {
        left: 8px;
    }
    
    .projects .mobile-slider__nav--next {
        right: 8px;
    }
    
    .projects .mobile-slider__nav:disabled {
        opacity: 0.3;
        cursor: not-allowed;
        pointer-events: none;
    }
    
    /* Mobile pagination dots - REMOVED per user request */
    .projects .mobile-slider__dots {
        display: none !important; /* Hide dots entirely */
    }
    /* Respect reduced motion */
    @media (prefers-reduced-motion: reduce) {
        .projects .carousel__container {
            scroll-behavior: auto;
        }
        
        .projects .mobile-slider__nav:hover,
        .projects .mobile-slider__nav:focus {
            transform: translateY(-50%);
        }
        
        .projects .carousel__item {
            will-change: auto;
        }
    }
}

/* Hide mobile slider elements on desktop */
@media (min-width: 769px) {
    .projects .mobile-slider__nav,
    .projects .mobile-slider__dots {
        display: none;
    }
}

/* ===== BADGES GRID ===== */
.badges-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-md);
    margin-top: var(--spacing-lg);
}

.badge-card {
    background: var(--color-dark-gray);
    border-radius: var(--radius-lg);
    overflow: hidden;
    transition: all var(--transition-medium);
    border: 2px solid transparent;
}

.badge-card:hover {
    border-color: var(--color-accent);
    box-shadow: var(--netflix-glow);
    transform: translateY(-5px);
}

.badge-card__image {
    aspect-ratio: 16/9;
    background: linear-gradient(135deg, var(--color-medium-gray), var(--color-dark-gray));
}

.badge-card__title {
    padding: var(--spacing-md);
    font-family: var(--font-primary);
    font-size: 1.2rem;
    text-align: center;
    color: var(--color-text);
}

/* ===== CERTIFICATIONS SECTION OVERRIDES ===== */
.certifications .badge-card {
    aspect-ratio: 2 / 3;
    position: relative;
    overflow: hidden;
    border-radius: inherit;
}

.certifications .badge-card__image-container {
    position: absolute;
    inset: 0;
    margin: 0;
    padding: 0;
    line-height: 0;
}

.certifications .badge-card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    background: linear-gradient(135deg, var(--color-medium-gray), var(--color-dark-gray));
}

/* Financial Analytics card specific - remove hidden layout row and force full-bleed */
.certifications .badge-card[aria-label="Financial Analytics certification"] {
    position: relative;
    aspect-ratio: 2 / 3;
    display: block; /* Remove any grid/flex layout rows */
}

.certifications .badge-card[aria-label="Financial Analytics certification"] .badge-card__image-container {
    position: absolute;
    inset: 0;
    margin: 0;
    padding: 0;
    border-radius: inherit;
    overflow: hidden;
    line-height: 0; /* Kill inline-image baseline */
}

.certifications .badge-card[aria-label="Financial Analytics certification"] .badge-card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transform: scale(1.14);
    transform-origin: center bottom;
    object-position: center 60%;
}

/* Visual mask to cover any sub-pixel seam */
.certifications .badge-card[aria-label="Financial Analytics certification"] .badge-card__image-container::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: #000;
    z-index: 1;
}

.certifications .badge-card__title {
    display: none;
}

/* ===== SKILLS SECTION ===== */
/* Reduce spacing under section title */
.skills .section__title {
    margin-bottom: var(--spacing-md); /* Reduced from --spacing-lg */
}

/* Filter Pills */
.skills-filters {
    display: flex;
    justify-content: center;
    gap: var(--spacing-xs);
    margin-bottom: var(--spacing-lg);
    flex-wrap: wrap;
}

.filter-pill {
    background: var(--color-medium-gray);
    color: var(--color-secondary);
    border: 1px solid transparent;
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--radius-lg);
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 180ms ease-out;
    min-height: 44px;
    min-width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    position: relative;
    overflow: hidden;
}

.filter-pill::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: #E50914;
    transition: all 200ms cubic-bezier(0.18, 0.6, 0.2, 1);
    transform: translateX(-50%);
}

.filter-pill:hover {
    background: var(--color-dark-gray);
    color: var(--color-text);
    border-color: rgba(229, 9, 20, 0.3);
    box-shadow: 0 0 8px rgba(229, 9, 20, 0.2);
}

.filter-pill:focus {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
}

.filter-pill--active {
    background: var(--color-accent);
    color: var(--color-text);
    border-color: var(--color-accent);
    box-shadow: 0 0 12px rgba(229, 9, 20, 0.4);
}

.filter-pill--active::before {
    width: 100%;
    box-shadow: 0 0 8px rgba(229, 9, 20, 0.6);
}

/* Skills Grid - now flexbox container for groups */
.skills-grid {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
}

/* Skill Groups - simplified */
.skill-group {
    width: 100%;
    text-align: center;
    /* DEFAULT VISIBILITY - always show */
    opacity: 1;
    transform: none;
    visibility: visible;
    pointer-events: auto;
}

.skill-group__label {
    font-size: 0.85rem;
    color: var(--color-secondary);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: var(--spacing-sm);
    font-weight: 600;
    font-family: var(--font-secondary);
    /* DEFAULT VISIBILITY - always show */
    opacity: 1;
    transform: none;
    visibility: visible;
}

.skill-group__chips {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--spacing-sm);
    row-gap: var(--spacing-sm);
}

/* Skill Chips - simplified to match Strengths pattern with enhanced glow */
.skill-chip {
    background: var(--color-dark-gray);
    color: var(--color-text);
    border: 1px solid transparent;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-lg);
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition: all var(--transition-medium);
    /* Ensure minimum tap target */
    min-height: 44px;
    min-width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    /* Text styling */
    white-space: nowrap;
    font-family: var(--font-secondary);
    /* DEFAULT VISIBILITY - always show */
    opacity: 1;
    transform: none;
    visibility: visible;
    pointer-events: auto;
    /* Setup for streak effects */
    position: relative;
    overflow: hidden;
}

/* Streak-lines effect layer */
.skill-chip::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    pointer-events: none;
    opacity: 0;
    background: 
        repeating-linear-gradient(
            -10deg,
            transparent 0,
            transparent 8px,
            rgba(229, 9, 20, 0.6) 8px,
            rgba(229, 9, 20, 0.6) 9px,
            transparent 9px,
            transparent 24px
        ),
        repeating-linear-gradient(
            -8deg,
            transparent 0,
            transparent 12px,
            rgba(229, 9, 20, 0.4) 12px,
            rgba(229, 9, 20, 0.4) 13px,
            transparent 13px,
            transparent 30px
        ),
        repeating-linear-gradient(
            -12deg,
            transparent 0,
            transparent 6px,
            rgba(229, 9, 20, 0.5) 6px,
            rgba(229, 9, 20, 0.5) 7px,
            transparent 7px,
            transparent 20px
        );
    transform: translateX(-100%);
    transition: transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),
                opacity 180ms ease-out;
    will-change: transform, opacity;
    z-index: -1;
}

/* Chip hover and focus interactions - enhanced red glow */
.skill-chip:hover,
.skill-chip:focus {
    transform: scale(1.02);
    border-color: #E50914;
    box-shadow: 
        0 0 0 1px #E50914,
        0 0 8px rgba(229, 9, 20, 0.8),
        0 0 24px rgba(229, 9, 20, 0.45),
        0 0 48px rgba(229, 9, 20, 0.25);
    outline: none;
}

/* Animate streak lines on hover/focus */
.skill-chip:hover::before,
.skill-chip:focus::before {
    opacity: 0.8;
    transform: translateX(0);
    transition: transform 320ms cubic-bezier(0.25, 0.8, 0.25, 1) 0ms,
                opacity 250ms ease-out 0ms;
}

/* Fade streaks to subtle resting state after initial animation */
.skill-chip:hover::before {
    animation: streakFadeToRest 600ms ease-out 350ms forwards;
}

@keyframes streakFadeToRest {
    to {
        opacity: 0.2;
    }
}

/* Strong keyboard focus ring - enhanced */
.skill-chip:focus {
    box-shadow: 
        0 0 0 3px #E50914,
        0 0 8px rgba(229, 9, 20, 0.8),
        0 0 24px rgba(229, 9, 20, 0.45),
        0 0 48px rgba(229, 9, 20, 0.25);
}

/* Respect reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
    .skills {
        --skills-entrance-delay: 0ms;
    }
    
    .skill-chip,
    .skill-group,
    .skill-group__label {
        /* Force immediate visibility for reduced motion */
        opacity: 1 !important;
        transform: none !important;
        visibility: visible !important;
        transition: opacity 200ms ease-out, background-color 200ms ease-out, border-color 200ms ease-out;
    }
    
    .skill-chip:hover,
    .skill-chip:focus {
        transform: none;
        transition: background-color 160ms ease-out, border-color 160ms ease-out, box-shadow 160ms ease-out;
    }
    
    .skill-chip:active {
        transform: none;
        border-color: var(--color-accent);
        transition: border-color 120ms ease-out;
    }
    
    .skill-chip::before {
        display: none;
    }
    
    .skill-chip::after {
        display: none;
    }
    
    .filter-pill {
        transition: background-color 200ms ease-out, border-color 200ms ease-out;
    }
    
    .skill-chip {
        transition: background-color 200ms ease-out, border-color 200ms ease-out, box-shadow 200ms ease-out;
    }
    
    .skill-group--hiding,
    .skill-group--showing {
        transform: none;
        transition: opacity 160ms ease-out;
    }
}

/* Hidden state for filtered groups - simple opacity toggle */
.skill-group--hidden {
    opacity: 0;
    pointer-events: none;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .skill-group__chips {
        gap: var(--spacing-xs);
        row-gap: var(--spacing-xs);
    }
    
    .skills-grid {
        gap: var(--spacing-md);
    }
    
    .filter-pill {
        font-size: 0.85rem;
        padding: calc(var(--spacing-xs) - 2px) var(--spacing-sm);
    }
    
    .skill-chip {
        font-size: 0.9rem;
        padding: calc(var(--spacing-sm) - 2px) var(--spacing-sm);
    }
}

/* ===== STRENGTH CARDS ===== */
.strengths-grid {
    display: grid;
    gap: var(--spacing-lg);
    margin-top: var(--spacing-lg);
    grid-template-columns: repeat(4, 1fr); /* ≥1024px: 4 columns */
}

/* Responsive grid columns */
@media (min-width: 768px) and (max-width: 1023px) {
    .strengths-grid {
        grid-template-columns: repeat(2, 1fr); /* 768–1023px: 2 columns */
    }
}

@media (max-width: 767px) {
    .strengths-grid {
        grid-template-columns: 1fr; /* <768px: 1 column */
        gap: var(--spacing-md);
    }
}

.strength-card {
    background: var(--color-dark-gray);
    border-radius: var(--radius-lg);
    padding: var(--spacing-lg);
    text-align: center;
    transition: all var(--transition-medium), transform var(--transition-medium);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    min-height: 320px; /* Uniform card height for better alignment */
    cursor: pointer;
    /* Focus and accessibility */
    outline: none;
    position: relative;
    /* Ensure 44px minimum tap target */
    min-width: 44px;
    min-height: 44px;
}

/* Card hover and focus interactions */
.strength-card:hover,
.strength-card:focus {
    transform: scale(1.02) translateY(-5px);
    box-shadow: 0 0 20px rgba(229, 9, 20, 0.3), var(--card-shadow);
    outline: none;
}

/* Strong keyboard focus ring */
.strength-card:focus {
    box-shadow: 
        0 0 0 3px var(--color-accent),
        0 0 20px rgba(229, 9, 20, 0.3),
        var(--card-shadow);
}

.strength-card__icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--color-accent), #ff6b6b);
    border-radius: 50%;
    margin: 0 auto var(--spacing-md);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    flex-shrink: 0;
    transition: transform var(--transition-medium), box-shadow var(--transition-medium);
    position: relative;
    overflow: visible;
}

/* Icon interactions on card hover/focus */
.strength-card:hover .strength-card__icon,
.strength-card:focus .strength-card__icon {
    transform: scale(1.06);
    box-shadow: 
        0 0 0 4px rgba(229, 9, 20, 0.2),
        0 0 20px rgba(229, 9, 20, 0.4);
}

/* Pulse ripple effect on icon hover (if motion allowed) */
@keyframes pulseRipple {
    0% {
        transform: scale(1);
        opacity: 0.6;
    }
    100% {
        transform: scale(1.3);
        opacity: 0;
    }
}

.strength-card:hover .strength-card__icon::after {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border: 2px solid var(--color-accent);
    border-radius: 50%;
    animation: pulseRipple 900ms ease-out;
    pointer-events: none;
}

/* Respect reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
    .strength-card__icon::after {
        animation: none;
    }
    
    .strength-card:hover .strength-card__icon,
    .strength-card:focus .strength-card__icon {
        transform: none;
    }
    
    .strength-card:hover,
    .strength-card:focus {
        transform: none;
    }
    
    /* Skills section reduced motion */
    .skill-chip:hover,
    .skill-chip:focus {
        transform: none;
    }
    
    /* Show static streak for reduced motion users */
    .skill-chip::before {
        transition: opacity 200ms ease-out;
        transform: translateX(0);
    }
    
    .skill-chip:hover::before,
    .skill-chip:focus::before {
        opacity: 0.15;
        animation: none;
    }
    
    /* Disable streak animation */
    @keyframes streakFadeToRest {
        to {
            opacity: 0.15;
        }
    }
}

.strength-card__title {
    font-size: clamp(1.2rem, 2vw, 1.4rem);
    margin-bottom: var(--spacing-sm);
    color: var(--color-text);
    font-family: var(--font-primary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    line-height: 1.2;
    /* Ensure headings align at same baseline */
    flex-shrink: 0;
}

.strength-card__description {
    color: #c0c0c0; /* Slightly brighter gray for better readability */
    font-size: 0.95rem;
    line-height: 1.5;
    flex: 1;
    display: flex;
    align-items: center;
    text-align: center;
    /* Text clamping for uniform heights */
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: calc(1.5em * 4); /* 4 lines max */
}

/* ===== ADDITIONAL SECTION ===== */
.additional-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-lg);
    margin-top: var(--spacing-lg);
}

.additional-card {
    background: var(--color-dark-gray);
    border-radius: var(--radius-lg);
    padding: var(--spacing-lg);
    transition: all var(--transition-medium);
}

.additional-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--card-shadow);
}

.additional-card__title {
    font-size: 1.5rem;
    margin-bottom: var(--spacing-md);
    color: var(--color-accent);
}

.additional-card__list {
    list-style: none;
}

.additional-card__list li {
    padding: var(--spacing-xs) 0;
    color: var(--color-secondary);
    position: relative;
    padding-left: var(--spacing-md);
}

.additional-card__list li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: var(--color-accent);
}

.interests-visual {
    aspect-ratio: 16/9;
    background: linear-gradient(135deg, var(--color-medium-gray), var(--color-dark-gray));
    border-radius: var(--radius-md);
    margin-bottom: var(--spacing-md);
    position: relative;
    overflow: hidden;
}

.interests-visual img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    border-radius: inherit;
    transition: none;
    transform: none;
    animation: none;
    filter: none;
}



/* ===== FOOTER ===== */
.footer {
    background: var(--color-dark-gray);
    padding: var(--spacing-xxl) 0 var(--spacing-lg);
}

.footer__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-xl);
    margin-bottom: var(--spacing-lg);
}

.footer__title {
    font-size: 2rem;
    margin-bottom: var(--spacing-md);
    color: var(--color-accent);
}

.contact-info__item {
    margin-bottom: var(--spacing-sm);
}

.contact-info__label {
    display: inline-block;
    width: 80px;
    color: var(--color-secondary);
    font-weight: 500;
}

.contact-info__link {
    color: var(--color-text);
    text-decoration: none;
    transition: color var(--transition-fast);
}

.contact-info__link:hover {
    color: var(--color-accent);
}

/* ===== CONTACT FORM ===== */
.contact-form {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
}

.form-group {
    position: relative;
}

.form-label {
    display: block;
    margin-bottom: var(--spacing-xs);
    color: var(--color-secondary);
    font-weight: 500;
}

.form-input {
    width: 100%;
    padding: var(--spacing-sm);
    background: var(--color-medium-gray);
    border: 2px solid transparent;
    border-radius: var(--radius-sm);
    color: var(--color-text);
    font-family: inherit;
    transition: all var(--transition-fast);
}

.form-input:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 10px rgba(229, 9, 20, 0.3);
}

.form-textarea {
    resize: vertical;
    min-height: 120px;
}

.form-submit {
    padding: var(--spacing-md) var(--spacing-lg);
    background: var(--color-accent);
    color: var(--color-text);
    border: none;
    border-radius: var(--radius-sm);
    font-weight: 600;
    cursor: pointer;
    transition: all var(--transition-medium);
    font-family: inherit;
    font-size: 1rem;
}

.form-submit:hover {
    background: #b71c1c;
    transform: translateY(-2px);
    box-shadow: var(--netflix-glow);
}

.form-error {
    display: block;
    color: var(--color-accent);
    font-size: 0.85rem;
    margin-top: var(--spacing-xs);
}

.form-input--error {
    border-color: var(--color-accent) !important;
    box-shadow: 0 0 10px rgba(229, 9, 20, 0.3) !important;
}

.form-status {
    margin-top: var(--spacing-md);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-sm);
    font-size: 0.9rem;
    font-weight: 500;
    text-align: center;
    animation: slideDown 0.3s ease-out;
}

.form-status--success {
    background: rgba(76, 175, 80, 0.1);
    color: #4CAF50;
    border: 1px solid rgba(76, 175, 80, 0.3);
}

.form-status--error {
    background: rgba(229, 9, 20, 0.1);
    color: var(--color-accent);
    border: 1px solid rgba(229, 9, 20, 0.3);
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Mobile menu styles */
.header__menu--open {
    display: flex;
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(10px);
    flex-direction: column;
    padding: var(--spacing-lg);
    gap: var(--spacing-md);
    z-index: var(--z-header);
}

.header__mobile-toggle--open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.header__mobile-toggle--open span:nth-child(2) {
    opacity: 0;
}

.header__mobile-toggle--open span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
}

/* Skip link for accessibility */
.skip-link:focus {
    top: 6px !important;
}

.footer__bottom {
    text-align: center;
    padding-top: var(--spacing-lg);
    border-top: 1px solid var(--color-medium-gray);
    color: var(--color-secondary);
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
    .header__menu {
        display: none;
    }
    
    .header__mobile-toggle {
        display: flex;
    }
    
    .skills-grid {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }
    
    .section {
        padding: var(--spacing-lg) 0;
    }
    
    .footer__content {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
    }
    
    .carousel {
        --carousel-gap: 16px;
    }
    
    .carousel__pagination {
        margin-top: var(--spacing-sm);
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 var(--spacing-sm);
    }
    
    .hero__content {
        padding: 0 var(--spacing-sm);
    }
    
    .poster-card__overlay {
        transform: translateY(0);
        background: rgba(0, 0, 0, 0.8);
    }
    
    .carousel {
        --carousel-gap: 12px;
    }
    
    /* Adjust projects card size for smaller mobile screens */
    .projects {
        --card-vw: calc(100vw - 2rem); /* Account for smaller container padding */
        --slider-pad: calc((100vw - var(--card-vw)) / 2);
    }
}

/* ===== ANIMATION UTILITIES ===== */
.fade-in {
    opacity: 0;
    animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

.slide-up {
    transform: translateY(50px);
    opacity: 0;
    animation: slideUp 0.8s ease-out forwards;
}

@keyframes slideUp {
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

/* ===== ACCESSIBILITY ===== */
/* ===== ACCESSIBILITY ===== */
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

.skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: var(--color-accent);
    color: white;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 10001;
    transition: top 0.3s;
}

.skip-link:focus {
    top: 6px !important;
}

/* Focus indicators */
*:focus {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
    :root {
        --color-accent: #ff0000;
        --color-text: #ffffff;
        --color-secondary: #cccccc;
    }
}

/* Performance optimizations */
.poster-card__image,
.badge-card__image,
.strength-card__icon,
.strength-card {
    will-change: transform;
}

.carousel__track {
    will-change: transform;
    transform: translateZ(0); /* Enable hardware acceleration */
}

/* Loading states */
.loading {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.loaded .loading {
    opacity: 1;
    transform: translateY(0);
}

@media (max-width: 768px) {
    .carousel:hover .carousel__nav {
        opacity: 0; /* Hide navigation on mobile */
    }
}

/* ===== SCROLLBAR STYLING ===== */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: var(--color-dark-gray);
}

::-webkit-scrollbar-thumb {
    background: var(--color-accent);
    border-radius: var(--radius-lg);
}

::-webkit-scrollbar-thumb:hover {
    background: #b71c1c;
}

/* ===== CERTIFICATION CARD LABELS ===== */
.certifications .badge-card__image-container {
    position: relative;
}

.certifications .badge-card__label {
    position: absolute;
    bottom: 14px;
    left: 14px;
    right: 14px;
    color: #E50914;
    font-weight: 600;
    font-size: 0.9rem;
    letter-spacing: 0.3px;
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 200ms ease-out, transform 200ms ease-out;
    pointer-events: none;
    z-index: 10;
}

.certifications .badge-card__label::before {
    content: '';
    position: absolute;
    bottom: -14px;
    left: -14px;
    right: -14px;
    height: 40px;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    z-index: -1;
}

.certifications .badge-card:hover .badge-card__label,
.certifications .badge-card:focus .badge-card__label,
.certifications .badge-card:focus-within .badge-card__label {
    opacity: 1;
    transform: translateY(0);
}

/* ===== INTERESTS POSTER WITH CURSOR-FOLLOWING GLOW ===== */
/* Target only the Interests poster - cursor-following red spotlight */

/* Base container & image fill */
.additional-card .interests-visual {
    aspect-ratio: 16 / 9;
    position: relative;
    overflow: hidden;
    border-radius: inherit;
    line-height: 0;
    margin: 0;
    padding: 0;
    /* Subtle rest state - thin red edge */
    box-shadow: inset 0 0 0 1px rgba(229, 9, 20, 0.15);
    transition: box-shadow 280ms cubic-bezier(0.22, 1, 0.36, 1);
    /* CSS variables for cursor position */
    --ix: 50%;
    --iy: 50%;
}

/* Ambient underglow layer - enhanced with rich tint */
.additional-card .interests-visual::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 40%;
    background: radial-gradient(
        ellipse 100% 80% at center bottom,
        rgba(229, 9, 20, 0.08) 0%,
        rgba(229, 9, 20, 0.04) 35%,
        transparent 70%
    );
    mix-blend-mode: screen;
    opacity: 1;
    transition: opacity 280ms cubic-bezier(0.22, 1, 0.36, 1);
    z-index: 1;
    border-radius: inherit;
}

/* Rich red tint overlay for hover/focus states */
.additional-card .interests-visual:hover::before,
.additional-card .interests-visual:focus-visible::before {
    background: 
        radial-gradient(
            ellipse 100% 80% at center bottom,
            rgba(229, 9, 20, 0.16) 0%,
            rgba(229, 9, 20, 0.08) 35%,
            transparent 70%
        ),
        radial-gradient(
            circle at center,
            rgba(229, 9, 20, 0.10) 0%,
            rgba(229, 9, 20, 0.06) 40%,
            transparent 80%
        );
}

/* Ensure both <picture> and <img> fill the container */
.additional-card .interests-visual picture,
.additional-card .interests-visual img {
    width: 100%;
    height: 100%;
    display: block;
}

/* Make the picture element fill completely */
.additional-card .interests-visual picture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

/* Static image - enhanced for zoom + color effects */
.additional-card .interests-visual img {
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    /* Enhanced for smooth zoom + color filters */
    transform: scale(1);
    transition: transform 560ms cubic-bezier(0.16, 1, 0.3, 1), filter 280ms cubic-bezier(0.22, 1, 0.36, 1);
    will-change: transform, filter;
    filter: brightness(1) contrast(1) saturate(1);
    z-index: 0;
}

/* Cursor-following spotlight layer */
.additional-card .interests-visual::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: inherit;
    background: radial-gradient(
        circle at var(--ix) var(--iy),
        rgba(229, 9, 20, 0.24) 0%,
        rgba(229, 9, 20, 0.16) 15%,
        rgba(229, 9, 20, 0.08) 35%,
        transparent 60%
    );
    opacity: 0;
    transition: opacity 180ms ease-out;
    z-index: 2;
}

/* Rich red tint overlay layer */
.additional-card .interests-visual::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 40%;
    background: radial-gradient(
        ellipse 100% 80% at center bottom,
        rgba(229, 9, 20, 0.08) 0%,
        rgba(229, 9, 20, 0.04) 35%,
        transparent 70%
    );
    mix-blend-mode: screen;
    opacity: 1;
    transition: opacity 280ms cubic-bezier(0.22, 1, 0.36, 1);
    z-index: 1;
    border-radius: inherit;
}

/* Additional red tint overlay for richer colors */

/* Rich red tint overlay - separate from underglow */
.additional-card .interests-visual:hover::before,
.additional-card .interests-visual:focus-visible::before {
    background: 
        radial-gradient(
            ellipse 100% 80% at center bottom,
            rgba(229, 9, 20, 0.16) 0%,
            rgba(229, 9, 20, 0.08) 35%,
            transparent 70%
        ),
        radial-gradient(
            circle at center,
            rgba(229, 9, 20, 0.10) 0%,
            rgba(229, 9, 20, 0.06) 40%,
            transparent 80%
        );
}

/* Hover/focus states - enhanced zoom + brighter border + richer colors */
.additional-card .interests-visual:hover {
    box-shadow: 
        inset 0 0 0 1px rgba(229, 9, 20, 0.35),
        inset 0 0 0 2.5px #E50914,
        0 0 12px rgba(229, 9, 20, 0.4),
        0 0 24px rgba(229, 9, 20, 0.2);
    transition: box-shadow 300ms cubic-bezier(0.22, 1, 0.36, 1);
}

.additional-card .interests-visual:hover img {
    transform: scale(1.045);
    filter: brightness(1.08) contrast(1.05) saturate(1.12);
    transition: transform 560ms cubic-bezier(0.16, 1, 0.3, 1), filter 280ms cubic-bezier(0.22, 1, 0.36, 1);
}

.additional-card .interests-visual:hover::after {
    opacity: 1;
}

.additional-card .interests-visual:focus-visible {
    box-shadow: 
        inset 0 0 0 1px rgba(229, 9, 20, 0.35),
        inset 0 0 0 2.5px #E50914,
        0 0 12px rgba(229, 9, 20, 0.4),
        0 0 24px rgba(229, 9, 20, 0.2);
    transition: box-shadow 300ms cubic-bezier(0.22, 1, 0.36, 1);
}

.additional-card .interests-visual:focus-visible img {
    transform: scale(1.045);
    filter: brightness(1.08) contrast(1.05) saturate(1.12);
    transition: transform 560ms cubic-bezier(0.16, 1, 0.3, 1), filter 280ms cubic-bezier(0.22, 1, 0.36, 1);
}

.additional-card .interests-visual:focus-visible::after {
    opacity: 1;
    /* Center the spotlight for keyboard focus */
    background: radial-gradient(
        circle at 50% 50%,
        rgba(229, 9, 20, 0.20) 0%,
        rgba(229, 9, 20, 0.12) 15%,
        rgba(229, 9, 20, 0.06) 35%,
        transparent 60%
    );
}

/* Exit transitions - smooth zoom out + color reset */
.additional-card .interests-visual img {
    transition: transform 380ms cubic-bezier(0.16, 1, 0.3, 1), filter 260ms cubic-bezier(0.22, 1, 0.36, 1);
}

.additional-card .interests-visual {
    transition: box-shadow 240ms cubic-bezier(0.22, 1, 0.36, 1);
}

/* Touch behavior - glow at tap position + underglow intensified */
@media (pointer: coarse) {
    /* Disable hover effects for touch devices */
    .additional-card .interests-visual:hover {
        box-shadow: inset 0 0 0 1px rgba(229, 9, 20, 0.15);
    }
    
    .additional-card .interests-visual:hover::before {
        opacity: 1;
        background: radial-gradient(
            ellipse 100% 80% at center bottom,
            rgba(229, 9, 20, 0.08) 0%,
            rgba(229, 9, 20, 0.04) 35%,
            transparent 70%
        );
    }
    
    .additional-card .interests-visual:hover::after {
        opacity: 0;
    }
    
    /* Touch active state - enhanced zoom + border + rich colors */
    .additional-card .interests-visual:active {
        box-shadow: 
            inset 0 0 0 1px rgba(229, 9, 20, 0.35),
            inset 0 0 0 2.5px #E50914,
            0 0 12px rgba(229, 9, 20, 0.4),
            0 0 24px rgba(229, 9, 20, 0.2);
        transition: box-shadow 150ms ease-out, box-shadow 450ms ease-out 600ms;
    }
    
    .additional-card .interests-visual:active img {
        transform: scale(1.02);
        filter: brightness(1.05) contrast(1.03) saturate(1.08);
        transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1), filter 200ms cubic-bezier(0.22, 1, 0.36, 1);
    }
    
    .additional-card .interests-visual:active::before {
        background: 
            radial-gradient(
                ellipse 100% 80% at center bottom,
                rgba(229, 9, 20, 0.14) 0%,
                rgba(229, 9, 20, 0.07) 35%,
                transparent 70%
            ),
            radial-gradient(
                circle at center,
                rgba(229, 9, 20, 0.08) 0%,
                rgba(229, 9, 20, 0.04) 40%,
                transparent 80%
            );
    }
    
    .additional-card .interests-visual:active::before {
        opacity: 1;
        background: radial-gradient(
            ellipse 100% 80% at center bottom,
            rgba(229, 9, 20, 0.14) 0%,
            rgba(229, 9, 20, 0.07) 35%,
            transparent 70%
        );
    }
    
    .additional-card .interests-visual:active::after {
        opacity: 1;
        transition: opacity 150ms ease-out, opacity 550ms ease-out 700ms;
    }
    
    /* Ensure image never moves on touch */
    .additional-card .interests-visual:active img {
        transform: none !important;
        transition: none !important;
    }
}

/* Reduced motion - disable zoom, keep color/border changes */
@media (prefers-reduced-motion: reduce) {
    .additional-card .interests-visual img {
        transform: scale(1) !important;
        transition: filter 280ms cubic-bezier(0.22, 1, 0.36, 1) !important;
        will-change: filter;
    }
    
    .additional-card .interests-visual::after {
        display: none !important;
    }
    
    .additional-card .interests-visual:hover,
    .additional-card .interests-visual:focus-visible {
        box-shadow: 
            inset 0 0 0 1px rgba(229, 9, 20, 0.35),
            inset 0 0 0 2.5px #E50914,
            0 0 12px rgba(229, 9, 20, 0.4),
            0 0 24px rgba(229, 9, 20, 0.2);
    }
    
    .additional-card .interests-visual:hover img,
    .additional-card .interests-visual:focus-visible img {
        filter: brightness(1.08) contrast(1.05) saturate(1.12);
    }
    
    .additional-card .interests-visual:active img {
        transform: scale(1) !important;
        filter: brightness(1.05) contrast(1.03) saturate(1.08);
    }
}

/* 1-px tablet mismatch fallback (tablet is 898×505 instead of 898×504) */
@media (min-width: 769px) and (max-width: 1024px) {
    .additional-card .interests-visual img {
        height: calc(100% + 1px);
        object-position: center bottom;
    }
}

/* Mobile safeguard - ensure proper fill on small screens */
@media (max-width: 768px) {
    .additional-card .interests-visual {
        aspect-ratio: 16 / 9;
        position: relative;
        overflow: hidden;
        border-radius: inherit;
        line-height: 0;
        margin: 0;
        padding: 0;
    }
    
    .additional-card .interests-visual picture {
        position: absolute;
        inset: -0.5px;
        width: calc(100% + 1px);
        height: calc(100% + 1px);
        display: block;
    }
    
    .additional-card .interests-visual img {
        position: absolute;
        inset: -0.5px;
        width: calc(100% + 1px);
        height: calc(100% + 1px);
        object-fit: cover;
        object-position: center;
        display: block;
        will-change: transform;
        transition: transform 150ms cubic-bezier(0.22, 1, 0.36, 1);
    }
    
    /* Mobile touch interactions - enhanced zoom + border + rich tint */
    .additional-card:active .interests-visual {
        box-shadow: 
            inset 0 0 0 1px rgba(229, 9, 20, 0.35),
            inset 0 0 0 2.5px #E50914,
            0 0 12px rgba(229, 9, 20, 0.4),
            0 0 24px rgba(229, 9, 20, 0.2);
        transition: box-shadow 150ms ease-out, box-shadow 450ms ease-out 600ms;
    }
    
    .additional-card:active .interests-visual img {
        transform: scale(1.02);
        filter: brightness(1.05) contrast(1.03) saturate(1.08);
        transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1), filter 200ms cubic-bezier(0.22, 1, 0.36, 1);
    }
    
    .additional-card:active .interests-visual::before {
        background: 
            radial-gradient(
                ellipse 100% 80% at center bottom,
                rgba(229, 9, 20, 0.14) 0%,
                rgba(229, 9, 20, 0.07) 35%,
                transparent 70%
            ),
            radial-gradient(
                circle at center,
                rgba(229, 9, 20, 0.08) 0%,
                rgba(229, 9, 20, 0.04) 40%,
                transparent 80%
            );
    }
    
    .additional-card:active .interests-visual::before {
        opacity: 1;
        background: radial-gradient(
            ellipse 100% 80% at center bottom,
            rgba(229, 9, 20, 0.14) 0%,
            rgba(229, 9, 20, 0.07) 35%,
            transparent 70%
        );
    }
    
    .additional-card:active .interests-visual::after {
        opacity: 1;
        transition: opacity 150ms ease-out, opacity 550ms ease-out 700ms;
    }
    
    .additional-card:active .interests-visual img {
        transform: none !important;
        transition: none !important;
    }
    
    /* Reduced motion on mobile - underglow + static border only */
    @media (prefers-reduced-motion: reduce) {
        .additional-card .interests-visual::after {
            display: none !important;
        }
        
    /* Reduced motion on mobile - disable zoom, keep color/border */
    @media (prefers-reduced-motion: reduce) {
        .additional-card .interests-visual img {
            transform: scale(1) !important;
            transition: filter 280ms cubic-bezier(0.22, 1, 0.36, 1) !important;
            will-change: filter;
        }
        
        .additional-card:active .interests-visual {
            box-shadow: 
                inset 0 0 0 1px rgba(229, 9, 20, 0.35),
                inset 0 0 0 2.5px #E50914,
                0 0 12px rgba(229, 9, 20, 0.4),
                0 0 24px rgba(229, 9, 20, 0.2);
        }
        
        .additional-card:active .interests-visual img {
            transform: scale(1) !important;
            filter: brightness(1.05) contrast(1.03) saturate(1.08);
        }
    }
    }
}
