'use client';
import { useEffect, useRef, useState } from "react";
import { Observer, Subject, Subscription } from 'rxjs';

// Set up a global observable for scroll events and global variable for the main HTML element
if (typeof window !== 'undefined') {
  (window['exports'] ??= {})['onScroll$'] ??= new Subject<number>();
  window['exports']['main'] ??= document.getElementsByTagName('main')[0];
}

interface Scrollable {
  subscribe: (observer: Partial<Observer<number>> | ((value: number) => void) | undefined) => Subscription | undefined;
  success: boolean;
}

function useScroll(): Scrollable {
  // State to manage the scroll observable
  const [onScroll$, setOnScroll$] = useState<Subject<number>>();

  // Effect to run once when the component mounts
  const main = useRef<HTMLElement>();
  useEffect(() => {
    // Gets the main element and assigns to the ref
    main.current = window['exports']['main'];
    if (!main.current) {
      console.error("useScroll hook failed! No main element found...");
      return;
    }

    // Gets the global observable and assigns to the state
    setOnScroll$(window['exports']['onScroll$']);
  }, []);

  // Effect to run when onScroll$ changes
  const didScroll = useRef<boolean>(false);
  useEffect(() => {
    // Check if onScroll$ is defined
    if (!onScroll$) return;

    let onScroll: () => boolean;
    let id: NodeJS.Timeout;
    // Initialize scroll-related functionality if it hasn't been initialized before
    if (!window['exports']['useScrollInit']) {
      // Set up a periodic check for scrolling
      id = setInterval(() => {
        if (!didScroll.current) return;
        
        // Calculate the scroll position and notify observers
        const st = Math.abs(main.current!.getBoundingClientRect().top);
        onScroll$!.next(st);
  
        didScroll.current = false;
      }, 125);
      
      // Define a function to set the didScroll flag to true and adds event listener to window
      onScroll = () => didScroll.current = true;
      window.addEventListener("scroll", onScroll);
    }

    // Clean up when the component unmounts or onScroll$ changes only if is the one that initialised
    return () => {
      // Checks if is the one that initialised
      if (!onScroll || !id) return;

      // Remove the scroll event listener and clear the interval
      window.removeEventListener("scroll", onScroll);
      clearInterval(id);
    };
  }, [onScroll$]);

  // Return the Scrollable object with the subscribe method and a success flag
  return {
    subscribe: observer => onScroll$?.subscribe(observer),
    success: !!onScroll$
  };
}

export default useScroll;