"use client";

import React from 'react';

interface CloseButtonProps {
  onClick: () => void;
}

export default function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="w-10 h-10 rounded-md bg-[var(--color2)] text-[var(--label-color1)] flex items-center justify-center hover:opacity-80 transition-opacity duration-200 font-pixelify text-5xl"
    >
      x
    </button>
  );
} 