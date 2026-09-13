'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if it's a touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const clickable = target.closest('a, button, [role="button"], input, select, textarea');
      const viewable = target.closest('[data-cursor-text]');
      
      if (viewable) {
        setIsHovering(true);
        setHoverText(viewable.getAttribute('data-cursor-text') || '');
      } else if (clickable) {
        setIsHovering(true);
        setHoverText('');
      } else {
        setIsHovering(false);
        setHoverText('');
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-gold rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering && !hoverText ? 0.5 : 1
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - (hoverText ? 40 : 20),
          y: mousePosition.y - (hoverText ? 40 : 20),
          width: hoverText ? 80 : 40,
          height: hoverText ? 80 : 40,
          backgroundColor: hoverText ? 'rgba(200, 169, 126, 0.9)' : 'transparent',
          border: hoverText ? 'none' : '1px solid rgba(200, 169, 126, 0.5)',
          scale: isHovering && !hoverText ? 1.5 : 1
        }}
        transition={{ type: "tween", ease: "circOut", duration: 0.3 }}
      >
        {hoverText && (
          <span className="text-primary text-[10px] uppercase font-bold tracking-wider">
            {hoverText}
          </span>
        )}
      </motion.div>
    </>
  );
}
