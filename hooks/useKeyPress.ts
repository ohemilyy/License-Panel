import { useEffect, useRef } from "react";
import { useCallback } from "react";

type TargetType = Element | Document | Window & typeof globalThis;
interface Options { event?: string, target?: TargetType, eventOptions?: any }
export function useKeyPress(key: string, cb: (event: any) => any, options: Options = {}) {
  const target = useRef<TargetType | null>(null);
  useEffect(() => {target.current ??= window}, []);

  const onKeyPress = useCallback((event: any) => {
    if (key !== event.key) return;
    cb(event);
  }, [cb, key]);

  useEffect(() => {
    const t = target.current;
    const event = options.event ?? 'keydown'
    t?.addEventListener(event, onKeyPress, options.eventOptions);
    return () => t?.removeEventListener(event, onKeyPress, options.eventOptions);
  }, [target, options.event, options.eventOptions, onKeyPress]);
}
