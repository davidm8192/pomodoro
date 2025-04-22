"use client";

import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Timer from "@/components/Timer";
import Button from "@/components/Button";
import { TIMER_LABELS } from '@/utils/label-constants';

export default function TimerPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const totalSessions = Number(searchParams.get("sessions") || 0);
  const studyTime = Number(searchParams.get("study") || 0);
  const breakTime = Number(searchParams.get("break") || 0);

  const [currentSession, setCurrentSession] = useState(1);
  const [isStudyTime, setIsStudyTime] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [timerId, setTimerId] = useState(0);

  const handleTimerComplete = () => {
    if (isStudyTime) {
      setIsStudyTime(false);
      setTimerId(prev => prev + 1);
    } else {
      if (currentSession < totalSessions) {
        setIsStudyTime(true);
        setCurrentSession(prev => prev + 1);
        setTimerId(prev => prev + 1);
      } else {
        setIsComplete(true);
      }
    }
  };

  const handleSkip = () => {
    if (isStudyTime) {
      setIsStudyTime(false);
      setTimerId(prev => prev + 1);
    } else {
      if (currentSession < totalSessions) {
        setIsStudyTime(true);
        setCurrentSession(prev => prev + 1);
        setTimerId(prev => prev + 1);
      } else {
        setIsComplete(true);
      }
    }
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-[var(--color1)] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-press-start mb-8 text-[var(--title-color)]">
          {TIMER_LABELS.ALL_SESSIONS_COMPLETE}
        </h1>
        <Button onClick={() => router.push('/')}>
          {TIMER_LABELS.RETURN_HOME}
        </Button>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-500 ${
      isStudyTime ? 'bg-[var(--color1)]' : 'bg-[var(--color3)]'
    }`}>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-press-start mb-2">
          {isStudyTime ? TIMER_LABELS.STUDY_TIME : TIMER_LABELS.BREAK_TIME}
        </h1>
        <p className="text-2xl font-press-start">
          {TIMER_LABELS.SESSION} {currentSession} {TIMER_LABELS.OF} {totalSessions}
        </p>
      </div>
      
      <Timer
        timerId={`timer-${timerId}`}
        initialTime={isStudyTime ? studyTime : breakTime}
        onComplete={handleTimerComplete}
        isStudy={isStudyTime}
        onSkip={handleSkip}
      />
    </div>
  );
}
