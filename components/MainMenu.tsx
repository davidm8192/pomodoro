import Image from 'next/image';
import React from 'react';
import { FiSettings } from 'react-icons/fi';

export default function MainMenu() {
  return (
    <div className="max-w-md mx-auto my-0 relative">
        <div className="relative h-48 w-full mb-[-20px] transform -rotate-[8deg] z-0">
            <Image
                src="/images/main_menu_img.png"
                alt="Porcupine Mascot"
                layout="fill"
                objectFit="contain"
                objectPosition="center" 
                className="rounded-lg"
            />
        </div>
        <div className="relative rounded-xl overflow-hidden shadow-lg bg-[var(--color2)] z-10">
            <button className="absolute top-2 right-2 p-2">
                <Image
                    src="/images/settings_icon.png"
                    alt="Settings Icon"
                    width={32}
                    height={32}
                />
            </button>
            <div className="p-4">
                <div className="mt-4 flex flex-col gap-4 w-full items-center">
                    <button className="bg-[var(--color3)] hover:bg-[var(--color3)] text-white font-pixelify px-4 py-2 rounded w-3/4">
                    placeholder
                    </button>
                    <button className="bg-[var(--color3)] hover:bg-[var(--color3)] text-white font-pixelify px-4 py-2 rounded w-3/4">
                    placeholder
                    </button>
                    <button className="bg-[var(--color3)] hover:bg-[var(--color3)] text-white font-pixelify px-4 py-2 rounded w-3/4">
                    placeholder
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}