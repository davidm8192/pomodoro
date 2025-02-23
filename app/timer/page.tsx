"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

export default function TimerPage() {
  const searchParams = useSearchParams();
  const sessions = Number(searchParams.get("sessions") || 0);
  const studyTime = Number(searchParams.get("study") || 0);
  const breakTime = Number(searchParams.get("break") || 0);

  return (
    // placeholder code
    <div className="min-h-screen bg-[var(--color1)] text-[var(--title-color)] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-press-start mb-4">Timer Page</h1>
        <div className="text-xl font-press-start">
            <p>Sessions: {sessions}</p>
            <p>Study: {studyTime} minutes</p>
            <p>Break: {breakTime} minutes</p>
        </div>
    </div>
  );
}
