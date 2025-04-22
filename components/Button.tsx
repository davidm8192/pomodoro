"use client";

import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({ onClick, children, variant = 'primary', className = '' }: ButtonProps) {
  const baseStyles = "px-4 py-2 font-press-start rounded hover:bg-opacity-80 transition-all";
  
  const variantStyles = {
    primary: "bg-[var(--color2)] text-[var(--title-color)]",
    secondary: "bg-[var(--color1)] text-[var(--title-color)] border-2 border-[var(--color2)]"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
} 