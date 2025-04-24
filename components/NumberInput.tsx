"use client";

import React, { useState, useEffect } from 'react';

interface NumberInputProps {
  label: string;
  value: number;
  max: number;
  onChange: (value: number) => void;
}

export default function NumberInput({ label, value, max, onChange }: NumberInputProps) {
  const [inputValue, setInputValue] = useState(value.toString());

  useEffect(() => {
    setInputValue(value.toString());
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (/^\d*$/.test(newValue)) {
      setInputValue(newValue);

      if (newValue !== '') {
        const num = Math.min(parseInt(newValue, 10), max);
        onChange(num);
      }
    }
  };

  const handleBlur = () => {
    const numValue = parseInt(inputValue, 10);
    if (isNaN(numValue) || numValue < 1) {
      setInputValue('1');
      onChange(1);
    } else {
      const limitedValue = Math.min(numValue, max);
      setInputValue(limitedValue.toString());
      onChange(limitedValue);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <label className="text-m text-[var(--label-color1)] font-pixelify tracking-widest mb-[-3px]">{label}</label>
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        className="w-[6rem] h-[5rem] rounded-lg bg-[var(--color3)] text-center text-xl font-press-start focus:outline-none focus:ring-2 focus:ring-[var(--color4)]"
        style={{ color: 'rgba(0, 0, 0, 0.6)' }} // text opacity
      />
    </div>
  );
} 