"use client";

import { useEffect } from "react";

const SmoothScroll = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let currentScroll = window.scrollY;
    let targetScroll = window.scrollY;
    let animationId: number | null = null;
    let touchStartY = 0;
    let isTouching = false;

    const lerp = 0.12;
    const scrollMultiplier = 1.5;

    const animate = () => {
      const diff = targetScroll - currentScroll;
      
      if (Math.abs(diff) > 1) {
        currentScroll += diff * lerp;
        window.scrollTo(0, currentScroll);
        animationId = requestAnimationFrame(animate);
      } else {
        currentScroll = targetScroll;
        window.scrollTo(0, currentScroll);
        animationId = null;
      }
    };

    const clampScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));
    };

    const startAnimation = () => {
      if (!animationId) {
        animationId = requestAnimationFrame(animate);
      }
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      // Sync with current scroll position
      currentScroll = window.scrollY;
      targetScroll = currentScroll + (e.deltaY * scrollMultiplier);
      
      clampScroll();
      startAnimation();
    };

    // Touch support for mobile/trackpad
    const onTouchStart = (e: TouchEvent) => {
      isTouching = true;
      touchStartY = e.touches[0].clientY;
      currentScroll = window.scrollY;
      targetScroll = currentScroll;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isTouching) return;
      
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      touchStartY = touchY;
      
      targetScroll += deltaY;
      clampScroll();
      startAnimation();
    };

    const onTouchEnd = () => {
      isTouching = false;
    };

    // Sync on external scroll (e.g., scrollbar, keyboard)
    const onScroll = () => {
      if (!animationId && !isTouching) {
        currentScroll = window.scrollY;
        targetScroll = window.scrollY;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
};

export default SmoothScroll;
