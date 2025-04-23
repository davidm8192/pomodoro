"use client";

import React from 'react';
import Image from 'next/image';
import { DEFAULT_BUTTON_ICON_SIZE } from '@/utils/size-constants';

interface IconButtonProps {
  onClick: () => void;
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

export default function IconButton({ 
  onClick, 
  src, 
  alt, 
  size = DEFAULT_BUTTON_ICON_SIZE,
  className = '' 
}: IconButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`p-2 hover:opacity-65 transition-opacity duration-200 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
      />
    </button>
  );
} 