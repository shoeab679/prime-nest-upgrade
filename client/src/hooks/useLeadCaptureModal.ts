import { useState, useEffect } from 'react';

export function useLeadCaptureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    // Check if user has already submitted
    const submitted = localStorage.getItem('leadCaptureSubmitted');
    if (submitted) {
      setHasSubmitted(true);
      return;
    }

    // Timer trigger - show after 8 seconds
    const timerTrigger = setTimeout(() => {
      if (!hasSubmitted) {
        setIsOpen(true);
      }
    }, 8000);

    // Scroll trigger - show after 30% scroll
    const handleScroll = () => {
      if (hasSubmitted || isOpen) return;

      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage > 30) {
        setIsOpen(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Exit intent trigger - show when mouse leaves viewport (desktop only)
    const handleMouseLeave = (e: MouseEvent) => {
      if (hasSubmitted || isOpen) return;
      if (e.clientY <= 0) {
        setIsOpen(true);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timerTrigger);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasSubmitted, isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = () => {
    setHasSubmitted(true);
    localStorage.setItem('leadCaptureSubmitted', 'true');
    setIsOpen(false);
  };

  return {
    isOpen,
    hasSubmitted,
    handleClose,
    handleSubmit,
  };
}
