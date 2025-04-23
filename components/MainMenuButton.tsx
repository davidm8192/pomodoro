import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TIME_UNIT } from '@/utils/label-constants';
import { TRIANGLE_ARROW_SIZE } from '@/utils/size-constants';

interface MenuButtonProps {
    options: string[];
    label: string;
    minutes?: boolean;
    initialIndex?: number;
    onChange?: (selected: string) => void;
}

const LeftTriangle: React.FC<{ color: string }> = ({ color }) => (
    <svg viewBox='0 0 24 24' width={TRIANGLE_ARROW_SIZE} height={TRIANGLE_ARROW_SIZE} fill={color}>
        <polygon points='18,20 6,12 18,4' />
    </svg>
);

const RightTriangle: React.FC<{ color: string }> = ({ color }) => (
    <svg viewBox='0 0 24 24' width={TRIANGLE_ARROW_SIZE} height={TRIANGLE_ARROW_SIZE} fill={color}>
        <polygon points='6,20 18,12 6,4' />
    </svg>
);

const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -100 : 100, opacity: 0 }),
};

const MenuButton: React.FC<MenuButtonProps> = ({ options, label, minutes = false, initialIndex = 0, onChange }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [direction, setDirection] = useState(0);
    const arrowColor = 'var(--color3)';
    const buttonBg = 'bg-[var(--color3)]';
    const buttonTextColor = 'text-[var(--label-color2)]';
    const buttonWidth = 'w-64';
    const buttonHeight = 'h-20';

    const handlePrev = () => {
        const newIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
        setDirection(-1);
        setCurrentIndex(newIndex);
        onChange && onChange(options[newIndex]);
    };

    const handleNext = () => {
        const newIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
        setDirection(1);
        setCurrentIndex(newIndex);
        onChange && onChange(options[newIndex]);
    };

  return (
    <div className='flex flex-col items-center'>
        <span className='font-pixelify text-2xl tracking-widest mb-[-5px] text-[var(--label-color1)]'>{label}</span>
        <div className='flex items-center mt-0'>
        <button onClick={handlePrev} className='focus:outline-none hover:opacity-65 transition-opacity duration-200'>
            <LeftTriangle color={arrowColor} />
        </button>
        <div className={`${buttonWidth} ${buttonHeight} mx-0 relative overflow-hidden rounded-md ${buttonBg} ${buttonTextColor}`}>        
            <AnimatePresence initial={false} custom={direction}>
            <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial='enter'
                animate='center'
                exit='exit'
                transition={{ duration: 0.15 }}
                className='absolute inset-0 flex flex-col items-center justify-center px-4 py-2 font-press-start'
            >
                <span className='text-3xl leading-none'>{options[currentIndex]}</span>
                {minutes && <div className='text-lg font-pixelify leading-none'>{TIME_UNIT}</div>}
            </motion.div>
            </AnimatePresence>
        </div>
        <button onClick={handleNext} className='focus:outline-none hover:opacity-65 transition-opacity duration-200'>
            <RightTriangle color={arrowColor} />
        </button>
        </div>
    </div>
  );
};

export default MenuButton;