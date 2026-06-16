"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import {
  Reveal,
  MagneticLink,
  LagosClock,
  ProjectFrame,
} from "./ui";
import {
  EchoStatsMockup,
  ScoutMockup,
  MonikeMockup,
  DfootprintMockup,
  FoodifyMockup,
} from "./mockups";

const PAD = "px-[clamp(22px,5vw,56px)]";
const MAXW = "mx-auto max-w-[1280px]";

/* ---------------- NAV ---------------- */
export function Nav() {
  const links = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <div className="sticky top-0 z-[60] flex items-center justify-between border-b border-[rgba(23,22,15,0.08)] bg-[rgba(244,241,233,0.82)] px-[clamp(22px,5vw,56px)] py-5 backdrop-blur-[10px]">
      <a
        href="#top"
        className="font-display text-[19px] font-bold tracking-[-0.02em] text-ink no-underline"
      >
        Chijioke<span className="text-blue">.</span>
      </a>
      <div className="hidden items-center gap-[30px] md:flex">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="text-[13.5px] font-medium text-[#57564d] no-underline transition-colors hover:text-ink"
          >
            {l.label}
          </a>
        ))}
      </div>
      <a
        href="#contact"
        className="inline-flex items-center gap-2 text-[13px] font-semibold text-ink no-underline"
      >
        <span className="inline-block h-[7px] w-[7px] animate-blink rounded-full bg-moss" />
        Available for work
      </a>
    </div>
  );
}

/* ---------------- HERO ---------------- */
export function Hero() {
  return (
    <header
      id="top"
      className={`relative ${MAXW} ${PAD} py-[clamp(56px,10vw,120px)]`}
    >
      <Reveal className="mb-[clamp(28px,4vw,44px)] flex items-center gap-[14px]">
        <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#8f8d80]">
          Full-stack developer
        </span>
        <span className="h-px flex-1 bg-[rgba(23,22,15,0.14)]" />
        <span className="font-mono text-[12px] tracking-[0.05em] text-[#8f8d80]">
          Lagos <LagosClock /> · Remote
        </span>
      </Reveal>

      <Reveal delay={0.06}>
        <h1 className="m-0 font-display text-[clamp(48px,9.2vw,150px)] font-bold leading-[0.92] tracking-[-0.035em] text-ink [text-wrap:balance]">
          I build web<br />
          products people<br />
          actually{" "}
          <span className="font-medium italic text-blue">use.</span>
        </h1>
      </Reveal>

      <Reveal
        delay={0.16}
        className="mt-[clamp(34px,5vw,56px)] flex flex-wrap items-end justify-between gap-7"
      >
        <p className="m-0 max-w-[46ch] text-[clamp(16px,1.5vw,19px)] leading-[1.6] text-[#444339] [text-wrap:pretty]">
          I&apos;m <span className="font-semibold text-ink">Chijioke</span> — a
          full-stack developer who designs the data model, builds the API, and
          sweats the interface. Below are some products I took from idea to
          shipped.
        </p>
        <MagneticLink
          href="#work"
          className="inline-flex flex-shrink-0 items-center gap-2.5 rounded-full bg-ink px-6 py-[15px] text-[14.5px] font-semibold text-cream no-underline transition-colors hover:bg-blue"
        >
          See the work
          <ArrowDown size={15} strokeWidth={2.2} />
        </MagneticLink>
      </Reveal>
    </header>
  );
}

/* ---------------- MARQUEE ---------------- */
function MarqueeRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  const brands = ["EchoStats", "Scout", "Monike", "D'Footprint", "Foodify"];
  const stack =
    "REACT · NEXT.JS · VUE · TYPESCRIPT · PYTHON · FASTAPI · FLASK · POSTGRES · MONGODB";
  return (
    <div
      aria-hidden={ariaHidden || undefined}
      className="flex items-center gap-[26px] pr-[26px]"
    >
      {brands.map((b) => (
        <span key={b} className="flex items-center gap-[26px]">
          <span className="font-display text-[18px] font-medium text-cream">
            {b}
          </span>
          <span className="text-blue">▶</span>
        </span>
      ))}
      <span className="font-mono text-[13px] tracking-[0.1em] text-[#a8a69a]">
        {stack}
      </span>
      <span className="text-blue">▶</span>
    </div>
  );
}

export function Marquee() {
  return (
    <div className="relative mt-6 overflow-hidden border-y border-[rgba(23,22,15,0.12)] bg-ink py-4">
      <div className="flex w-max animate-marquee">
        <MarqueeRow />
        <MarqueeRow ariaHidden />
      </div>
    </div>
  );
}

/* ---------------- WORK ---------------- */
type Project = {
  index: string;
  meta: string;
  title: string;
  blurb: string;
  tags: string[];
};

const projects: Record<string, Project> = {
  echostats: {
    index: "01",
    meta: "Data viz · 2024",
    title: "EchoStats",
    blurb:
      "Surfaces the patterns hiding in your Spotify history — listening seasons, mood arcs, and the artists you quietly returned to all year.",
    tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL"],
  },
  scout: {
    index: "02",
    meta: "Tooling · 2024",
    title: "Scout",
    blurb:
      "Scrapes listings across the web, scores each role against your skills and taste, then tracks every application from saved to signed.",
    tags: ["React", "Python", "Flask", "MongoDB"],
  },
  monike: {
    index: "03",
    meta: "Fintech · 2025",
    title: "Monike",
    blurb:
      "A finance companion that watches your spending, maps where the money actually goes, and warns you the moment a budget is about to break.",
    tags: ["Vue", "TypeScript", "FastAPI", "PostgreSQL"],
  },
  dfootprint: {
    index: "04",
    meta: "E-commerce · 2023",
    title: "D'Footprint",
    blurb:
      "A storefront I built for my sister's handmade-footwear brand — customers browse the catalogue, order made-to-measure pairs, and track each one from the workshop bench to their doorstep.",
    tags: ["Next.js", "Tailwind", "Paystack", "PostgreSQL"],
  },
  foodify: {
    index: "05",
    meta: "Marketplace · 2025",
    title: "Foodify",
    blurb:
      "A food-delivery hub where customers, restaurants, and riders meet: search a dish, compare nearby kitchens by price, order, and watch an assigned rider bring it to your door in real time.",
    tags: ["React", "FastAPI", "PostgreSQL", "Socket.IO"],
  },
};

function ProjectCopy({ p }: { p: Project }) {
  return (
    <div>
      <div className="mb-[22px] flex items-center gap-[14px]">
        <span className="font-display text-[42px] font-bold leading-none text-blue">
          {p.index}
        </span>
        <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-[#8f8d80]">
          {p.meta}
        </span>
      </div>
      <h3 className="m-0 font-display text-[clamp(34px,4.4vw,56px)] font-semibold leading-none tracking-[-0.025em] text-ink">
        {p.title}
      </h3>
      <p className="mt-3.5 max-w-[42ch] text-[18px] leading-[1.5] text-[#444339] [text-wrap:pretty]">
        {p.blurb}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-[rgba(23,22,15,0.2)] px-[11px] py-1.5 font-mono text-[12px] text-ink"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section
      id="work"
      className={`${MAXW} ${PAD} py-[clamp(64px,9vw,120px)]`}
    >
      <Reveal className="mb-[clamp(48px,6vw,80px)] flex flex-wrap items-baseline justify-between gap-5">
        <h2 className="m-0 font-display text-[clamp(30px,4vw,52px)] font-bold tracking-[-0.02em] text-ink">
          Selected work
        </h2>
        <span className="font-mono text-[13px] text-[#8f8d80]">(05)</span>
      </Reveal>

      {/* 01 — EchoStats */}
      <Reveal
        as="article"
        className="mb-[clamp(72px,9vw,130px)] grid grid-cols-1 items-center gap-[clamp(40px,5vw,80px)] md:grid-cols-[0.92fr_1.08fr]"
      >
        <ProjectCopy p={projects.echostats} />
        <ProjectFrame dark>
          <EchoStatsMockup />
        </ProjectFrame>
      </Reveal>

      {/* 02 — Scout (reversed) */}
      <Reveal
        as="article"
        className="mb-[clamp(72px,9vw,130px)] grid grid-cols-1 items-center gap-[clamp(40px,5vw,80px)] md:grid-cols-[1.08fr_0.92fr]"
      >
        <div className="order-2 md:order-1">
          <ProjectFrame>
            <ScoutMockup />
          </ProjectFrame>
        </div>
        <div className="order-1 md:order-2">
          <ProjectCopy p={projects.scout} />
        </div>
      </Reveal>

      {/* 03 — Monike */}
      <Reveal
        as="article"
        className="mb-[clamp(72px,9vw,130px)] grid grid-cols-1 items-center gap-[clamp(40px,5vw,80px)] md:grid-cols-[0.92fr_1.08fr]"
      >
        <ProjectCopy p={projects.monike} />
        <ProjectFrame>
          <MonikeMockup />
        </ProjectFrame>
      </Reveal>

      {/* 04 — D'Footprint (reversed) */}
      <Reveal
        as="article"
        className="mb-[clamp(72px,9vw,130px)] grid grid-cols-1 items-center gap-[clamp(40px,5vw,80px)] md:grid-cols-[1.08fr_0.92fr]"
      >
        <div className="order-2 md:order-1">
          <ProjectFrame dark>
            <DfootprintMockup />
          </ProjectFrame>
        </div>
        <div className="order-1 md:order-2">
          <ProjectCopy p={projects.dfootprint} />
        </div>
      </Reveal>

      {/* 05 — Foodify */}
      <Reveal
        as="article"
        className="grid grid-cols-1 items-center gap-[clamp(40px,5vw,80px)] md:grid-cols-[0.92fr_1.08fr]"
      >
        <ProjectCopy p={projects.foodify} />
        <ProjectFrame>
          <FoodifyMockup />
        </ProjectFrame>
      </Reveal>
    </section>
  );
}

/* -------- LAB DEMO SUB-COMPONENTS -------- */
const typewriterPhrases = [
  "Full-stack developer.",
  "API architect.",
  "UI craftsperson.",
  "Problem solver.",
];

function SpringDrag() {
  const constraintRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={constraintRef}
      className="relative flex h-full w-full items-center justify-center"
    >
      <motion.div
        drag
        dragConstraints={constraintRef}
        dragElastic={0.2}
        dragTransition={{ bounceDamping: 18, bounceStiffness: 300 }}
        whileDrag={{ scale: 1.15 }}
        className="h-14 w-14 cursor-grab rounded-full bg-blue active:cursor-grabbing"
        style={{ boxShadow: "0 0 28px rgba(43,43,240,0.45)" }}
      />
    </div>
  );
}

function Typewriter() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = typewriterPhrases[phraseIdx];
    const delay = deleting ? 45 : text.length === phrase.length ? 1200 : 85;
    const timer = setTimeout(() => {
      if (!deleting) {
        if (text.length < phrase.length) {
          setText(phrase.slice(0, text.length + 1));
        } else {
          setDeleting(true);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setDeleting(false);
          setPhraseIdx((i) => (i + 1) % typewriterPhrases.length);
        }
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, phraseIdx]);

  return (
    <div className="flex h-full w-full items-center justify-center px-4">
      <p className="m-0 text-center font-display text-[clamp(16px,2vw,20px)] font-bold leading-[1.3] text-cream">
        {text}
        <span
          className="ml-0.5 inline-block w-[2px] animate-blink bg-blue align-middle"
          style={{ height: "1em" }}
        />
      </p>
    </div>
  );
}

type Ripple = { id: number; x: number; y: number };

function RippleCanvas() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const id = Date.now();
    setRipples((r) => [
      ...r,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
    ]);
    setTimeout(
      () => setRipples((r) => r.filter((rip) => rip.id !== id)),
      900,
    );
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      className="relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden"
    >
      <span className="pointer-events-none font-mono text-[11px] uppercase tracking-[0.14em] text-[#8f8d80]">
        Click anywhere
      </span>
      {ripples.map((rip) => (
        <motion.div
          key={rip.id}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 4.5, opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{
            position: "absolute",
            left: rip.x - 24,
            top: rip.y - 24,
            width: 48,
            height: 48,
          }}
          className="pointer-events-none rounded-full border-2 border-blue"
        />
      ))}
    </div>
  );
}

function GradientFollow() {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }}
      className="flex h-full w-full items-center justify-center"
      style={{
        backgroundImage: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(43,43,240,0.5) 0%, rgba(31,164,99,0.18) 40%, transparent 70%)`,
      }}
    >
      <span className="pointer-events-none font-mono text-[11px] uppercase tracking-[0.14em] text-[#8f8d80]">
        Move cursor
      </span>
    </div>
  );
}

const experiments = [
  {
    title: "Spring physics",
    description: "Drag the orb — it snaps back with spring physics.",
    Demo: SpringDrag,
  },
  {
    title: "Typewriter",
    description: "Character-by-character text animation with delete loop.",
    Demo: Typewriter,
  },
  {
    title: "Ripple",
    description: "Click-triggered expanding ring cascade.",
    Demo: RippleCanvas,
  },
  {
    title: "Gradient follow",
    description: "Radial gradient tracks the cursor position.",
    Demo: GradientFollow,
  },
];

/* ---------------- LAB ---------------- */
export function Lab() {
  return (
    <section id="lab" className="bg-ink text-cream">
      <div className={`${MAXW} ${PAD} py-[clamp(64px,9vw,120px)]`}>
        <Reveal className="mb-[clamp(48px,6vw,80px)] flex flex-wrap items-start justify-between gap-8">
          <div>
            <span className="mb-3 block font-mono text-[12px] uppercase tracking-[0.14em] text-[#8f8d80]">
              Experiments
            </span>
            <h2 className="m-0 font-display text-[clamp(30px,4vw,52px)] font-bold tracking-[-0.02em] text-cream">
              Lab
            </h2>
          </div>
          <p className="m-0 max-w-[40ch] text-[15px] leading-[1.7] text-[#c9c7bd] [text-wrap:pretty]">
            Small interactive experiments — a space to explore animation,
            physics, and interface ideas outside of client work.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {experiments.map((exp, i) => (
            <Reveal key={exp.title} delay={i * 0.07}>
              <div className="overflow-hidden rounded-2xl border border-[rgba(244,241,233,0.1)] bg-[rgba(244,241,233,0.04)]">
                <div className="h-48">
                  <exp.Demo />
                </div>
                <div className="border-t border-[rgba(244,241,233,0.08)] p-5">
                  <h3 className="m-0 font-display text-[17px] font-semibold text-cream">
                    {exp.title}
                  </h3>
                  <p className="m-0 mt-1.5 text-[13.5px] leading-[1.5] text-[#8f8d80]">
                    {exp.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WRITING ---------------- */
// TODO: Replace with your real articles
const articles = [
  {
    title: "Article title",
    platform: "Medium",
    date: "Month YYYY",
    excerpt:
      "A short description of what this article covers and why you wrote it.",
    href: "#",
  },
  {
    title: "Article title",
    platform: "DEV.to",
    date: "Month YYYY",
    excerpt:
      "A short description of what this article covers and why you wrote it.",
    href: "#",
  },
  {
    title: "Article title",
    platform: "Hashnode",
    date: "Month YYYY",
    excerpt:
      "A short description of what this article covers and why you wrote it.",
    href: "#",
  },
];

export function Writing() {
  return (
    <section
      id="writing"
      className={`${MAXW} ${PAD} py-[clamp(64px,9vw,120px)]`}
    >
      <Reveal className="mb-[clamp(48px,6vw,80px)] flex flex-wrap items-baseline justify-between gap-5">
        <h2 className="m-0 font-display text-[clamp(30px,4vw,52px)] font-bold tracking-[-0.02em] text-ink">
          Writing
        </h2>
        <span className="font-mono text-[13px] text-[#8f8d80]">
          {articles.length} articles
        </span>
      </Reveal>

      <div className="divide-y divide-[rgba(23,22,15,0.08)]">
        {articles.map((article, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <a
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 py-7 no-underline sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#8f8d80]">
                  {article.platform} · {article.date}
                </span>
                <h3 className="m-0 font-display text-[clamp(18px,2vw,24px)] font-semibold text-ink transition-colors group-hover:text-blue">
                  {article.title}
                </h3>
                <p className="m-0 max-w-[52ch] text-[14px] leading-[1.65] text-[#57564d] [text-wrap:pretty]">
                  {article.excerpt}
                </p>
              </div>
              <ArrowUpRight
                size={20}
                className="shrink-0 text-[#8f8d80] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue sm:ml-6"
              />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- OPEN SOURCE ---------------- */
// TODO: Replace with your real GitHub repos
const repos = [
  {
    name: "repo-name",
    description: "A short description of what this repository does.",
    language: "TypeScript",
    langColor: "#2b2bf0",
    stars: 0,
    href: "https://github.com/chijex5/repo-name",
  },
  {
    name: "repo-name",
    description: "A short description of what this repository does.",
    language: "Python",
    langColor: "#3572A5",
    stars: 0,
    href: "https://github.com/chijex5/repo-name",
  },
  {
    name: "repo-name",
    description: "A short description of what this repository does.",
    language: "JavaScript",
    langColor: "#f1e05a",
    stars: 0,
    href: "https://github.com/chijex5/repo-name",
  },
];

export function OpenSource() {
  return (
    <section
      id="oss"
      className={`${MAXW} ${PAD} border-t border-[rgba(23,22,15,0.08)] py-[clamp(64px,9vw,120px)]`}
    >
      <Reveal className="mb-[clamp(48px,6vw,80px)] flex flex-wrap items-baseline justify-between gap-5">
        <h2 className="m-0 font-display text-[clamp(30px,4vw,52px)] font-bold tracking-[-0.02em] text-ink">
          Open source
        </h2>
        <a
          href="https://github.com/chijex5"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[13px] text-[#57564d] no-underline transition-colors hover:text-ink"
        >
          github.com/chijex5 ↗
        </a>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <a
              href={repo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-[rgba(23,22,15,0.1)] p-5 no-underline transition-colors hover:border-[rgba(23,22,15,0.28)]"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="m-0 font-mono text-[14px] font-semibold text-ink transition-colors group-hover:text-blue">
                  {repo.name}
                </h3>
                <ArrowUpRight
                  size={15}
                  className="mt-0.5 shrink-0 text-[#8f8d80] transition-colors group-hover:text-blue"
                />
              </div>
              <p className="m-0 mt-2 text-[13.5px] leading-[1.6] text-[#57564d]">
                {repo.description}
              </p>
              <div className="mt-4 flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <span
                    className="h-[10px] w-[10px] rounded-full"
                    style={{ background: repo.langColor }}
                  />
                  <span className="font-mono text-[12px] text-[#8f8d80]">
                    {repo.language}
                  </span>
                </div>
                {repo.stars > 0 && (
                  <span className="font-mono text-[12px] text-[#8f8d80]">
                    ★ {repo.stars}
                  </span>
                )}
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
export function About() {
  return (
    <section id="about" className="bg-ink text-cream">
      <div className={`${MAXW} ${PAD} py-[clamp(64px,9vw,120px)]`}>
        <Reveal className="grid grid-cols-1 gap-[clamp(36px,5vw,72px)]">
          <div className="flex flex-wrap items-baseline justify-between gap-5">
            <h2 className="m-0 font-display text-[clamp(30px,4vw,52px)] font-bold tracking-[-0.02em] text-cream">
              About
            </h2>
            <span className="font-mono text-[13px] text-[#8f8d80]">(who)</span>
          </div>
          <p className="m-0 max-w-[24ch] font-display text-[clamp(24px,3vw,40px)] font-medium leading-[1.25] tracking-[-0.015em] text-cream [text-wrap:balance]">
            I like owning the whole picture — schema, API, and the interface on
            top.
          </p>
        </Reveal>

        <Reveal
          delay={0.08}
          className="mt-[clamp(40px,5vw,72px)] grid max-w-[900px] grid-cols-1 gap-[clamp(28px,4vw,64px)] md:grid-cols-2"
        >
          <p className="m-0 text-[16px] leading-[1.7] text-[#c9c7bd] [text-wrap:pretty]">
            My work usually starts as a problem I actually have — a messy job
            hunt, mystery spending, music habits I couldn&apos;t see. I build the
            thing, then sand the edges until it&apos;s something I&apos;d hand a
            friend without a disclaimer.
          </p>
          <p className="m-0 text-[16px] leading-[1.7] text-[#c9c7bd] [text-wrap:pretty]">
            On the front I reach for React, Next.js, Vue and TypeScript; behind
            it, Python with FastAPI or Flask, over PostgreSQL and MongoDB. I care
            about performance, honest copy, and interfaces that get out of the
            way.
          </p>
        </Reveal>

        <Reveal
          delay={0.14}
          className="mt-[clamp(48px,6vw,80px)] flex flex-wrap gap-[clamp(28px,5vw,72px)] border-t border-[rgba(244,241,233,0.16)] pt-8"
        >
          <span className="self-center font-mono text-[12px] uppercase tracking-[0.12em] text-[#8f8d80]">
            Previously
          </span>
          {[
            { co: "Heizong Tech", role: "Full-stack intern" },
            { co: "Vzy", role: "Software engineering intern" },
          ].map((x) => (
            <div key={x.co} className="flex items-baseline gap-3">
              <span className="text-[16px] font-semibold text-cream">
                {x.co}
              </span>
              <span className="text-[13.5px] text-[#a8a69a]">{x.role}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CONTACT + FOOTER ---------------- */
export function Contact() {
  const socials = [
    { label: "GitHub", href: "https://github.com/chijex5" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/chijioke-uzodinma-34389b267/",
    },
    { label: "X", href: "https://x.com/chijex5" },
  ];
  return (
    <section
      id="contact"
      className={`${MAXW} ${PAD} pb-[clamp(40px,5vw,64px)] pt-[clamp(72px,11vw,150px)]`}
    >
      <Reveal>
        <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-[#8f8d80]">
          Let&apos;s talk
        </span>
        <h2 className="mt-5 font-display text-[clamp(44px,8vw,120px)] font-bold leading-[0.95] tracking-[-0.03em] text-ink [text-wrap:balance]">
          Got something
          <br />
          worth building?
        </h2>
        <a
          href="mailto:embroconnect3@gmail.com"
          className="group mt-[clamp(32px,4vw,48px)] inline-flex items-center gap-3.5 border-b-2 border-blue pb-1.5 font-display text-[clamp(20px,2.4vw,30px)] font-semibold text-ink no-underline"
        >
          embroconnect3@gmail.com
          <ArrowUpRight
            size={26}
            strokeWidth={2.2}
            className="text-blue transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>
      </Reveal>

      <footer className="mt-[clamp(72px,10vw,130px)] flex flex-wrap items-center justify-between gap-5 border-t border-[rgba(23,22,15,0.14)] pt-7">
        <span className="text-[13px] text-[#8f8d80]">
          © 2026 Chijioke Uzodinma
        </span>
        <div className="flex gap-[22px]">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13.5px] font-medium text-[#57564d] no-underline transition-colors hover:text-ink"
            >
              {s.label} ↗
            </a>
          ))}
        </div>
      </footer>
    </section>
  );
}
