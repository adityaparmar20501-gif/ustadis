import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 ease-out rounded-full";
  
  const variants = {
    primary: "bg-primary text-secondary hover:bg-primary-light hover:scale-105 shadow-md",
    secondary: "bg-accent text-secondary hover:bg-accent-light hover:scale-105 shadow-md",
    outline: "border border-primary text-primary hover:bg-primary hover:text-secondary",
    ghost: "text-primary hover:bg-primary/5",
  };
  
  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-base px-8 py-4",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <motion.a 
        href={href} 
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        data-cursor-text="CLICK"
        target={target}
        rel={rel}
      >
        {children}
      </motion.a>
    );
  }

  // omit standard React button types that conflict with motion for strict TS
  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      data-cursor-text="CLICK"
      suppressHydrationWarning
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}
