/*

1. Create main menu component with buttons for session, study, break, start, and setting.
2. Create button component for sessions, study, and break
    - Create object binding two triangle buttons beside the rectangular button
    - Create text component centered within rectangular button
    - Define props: array of strings for each button, and an option for "minutes" 
3. Create button for start component 
    - Create rectangular button with text "start"
    - No props
    - Button functionality: Performs calculations and navigates you to timer
4. Create button for settings component 
    -

*/

import Image from 'next/image';
import React from 'react';
import MenuButton from './MainMenuButton';
import { SESSION_BUTTON, STUDY_BUTTON, BREAK_BUTTON, START_BUTTON } from '@/utils/label-constants';
import { SETTINGS_ICON_SIZE } from '@/utils/size-constants';

export default function MainMenu() {
  return (
    <div className="max-w-md mx-auto my-0 relative">
        <div className="relative h-36 w-full mb-[-20px] transform -rotate-[8deg] z-0">
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
                    width={SETTINGS_ICON_SIZE}
                    height={SETTINGS_ICON_SIZE}
                />
            </button>
            <div className="p-2">
                <div className="mt-4 flex flex-col gap-1 w-full items-center">
                    <MenuButton
                        label={SESSION_BUTTON.LABEL}
                        options={SESSION_BUTTON.OPTION_ARRAY}
                        minutes={false}
                    />
                    <MenuButton
                        label={STUDY_BUTTON.LABEL}
                        options={STUDY_BUTTON.OPTION_ARRAY}
                        minutes={true}
                    />
                     <MenuButton
                        label={BREAK_BUTTON.LABEL}
                        options={BREAK_BUTTON.OPTION_ARRAY}
                        minutes={true}
                    />
                </div>
            </div>
        </div>
    </div>
  );
}