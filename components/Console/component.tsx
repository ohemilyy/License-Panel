import React from 'react';
import './styles.css'

const Console = (props: any) =>
  <div className="">
   
    <div className={`relative mockup-content z-[1] ${props.className}`}>
      <div className="absolute h-full w-full bg-black inset-0 z-[-1] console-filter"></div>
      {props.children}
    </div>
  </div>;

export default Console;