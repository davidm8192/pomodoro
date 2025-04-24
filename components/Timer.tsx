"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Button from './Button';
import { TIMER_LABELS } from '@/utils/label-constants';

interface TimerProps {
  initialTime: number;
  onComplete: () => void;
  isStudy: boolean;
  onSkip: () => void;
  timerId: string;
}

export default function Timer({ initialTime, onComplete, isStudy, onSkip, timerId }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialTime * 60);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    setTimeLeft(initialTime * 60);
    setIsRunning(true);
  }, [timerId, initialTime]);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            onComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, onComplete]);

  const toggleTimer = useCallback(() => {
    setIsRunning((prev) => !prev);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`text-8xl font-press-start mb-4 ${isStudy ? 'text-[var(--title-color)]' : 'text-[var(--title-color)]'}`}> 
        {formatTime(timeLeft)}
      </div>
      <div className="flex gap-4">
        <Button onClick={toggleTimer}>
          {isRunning ? TIMER_LABELS.PAUSE : TIMER_LABELS.RESUME}
        </Button>
        <Button onClick={onSkip}>
          {TIMER_LABELS.SKIP}
        </Button>
      </div>
    </div>
  );
} 