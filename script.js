/**
 * Portfolio Site - Main JavaScript File
 * Handles theme switching, smooth scrolling, form validation, and animations
 * @author Muahua Ulysses Vang
 * @version 1.0.0
 */

// ============================================================================
// CONSTANTS & CONFIGURATION
// ============================================================================

const THEME_STORAGE_KEY = 'theme';
const SCROLL_THROTTLE_DELAY = 100;
const ANIMATION_DELAY = 100;

// ============================================================================
// DOM ELEMENTS
// ============================================================================

const DOM_ELEMENTS = {
  themeToggle: document.getElementById('themeToggle'),
  body: document.body,
  floatingContact: document.getElementById('floatingContact'),
  headerContactBtn: document.getElementById('contactBtn'),
  header: document.querySelector('.header'),
  contactSection: document.querySelector('#contact'),
  contactForm: document.querySelector('.contact-form'),
  navLinks: document.querySelectorAll('.nav-link, .btn[href^="#"]'),
  contactButtons: document.querySelectorAll('.contact-btn, .floating .contact-btn'),
  projectCards: document.querySelectorAll('.project-card'),
  mobileMenuToggle: document.querySelector('.mobile-menu-toggle'),
  mobileMenu: document.querySelector('.mobile-menu')
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Throttles function execution to improve performance
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Safely gets an element by ID with error handling
 * @param {string} id - Element ID
 * @param {string} context - Context for error message
 * @returns {HTMLElement|null} Element or null if not found
 */
function getElementById(id, context = '') {
  const element = document.getElementById(id);
  if (!element) {
    console.warn(`Element with ID '${id}' not found${context ? ` in ${context}` : ''}`);
  }
  return element;
}

/**
 * Shows notification message to user
 * @param {string} message - Message to display
 * @param {string} type - Type of notification (success, error, info)
 * @param {number} duration - Display duration in milliseconds
 */
function showNotification(message, type = 'info', duration = 3000) {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  // Add to DOM
  document.body.appendChild(notification);
  
  // Auto-remove after duration
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, duration);
}

// ============================================================================
// THEME MANAGEMENT
// ============================================================================

/**
 * Toggles between light and dark themes
 * Updates localStorage and UI accordingly
 */
function toggleTheme() {
  try {
    const isDarkMode = DOM_ELEMENTS.body.classList.contains('dark-mode');
    
    if (isDarkMode) {
      DOM_ELEMENTS.body.classList.remove('dark-mode');
      DOM_ELEMENTS.themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem(THEME_STORAGE_KEY, 'light');
    } else {
      DOM_ELEMENTS.body.classList.add('dark-mode');
      DOM_ELEMENTS.themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem(THEME_STORAGE_KEY, 'dark');
    }
  } catch (error) {
    console.error('Error toggling theme:', error);
    showNotification('Error changing theme', 'error');
  }
}

/**
 * Initializes theme from localStorage or system preference
 * Sets appropriate theme and updates toggle button
 */
function initializeTheme() {
  try {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      DOM_ELEMENTS.body.classList.add('dark-mode');
      DOM_ELEMENTS.themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
      DOM_ELEMENTS.body.classList.remove('dark-mode');
      DOM_ELEMENTS.themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
  } catch (error) {
    console.error('Error initializing theme:', error);
    // Fallback to light theme
    DOM_ELEMENTS.body.classList.remove('dark-mode');
    DOM_ELEMENTS.themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
}

// ============================================================================
// SCROLL HANDLING
// ============================================================================

/**
 * Handles scroll events to show/hide floating contact button
 * Uses throttling for performance optimization
 */
function handleScroll() {
  try {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const headerHeight = DOM_ELEMENTS.header?.offsetHeight || 0;
    
    if (!DOM_ELEMENTS.floatingContact) {
      console.warn('Floating contact button not found');
      return;
    }
    
    // Show floating contact button when scrolled past header
    if (scrollTop > headerHeight) {
      DOM_ELEMENTS.floatingContact.classList.add('visible');
    } else {
      DOM_ELEMENTS.floatingContact.classList.remove('visible');
    }
  } catch (error) {
    console.error('Error handling scroll:', error);
  }
}

// Throttled scroll handler for better performance
const throttledScrollHandler = throttle(handleScroll, SCROLL_THROTTLE_DELAY);

// ============================================================================
// SMOOTH SCROLLING
// ============================================================================

/**
 * Sets up smooth scrolling for navigation links
 * Handles both nav links and buttons with href attributes
 */
function setupSmoothScrolling() {
  if (!DOM_ELEMENTS.navLinks.length) {
    console.warn('No navigation links found');
    return;
  }
  
  DOM_ELEMENTS.navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      
      const targetSection = document.querySelector(targetId);
      if (!targetSection) {
        console.warn(`Target section '${targetId}' not found`);
        return;
      }
      
      try {
        const headerHeight = DOM_ELEMENTS.header?.offsetHeight || 0;
        const targetPosition = targetSection.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      } catch (error) {
        console.error('Error scrolling to target:', error);
        // Fallback to instant scroll
        window.scrollTo(0, targetSection.offsetTop);
      }
    });
  });
}

// ============================================================================
// CONTACT FUNCTIONALITY
// ============================================================================

/**
 * Sets up contact button functionality
 * Handles both header and floating contact buttons
 */
function setupContactButtons() {
  if (!DOM_ELEMENTS.contactButtons.length) {
    console.warn('No contact buttons found');
    return;
  }
  
  DOM_ELEMENTS.contactButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      if (!DOM_ELEMENTS.contactSection) {
        console.warn('Contact section not found');
        return;
      }
      
      try {
        const headerHeight = DOM_ELEMENTS.header?.offsetHeight || 0;
        const targetPosition = DOM_ELEMENTS.contactSection.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      } catch (error) {
        console.error('Error scrolling to contact section:', error);
        // Fallback to instant scroll
        window.scrollTo(0, DOM_ELEMENTS.contactSection.offsetTop);
      }
    });
  });
}

/**
 * Validates email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if email is valid
 */
function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Validates form input
 * @param {string} value - Input value
 * @param {number} minLength - Minimum required length
 * @param {number} maxLength - Maximum allowed length
 * @returns {boolean} True if input is valid
 */
function isValidInput(value, minLength = 1, maxLength = 1000) {
  if (!value || typeof value !== 'string') return false;
  const trimmedValue = value.trim();
  return trimmedValue.length >= minLength && trimmedValue.length <= maxLength;
}

/**
 * Sets up contact form with validation and submission handling
 */
function setupContactForm() {
  if (!DOM_ELEMENTS.contactForm) {
    console.warn('Contact form not found');
    return;
  }
  
  DOM_ELEMENTS.contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    try {
      const formData = new FormData(this);
      const name = formData.get('name') || '';
      const email = formData.get('email') || '';
      const message = formData.get('message') || '';
      
      // Validate inputs
      if (!isValidInput(name, 2, 100)) {
        showNotification('Please enter a valid name (2-100 characters)', 'error');
        return;
      }
      
      if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
      }
      
      if (!isValidInput(message, 10, 1000)) {
        showNotification('Please enter a message (10-1000 characters)', 'error');
        return;
      }
      
      // Show loading state
      const submitButton = this.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;
      
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success handling
      showNotification('Message sent successfully!', 'success');
      this.reset();
      
    } catch (error) {
      console.error('Error submitting form:', error);
      showNotification('Error sending message. Please try again.', 'error');
    } finally {
      // Reset button state
      const submitButton = this.querySelector('button[type="submit"]');
      submitButton.textContent = 'Send Message';
      submitButton.disabled = false;
    }
  });
}

// ============================================================================
// ANIMATIONS
// ============================================================================

/**
 * Sets up scroll-triggered animations for project cards
 * Uses Intersection Observer API for performance
 */
function setupAnimations() {
  if (!DOM_ELEMENTS.projectCards.length) {
    console.warn('No project cards found for animations');
    return;
  }
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add staggered animation delay
        setTimeout(() => {
          entry.target.classList.add('animate-in');
        }, index * ANIMATION_DELAY);
        
        // Stop observing after animation
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  DOM_ELEMENTS.projectCards.forEach(card => {
    observer.observe(card);
  });
}

// ============================================================================
// MOBILE MENU
// ============================================================================

/**
 * Sets up mobile menu functionality
 * Handles toggle, close on link click, and resize events
 */
function setupMobileMenu() {
  if (!DOM_ELEMENTS.mobileMenuToggle || !DOM_ELEMENTS.mobileMenu) {
    console.warn('Mobile menu elements not found');
    return;
  }
  
  // Toggle mobile menu
  DOM_ELEMENTS.mobileMenuToggle.addEventListener('click', function() {
    try {
      const isOpen = DOM_ELEMENTS.mobileMenu.classList.contains('active');
      
      if (isOpen) {
        DOM_ELEMENTS.mobileMenu.classList.remove('active');
        this.setAttribute('aria-expanded', 'false');
      } else {
        DOM_ELEMENTS.mobileMenu.classList.add('active');
        this.setAttribute('aria-expanded', 'true');
      }
    } catch (error) {
      console.error('Error toggling mobile menu:', error);
    }
  });
  
  // Close menu when clicking on links
  const mobileLinks = DOM_ELEMENTS.mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      DOM_ELEMENTS.mobileMenu.classList.remove('active');
      DOM_ELEMENTS.mobileMenuToggle.setAttribute('aria-expanded', 'false');
    });
  });
  
  // Handle window resize
  let resizeTimeout;
  function handleResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (window.innerWidth > 768) {
        DOM_ELEMENTS.mobileMenu.classList.remove('active');
        DOM_ELEMENTS.mobileMenuToggle.setAttribute('aria-expanded', 'false');
      }
    }, 250);
  }
  
  window.addEventListener('resize', handleResize);
}

// ============================================================================
// INITIALIZATION
// ============================================================================

/**
 * Main initialization function
 * Sets up all event listeners and initial state
 */
function initialize() {
  try {
    // Initialize theme
    initializeTheme();
    
    // Setup event listeners
    if (DOM_ELEMENTS.themeToggle) {
      DOM_ELEMENTS.themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Setup scroll handling
    window.addEventListener('scroll', throttledScrollHandler);
    
    // Setup smooth scrolling
    setupSmoothScrolling();
    
    // Setup contact functionality
    setupContactButtons();
    setupContactForm();
    
    // Setup animations
    setupAnimations();
    
    // Setup mobile menu
    setupMobileMenu();
    
    console.log('Portfolio site initialized successfully');
    
  } catch (error) {
    console.error('Error initializing portfolio site:', error);
    showNotification('Error initializing site', 'error');
  }
}

// ============================================================================
// EVENT LISTENERS
// ============================================================================

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize);
} else {
  initialize();
}
