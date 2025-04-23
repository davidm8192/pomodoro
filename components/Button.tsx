"use client";

import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'default';
  className?: string;
}

export default function Button({ 
  onClick, 
  children, 
  variant = 'primary', 
  size = 'default',
  className = '' 
}: ButtonProps) {
  const baseStyles = "font-pixelify font-bold tracking-widest rounded-md transition-opacity duration-200 hover:opacity-65";
  const sizeStyles = size === "small" ? "text-lg px-4 py-2" : "text-2xl px-10 py-2";
  
  const variantStyles = {
    primary: "bg-[var(--color4)] text-[var(--label-color1)]",
    secondary: "bg-[var(--color2)] text-[var(--label-color1)]"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
} 