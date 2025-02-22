"use client";

import ReactCurvedText from 'react-curved-text';

type CurvedTextProps = {
    text: string;
};

export default function CurvedTitle({ text }: CurvedTextProps) {
  return (
    <div className="flex justify-center mt-2">
      <ReactCurvedText
        width={300}
        height={300}
        cx={150}
        cy={150}
        rx={150}
        ry={100}
        startOffset={100}
        reversed={true}
        text={text}
        textProps={{
          className: "text-7xl text-[var(--title-color)] font-pixelify tracking-wider",
          fill: "currentColor",
        }}
      />
    </div>
  );
}