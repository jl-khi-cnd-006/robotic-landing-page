import React from 'react';
import { cn } from '../lib/utils';

export const Meteors = ({ number = 10, className }) => {
  const meteors = new Array(number).fill(true);

  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={'meteor' + idx}
          className={cn(
            'animate-meteor-effect absolute h-1 w-1 rounded-full bg-slate-600 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]',
            'before:content-[""] before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:w-[50px] before:h-[3px] before:bg-gradient-to-r before:from-[#64748bb3] before:to-transparent',
            className
          )}
          style={{
            top: `${Math.random() * 30}vh`,
            left: `${Math.random() * 150}vh`,
            animationDelay: `${Math.random() * 0.6 + 0.2}s`,
            animationDuration: `${Math.floor(Math.random() * 7 + 2)}s`,
          }}
        ></span>
      ))}
    </>
  );
};
