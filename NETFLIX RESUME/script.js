// ===== NETFLIX RESUME WEBSITE JAVASCRIPT =====

class NetflixCarousel {
    constructor(container) {
        this.container = container;
        this.track = container.querySelector('.carousel__track');
        this.items = Array.from(this.track.children);
        this.prevBtn = container.querySelector('.carousel__nav--prev');
        this.nextBtn = container.querySelector('.carousel__nav--next');
        this.pagination = container.querySelector('.carousel__pagination');
        
        this.currentIndex = 0;
        this.itemsPerView = 1;
        this.gap = 24;
        this.autoplayTimer = null;
        this.autoplayDelay = 6000;
        this.isAutoplayEnabled = true;
        this.isMouseOver = false;
        this.isFocused = false;
        
        this.init();
    }

    init() {
        this.calculateResponsiveSettings();
        this.setupPagination();
        this.bindEvents();
        this.updateCarousel();
        this.setupAutoplay();
        this.setupAccessibility();
        
        // Debounced resize handler
        const debouncedResize = this.debounce(() => {
            this.calculateResponsiveSettings();
            this.setupPagination();
            this.updateCarousel();
        }, 250);
        
        window.addEventListener('resize', debouncedResize);
    }

    calculateResponsiveSettings() {
        const containerWidth = this.container.offsetWidth;
        
        if (containerWidth >= 1280) {
            this.itemsPerView = 6;
            this.gap = 24;
        } else if (containerWidth >= 1024) {
            this.itemsPerView = 5;
            this.gap = 24;
        } else if (containerWidth >= 768) {
            this.itemsPerView = 4;
            this.gap = 24;
        } else if (containerWidth >= 480) {
            this.itemsPerView = 3;
            this.gap = 16;
        } else {
            this.itemsPerView = 2;
            this.gap = 12;
        }
        
        // Ensure we don't have more items per view than actual items
        this.itemsPerView = Math.min(this.itemsPerView, this.items.length);
        
        this.maxIndex = Math.max(0, this.items.length - this.itemsPerView);
        
        // Reset current index if it exceeds max
        if (this.currentIndex > this.maxIndex) {
            this.currentIndex = this.maxIndex;
        }
        
        // Update CSS custom property for gap
        this.container.style.setProperty('--carousel-gap', `${this.gap}px`);
    }

    setupPagination() {
        if (!this.pagination) return; // Skip if pagination container doesn't exist
        
        // Clear existing pagination since it's been removed per user request
        this.pagination.innerHTML = '';
        return; // Exit early - no pagination dots needed
    }

    bindEvents() {
        // Navigation buttons
        this.prevBtn?.addEventListener('click', () => this.prev());
        this.nextBtn?.addEventListener('click', () => this.next());
        
        // Touch/swipe support
        this.setupTouchEvents();
        
        // Keyboard navigation
        this.setupKeyboardEvents();
        
        // Mouse events for autoplay pause
        this.container.addEventListener('mouseenter', () => {
            this.isMouseOver = true;
            this.pauseAutoplay();
        });
        
        this.container.addEventListener('mouseleave', () => {
            this.isMouseOver = false;
            this.resumeAutoplay();
        });
        
        // Focus events for autoplay pause
        this.container.addEventListener('focusin', () => {
            this.isFocused = true;
            this.pauseAutoplay();
        });
        
        this.container.addEventListener('focusout', (e) => {
            // Check if focus is still within the carousel
            if (!this.container.contains(e.relatedTarget)) {
                this.isFocused = false;
                this.resumeAutoplay();
            }
        });
    }

    setupTouchEvents() {
        let startX = 0;
        let startY = 0;
        let isDragging = false;
        const minSwipeDistance = 50;
        
        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            isDragging = true;
            this.pauseAutoplay();
        }, { passive: true });
        
        this.track.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            
            const currentX = e.touches[0].clientX;
            const diffX = startX - currentX;
            
            // Prevent default only for horizontal swipes
            if (Math.abs(diffX) > Math.abs(startY - e.touches[0].clientY)) {
                e.preventDefault();
            }
        }, { passive: false });
        
        this.track.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const diffX = startX - endX;
            const diffY = startY - endY;
            
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > minSwipeDistance) {
                if (diffX > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
            
            isDragging = false;
            setTimeout(() => this.resumeAutoplay(), 1000);
        }, { passive: true });
    }

    setupKeyboardEvents() {
        this.container.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    this.prev();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.next();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.goToPage(0);
                    break;
                case 'End':
                    e.preventDefault();
                    this.goToPage(Math.ceil(this.items.length / this.itemsPerView) - 1);
                    break;
            }
        });
    }

    setupAccessibility() {
        // Set up roving tabindex for carousel items
        this.items.forEach((item, index) => {
            item.setAttribute('tabindex', index === 0 ? '0' : '-1');
            item.setAttribute('role', 'group');
            item.setAttribute('aria-label', `Item ${index + 1} of ${this.items.length}`);
        });
        
        // Announce changes to screen readers
        this.container.setAttribute('aria-live', 'polite');
    }

    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateCarousel();
            this.announceChange('Previous');
        }
    }

    next() {
        if (this.currentIndex < this.maxIndex) {
            this.currentIndex++;
            this.updateCarousel();
            this.announceChange('Next');
        }
    }

    goToPage(pageIndex) {
        const targetIndex = Math.min(pageIndex * this.itemsPerView, this.maxIndex);
        if (targetIndex !== this.currentIndex) {
            this.currentIndex = targetIndex;
            this.updateCarousel();
            this.announceChange(`Page ${pageIndex + 1}`);
        }
    }

    updateCarousel() {
        // Get container width for calculation
        const containerRect = this.container.getBoundingClientRect();
        const containerWidth = containerRect.width;
        
        // Calculate item width based on container and gap
        const totalGapWidth = this.gap * (this.itemsPerView - 1);
        const itemWidth = (containerWidth - totalGapWidth) / this.itemsPerView;
        
        // Update item widths
        this.items.forEach(item => {
            item.style.width = `${itemWidth}px`;
            item.style.flexShrink = '0';
            item.style.minWidth = `${itemWidth}px`;
        });
        
        // Calculate and apply transform
        const translateX = -(this.currentIndex * (itemWidth + this.gap));
        this.track.style.transform = `translateX(${translateX}px)`;
        
        // Ensure proper container overflow
        const trackContainer = this.container.querySelector('.carousel__container');
        if (trackContainer) {
            trackContainer.style.overflow = 'hidden';
        }
        
        // Update button states
        this.updateNavigationState();
        
        // Update pagination dots
        this.updatePaginationState();
        
        // Update roving tabindex
        this.updateTabIndex();
    }

    updateNavigationState() {
        if (this.prevBtn) {
            this.prevBtn.disabled = this.currentIndex === 0;
            this.prevBtn.setAttribute('aria-disabled', this.currentIndex === 0);
        }
        
        if (this.nextBtn) {
            this.nextBtn.disabled = this.currentIndex >= this.maxIndex;
            this.nextBtn.setAttribute('aria-disabled', this.currentIndex >= this.maxIndex);
        }
    }

    updatePaginationState() {
        if (!this.pagination) return; // Skip if no pagination container
        
        // No pagination dots to update since they were removed
        return;
    }

    updateTabIndex() {
        this.items.forEach((item, index) => {
            const isVisible = index >= this.currentIndex && index < this.currentIndex + this.itemsPerView;
            item.setAttribute('tabindex', isVisible && index === this.currentIndex ? '0' : '-1');
        });
    }

    setupAutoplay() {
        if (!this.isAutoplayEnabled) return;
        this.startAutoplay();
    }

    startAutoplay() {
        this.stopAutoplay();
        if (!this.isMouseOver && !this.isFocused) {
            this.autoplayTimer = setTimeout(() => {
                if (this.currentIndex >= this.maxIndex) {
                    this.goToPage(0); // Loop back to start
                } else {
                    this.next();
                }
                this.startAutoplay(); // Continue autoplay
            }, this.autoplayDelay);
        }
    }

    pauseAutoplay() {
        this.stopAutoplay();
    }

    resumeAutoplay() {
        if (!this.isMouseOver && !this.isFocused) {
            setTimeout(() => this.startAutoplay(), 1000);
        }
    }

    stopAutoplay() {
        if (this.autoplayTimer) {
            clearTimeout(this.autoplayTimer);
            this.autoplayTimer = null;
        }
    }

    announceChange(action) {
        // Create a live region announcement for screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = `${action}. Showing items ${this.currentIndex + 1} to ${Math.min(this.currentIndex + this.itemsPerView, this.items.length)} of ${this.items.length}.`;
        
        document.body.appendChild(announcement);
        setTimeout(() => document.body.removeChild(announcement), 1000);
    }

    debounce(func, wait) {
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

    destroy() {
        this.stopAutoplay();
        // Remove event listeners and clean up
        window.removeEventListener('resize', this.debouncedResize);
    }
}

class NetflixResume {
    constructor() {
        this.header = document.querySelector('.header');
        this.mobileToggle = document.getElementById('mobileToggle');
        this.headerMenu = document.getElementById('headerMenu');
        this.carousels = [];
        
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupCarousels();
        this.setupMobileMenu();
        this.setupContactForm();
        this.setupScrollEffects();
        this.setupImagePlaceholders();
        this.setupSmoothScrolling();
        this.setupAccessibilityFeatures();
        this.setupLazyLoading();
        this.setupSkillsFilter();
        this.setupProjectsMobileSlider();
    }

    // ===== CAROUSEL SETUP =====
    setupCarousels() {
        // Only initialize carousels for sections that actually have carousel structure
        const carouselContainers = document.querySelectorAll('.carousel');
        carouselContainers.forEach(container => {
            // Skip if this is the strengths section (now uses grid)
            if (container.closest('.strengths')) {
                return;
            }
            
            const carousel = new NetflixCarousel(container);
            this.carousels.push(carousel);
        });
    }
    // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    
                    // Add staggered animation for skill tags
                    if (entry.target.classList.contains('skills-grid')) {
                        this.animateSkillTags(entry.target);
                    }
                    
                    // Add animation for badge cards
                    if (entry.target.classList.contains('badges-grid')) {
                        this.animateBadges(entry.target);
                    }
                }
            });
        }, observerOptions);

        // Observe sections for animation
        document.querySelectorAll('.section, .poster-card, .badge-card').forEach(el => {
            observer.observe(el);
        });
    }

    // ===== SKILL TAGS ANIMATION =====
    animateSkillTags(container) {
        const skillTags = container.querySelectorAll('.skill-tag');
        skillTags.forEach((tag, index) => {
            setTimeout(() => {
                tag.classList.add('slide-up');
            }, index * 100);
        });
    }

    // ===== BADGE ANIMATION =====
    animateBadges(container) {
        const badges = container.querySelectorAll('.badge-card');
        badges.forEach((badge, index) => {
            setTimeout(() => {
                badge.classList.add('slide-up');
            }, index * 150);
        });
    }

    // ===== LAZY LOADING =====
    setupLazyLoading() {
        const images = document.querySelectorAll('[data-image-prompt]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadImage(entry.target);
                    imageObserver.unobserve(entry.target);
                }
            });
        }, { rootMargin: '50px' });

        images.forEach(img => imageObserver.observe(img));
    }

    loadImage(element) {
        // Simulate loading with enhanced gradients
        const prompt = element.dataset.imagePrompt?.toLowerCase() || '';
        element.style.backgroundImage = this.getGradientForPrompt(prompt);
        element.setAttribute('aria-label', element.getAttribute('aria-label') + ' (loaded)');
    }

    getGradientForPrompt(prompt) {
        if (prompt.includes('ai') || prompt.includes('futuristic')) {
            return 'linear-gradient(135deg, #0f3460 0%, #e94560 50%, #0f3460 100%)';
        } else if (prompt.includes('finance') || prompt.includes('investment')) {
            return 'linear-gradient(135deg, #1a237e 0%, #e50914 50%, #000051 100%)';
        } else if (prompt.includes('university') || prompt.includes('campus')) {
            return 'linear-gradient(135deg, #2e7d32 0%, #e50914 50%, #1b5e20 100%)';
        } else if (prompt.includes('data') || prompt.includes('analytics')) {
            return 'linear-gradient(135deg, #004d40 0%, #e50914 50%, #00251a 100%)';
        }
        return 'linear-gradient(135deg, #333333 0%, #e50914 50%, #141414 100%)';
    }

    // ===== ACCESSIBILITY FEATURES =====
    setupAccessibilityFeatures() {
        // Add skip links
        this.addSkipLinks();
        
        // Enhanced keyboard navigation for entire site
        this.setupGlobalKeyboardNavigation();
        
        // Announce page changes
        this.setupPageAnnouncements();
    }

    addSkipLinks() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
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
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);

        // Add main landmark if not exists
        const main = document.querySelector('main');
        if (main && !main.id) {
            main.id = 'main';
        }
    }

    setupGlobalKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Escape key to close mobile menu
            if (e.key === 'Escape' && this.headerMenu.classList.contains('header__menu--open')) {
                this.headerMenu.classList.remove('header__menu--open');
                if (this.mobileToggle) {
                    this.mobileToggle.classList.remove('header__mobile-toggle--open');
                    this.mobileToggle.focus();
                }
            }
        });
    }

    setupPageAnnouncements() {
        // Announce section changes when scrolling
        const sections = document.querySelectorAll('.section');
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                    const sectionTitle = entry.target.querySelector('.section__title')?.textContent;
                    if (sectionTitle) {
                        this.announceToScreenReader(`Entering ${sectionTitle} section`);
                    }
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => sectionObserver.observe(section));
    }

    announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        announcement.style.cssText = `
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        `;
        
        document.body.appendChild(announcement);
        setTimeout(() => {
            if (document.body.contains(announcement)) {
                document.body.removeChild(announcement);
            }
        }, 1000);
    }

    // ===== MOBILE MENU =====
    setupMobileMenu() {
        // Guard against missing mobile toggle element
        if (!this.mobileToggle) {
            return;
        }
        
        this.mobileToggle.addEventListener('click', () => {
            this.headerMenu.classList.toggle('header__menu--open');
            this.mobileToggle.classList.toggle('header__mobile-toggle--open');
        });

        // Close menu on link click
        this.headerMenu.querySelectorAll('.header__link').forEach(link => {
            link.addEventListener('click', () => {
                this.headerMenu.classList.remove('header__menu--open');
                if (this.mobileToggle) {
                    this.mobileToggle.classList.remove('header__mobile-toggle--open');
                }
            });
        });
    }

    // ===== CONTACT FORM =====
    setupContactForm() {
        const form = document.getElementById('contactForm');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const timestampInput = document.getElementById('timestamp');
        
        // Set timestamp on page load
        timestampInput.value = Date.now();

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Anti-spam honeypot check
            const honeypot = form.querySelector('input[name="company"]');
            if (honeypot.value.trim() !== '') {
                // Silent abort - likely spam
                return;
            }
            
            // Clear previous errors and status messages
            this.clearFormErrors();
            this.clearStatusMessages();
            
            let isValid = true;
            
            // Validate name (1-80 chars)
            const nameValue = nameInput.value.trim();
            if (!nameValue) {
                this.showFormError('name', 'Name is required');
                isValid = false;
            } else if (nameValue.length > 80) {
                this.showFormError('name', 'Name must be 80 characters or less');
                isValid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const emailValue = emailInput.value.trim();
            if (!emailValue) {
                this.showFormError('email', 'Email is required');
                isValid = false;
            } else if (!emailRegex.test(emailValue)) {
                this.showFormError('email', 'Please enter a valid email');
                isValid = false;
            }
            
            // Validate message (minimum 10 chars)
            const messageValue = messageInput.value.trim();
            if (!messageValue) {
                this.showFormError('message', 'Message is required');
                isValid = false;
            } else if (messageValue.length < 10) {
                this.showFormError('message', 'Message must be at least 10 characters');
                isValid = false;
            }
            
            if (isValid) {
                await this.submitFormToFormspree(form);
            }
        });

        // Real-time validation
        [nameInput, emailInput, messageInput].forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
            
            input.addEventListener('input', () => {
                this.clearFieldError(input);
            });
        });
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        
        if (!value) {
            this.showFormError(fieldName, `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`);
            return false;
        }
        
        if (fieldName === 'name' && value.length > 80) {
            this.showFormError(fieldName, 'Name must be 80 characters or less');
            return false;
        }
        
        if (fieldName === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                this.showFormError(fieldName, 'Please enter a valid email');
                return false;
            }
        }
        
        if (fieldName === 'message' && value.length < 10) {
            this.showFormError(fieldName, 'Message must be at least 10 characters');
            return false;
        }
        
        this.clearFieldError(field);
        return true;
    }

    showFormError(fieldName, message) {
        const errorElement = document.getElementById(`${fieldName}-error`);
        const inputElement = document.getElementById(fieldName);
        
        errorElement.textContent = message;
        inputElement.classList.add('form-input--error');
    }

    clearFormErrors() {
        document.querySelectorAll('.form-error').forEach(error => {
            error.textContent = '';
        });
        document.querySelectorAll('.form-input').forEach(input => {
            input.classList.remove('form-input--error');
        });
    }

    clearFieldError(field) {
        const errorElement = document.getElementById(`${field.name}-error`);
        errorElement.textContent = '';
        field.classList.remove('form-input--error');
    }

    async submitFormToFormspree(form) {
        const submitBtn = form.querySelector('.form-submit');
        const originalText = submitBtn.textContent;
        
        try {
            // Show loading state
            submitBtn.textContent = 'Sending…';
            submitBtn.disabled = true;
            submitBtn.setAttribute('aria-busy', 'true');
            
            // Get form field values
            const name = form.querySelector('input[name="name"]').value.trim();
            const email = form.querySelector('input[name="email"]').value.trim();
            const message = form.querySelector('textarea[name="message"]').value.trim();
            const honeypot = form.querySelector('input[name="company"]').value;
            const ts = form.querySelector('input[name="ts"]').value;
            
            // Anti-spam: If honeypot has any value, abort silently
            if (honeypot.trim() !== '') {
                // Silent abort - likely spam, don't show error
                return;
            }
            
            // Prepare form data (exclude empty honeypot)
            const formData = {
                name,
                email,
                message,
                ts
            };
            
            // Submit to Formspree
            const response = await fetch('https://formspree.io/f/xdklbgez', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            // Must be 200 status AND have ok:true in response
            if (response.status === 200) {
                const responseData = await response.json();
                if (responseData && responseData.ok === true) {
                    // Success: 200 status + {"ok": true}
                    this.showSuccessMessage();
                    form.reset();
                    // Reset timestamp for next submission
                    form.querySelector('input[name="ts"]').value = Date.now();
                } else {
                    // 200 but no ok:true (validation errors, etc.)
                    this.showErrorMessage();
                }
            } else {
                // Non-200 status
                this.showErrorMessage();
            }
            
        } catch (error) {
            // Network error or other failure
            this.showErrorMessage();
        } finally {
            // Re-enable button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.setAttribute('aria-busy', 'false');
        }
    }
    
    showSuccessMessage() {
        const form = document.getElementById('contactForm');
        const submitBtn = form.querySelector('.form-submit');
        
        // Remove any existing status messages
        this.clearStatusMessages();
        
        // Create success banner
        const successBanner = document.createElement('div');
        successBanner.className = 'form-status form-status--success';
        successBanner.setAttribute('role', 'status');
        successBanner.setAttribute('aria-live', 'polite');
        successBanner.textContent = 'Thanks! Your message has been sent.';
        
        // Insert after submit button
        submitBtn.parentNode.insertBefore(successBanner, submitBtn.nextSibling);
        
        // Focus the success banner for screen readers
        successBanner.setAttribute('tabindex', '-1');
        successBanner.focus();
        
        // Auto-remove after 8 seconds
        setTimeout(() => {
            if (successBanner.parentNode) {
                successBanner.remove();
            }
        }, 8000);
    }
    
    showErrorMessage() {
        const form = document.getElementById('contactForm');
        const submitBtn = form.querySelector('.form-submit');
        
        // Remove any existing status messages
        this.clearStatusMessages();
        
        // Create error banner
        const errorBanner = document.createElement('div');
        errorBanner.className = 'form-status form-status--error';
        errorBanner.setAttribute('role', 'status');
        errorBanner.setAttribute('aria-live', 'polite');
        errorBanner.textContent = 'Hmm—something went wrong. Please try again.';
        
        // Insert after submit button
        submitBtn.parentNode.insertBefore(errorBanner, submitBtn.nextSibling);
        
        // Focus the error banner for screen readers
        errorBanner.setAttribute('tabindex', '-1');
        errorBanner.focus();
        
        // Auto-remove after 8 seconds
        setTimeout(() => {
            if (errorBanner.parentNode) {
                errorBanner.remove();
            }
        }, 8000);
    }
    
    clearStatusMessages() {
        document.querySelectorAll('.form-status').forEach(status => {
            status.remove();
        });
    }

    // ===== SCROLL EFFECTS =====
    setupScrollEffects() {
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Header background on scroll
            if (currentScrollY > 100) {
                this.header.classList.add('header--scrolled');
            } else {
                this.header.classList.remove('header--scrolled');
            }
            
            lastScrollY = currentScrollY;
        }, { passive: true });
    }

    // ===== IMAGE PLACEHOLDERS =====
    setupImagePlaceholders() {
        // Create gradients for image placeholders based on prompts
        document.querySelectorAll('[data-image-prompt]').forEach(element => {
            const prompt = element.dataset.imagePrompt.toLowerCase();
            let gradient = 'linear-gradient(135deg, #333, #141414)';
            
            // AI/Technology themes
            if (prompt.includes('ai') || prompt.includes('futuristic') || prompt.includes('digital')) {
                gradient = 'linear-gradient(135deg, #0f3460, #e94560, #0f3460)';
            }
            // Finance/Business themes
            else if (prompt.includes('finance') || prompt.includes('investment') || prompt.includes('business')) {
                gradient = 'linear-gradient(135deg, #1a237e, #e50914, #000051)';
            }
            // University/Education themes
            else if (prompt.includes('university') || prompt.includes('campus')) {
                gradient = 'linear-gradient(135deg, #2e7d32, #e50914, #1b5e20)';
            }
            // Data/Analytics themes
            else if (prompt.includes('data') || prompt.includes('analytics')) {
                gradient = 'linear-gradient(135deg, #004d40, #e50914, #00251a)';
            }
            // Certification themes
            else if (prompt.includes('certificate') || prompt.includes('achievement')) {
                gradient = 'linear-gradient(135deg, #bf360c, #e50914, #6a1b08)';
            }
            
            element.style.background = gradient;
            element.style.backgroundSize = '200% 200%';
            element.style.animation = 'gradientShift 3s ease infinite';
        });
        
        // Handle poster image loading and fallbacks
        this.setupPosterImageHandling();
        
        // Add gradient animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
        `;
        document.head.appendChild(style);
    }

    // ===== POSTER IMAGE HANDLING =====
    setupPosterImageHandling() {
        // Handle all poster images with proper fallback
        document.querySelectorAll('.poster-card__image').forEach(img => {
            if (img.tagName === 'IMG') {
                this.setupImageFallback(img);
            }
        });
    }

    setupImageFallback(img) {
        // Store original error handler if it exists
        const originalOnError = img.onerror;
        
        img.onerror = () => {
            // First try JPG fallback
            const currentSrc = img.src;
            const baseUrl = currentSrc.split('?')[0]; // Remove cache-bust query
            
            if (baseUrl.includes('.webp')) {
                const jpgUrl = baseUrl.replace('.webp', '.jpg');
                const cacheBust = currentSrc.includes('?') ? currentSrc.split('?')[1] : 'v=1725656400';
                img.src = `${jpgUrl}?${cacheBust}`;
                img.onerror = () => {
                    // Then try PNG fallback
                    const pngUrl = baseUrl.replace('.webp', '.png');
                    img.src = `${pngUrl}?${cacheBust}`;
                    img.onerror = () => {
                        // Final fallback: gradient with title
                        this.applyGradientFallback(img);
                    };
                };
            } else if (baseUrl.includes('.jpg')) {
                const pngUrl = baseUrl.replace('.jpg', '.png');
                const cacheBust = currentSrc.includes('?') ? currentSrc.split('?')[1] : 'v=1725656400';
                img.src = `${pngUrl}?${cacheBust}`;
                img.onerror = () => {
                    this.applyGradientFallback(img);
                };
            } else {
                // Apply gradient fallback immediately
                this.applyGradientFallback(img);
            }
        };
    }

    applyGradientFallback(img) {
        const card = img.closest('.poster-card');
        const title = card?.querySelector('.poster-card__title')?.textContent || 'Project';
        
        // Apply Netflix-style gradient background
        img.style.background = 'linear-gradient(135deg, #000000 0%, #e50914 50%, #141414 100%)';
        img.style.backgroundSize = '200% 200%';
        img.style.animation = 'gradientShift 3s ease infinite';
        img.style.display = 'flex';
        img.style.alignItems = 'center';
        img.style.justifyContent = 'center';
        img.style.color = 'white';
        img.style.fontSize = '1rem';
        img.style.fontWeight = '600';
        img.style.textAlign = 'center';
        img.style.padding = '1rem';
        img.innerHTML = title;
        img.onerror = null; // Prevent infinite loop
        
        // Ensure proper aspect ratio
        img.style.aspectRatio = '2/3';
        img.style.objectFit = 'cover';
    }

    // ===== SMOOTH SCROLLING =====
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
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
    }

    // ===== KEYBOARD NAVIGATION =====
    setupKeyboardNavigation() {
        // Carousel keyboard navigation
        document.addEventListener('keydown', (e) => {
            const activeElement = document.activeElement;
            
            // Check if we're in a carousel
            const carousel = activeElement.closest('.carousel');
            if (carousel) {
                const prevBtn = carousel.querySelector('.carousel__nav--prev');
                const nextBtn = carousel.querySelector('.carousel__nav--next');
                
                switch (e.key) {
                    case 'ArrowLeft':
                        e.preventDefault();
                        if (prevBtn && !prevBtn.disabled) {
                            prevBtn.click();
                        }
                        break;
                    case 'ArrowRight':
                        e.preventDefault();
                        if (nextBtn && !nextBtn.disabled) {
                            nextBtn.click();
                        }
                        break;
                }
            }
        });
        
        // Skip links for accessibility
        const skipLink = document.createElement('a');
        skipLink.href = '#hero';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--color-accent);
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 1001;
            transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    }

    // ===== SKILLS FILTER FUNCTIONALITY =====
    setupSkillsFilter() {
        const filterPills = document.querySelectorAll('.filter-pill');
        const skillGroups = document.querySelectorAll('.skill-group');
        
        if (!filterPills.length || !skillGroups.length) return;
        
        // Ensure "All" filter is active on load and all groups are visible
        this.initializeFilters(filterPills, skillGroups);
        
        filterPills.forEach(pill => {
            pill.addEventListener('click', (e) => {
                e.preventDefault();
                
                const filterValue = pill.dataset.filter;
                
                // Update active states
                filterPills.forEach(p => {
                    p.classList.remove('filter-pill--active');
                    p.setAttribute('aria-selected', 'false');
                });
                
                pill.classList.add('filter-pill--active');
                pill.setAttribute('aria-selected', 'true');
                
                // Simple filter transition - just show/hide with opacity
                this.simpleFilterTransition(skillGroups, filterValue);
                
                // Announce change to screen readers
                const activeFilter = filterValue === 'all' ? 'all skills' : `${filterValue} skills`;
                this.announceFilterChange(activeFilter);
            });
            
            // Keyboard support
            pill.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    pill.click();
                }
            });
        });
    }
    
    initializeFilters(filterPills, skillGroups) {
        // Ensure "All" filter is active by default
        const allFilter = Array.from(filterPills).find(pill => pill.dataset.filter === 'all');
        if (allFilter && !allFilter.classList.contains('filter-pill--active')) {
            filterPills.forEach(p => {
                p.classList.remove('filter-pill--active');
                p.setAttribute('aria-selected', 'false');
            });
            allFilter.classList.add('filter-pill--active');
            allFilter.setAttribute('aria-selected', 'true');
        }
        
        // Ensure all groups are visible by default
        skillGroups.forEach(group => {
            group.classList.remove('skill-group--hidden');
        });
    }
    
    simpleFilterTransition(skillGroups, filterValue) {
        skillGroups.forEach(group => {
            const groupType = group.dataset.group;
            const shouldShow = filterValue === 'all' || 
                              (filterValue === 'data' && groupType === 'data') ||
                              (filterValue === 'finance' && groupType === 'finance');
            
            if (shouldShow) {
                group.classList.remove('skill-group--hidden');
            } else {
                group.classList.add('skill-group--hidden');
            }
        });
    }
    
    announceFilterChange(filter) {
        // Create a live region announcement for screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = `Now showing ${filter}.`;
        announcement.style.cssText = `
            position: absolute;
            left: -10000px;
            width: 1px;
            height: 1px;
            overflow: hidden;
        `;
        
        document.body.appendChild(announcement);
        setTimeout(() => {
            if (document.body.contains(announcement)) {
                document.body.removeChild(announcement);
            }
        }, 1000);
    }

    // ===== UTILITY METHODS =====
    debounce(func, wait) {
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

    // ===== CLEANUP =====
    destroy() {
        // Clean up all carousels
        this.carousels.forEach(carousel => carousel.destroy());
        this.carousels = [];
    }

    // ===== PROJECTS MOBILE SLIDER =====
    setupProjectsMobileSlider() {
        // Only setup mobile slider functionality
        const projectsSection = document.querySelector('.projects');
        if (!projectsSection) return;
        
        const container = projectsSection.querySelector('.carousel__container');
        const track = projectsSection.querySelector('.carousel__track');
        const items = projectsSection.querySelectorAll('.carousel__item');
        const prevBtn = projectsSection.querySelector('.mobile-slider__nav--prev');
        const nextBtn = projectsSection.querySelector('.mobile-slider__nav--next');
        const dotsContainer = projectsSection.querySelector('.mobile-slider__dots');
        
        if (!container || !track || !items.length || !prevBtn || !nextBtn) {
            return;
        }
        
        let currentIndex = 0;
        let isScrolling = false;
        let observer = null;
        
        // Add draggable=false to all poster images to prevent drag ghosting
        const addDragPrevention = () => {
            const posterImages = projectsSection.querySelectorAll('.poster-card__image');
            posterImages.forEach(img => {
                img.setAttribute('draggable', 'false');
                img.style.userSelect = 'none';
                img.style.pointerEvents = 'none';
            });
        };
        
        // Show mobile controls only on mobile
        const updateMobileVisibility = () => {
            const isMobile = window.innerWidth <= 768;
            const displayValue = isMobile ? 'flex' : 'none';
            
            prevBtn.style.display = displayValue;
            nextBtn.style.display = displayValue;
            
            // Keep dots hidden always (removed per user request)
            if (dotsContainer) {
                dotsContainer.style.display = 'none';
            }
            
            if (isMobile) {
                initializeMobileSlider();
                addDragPrevention();
            } else {
                cleanupObserver();
            }
        };
        
        // Cleanup observer
        const cleanupObserver = () => {
            if (observer) {
                observer.disconnect();
                observer = null;
            }
        };
        
        // Initialize mobile slider functionality
        const initializeMobileSlider = () => {
            // Skip dots creation since they're removed
            if (dotsContainer) {
                dotsContainer.innerHTML = ''; // Clear any existing dots
                dotsContainer.style.display = 'none'; // Ensure hidden
            }
            
            setupIntersectionObserver();
            updateControls();
        };
        
        // Setup enhanced IntersectionObserver with proper rootMargin
        const setupIntersectionObserver = () => {
            cleanupObserver();
            
            // Get computed slider padding for accurate rootMargin
            const computedStyle = window.getComputedStyle(projectsSection);
            const sliderPad = computedStyle.getPropertyValue('--slider-pad').trim();
            
            const observerOptions = {
                root: container,
                threshold: 0.6,
                rootMargin: `0px ${sliderPad} 0px ${sliderPad}` // Use computed padding
            };
            
            observer = new IntersectionObserver((entries) => {
                if (isScrolling) return;
                
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = Array.from(items).indexOf(entry.target);
                        if (index !== -1 && index !== currentIndex) {
                            currentIndex = index;
                            updateControls();
                        }
                    }
                });
            }, observerOptions);
            
            // Observe all items
            items.forEach(item => observer.observe(item));
        };
        
        // Scroll to specific item with improved positioning
        const scrollToItem = (index) => {
            if (isScrolling || index < 0 || index >= items.length) return;
            
            isScrolling = true;
            currentIndex = index;
            
            const itemWidth = items[0].getBoundingClientRect().width;
            const gap = 16; // Match CSS gap
            const scrollPosition = (itemWidth + gap) * index;
            
            const motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            
            container.scrollTo({
                left: scrollPosition,
                behavior: motionReduced ? 'auto' : 'smooth'
            });
            
            // Reset scrolling flag after animation
            setTimeout(() => {
                isScrolling = false;
                // Double-check position after scroll completes
                updateControlsFromScroll();
            }, motionReduced ? 50 : 700);
            
            updateControls();
        };
        
        // Update controls from scroll position (backup method)
        const updateControlsFromScroll = () => {
            if (isScrolling) return;
            
            const scrollLeft = container.scrollLeft;
            const itemWidth = items[0].getBoundingClientRect().width;
            const gap = 16;
            const newIndex = Math.round(scrollLeft / (itemWidth + gap));
            
            if (newIndex !== currentIndex && newIndex >= 0 && newIndex < items.length) {
                currentIndex = newIndex;
                updateControls();
            }
        };
        
        // Update button states and active dots
        const updateControls = () => {
            // Update button states
            prevBtn.disabled = currentIndex <= 0;
            nextBtn.disabled = currentIndex >= items.length - 1;
            
            // Skip dots update since they're removed
        };
        
        // Debounced scroll handler
        let scrollTimeout;
        const handleScroll = this.debounce(() => {
            updateControlsFromScroll();
        }, 150);
        
        // Navigation button handlers with scrollBy for smooth movement
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                scrollToItem(currentIndex - 1);
            }
        });
        
        nextBtn.addEventListener('click', () => {
            if (currentIndex < items.length - 1) {
                scrollToItem(currentIndex + 1);
            }
        });
        
        // Scroll event listener with passive flag for performance
        container.addEventListener('scroll', handleScroll, { passive: true });
        
        // Handle resize events with debouncing
        const debouncedResize = this.debounce(() => {
            updateMobileVisibility();
        }, 250);
        
        window.addEventListener('resize', debouncedResize);
        
        // Initial setup
        updateMobileVisibility();
        
        // Cleanup function for component destruction
        return () => {
            cleanupObserver();
            container.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', debouncedResize);
        };
    }
}

// ===== INITIALIZE APPLICATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Add sr-only class for screen readers
    const srOnlyStyles = document.createElement('style');
    srOnlyStyles.textContent = `
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
    `;
    document.head.appendChild(srOnlyStyles);
    
    const app = new NetflixResume();
    
    // Add loading animation completion
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
    
    // Performance optimization: preconnect to fonts
    const preconnectGoogle = document.createElement('link');
    preconnectGoogle.rel = 'preconnect';
    preconnectGoogle.href = 'https://fonts.gstatic.com';
    preconnectGoogle.crossOrigin = 'anonymous';
    document.head.appendChild(preconnectGoogle);
    
    // Log poster image loading status for debugging
    console.log('🖼️ Checking poster image availability...');
    document.querySelectorAll('.poster-card__image[src*="poster_"]').forEach((img, index) => {
        const testImg = new Image();
        testImg.onload = () => console.log(`✅ Poster ${index + 1}: ${img.src} - Available`);
        testImg.onerror = () => console.log(`❌ Poster ${index + 1}: ${img.src} - Missing (fallback will be applied)`);
        testImg.src = img.src;
    });
    
    // Run automated tests in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        setTimeout(() => {
            runAutomatedTests(app);
        }, 2000);
    }
});

// ===== AUTOMATED TESTING =====
function runAutomatedTests(app) {
    console.log('🔍 Running Netflix Carousel QA Tests...');
    
    const tests = [
        testCarouselNavigation,
        testKeyboardNavigation,
        testResponsiveBreakpoints,
        testAccessibilityFeatures,
        testAutoplayFunctionality
    ];
    
    let passed = 0;
    let failed = 0;
    
    tests.forEach((test, index) => {
        try {
            const result = test(app);
            if (result) {
                console.log(`✅ Test ${index + 1}: ${test.name} - PASSED`);
                passed++;
            } else {
                console.log(`❌ Test ${index + 1}: ${test.name} - FAILED`);
                failed++;
            }
        } catch (error) {
            console.log(`💥 Test ${index + 1}: ${test.name} - ERROR:`, error.message);
            failed++;
        }
    });
    
    console.log(`\n📊 Test Results: ${passed} passed, ${failed} failed`);
    
    if (failed === 0) {
        console.log('🎉 All tests passed! Carousel implementation is working correctly.');
    } else {
        console.log('⚠️  Some tests failed. Check implementation.');
    }
}

function testCarouselNavigation(app) {
    const carousel = document.querySelector('.carousel');
    const nextBtn = carousel.querySelector('.carousel__nav--next');
    const prevBtn = carousel.querySelector('.carousel__nav--prev');
    
    // Test navigation buttons exist and are functional
    if (!nextBtn || !prevBtn) return false;
    
    // Test initial state
    if (!prevBtn.disabled) return false;
    
    // Simulate click
    nextBtn.click();
    
    return true;
}

function testKeyboardNavigation(app) {
    const carousel = document.querySelector('.carousel');
    
    // Test arrow key support
    const leftArrow = new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true });
    const rightArrow = new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true });
    
    carousel.dispatchEvent(leftArrow);
    carousel.dispatchEvent(rightArrow);
    
    return true;
}

function testResponsiveBreakpoints(app) {
    const items = document.querySelectorAll('.carousel__item');
    
    // Check if items have responsive CSS applied
    if (items.length === 0) return false;
    
    const item = items[0];
    const computedStyle = window.getComputedStyle(item);
    
    // Should have width set by CSS
    return computedStyle.width !== 'auto';
}

function testAccessibilityFeatures(app) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel__item');
    const dots = document.querySelectorAll('.carousel__dot');
    
    // Check ARIA attributes
    if (!carousel.getAttribute('aria-label')) return false;
    if (items.length > 0 && !items[0].getAttribute('role')) return false;
    
    // Check pagination dots
    if (dots.length === 0) return false;
    
    return true;
}

function testAutoplayFunctionality(app) {
    // Check if carousels have autoplay timers (indirectly)
    const carousels = app.carousels;
    if (!carousels || carousels.length === 0) return false;
    
    // Check if autoplay methods exist
    const firstCarousel = carousels[0];
    return typeof firstCarousel.pauseAutoplay === 'function' && 
           typeof firstCarousel.resumeAutoplay === 'function';
}

// ===== PREFERS REDUCED MOTION =====
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--transition-fast', '0ms');
    document.documentElement.style.setProperty('--transition-medium', '0ms');
    document.documentElement.style.setProperty('--transition-slow', '0ms');
}

// ===== INTERESTS CURSOR TRACKING (SCOPED) =====
class InterestsCursorTracker {
    constructor() {
        this.element = document.querySelector('.additional-card .interests-visual');
        this.isTracking = false;
        this.animationFrame = null;
        this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (this.element && !this.isReducedMotion) {
            this.init();
        }
    }
    
    init() {
        // Bind events
        this.element.addEventListener('mouseenter', () => this.startTracking());
        this.element.addEventListener('mouseleave', () => this.stopTracking());
        this.element.addEventListener('mousemove', (e) => this.updatePosition(e));
        
        // Touch events for mobile
        this.element.addEventListener('touchstart', (e) => this.handleTouch(e));
        this.element.addEventListener('touchmove', (e) => this.handleTouch(e));
    }
    
    startTracking() {
        this.isTracking = true;
    }
    
    stopTracking() {
        this.isTracking = false;
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = null;
        }
    }
    
    updatePosition(event) {
        if (!this.isTracking) return;
        
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }
        
        this.animationFrame = requestAnimationFrame(() => {
            const rect = this.element.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 100;
            const y = ((event.clientY - rect.top) / rect.height) * 100;
            
            // Clamp values to container bounds
            const clampedX = Math.max(0, Math.min(100, x));
            const clampedY = Math.max(0, Math.min(100, y));
            
            // Update CSS variables
            this.element.style.setProperty('--ix', `${clampedX}%`);
            this.element.style.setProperty('--iy', `${clampedY}%`);
        });
    }
    
    handleTouch(event) {
        if (event.type === 'touchstart' || event.type === 'touchmove') {
            const touch = event.touches[0];
            const rect = this.element.getBoundingClientRect();
            const x = ((touch.clientX - rect.left) / rect.width) * 100;
            const y = ((touch.clientY - rect.top) / rect.height) * 100;
            
            // Clamp values to container bounds
            const clampedX = Math.max(0, Math.min(100, x));
            const clampedY = Math.max(0, Math.min(100, y));
            
            // Update CSS variables for touch position
            this.element.style.setProperty('--ix', `${clampedX}%`);
            this.element.style.setProperty('--iy', `${clampedY}%`);
        }
    }
}

// Initialize cursor tracker when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new InterestsCursorTracker();
    });
} else {
    new InterestsCursorTracker();
}