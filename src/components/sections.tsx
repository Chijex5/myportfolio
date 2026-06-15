"use client";

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
          sweats the interface. Below are three products I took from idea to
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
