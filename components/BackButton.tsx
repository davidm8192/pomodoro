"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import IconButton from './IconButton';
import { BACK_ICON_SIZE } from '@/utils/size-constants';

interface BackButtonProps {
  className?: string;
}

export default function BackButton({ className = '' }: BackButtonProps) {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/');
  };

  return (
    <IconButton
      onClick={handleBackClick}
      src="/images/left_arrow_icon.png"
      alt="Back to home"
      size={BACK_ICON_SIZE}
      className={className}
    />
  );
} 