"use client";

import { ClipboardPenLine, MapPin, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LazyMotion, domAnimation, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { useEffect, useRef, useState } from "react";

type MobileFloatingActionsProps = Readonly<{
  assessmentUrl: string;
  centerPhone: string;
  centerTelLink: string;
  naverPlaceUrl: string;
}>;

type FloatingActionProps = Readonly<{
  href: string;
  label: string;
  ariaLabel: string;
  icon: LucideIcon;
  tone: "primary" | "secondary";
  labelsVisible: boolean;
}>;

function FloatingAction({
  href,
  label,
  ariaLabel,
  icon: Icon,
  tone,
  labelsVisible,
}: FloatingActionProps) {
  const shouldReduceMotion = useReducedMotion();
  const labelClassName =
    "overflow-hidden whitespace-nowrap rounded-full border bg-white/96 px-3 py-2 text-xs font-extrabold shadow-[0_8px_18px_rgba(18,32,68,0.1)]";
  const iconClassName =
    tone === "primary"
      ? "inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#173b75] text-white shadow-[0_12px_28px_rgba(18,32,68,0.22)]"
      : "inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#bdd2df] bg-white text-[#173b75] shadow-[0_10px_24px_rgba(18,32,68,0.16)]";

  const labelStyle =
    tone === "primary"
      ? "border-[#cbd9e4] text-[#173b75]"
      : "border-[#d8e6ed] text-[#173b75]";

  if (shouldReduceMotion) {
    return (
      <a
        aria-label={ariaLabel}
        className="inline-flex items-center text-[#173b75]"
        href={href}
      >
        <span
          className={`${labelClassName} ${labelStyle} ${
            labelsVisible ? "mr-2 opacity-100" : "w-0 px-0 opacity-0"
          }`}
        >
          {label}
        </span>
        <span className={iconClassName}>
          <Icon aria-hidden="true" size={tone === "primary" ? 25 : 23} />
        </span>
      </a>
    );
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.a
        aria-label={ariaLabel}
        className="inline-flex items-center text-[#173b75]"
        href={href}
        whileHover={{ y: -2, scale: 1.015 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      >
        <m.span
          animate={
            labelsVisible
              ? {
                  marginRight: 8,
                  opacity: 1,
                  paddingLeft: 12,
                  paddingRight: 12,
                  width: "auto",
                  x: 0,
                }
              : {
                  marginRight: 0,
                  opacity: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                  width: 0,
                  x: 8,
                }
          }
          className={`${labelClassName} ${labelStyle}`}
          initial={false}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          {label}
        </m.span>
        <span className={iconClassName}>
          <Icon aria-hidden="true" size={tone === "primary" ? 25 : 23} />
        </span>
      </m.a>
    </LazyMotion>
  );
}

export function MobileFloatingActions({
  assessmentUrl,
  centerPhone,
  centerTelLink,
  naverPlaceUrl,
}: MobileFloatingActionsProps) {
  const [labelsVisible, setLabelsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const isTicking = useRef(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    function updateLabelVisibility() {
      const currentScrollY = Math.max(0, window.scrollY);
      const delta = currentScrollY - lastScrollY.current;

      if (currentScrollY < 40) {
        setLabelsVisible(true);
      } else if (delta > 8) {
        setLabelsVisible(false);
      } else if (delta < -8) {
        setLabelsVisible(true);
      }

      lastScrollY.current = currentScrollY;
      isTicking.current = false;
    }

    function handleScroll() {
      if (isTicking.current) {
        return;
      }

      window.requestAnimationFrame(updateLabelVisibility);
      isTicking.current = true;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-40 flex flex-col items-end gap-2 sm:hidden">
      <FloatingAction
        ariaLabel="네이버 플레이스에서 센터 위치 보기"
        href={naverPlaceUrl}
        icon={MapPin}
        label="위치 보기"
        labelsVisible={labelsVisible}
        tone="secondary"
      />
      <FloatingAction
        ariaLabel={`${centerPhone} 전화상담 연결`}
        href={centerTelLink}
        icon={Phone}
        label="전화 상담"
        labelsVisible={labelsVisible}
        tone="secondary"
      />
      <FloatingAction
        ariaLabel="초기 상담 평가지 작성 페이지로 이동"
        href={assessmentUrl}
        icon={ClipboardPenLine}
        label="상담 신청"
        labelsVisible={labelsVisible}
        tone="primary"
      />
    </div>
  );
}
