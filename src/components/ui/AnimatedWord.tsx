import { useEffect, useRef, useState } from "react";

type AnimatedWordProps = {
  words: string[];
  typingSpeed?: number;
  pause?: number;
  className?: string;
};

export function AnimatedWord({ words, typingSpeed = 80, pause = 1200, className = "" }: AnimatedWordProps) {
  const [displayed, setDisplayed] = useState("");
  const mounted = useRef(true);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    mounted.current = true;
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const clearTimer = () => {
      if (timer.current) {
        clearTimeout(timer.current);
        timer.current = null;
      }
    };

    const loop = () => {
      const current = words[wordIndex];
      if (!deleting) {
        // typing
        setDisplayed(current.slice(0, charIndex + 1));
        charIndex += 1;
        if (charIndex === current.length) {
          // pause then start deleting
          clearTimer();
          timer.current = window.setTimeout(() => {
            deleting = true;
            loop();
          }, pause);
          return;
        }
        clearTimer();
        timer.current = window.setTimeout(loop, typingSpeed);
      } else {
        // deleting
        setDisplayed(current.slice(0, charIndex - 1));
        charIndex -= 1;
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          clearTimer();
          timer.current = window.setTimeout(loop, typingSpeed);
          return;
        }
        clearTimer();
        timer.current = window.setTimeout(loop, Math.max(40, typingSpeed / 2));
      }
    };

    loop();

    return () => {
      mounted.current = false;
      clearTimer();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words.join("|"), typingSpeed, pause]);

  return (
    <span className={`inline-block ${className}`}>
      {displayed}
      <span className="ml-1 inline-block border-r-2 border-current pr-1 animate-pulse" />
    </span>
  );
}
