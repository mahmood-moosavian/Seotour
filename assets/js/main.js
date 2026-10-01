/**
 * SEOTOUR.IR - Main JavaScript
 * Handles: navigation, animations, FAQ, mobile menu, form
 */

(function() {
  'use strict';

  // ===== Header scroll effect =====
  const header = document.querySelector('.header');
  let lastScroll = 0;

  function handleScroll() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
    
    lastScroll = currentScroll;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // ===== Mobile menu toggle =====
  const mobileToggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav');

  if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', function() {
      mobileToggle.classList.toggle('mobile-toggle--active');
      nav.classList.toggle('nav--open');
    });

    // Close menu on link click
    nav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        mobileToggle.classList.remove('mobile-toggle--active');
        nav.classList.remove('nav--open');
      });
    });
  }

  // ===== FAQ Accordion =====
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(function(item) {
    const question = item.querySelector('.faq-item__question');
    if (question) {
      question.addEventListener('click', function() {
        const isActive = item.classList.contains('faq-item--active');
        
        // Close all
        faqItems.forEach(function(otherItem) {
          otherItem.classList.remove('faq-item--active');
          const ans = otherItem.querySelector('.faq-item__answer');
          if (ans) ans.style.display = 'none';
        });
        
        // Open clicked
        if (!isActive) {
          item.classList.add('faq-item--active');
          const ans = item.querySelector('.faq-item__answer');
          if (ans) ans.style.display = 'block';
        }
      });
    }
  });

  // ===== Scroll animations (Intersection Observer) =====
  const fadeElements = document.querySelectorAll('.fade-in');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in--visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(function(el) {
      observer.observe(el);
    });
  } else {
    // Fallback
    fadeElements.forEach(function(el) {
      el.classList.add('fade-in--visible');
    });
  }

  // ===== Animated counters =====
  const counters = document.querySelectorAll('[data-counter]');
  
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-counter'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(eased * target);
      el.textContent = current.toLocaleString('fa-IR') + suffix;
      
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  if ('IntersectionObserver' in window && counters.length > 0) {
    const counterObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function(c) {
      counterObserver.observe(c);
    });
  }

  // ===== Contact form handler =====
  const contactForm = document.querySelector('#contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'در حال ارسال...';
      
      // Simulate submission (in production, replace with actual endpoint)
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);
      
      // Store in localStorage as fallback (can be replaced with API call)
      const submissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
      submissions.push({
        ...data,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('contact_submissions', JSON.stringify(submissions));
      
      setTimeout(function() {
        submitBtn.innerHTML = '✓ پیام ارسال شد';
        contactForm.reset();
        
        // Show success message
        const successMsg = document.querySelector('#form-success');
        if (successMsg) {
          successMsg.style.display = 'block';
          successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        
        setTimeout(function() {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          if (successMsg) successMsg.style.display = 'none';
        }, 5000);
      }, 1200);
    });
  }

  // ===== Smooth scroll for anchor links =====
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      
      if (target) {
        e.preventDefault();
        const headerHeight = header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ===== Active nav link based on current page =====
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(function(link) {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });

  // ===== Lazy load images =====
  if ('loading' in HTMLImageElement.prototype) {
    document.querySelectorAll('img[loading="lazy"]').forEach(function(img) {
      // Native lazy loading supported
    });
  }

})();
