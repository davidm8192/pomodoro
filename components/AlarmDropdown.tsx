"use client";

import React, { useState, useRef, useEffect } from 'react';
import IconButton from './IconButton';

interface AlarmDropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export default function AlarmDropdown({ options, value, onChange }: AlarmDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div 
        className="flex items-center justify-between w-48 h-10 px-3 rounded-lg bg-[var(--color3)] cursor-pointer font-pixelify"
        onClick={toggleDropdown}
        style={{ color: 'rgba(0, 0, 0, 0.6)' }}
      >
        <span>{value}</span>
        <span className="text-xs">▼</span>
      </div>
      
      {isOpen && (
        <div className="absolute z-20 w-full mt-[-8px] bg-[var(--color3)] rounded-lg shadow-lg max-h-40 overflow-y-auto">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-3 py-2 cursor-pointer rounded-lg font-pixelify"
              onClick={() => handleOptionClick(option)}
              style={{ 
                color: 'rgba(0, 0, 0, 0.6)',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 
