import React, { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);
  const isHoveringLogo = useRef(false);

  const handleMouseMove = useCallback((event) => {
    mouseRef.current = { x: event.clientX, y: event.clientY };

    if (!animationRef.current) {
      animationRef.current = requestAnimationFrame(() => {
        if (cursorRef.current) {
          const rect = cursorRef.current.getBoundingClientRect();
          const offsetX = rect.width / 2;
          const offsetY = rect.height / 2;

          gsap.set(cursorRef.current, {
            x: mouseRef.current.x - offsetX,
            y: mouseRef.current.y - offsetY,
            duration: 0.1,
            ease: "power2.out"
          });
        }
        animationRef.current = null;
      });
    }
  }, []);

  const handleMouseEnter = useCallback((event) => {
    const target = event.target;

    if (
      target.classList.contains('cursor-logo') ||
      (target.tagName === 'IMG' &&
        target.alt &&
        (target.alt.includes('console') ||
          target.alt.includes('roaders') ||
          target.alt.includes('logoipsum') ||
          target.alt.includes('yahoom')))
    ) {
      isHoveringLogo.current = true;

      gsap.to(cursorRef.current, {
        scale: 3,
        backgroundColor: "#ffffff",
        duration: 0.2
      });

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

      gsap.to(target, {
        scale: 1.2,
        duration: 0.2
      });
    } else if (!isHoveringLogo.current) {
      gsap.to(cursorRef.current, {
        scale: 1.5,
        backgroundColor: "#ffffff",
        duration: 0.2
      });
    }
  }, []);

  const handleMouseLeave = useCallback((event) => {
    const target = event.target;

    gsap.to(cursorRef.current, {
      scale: 1,
      backgroundColor: "#7f22fe",
      duration: 0.2
    });

    if (cursorRef.current) {
      cursorRef.current.innerHTML = '';
      cursorRef.current.style.fontSize = '';
      cursorRef.current.style.fontWeight = '';
      cursorRef.current.style.color = '';
      cursorRef.current.style.width = '20px';
      cursorRef.current.style.height = '20px';
    }

    if (
      target.classList.contains('cursor-logo') ||
      (target.tagName === 'IMG' &&
        target.alt &&
        (target.alt.includes('console') ||
          target.alt.includes('roaders') ||
          target.alt.includes('logoipsum') ||
          target.alt.includes('yahoom')))
    ) {
      gsap.to(target, {
        scale: 1,
        duration: 0.2
      });
      isHoveringLogo.current = false;
    }
  }, []);

  const getCompanyName = useCallback((altText) => {
    if (altText.includes('console')) return 'Console';
    if (altText.includes('roaders')) return 'Roaders';
    if (altText.includes('logoipsum')) return 'Logoipsum';
    if (altText.includes('yahoom')) return 'Yahoom';
    return '';
  }, []);

  useEffect(() => {
    // document.body.style.cursor = 'none';

    if (!cursorRef.current) return;

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let timeoutId;
    const addHoverEffects = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const interactiveElements = document.querySelectorAll(
          'a, button, [role="button"], input, textarea, select, .cursor-hover, .cursor-logo'
        );
        interactiveElements.forEach(element => {
          element.addEventListener('mouseenter', handleMouseEnter, { passive: true });
          element.addEventListener('mouseleave', handleMouseLeave, { passive: true });
        });
      }, 100);
    };

    addHoverEffects();

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
      className='fixed h-[20px] w-[20px] bg-[#7f22fe] rounded-full z-[9999] pointer-events-none mix-blend-difference transform-gpu'
      style={{ position: 'fixed',
        left: 0,
        top: 0,
        width: 20, // Or your custom size
        height: 20,
        backgroundColor: '#7f22fe',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999 }}
    />
  );
};

export default Cursor;
