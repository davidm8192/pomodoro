"use client";

import React, { useState, useEffect } from 'react';
import CloseButton from './CloseButton';
import NumberInput from './NumberInput';
import AlarmDropdown from './AlarmDropdown';
import ThemeButton from './ThemeButton';
import StartButton from './StartButton';
import IconButton from './IconButton';
import { 
  TIMER_SECTION, 
  ALARM_SECTION, 
  THEMES_SECTION,
  SESSIONS_INPUT_LABEL,
  STUDY_INPUT_LABEL,
  BREAK_INPUT_LABEL,
  SESSIONS_MAX,
  STUDY_MAX,
  BREAK_MAX,
  ALARM_OPTIONS
} from '@/utils/label-constants';
import { SPEAKER_ICON_SIZE } from '@/utils/size-constants';
import { THEMES } from '@/utils/color-constants';
import { applyTheme } from '@/utils/applyTheme';

interface SettingsMenuProps {
  onClose: () => void;
  sessions: number;
  studyTime: number;
  breakTime: number;
  onStart: (sessions: number, studyTime: number, breakTime: number) => void;
}

export default function SettingsMenu({ 
  onClose, 
  sessions, 
  studyTime, 
  breakTime,
  onStart
}: SettingsMenuProps) {
  const [localSessions, setLocalSessions] = useState(sessions);
  const [localStudyTime, setLocalStudyTime] = useState(studyTime);
  const [localBreakTime, setLocalBreakTime] = useState(breakTime);
  const [alarmSound, setAlarmSound] = useState(ALARM_OPTIONS[0]);
  const [selectedTheme, setSelectedTheme] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = document.documentElement;
      const currentColor1 = getComputedStyle(root).getPropertyValue('--color1').trim();
      const currentColor2 = getComputedStyle(root).getPropertyValue('--color2').trim();
      
      const currentThemeIndex = THEMES.findIndex(theme => 
        theme.COLOR1 === currentColor1 && theme.COLOR2 === currentColor2
      );
      
      if (currentThemeIndex !== -1) {
        setSelectedTheme(currentThemeIndex);
      }
    }
  }, []);

  const handleThemeChange = (index: number) => {
    setSelectedTheme(index);
    applyTheme(THEMES[index]);
  };

  const handleStart = () => {
    onStart(localSessions, localStudyTime, localBreakTime);
  };
  return (
    <div>
      <div className="absolute top-[10px] right-[15px] z-20">
          <CloseButton onClick={onClose} />
      </div>
      <div className="relative rounded-xl overflow-hidden shadow-lg bg-[var(--color2)] z-10">
          <div className="p-2">
              {/* timer */}
              <div className="mt-2 mb-2">
                  <h3 className="text-2xl font-bold tracking-[0.2em] mb-[0px] text-[var(--label-color1)] text-center font-pixelify">{TIMER_SECTION}</h3>
                  <div className="flex justify-center gap-7">
                      <NumberInput 
                          label={SESSIONS_INPUT_LABEL}
                          value={localSessions}
                          max={SESSIONS_MAX}
                          onChange={setLocalSessions}
                      />
                      <NumberInput 
                          label={STUDY_INPUT_LABEL}
                          value={localStudyTime}
                          max={STUDY_MAX}
                          onChange={setLocalStudyTime}
                      />
                      <NumberInput 
                          label={BREAK_INPUT_LABEL}
                          value={localBreakTime}
                          max={BREAK_MAX}
                          onChange={setLocalBreakTime}
                      />
                  </div>
              </div>
              
              {/* alarm */}
              <div className="mb-2">
                  <h3 className="text-2xl font-bold tracking-[0.2em] mb-[-6px] text-[var(--label-color1)] text-center font-pixelify">{ALARM_SECTION}</h3>
                  <div className="flex items-center justify-center gap-3">
                      <AlarmDropdown 
                          options={ALARM_OPTIONS}
                          value={alarmSound}
                          onChange={setAlarmSound}
                      />
                      <IconButton
                          onClick={() => {}}
                          src="/images/speaker_icon.png"
                          alt="Speaker Icon"
                          size={SPEAKER_ICON_SIZE}
                      />
                  </div>
              </div>
              
              {/* themes */}
              <div className="mb-1">
                  <h3 className="text-2xl font-bold tracking-[0.2em] mb-2 text-[var(--label-color1)] text-center font-pixelify">{THEMES_SECTION}</h3>
                  <div className="flex justify-center gap-6">
                      {THEMES.map((theme, index) => (
                      <ThemeButton
                          key={index}
                          theme={theme}
                          isSelected={selectedTheme === index}
                          onClick={() => handleThemeChange(index)}
                      />
                      ))}
                  </div>
              </div>
              
              {/* start */}
              <div className="flex justify-center">
                  <StartButton 
                      sessions={localSessions}
                      study={localStudyTime}
                      break={localBreakTime}
                  />
              </div>
          </div>
      </div>
    </div>
  );
}