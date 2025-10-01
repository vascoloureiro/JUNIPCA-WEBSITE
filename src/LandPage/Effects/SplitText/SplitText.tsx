import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "right" | "center" | "justify";
  onLetterAnimationComplete?: () => void;
};

export default function SplitTextComponent({
  text,
  className = "",
  delay = 50,
  duration = 0.6,
  ease = "power3.out",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}: SplitTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const letters = ref.current.querySelectorAll(".letter");

    const startPct = (1 - threshold) * 100;
    const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
    const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
    const marginUnit = marginMatch ? marginMatch[2] || "px" : "px";
    const sign =
      marginValue < 0
        ? `-=${Math.abs(marginValue)}${marginUnit}`
        : `+=${marginValue}${marginUnit}`;
    const start = `top ${startPct}%${sign}`;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start,
        toggleActions: "play none none none",
        once: true,
        onEnter: () => {
          if (onLetterAnimationComplete) onLetterAnimationComplete();
        },
      },
    });

    tl.set(letters, { ...from });
    tl.to(letters, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [text]);

  return (
    <h1
      ref={ref}
      className={`split-text ${className}`}
      style={{
        display: "inline-block",
        overflow: "hidden",
        textAlign,
        whiteSpace: "normal",
        wordWrap: "break-word",
      }}
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="letter"
          style={{
            display: "inline-block",
            willChange: "transform, opacity",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}
