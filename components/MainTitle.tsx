import React from 'react';
import { HOME_TITLE, HOME_SUBTITLE } from '@/utils/label-constants';
import CurvedTitle from '@/components/CurvedTitle';

function MainTitle() {
    return (
      <div className="text-center mt-2">
        <h1 className="text-8xl text-[var(--title-color)] font-pixelify font-bold tracking-title mb-[-20px]">
          {HOME_TITLE}
        </h1>
        <CurvedTitle text={HOME_SUBTITLE} />
      </div>
    );
  }
  
  export default MainTitle;