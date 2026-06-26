"use client";

import { LazyMotion, domAnimation, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import type { MouseEventHandler, ReactNode } from "react";

const viewport = { once: true, amount: 0.18 } as const;

type RevealProps = Readonly<{
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  scale?: number;
}>;

type RevealGroupProps = Readonly<{
  children: ReactNode;
  className?: string;
  delayChildren?: number;
}>;

type MotionButtonLinkProps = Readonly<
  {
    children: ReactNode;
    className?: string;
    href: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    rel?: string;
    target?: string;
    title?: string;
    "aria-label"?: string;
  }
>;

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 20,
  scale,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={className}
        initial={{
          opacity: 0,
          y: distance,
          ...(scale ? { scale } : {}),
        }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={viewport}
        transition={{ duration: 0.55, ease: "easeOut", delay }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

export function RevealGroup({
  children,
  className,
  delayChildren = 0,
}: RevealGroupProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren,
              staggerChildren: 0.08,
            },
          },
        }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

export function RevealArticle({
  children,
  className,
}: Readonly<{
  children: ReactNode;
  className?: string;
}>) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <article className={className}>{children}</article>;
  }

  return (
    <m.article
      className={className}
      variants={{
        hidden: { opacity: 0, y: 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
    >
      {children}
    </m.article>
  );
}

export function MotionButtonLink({
  children,
  className,
  ...props
}: MotionButtonLinkProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <a className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.a
        className={className}
        whileHover={{ y: -2, scale: 1.015 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        {...props}
      >
        {children}
      </m.a>
    </LazyMotion>
  );
}
