"use client";

import { useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import { MotionButtonLink } from "./Motion";

function isIosOrAndroid() {
  const userAgent = navigator.userAgent;
  const platform = navigator.platform;
  const isAndroid = /Android/i.test(userAgent);
  const isIos = /iPhone|iPad|iPod/i.test(userAgent);
  const isIpadOs = platform === "MacIntel" && navigator.maxTouchPoints > 1;

  return isAndroid || isIos || isIpadOs;
}

export function MobilePhoneLink({
  children,
  className,
  phone,
  telLink,
  "aria-label": ariaLabel,
}: Readonly<{
  children: ReactNode;
  className: string;
  phone: string;
  telLink: string;
  "aria-label"?: string;
}>) {
  const canOpenNativeDialer = useSyncExternalStore(
    () => () => {},
    isIosOrAndroid,
    () => false,
  );

  return (
    <MotionButtonLink
      aria-label={
        canOpenNativeDialer
          ? ariaLabel
          : `${phone} 전화번호 확인 영역으로 이동`
      }
      className={className}
      href={canOpenNativeDialer ? telLink : "#contact"}
      onClick={(event) => {
        if (canOpenNativeDialer) {
          return;
        }

        event.preventDefault();
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }}
      title={
        canOpenNativeDialer
          ? `${phone} 전화상담`
          : "전화 연결은 iOS와 Android에서만 지원됩니다."
      }
    >
      {children}
    </MotionButtonLink>
  );
}
