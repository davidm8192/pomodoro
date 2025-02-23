"use client";

import React, { useState } from "react";
import { TIME_UNIT } from "@/utils/label-constants";
import { TRIANGLE_ARROW_SIZE } from "@/utils/size-constants";

interface MenuButtonProps {
  options: string[];
  label: string;
  minutes?: boolean;
  initialIndex?: number;
  onChange?: (selected: string) => void;
}

// TODO: add on-hover on-click effect to arrows

const LeftTriangle: React.FC<{ color: string }> = ({ color }) => (
    <svg viewBox="0 0 24 24" width={TRIANGLE_ARROW_SIZE} height={TRIANGLE_ARROW_SIZE} fill={color}>
        <polygon points="18,20 6,12 18,4" />
    </svg>
);

const RightTriangle: React.FC<{ color: string }> = ({ color }) => (
    <svg viewBox="0 0 24 24" width={TRIANGLE_ARROW_SIZE} height={TRIANGLE_ARROW_SIZE} fill={color}>
        <polygon points="6,20 18,12 6,4" />
    </svg>
);

const MenuButton: React.FC<MenuButtonProps> = ({
    options,
    label,
    minutes = false,
    initialIndex = 0,
    onChange,
}) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const arrowColor = "var(--color3)";
    const buttonBg = "bg-[var(--color3)]";
    const buttonTextColor = "text-[var(--label-color2)]";
    const buttonWidth = "w-64";
    const buttonHeight = "h-20";

    const handlePrev = () => {
        const newIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
        setCurrentIndex(newIndex);
        onChange && onChange(options[newIndex]);
    };

    const handleNext = () => {
        const newIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
        setCurrentIndex(newIndex);
        onChange && onChange(options[newIndex]);
    };

  return (
    <div className="flex flex-col items-center">
        
        {/* button label on top */}
        <span className="font-pixelify text-2xl tracking-widest mb-[-5px] text-[var(--label-color1)]">{label}</span>
        
        {/* button */}
        <div className="flex items-center mt-0">
            {/* left arrow */}
            <button onClick={handlePrev} className="focus:outline-none">
                <LeftTriangle color={arrowColor} />
            </button>
            {/* text in button */}
            <div
                className={`flex flex-col items-center justify-center px-4 py-2 rounded-md mx-0 text-center font-press-start ${buttonBg} ${buttonTextColor} ${buttonWidth} ${buttonHeight}`}
            >
                <span className="text-3xl leading-none">{options[currentIndex]}</span>
                {minutes && <div className="text-lg font-pixelify leading-none">{TIME_UNIT}</div>}
            </div>
            {/* right arrow */}
            <button onClick={handleNext} className="focus:outline-none">
                <RightTriangle color={arrowColor} />
            </button>
        </div>

    </div>
  );
};

export default MenuButton;