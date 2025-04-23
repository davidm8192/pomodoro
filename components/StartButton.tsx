"use client";

import React from "react";
import { START_BUTTON } from "@/utils/label-constants";
import { useRouter } from "next/navigation";
import Button from "./Button";

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

  return (
    <Button 
      onClick={handleStart} 
      size={size}
      className="mt-4 mb-3"
    >
      {START_BUTTON}
    </Button>
  );
};

export default StartButton;