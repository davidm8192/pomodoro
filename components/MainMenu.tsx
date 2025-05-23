"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import MenuButton from './MainMenuButton';
import StartButton from './StartButton';
import IconButton from './IconButton';
import SettingsMenu from './SettingsMenu';
import { SESSION_BUTTON, STUDY_BUTTON, BREAK_BUTTON } from '@/utils/label-constants';
import { SETTINGS_ICON_SIZE } from '@/utils/size-constants';

function MainMenu() {
    const [sessions, setSessions] = useState(Number(SESSION_BUTTON.OPTION_ARRAY[2]));
    const [studyTime, setStudy] = useState(Number(STUDY_BUTTON.OPTION_ARRAY[1]));
    const [breakTime, setBreakTime] = useState(Number(BREAK_BUTTON.OPTION_ARRAY[0]));
    const [showSettings, setShowSettings] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleSettingsClick = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setShowSettings(true);
            setIsTransitioning(false);
        }, 300); // TODO: store transition duration as constant
    };

    const handleCloseSettings = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setShowSettings(false);
            setIsTransitioning(false);
        }, 300);
    };

    const handleStart = (newSessions: number, newStudyTime: number, newBreakTime: number) => {
        setSessions(newSessions);
        setStudy(newStudyTime);
        setBreakTime(newBreakTime);
    };

    return (
        <div className="max-w-md mx-auto my-0 relative">
            <div className="relative h-36 w-full mb-[-17px] transform -rotate-[8deg] z-0">
                <Image
                    src="/images/main_menu_img.png"
                    alt="Porcupine Mascot"
                    fill
                    style={{ objectFit: 'contain', objectPosition: 'center' }}
                    className="rounded-lg"
                />
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-[var(--color2)] z-10">
                {!showSettings ? (
                    <>
                        <IconButton
                            onClick={handleSettingsClick}
                            src="/images/settings_icon.png"
                            alt="Settings Icon"
                            size={SETTINGS_ICON_SIZE}
                            className="absolute top-2 right-2"
                        />
                        <div className={`p-2 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                            <div className="mt-2 flex flex-col gap-1 w-full items-center">
                                <MenuButton
                                    label={SESSION_BUTTON.LABEL}
                                    options={SESSION_BUTTON.OPTION_ARRAY}
                                    minutes={false}
                                    initialIndex={2}
                                    onChange={(selected) => setSessions(Number(selected))}
                                />
                                <MenuButton
                                    label={STUDY_BUTTON.LABEL}
                                    options={STUDY_BUTTON.OPTION_ARRAY}
                                    minutes={true}
                                    initialIndex={1}
                                    onChange={(selected) => setStudy(Number(selected))}
                                />
                                <MenuButton
                                    label={BREAK_BUTTON.LABEL}
                                    options={BREAK_BUTTON.OPTION_ARRAY}
                                    minutes={true}
                                    initialIndex={0}
                                    onChange={(selected) => setBreakTime(Number(selected))}
                                />
                                <StartButton 
                                    sessions={sessions}
                                    study={studyTime}
                                    break={breakTime}
                                />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                        <SettingsMenu 
                            onClose={handleCloseSettings}
                            sessions={sessions}
                            studyTime={studyTime}
                            breakTime={breakTime}
                            onStart={handleStart}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default MainMenu;