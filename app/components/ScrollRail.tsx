"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type ScrollRailProps = Readonly<{
  children: ReactNode;
  className?: string;
  controlsClassName?: string;
  controlsPosition?: "top" | "bottom";
  fadeFromClassName?: string;
  fadeInsetClassName?: string;
  nextLabel?: string;
  previousLabel?: string;
  "aria-label": string;
}>;

export function ScrollRail({
  children,
  className,
  controlsClassName = "mb-4 flex justify-end gap-2",
  controlsPosition = "top",
  fadeFromClassName = "from-white",
  fadeInsetClassName = "bottom-5 top-14",
  nextLabel = "다음 항목 보기",
  previousLabel = "이전 항목 보기",
  "aria-label": ariaLabel,
}: ScrollRailProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollState = useCallback(() => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const edgeTolerance = 32;
    const maxScroll = rail.scrollWidth - rail.clientWidth;
    setCanScrollPrev(rail.scrollLeft > edgeTolerance);
    setCanScrollNext(rail.scrollLeft < maxScroll - edgeTolerance);
  }, []);

  useEffect(() => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    rail.scrollLeft = 0;
    updateScrollState();

    rail.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      rail.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByPage = (direction: -1 | 1) => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    rail.scrollBy({
      left: direction * rail.clientWidth * 0.82,
      behavior: "smooth",
    });
  };

  const controls = (
    <div className={controlsClassName}>
      <button
        type="button"
        aria-label={previousLabel}
        disabled={!canScrollPrev}
        onClick={() => scrollByPage(-1)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#bdd2df] bg-white text-[#173b75] shadow-sm transition hover:border-[#173b75] disabled:cursor-not-allowed disabled:opacity-35"
      >
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
          <path
            d="m15 6-6 6 6 6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.4"
          />
        </svg>
      </button>
      <button
        type="button"
        aria-label={nextLabel}
        disabled={!canScrollNext}
        onClick={() => scrollByPage(1)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#bdd2df] bg-white text-[#173b75] shadow-sm transition hover:border-[#173b75] disabled:cursor-not-allowed disabled:opacity-35"
      >
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
          <path
            d="m9 6 6 6-6 6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.4"
          />
        </svg>
      </button>
    </div>
  );

  return (
    <div>
      {controlsPosition === "top" ? controls : null}
      <div className="relative">
        <div
          ref={railRef}
          aria-label={ariaLabel}
          tabIndex={0}
          className={className}
        >
          {children}
        </div>
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute left-0 w-8 bg-gradient-to-r ${fadeFromClassName} to-transparent transition-opacity ${fadeInsetClassName} ${
            canScrollPrev ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute right-0 w-8 bg-gradient-to-l ${fadeFromClassName} to-transparent transition-opacity ${fadeInsetClassName} ${
            canScrollNext ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      {controlsPosition === "bottom" ? controls : null}
    </div>
  );
}
