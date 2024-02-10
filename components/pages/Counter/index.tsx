"use client";

import { useState, useEffect, useMemo, useRef } from "react";

type ComponentProps = {
  value: number,
  durationMs?: number,
}

export default function Component({ value, durationMs = 3000 }: ComponentProps) {
  let timer: any;
  
  const targetElement = useRef <any> (null);

  const options = {
    root: null,
    threshold: 0.5,
    rootMargin: '0px',
  };
  
  const callback = (entries: any, observer: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        timer = setInterval(() => setCounter((counter) => counter + 1), durationMs / value);
      }
      else {
        setCounter(0);
        clearInterval(timer);
      }
    });
  };
  
  const [counter, setCounter] = useState <number> (0);
  
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    
    observer.observe(targetElement.current);

    return () => {
      clearInterval(timer);
    }
  }, [])

  return (
    <span style={{fontSize: "inherit"}} ref={targetElement}>
      {useMemo(() => {
        if(counter < value) {
          return counter;
        }
        else {
          clearInterval(timer);

          return value;
        }
      }, [counter])}
    </span>
  );
}