'use client';
import { useKeyPress } from "./useKeyPress";
import { forceScrollTo } from "./useScrollSnap";
import { useCallback, useRef } from "react";

const useKeyScroll = (elem: React.MutableRefObject<HTMLElement | null>) => {
  const elemInfo = useRef<{ elemAbsTop: number, elemAbsBottom: number, elemCtr: number } | null>(null);
  const onKeyPress = useCallback((isUp: boolean) => {
    const currElem = elem.current;
    if (!currElem) return;
  
    if (!elemInfo.current) {
      const elemRect = currElem.getBoundingClientRect();
      const elemAbsTop = elemRect.top - window['exports']['main']?.getBoundingClientRect().top;
      const elemAbsBottom = elemAbsTop + elemRect.height;
      const elemCtr = elemAbsTop + elemRect.height / 2;
      elemInfo.current = {
        elemAbsTop,
        elemAbsBottom,
        elemCtr
      };
    }

    const info = elemInfo.current;
    const scrollCtr = window.scrollY + window.innerHeight / 2;
    if (scrollCtr > info.elemAbsTop && scrollCtr < info.elemAbsBottom) {
      const to = (isUp ? currElem.previousSibling : currElem.nextSibling) as Element | null;
      if (to) forceScrollTo(to);
    } else if (
        scrollCtr >= info.elemCtr && scrollCtr <= info.elemCtr + window.innerHeight && isUp ||
        scrollCtr <= info.elemCtr && scrollCtr >= info.elemCtr - window.innerHeight && !isUp
      ) {
      forceScrollTo(currElem);
    }
  }, [elem]);
  
  useKeyPress('ArrowUp', () => onKeyPress(true));
  useKeyPress('ArrowDown', () => onKeyPress(false));
  useKeyPress('w', () => onKeyPress(true));
  useKeyPress('s', () => onKeyPress(false));
};

export default useKeyScroll;
