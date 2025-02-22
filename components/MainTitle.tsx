import React from 'react';
import { HOME_TITLE, HOME_SUBTITLE } from '@/utils/constants';
import CurvedTitle from '@/components/CurvedTitle';

export default function MainTitle() {
    return (
      <div className="text-center mt-8">
        <h1 className="text-8xl text-[var(--title-color)] font-pixelify font-bold tracking-title mb-2">
          {HOME_TITLE}
        </h1>
        <CurvedTitle text={HOME_SUBTITLE} />
      </div>
    );
  }
  