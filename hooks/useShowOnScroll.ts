'use client';
import { useCallback, useEffect, useRef, useState } from "react";
import useScroll from './useScroll';

function useShowOnScroll(elemRect?: DOMRect) : boolean {
  const elemBottom = elemRect?.bottom ?? 0;

  // State variable to determine whether to show the element on scroll
  const [isShow, setIsShow] = useState(true);

  // Define constants
  // Minimum scroll distance for change detection
  const delta = 5; // px

  // Creates Callback function
  // useRef to store the last scroll position
  const lastScroll = useRef<number>(0);
  const onScrolled = useCallback((st: number) => {
    // Check if the scroll difference is less than the defined delta
    if (Math.abs(lastScroll.current - st) < delta) return;

    // Check if scrolling down and below the element, then hide
    if (st > lastScroll.current && st > elemBottom) {
      setIsShow(false);
    } else if (st + window.innerHeight < html.current!.getBoundingClientRect().height) {
      // Check if scrolling up and not at the bottom, then show
      setIsShow(true);
    }

    // Update the last scroll position
    lastScroll.current = st;
  }, [lastScroll, elemBottom]);

  // Destructuring values from the useScroll custom hook
  const { subscribe, success } = useScroll();

  const html = useRef<HTMLElement | null>(null);
  useEffect(() => {
    // Check if useScroll was successful; if not, do nothing
    if (!success) return;

    // Assigning the reference to the HTML element
    html.current = document.getElementsByTagName('html')[0];

    // Subscribe to scroll events using the custom hook
    // Cleanup function to unsubscribe when the component unmounts
    const subscription = subscribe(onScrolled);
    return () => subscription?.unsubscribe();
  }, [subscribe, success, onScrolled]);

  // Return the current state to indicate whether to show the element on scroll
  return isShow;
}

export default useShowOnScroll;