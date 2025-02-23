"use client";

import React from "react";
import { START_BUTTON } from "@/utils/label-constants";
import { useRouter } from "next/navigation";

interface StartButtonProps {
    sessions: number;
    study: number;
    break: number;
    size?: "small" | "default";
}

const StartButton: React.FC<StartButtonProps> = ({
  sessions,
  study,
  break: breakTime,
  size = "default",
}) => {
  const router = useRouter();

  const handleStart = () => {
    router.push(`/timer?sessions=${sessions}&study=${study}&break=${breakTime}`);
  };

  const baseClasses =
    "mt-4 mb-3 font-pixelify font-bold tracking-widest rounded-md text-[var(--label-color1)] bg-[var(--color4)] hover:opacity-65 transition-opacity duration-200";
  const sizeClasses =
    size === "small" ? "text-lg px-4 py-2" : "text-2xl px-10 py-2";

  return (
    <button onClick={handleStart} className={`${baseClasses} ${sizeClasses}`}>
        {START_BUTTON}
    </button>
  );
};

export default StartButton;