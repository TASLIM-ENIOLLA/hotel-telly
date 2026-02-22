import { Fragment, useEffect, useRef, useState } from "react";
import { InView, useInView } from "react-intersection-observer";

export function Counter({ value, suffix, duration }: {
  value: number;
  duration: number;
  
  suffix?: string;
}) {
  let interval = useRef<NodeJS.Timeout | null>(null);

  const [counter, setCounter] = useState(0);
  const observer = useInView({
    threshold: 1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (observer.inView) {
      const step = duration / value;

      interval.current = setInterval(() => {
        if (counter >= value) {
          if (interval.current) {
            return clearInterval(interval.current);
          }
        }
        
        setCounter((counter) => {
          return counter + 1;
        });
      }, step);
    }
    else {
      setCounter(0);
      
      if (interval.current) {
        clearInterval(interval.current);
      }
    }

    return function() {
      if (interval.current) {
        clearInterval(interval.current);
      }
    }
  }, [observer.inView, value, duration]);

  useEffect(() => {
    if (value === counter) {
      if (interval.current) {
        clearInterval(interval.current);
      }
    }
  }, [value, counter]);

  return (
    <h2 ref={observer.ref} className="text-8xl font-extrabold font-secondary">
      <span className="text-foreground">
        {counter}{suffix}
      </span>
    </h2>
  );
}