"use client";

import React from 'react';
import { applyTheme } from '@/utils/applyTheme';

interface ThemeButtonProps {
  theme: {
    COLOR1: string;
    COLOR2: string;
    COLOR3: string;
    COLOR4: string;
    TITLE_COLOR: string;
    LABEL_COLOR1: string;
    LABEL_COLOR2: string;
  };
  isSelected: boolean;
  onClick: () => void;
}

export default function ThemeButton({ theme, isSelected, onClick }: ThemeButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-[4rem] h-[4rem] rounded-full flex items-center justify-center transition-all duration-300 border-2 border-[var(--label-color1)] ${
        isSelected ? 'scale-110 ring-2 ring-[var(--color4)]' : 'hover:scale-105'
      }`}
      style={{
        background: `conic-gradient(
          ${theme.COLOR1} 0% 25%,
          ${theme.COLOR2} 25% 50%,
          ${theme.COLOR3} 50% 75%,
          ${theme.COLOR4} 75% 100%
        )`
      }}
    >
      {isSelected && (
        <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[var(--color4)]"></div>
        </div>
      )}
    </button>
  );
} 