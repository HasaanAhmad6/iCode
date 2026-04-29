"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  target: number;
  suffix?: string;
};

export function Counter({ target, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1200;
    const stepTime = Math.max(Math.floor(duration / target), 10);
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + 1;
      });
    }, stepTime);
    return () => clearInterval(interval);
  }, [started, target]);

  return (
    <div ref={ref} className="text-primary text-3xl sm:text-4xl xl:text-5xl/14">
      {count}
      {suffix}
    </div>
  );
}
