'use client';
import { MutableRefObject, useEffect, useRef } from "react";
import useScroll from "./useScroll";

// Set up a global observable for scroll Interval ID
if (typeof window !== 'undefined') {
  (window['exports'] ??= {})['sectScrollIntervalId'] ??= null;
  window['exports']['lastScrollFinished'] ??= -Infinity;
  window['exports']['main'] ??= document.getElementsByTagName('main')[0];
}
export const forceScrollTo = (elem: Element) => {
  if (!!window['exports']['sectScrollIntervalId']) return;
  const func = () => {
    elem.scrollIntoView();
    if (elem.getBoundingClientRect().top == 0) {
      clearInterval(window['exports']['sectScrollIntervalId']);
      window['exports']['sectScrollIntervalId'] = null;
      window['exports']['lastScrollFinished'] = new Date().getTime();
    }
  }
  func()
  //window['exports']['sectScrollIntervalId'] = setInterval(func, 50);
}

const useScrollSnap = (elem: MutableRefObject<HTMLElement | null>) => {
  const { subscribe, success } = useScroll();
  const delay = 200; // milliseconds

  // Last scroll position
  const lastScroll = useRef<number | null>(null);
  const elemInfo = useRef<{ elemAbsTop: number, elemAbsBottom: number, elemCtr: number } | null>(null);
  useEffect(() => {
    // Check if useScroll was successful and if there is a DOM Elem being tracked.
    if (!success || !elem.current) return;

    // Caching some useful information
    if (!elemInfo.current) {
      const elemRect = elem.current.getBoundingClientRect();
      const elemAbsTop = elemRect.top - window['exports']['main']?.getBoundingClientRect().top;
      const elemAbsBottom = elemAbsTop + elemRect.height;
      const elemCtr = elemAbsTop + elemRect.height / 2;
      elemInfo.current = {
        elemAbsTop: elemAbsTop,
        elemAbsBottom: elemAbsBottom,
        elemCtr: elemCtr
      }
    }
    
    const hasScrolled = (st: number) => {
      const last = lastScroll.current;

      // If is not currently scrolling and has been enough time sinc
      if (!window['exports']['sectScrollIntervalId'] &&
          new Date().getTime() - window['exports']['lastScrollFinished'] >= delay) {
        // If ran at least once, is actually going somewhere, and there is a tracked element
        if (last && st != last && elem.current) {
          const prevScrollCtr = last + window.innerHeight / 2;
          let currDist: number;
  
          // Was inside and is scrolling
          const info = elemInfo.current;
          if (prevScrollCtr >= info!.elemAbsTop && prevScrollCtr <= info!.elemAbsBottom) {
            const to = (st > last ? elem.current.nextSibling : elem.current.previousSibling) as Element | null;
            if (to) forceScrollTo(to);
          } else if (
              // From the outside, is scrolling towards element (threshold of 12.5%)
              (currDist = Math.abs(st + window.innerHeight / 2 - info!.elemCtr)) < Math.abs(prevScrollCtr - info!.elemCtr) &&
              currDist < window.innerHeight
            ) {
            forceScrollTo(elem.current);
          }
        }
      }

      lastScroll.current = st;
    }

    const subscription = subscribe(hasScrolled);
    return () => subscription?.unsubscribe();
  }, [subscribe, elem, success]);
};

export default useScrollSnap;