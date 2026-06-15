"use client";

import {
  motion,
  useScroll,
  useSpring,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  type Variants,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/* Thin scroll-progress hairline pinned to the top of the page. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[70] h-0.5 w-full origin-left bg-blue"
    />
  );
}

/* Generic enter-on-scroll wrapper. */
export function Reveal({
  children,
  delay = 0,
  className,
  id,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  id?: string;
  as?: "div" | "article" | "header" | "section";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.85, ease: EASE, delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

/* Counts up to `value` the first time it scrolls into view. */
export function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -22% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.3,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

/* Conic-gradient progress ring that fills on scroll into view. */
export function AnimatedRing({
  pct,
  color = "#2b2bf0",
  size,
  className,
  children,
}: {
  pct: number;
  color?: string;
  size: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -22% 0px" });
  const [turn, setTurn] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, pct / 100, {
      duration: 1.3,
      ease: "easeOut",
      onUpdate: setTurn,
    });
    return () => controls.stop();
  }, [inView, pct]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        position: "relative",
        width: size,
        height: size,
        borderRadius: "50%",
        flexShrink: 0,
        display: "grid",
        placeItems: "center",
        background: `conic-gradient(${color} 0 ${turn.toFixed(4)}turn,#e7e6df ${turn.toFixed(4)}turn 1turn)`,
      }}
    >
      {children}
    </div>
  );
}

/* Horizontal bar that grows from 0 to `pct`% on scroll into view. */
export function AnimatedBar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="h-[7px] overflow-hidden rounded-full bg-[#eceadf]">
      <motion.span
        className="block h-full rounded-full"
        style={{ background: color }}
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true, margin: "0px 0px -22% 0px" }}
        transition={{ duration: 1.1, ease: EASE }}
      />
    </div>
  );
}

/* Equaliser bars that rise from the baseline, staggered. */
const eqContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const eqBar: Variants = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { duration: 0.9, ease: EASE } },
};

export function Equalizer({ heights }: { heights: number[] }) {
  return (
    <motion.div
      className="mt-[22px] flex h-[62px] items-end gap-[5px]"
      variants={eqContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -22% 0px" }}
    >
      {heights.map((h, i) => (
        <motion.span
          key={i}
          variants={eqBar}
          className="flex-1 origin-bottom rounded-t-[3px]"
          style={{
            height: `${h}%`,
            background:
              h >= 86
                ? "linear-gradient(#22d860,#13923f)"
                : "linear-gradient(#1db954,#0f7a36)",
          }}
        />
      ))}
    </motion.div>
  );
}

/* Browser-style product mockup with hover lift + 3D parallax tilt. */
export function ProjectFrame({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-6, 6]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [5, -5]), {
    stiffness: 200,
    damping: 20,
  });
  const [lift, setLift] = useState(false);

  const baseShadow =
    "0 40px 70px -30px rgba(23,22,15,0.42),0 0 0 1px rgba(23,22,15,0.08)";
  const liftShadow =
    "0 55px 95px -32px rgba(23,22,15,0.52),0 0 0 1px rgba(23,22,15,0.08)";

  const handleMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => {
    px.set(0);
    py.set(0);
    setLift(false);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerEnter={() => setLift(true)}
      onPointerLeave={reset}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
        boxShadow: lift ? liftShadow : baseShadow,
        background: dark ? "#0e0e12" : "#fff",
      }}
      animate={{ y: lift ? -8 : 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="overflow-hidden rounded-2xl"
    >
      {children}
    </motion.div>
  );
}

/* Magnetic button/link that drifts toward the cursor. */
export function MagneticLink({
  href,
  children,
  className,
  style,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - r.left - r.width / 2) * 0.3);
    y.set((e.clientY - r.top - r.height / 2) * 0.45);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ x: sx, y: sy, ...style }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

/* Live Lagos time, updates every 15s. */
export function LagosClock() {
  const [time, setTime] = useState("—:—");
  useEffect(() => {
    const fmt = () => {
      try {
        setTime(
          new Intl.DateTimeFormat("en-GB", {
            timeZone: "Africa/Lagos",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }).format(new Date()),
        );
      } catch {
        setTime("");
      }
    };
    fmt();
    const id = setInterval(fmt, 15000);
    return () => clearInterval(id);
  }, []);
  return <span>{time}</span>;
}
