import React, { useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'

const Cursor = () => {
  const cursorRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);
  const isHoveringLogo = useRef(false);

  // Throttled mouse move handler for better performance
  const handleMouseMove = useCallback((event) => {
    mouseRef.current = { x: event.clientX, y: event.clientY };
    
    // Use requestAnimationFrame for smooth performance
    if (!animationRef.current) {
      animationRef.current = requestAnimationFrame(() => {
        if (cursorRef.current) {
          gsap.set(cursorRef.current, {
            x: mouseRef.current.x - 10,
            y: mouseRef.current.y - 10,
            duration: 0.1,
            ease: "power2.out"
          });
        }
        animationRef.current = null;
      });
    }
  }, []);

  // Optimized hover handlers
  const handleMouseEnter = useCallback((event) => {
    const target = event.target;
    
    // Check if it's a logo element
    if (target.classList.contains('cursor-logo') || 
        (target.tagName === 'IMG' && target.alt && 
         (target.alt.includes('console') || target.alt.includes('roaders') || 
          target.alt.includes('logoipsum') || target.alt.includes('yahoom')))) {
      
      isHoveringLogo.current = true;
      
      // Scale up cursor and add company name
      gsap.to(cursorRef.current, {
        scale: 2,
        backgroundColor: "#ffffff",
        duration: 0.2
      });
      
      // Add company name text to cursor
      if (cursorRef.current) {
        cursorRef.current.innerHTML = getCompanyName(target.alt);
        cursorRef.current.style.fontSize = '8px';
        cursorRef.current.style.fontWeight = 'bold';
        cursorRef.current.style.color = '#000';
        cursorRef.current.style.display = 'flex';
        cursorRef.current.style.alignItems = 'center';
        cursorRef.current.style.justifyContent = 'center';
        cursorRef.current.style.textAlign = 'center';
        cursorRef.current.style.width = '60px';
        cursorRef.current.style.height = '60px';
        cursorRef.current.style.borderRadius = '50%';
      }
      
      // Scale up the logo
      gsap.to(target, {
        scale: 1.2,
        duration: 0.2
      });
    } else if (!isHoveringLogo.current) {
      // Regular hover effect only if not already hovering logo
      gsap.to(cursorRef.current, {
        scale: 1.5,
        backgroundColor: "#ffffff",
        duration: 0.2
      });
    }
  }, []);

  const handleMouseLeave = useCallback((event) => {
    const target = event.target;
    
    // Reset cursor
    gsap.to(cursorRef.current, {
      scale: 1,
      backgroundColor: "#7f22fe",
      duration: 0.2
    });
    
    // Clear cursor text and reset size
    if (cursorRef.current) {
      cursorRef.current.innerHTML = '';
      cursorRef.current.style.fontSize = '';
      cursorRef.current.style.fontWeight = '';
      cursorRef.current.style.color = '';
      cursorRef.current.style.width = '20px';
      cursorRef.current.style.height = '20px';
    }
    
    // Reset logo scale if it was a logo
    if (target.classList.contains('cursor-logo') || 
        (target.tagName === 'IMG' && target.alt && 
         (target.alt.includes('console') || target.alt.includes('roaders') || 
          target.alt.includes('logoipsum') || target.alt.includes('yahoom')))) {
      gsap.to(target, {
        scale: 1,
        duration: 0.2
      });
      isHoveringLogo.current = false;
    }
  }, []);

  // Function to get company name based on image alt text
  const getCompanyName = useCallback((altText) => {
    if (altText.includes('console')) return 'Console';
    if (altText.includes('roaders')) return 'Roaders';
    if (altText.includes('logoipsum')) return 'Logoipsum';
    if (altText.includes('yahoom')) return 'Yahoom';
    return '';
  }, []);

  useEffect(() => {
    // Hide default cursor
    // document.body.style.cursor = 'none';

    if (!cursorRef.current) return;

    // Add event listeners with passive option for better performance
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    // Debounced function to add hover effects
    let timeoutId;
    const addHoverEffects = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select, .cursor-hover, .cursor-logo');
        interactiveElements.forEach(element => {
          element.addEventListener('mouseenter', handleMouseEnter, { passive: true });
          element.addEventListener('mouseleave', handleMouseLeave, { passive: true });
        });
      }, 100);
    };

    // Add hover effects initially
    addHoverEffects();

    // Use MutationObserver with debouncing
    const observer = new MutationObserver(() => {
      addHoverEffects();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      clearTimeout(timeoutId);
      document.body.style.cursor = 'auto';
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave]);

  return (
    <div 
      ref={cursorRef}
      id='cursor' 
      className='fixed  h-[20px] w-[20px] bg-[#7f22fe] rounded-full z-[9999] pointer-events-none mix-blend-difference' 
    />
  );
};

export default Cursor
