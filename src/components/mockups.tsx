"use client";

import { AnimatedNumber, AnimatedRing, AnimatedBar, Equalizer } from "./ui";

/* Shared faux-browser chrome bar. */
function Chrome({ url, dark = false }: { url: string; dark?: boolean }) {
  return (
    <div
      className="flex items-center gap-[7px] px-4 py-[13px]"
      style={{
        borderBottom: dark
          ? "1px solid rgba(255,255,255,0.07)"
          : "1px solid rgba(23,22,15,0.08)",
      }}
    >
      <span className="h-[11px] w-[11px] rounded-full bg-[#ff5f57]" />
      <span className="h-[11px] w-[11px] rounded-full bg-[#febc2e]" />
      <span className="h-[11px] w-[11px] rounded-full bg-[#28c840]" />
      <span
        className="ml-[14px] font-mono text-[11px]"
        style={{ color: dark ? "#5f5f6a" : "#a3a298" }}
      >
        {url}
      </span>
    </div>
  );
}

/* 01 — EchoStats: dark music-wrapped dashboard. */
export function EchoStatsMockup() {
  const artists = [
    { rank: "01", name: "Olamide", plays: "412 plays", grad: "linear-gradient(135deg,#2b2bf0,#1db954)", img: "https://i.scdn.co/image/ab6761610000e5eb690d9ec39523c7159ada0426", lead: true },
    { rank: "02", name: "Tekno", plays: "388 plays", grad: "linear-gradient(135deg,#febc2e,#ff5f57)", img: "https://i.scdn.co/image/ab6761610000e5ebbdfa92a97f9da3258e7776e9" },
    { rank: "03", name: "Seyi Vibes", plays: "301 plays", grad: "linear-gradient(135deg,#28c840,#2b2bf0)", img: "https://i.scdn.co/image/ab6761610000e5eb9902f473df31601d5938e0bd" },
  ];
  return (
    <>
      <Chrome url="echostats.app/wrapped" dark />
      <div className="p-[26px] text-[#f0f0f4]">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#7a7a86]">
            Your year in sound
          </span>
          <span className="rounded-full bg-[#1db954] px-[9px] py-1 text-[11px] font-semibold text-[#0e0e12]">
            2024
          </span>
        </div>
        <AnimatedNumber
          value={14820}
          className="mt-4 block font-display text-[40px] font-bold leading-none text-white"
        />
        <div className="mt-1 text-[12.5px] text-[#9a9aa6]">
          minutes listened · top 4% of fans
        </div>
        <Equalizer heights={[42, 58, 48, 74, 64, 88, 70, 54, 80, 60, 46, 38]} />
        <div className="mt-6 flex flex-col gap-[11px]">
          {artists.map((a) => (
            <div key={a.rank} className="flex items-center gap-[13px]">
              <span
                className="w-[18px] font-mono text-[12px]"
                style={{ color: a.lead ? "#1db954" : "#7a7a86" }}
              >
                {a.rank}
              </span>
              <span
                className="h-[34px] w-[34px] flex-shrink-0 overflow-hidden rounded-[7px]"
                style={{ background: a.grad }}
              >
                {a.img && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={a.img}
                    alt={a.name}
                    className="h-full w-full object-cover"
                  />
                )}
              </span>
              <span className="flex-1 text-[13.5px] font-semibold text-[#f0f0f4]">
                {a.name}
              </span>
              <span className="font-mono text-[11.5px] text-[#7a7a86]">
                {a.plays}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* 02 — Scout: light job-matcher with fit-score rings. */
export function ScoutMockup() {
  const stats = [
    { value: 12, label: "Saved", dark: false },
    { value: 5, label: "Applied", dark: false },
    { value: 2, label: "Interview", dark: true },
  ];
  return (
    <>
      <Chrome url="scout.app/matches" />
      <div className="bg-[#f7f6f1] p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-display text-[17px] font-semibold text-ink">
            Top matches
          </span>
          <span className="font-mono text-[11px] text-[#8f8d80]">
            ranked by fit
          </span>
        </div>

        {/* featured match */}
        <div
          className="flex items-center gap-4 rounded-[13px] border bg-white p-4"
          style={{
            borderColor: "rgba(43,43,240,0.25)",
            boxShadow: "0 8px 20px -12px rgba(43,43,240,0.4)",
          }}
        >
          <AnimatedRing pct={94} size={56}>
            <span className="grid h-[42px] w-[42px] place-items-center rounded-full bg-white">
              <AnimatedNumber
                value={94}
                className="font-display text-[15px] font-bold text-blue"
              />
            </span>
          </AnimatedRing>
          <div className="flex-1">
            <div className="text-[14.5px] font-semibold text-ink">
              Senior Frontend Engineer
            </div>
            <div className="mt-0.5 text-[12.5px] text-[#6e6e64]">
              Paystack · Remote
            </div>
            <div className="mt-[9px] flex gap-1.5">
              {["React", "TypeScript"].map((t) => (
                <span
                  key={t}
                  className="rounded-[5px] bg-[rgba(43,43,240,0.08)] px-[7px] py-[3px] font-mono text-[10.5px] text-blue"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* secondary match */}
        <div
          className="mt-2.5 flex items-center gap-[14px] rounded-[13px] border bg-white px-4 py-[13px]"
          style={{ borderColor: "rgba(23,22,15,0.08)" }}
        >
          <AnimatedRing pct={81} size={40} color="#1fa463">
            <span className="grid h-[30px] w-[30px] place-items-center rounded-full bg-white">
              <AnimatedNumber
                value={81}
                className="font-display text-[12px] font-bold text-moss"
              />
            </span>
          </AnimatedRing>
          <div className="flex-1">
            <div className="text-[13.5px] font-semibold text-ink">
              Full-Stack Engineer
            </div>
            <div className="mt-px text-[12px] text-[#6e6e64]">
              Flutterwave · Hybrid
            </div>
          </div>
        </div>

        {/* pipeline */}
        <div className="mt-4 flex gap-2">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex-1 rounded-[9px] py-2.5 text-center"
              style={
                s.dark
                  ? { background: "#17160f" }
                  : { background: "#fff", border: "1px solid rgba(23,22,15,0.08)" }
              }
            >
              <AnimatedNumber
                value={s.value}
                className={`block font-display text-[18px] font-bold ${s.dark ? "text-white" : "text-ink"}`}
              />
              <div
                className="mt-0.5 font-mono text-[9.5px] uppercase tracking-[0.06em]"
                style={{ color: s.dark ? "#a8a69a" : "#8f8d80" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* 03 — Monike: light finance overview with budget ring + category bars. */
export function MonikeMockup() {
  const cats = [
    { name: "Essentials", amount: "₦180k", pct: 72, color: "#2b2bf0" },
    { name: "Wants", amount: "₦96k", pct: 90, color: "#febc2e" },
    { name: "Savings", amount: "₦36k", pct: 34, color: "#1fa463" },
  ];
  return (
    <>
      <Chrome url="monike.app/overview" />
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#8f8d80]">
              Spent · June
            </div>
            <AnimatedNumber
              value={312400}
              prefix="₦"
              className="mt-1.5 block font-display text-[34px] font-bold leading-none text-ink"
            />
            <div className="mt-[5px] text-[12.5px] text-[#6e6e64]">
              of ₦400,000 budget
            </div>
          </div>
          <AnimatedRing pct={78} size={74}>
            <span className="grid h-[54px] w-[54px] place-items-center rounded-full bg-white">
              <AnimatedNumber
                value={78}
                suffix="%"
                className="font-display text-[15px] font-bold text-ink"
              />
            </span>
          </AnimatedRing>
        </div>

        {/* category bars */}
        <div className="mt-[22px] flex flex-col gap-[13px]">
          {cats.map((c) => (
            <div key={c.name}>
              <div className="mb-1.5 flex justify-between text-[12.5px]">
                <span className="font-semibold text-ink">{c.name}</span>
                <span className="font-mono text-[#6e6e64]">{c.amount}</span>
              </div>
              <AnimatedBar pct={c.pct} color={c.color} />
            </div>
          ))}
        </div>

        {/* alert */}
        <div
          className="mt-5 flex items-center gap-2.5 rounded-[11px] border px-[14px] py-[11px]"
          style={{
            background: "#fff7e6",
            borderColor: "rgba(254,188,46,0.5)",
          }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#c98a00" strokeWidth="2">
            <path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
          </svg>
          <span className="text-[12.5px] font-medium text-[#7a5a00]">
            You&apos;re close to your &ldquo;Wants&rdquo; limit for June.
          </span>
        </div>
      </div>
    </>
  );
}

/* 04 — D'Footprint: dark handmade-footwear store, product-detail page. */
const DF_ACCENT = "#c2703c";
export function DfootprintMockup() {
  const sizes = ["38", "39", "40", "41", "42", "43", "44", "45"];
  const selected = "41";
  return (
    <>
      <Chrome url="dfootprint.me/product/mavora-slipper" dark />
      <div className="p-[22px]" style={{ background: "#100e0c" }}>
        {/* store header */}
        <div className="mb-[18px] flex items-center justify-between">
          <span
            className="font-display text-[15px] font-bold tracking-[0.06em] text-white"
            style={{ fontStretch: "expanded" }}
          >
            D&apos;FOOTPRINT
          </span>
          <div className="flex gap-[18px] font-mono text-[9px] uppercase tracking-[0.12em] text-[#8c857a]">
            <span>Shop</span>
            <span>About</span>
            <span>Contact</span>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_1.05fr] gap-[18px]">
          {/* product image */}
          <div
            className="aspect-[4/5] rounded-[12px]"
            style={{
              background:
                "linear-gradient(155deg,#5a7a3a 0%,#3f5a28 38%,#c9925a 40%,#8a5a32 100%)",
            }}
          />

          {/* product details */}
          <div>
            <div className="flex items-center gap-2">
              <span className="h-px w-5" style={{ background: DF_ACCENT }} />
              <span
                className="font-mono text-[8.5px] uppercase tracking-[0.2em]"
                style={{ color: DF_ACCENT }}
              >
                Product details
              </span>
            </div>
            <h4 className="mt-2.5 font-display text-[22px] font-semibold leading-[1.05] text-white">
              Mavora Slipper
            </h4>
            <div className="mt-2.5 flex items-center gap-2.5">
              <span
                className="rounded-[5px] border px-2 py-1 font-mono text-[8.5px] uppercase tracking-[0.12em]"
                style={{ borderColor: DF_ACCENT, color: DF_ACCENT }}
              >
                In stock
              </span>
              <span className="font-mono text-[9px] text-[#7a756c]">
                5.0 / 5 (1 review)
              </span>
            </div>
            <div
              className="mt-3 inline-flex items-baseline rounded-[7px] px-3.5 py-2 font-display text-[15px] font-bold text-white"
              style={{ background: DF_ACCENT }}
            >
              <AnimatedNumber value={12000} prefix="₦" />
              <span className="text-[11px] opacity-80">.00 NGN</span>
            </div>

            <div className="mt-3.5 font-mono text-[8.5px] uppercase tracking-[0.16em] text-[#7a756c]">
              Size
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {sizes.map((s) => (
                <span
                  key={s}
                  className="grid h-[24px] w-[26px] place-items-center rounded-[5px] border text-[10px] font-medium"
                  style={
                    s === selected
                      ? { borderColor: DF_ACCENT, color: "#fff" }
                      : { borderColor: "rgba(255,255,255,0.14)", color: "#9a948a" }
                  }
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* add to cart */}
        <button
          className="mt-[18px] w-full rounded-[8px] py-2.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-white"
          style={{ background: DF_ACCENT }}
        >
          Add to cart
        </button>
      </div>
    </>
  );
}

/* 05 — Foodify: food-delivery marketplace with live rider tracking. */
export function FoodifyMockup() {
  return (
    <>
      <Chrome url="foodify.app/order" />
      <div className="bg-[#f7f6f1] p-[22px]">
        {/* search */}
        <div
          className="flex items-center gap-2.5 rounded-full border bg-white px-[15px] py-2.5"
          style={{ borderColor: "rgba(23,22,15,0.1)" }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8f8d80" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <span className="text-[13.5px] font-medium text-ink">Jollof rice</span>
          <span className="ml-auto flex items-center gap-1 font-mono text-[11px] text-[#8f8d80]">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#8f8d80" strokeWidth="2.4">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            Yaba
          </span>
        </div>

        {/* top restaurant result */}
        <div
          className="mt-3 flex items-center gap-3.5 rounded-[14px] border bg-white p-3.5"
          style={{
            borderColor: "rgba(43,43,240,0.18)",
            boxShadow: "0 10px 24px -16px rgba(43,43,240,0.35)",
          }}
        >
          <span
            className="h-[52px] w-[52px] flex-shrink-0 rounded-[12px]"
            style={{ background: "linear-gradient(135deg,#ff7a3d,#e23d2e)" }}
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="truncate text-[14px] font-semibold text-ink">
                Mama Put Kitchen
              </span>
              <span className="flex flex-shrink-0 items-center gap-0.5 rounded-full bg-[#fff3d6] px-1.5 py-0.5 text-[10px] font-semibold text-[#b07d00]">
                ★ 4.8
              </span>
            </div>
            <div className="mt-1 text-[11.5px] text-[#6e6e64]">
              Jollof rice · 1.2 km away
            </div>
          </div>
          <div className="flex-shrink-0 text-right">
            <AnimatedNumber
              value={2800}
              prefix="₦"
              className="block font-display text-[16px] font-bold text-ink"
            />
            <span className="font-mono text-[10px] text-[#8f8d80]">18 min</span>
          </div>
        </div>

        {/* live order status */}
        <div
          className="mt-3 rounded-[14px] border bg-white p-3.5"
          style={{ borderColor: "rgba(23,22,15,0.08)" }}
        >
          <div className="flex items-center gap-3">
            <span
              className="h-[38px] w-[38px] flex-shrink-0 rounded-full"
              style={{ background: "linear-gradient(135deg,#2b2bf0,#1fa463)" }}
            />
            <div className="min-w-0 flex-1">
              <div className="text-[13px] font-semibold text-ink">
                Tunde is on the way
              </div>
              <div className="text-[11.5px] text-[#6e6e64]">
                Arriving in{" "}
                <AnimatedNumber
                  value={12}
                  suffix=" min"
                  className="font-semibold text-ink"
                />
              </div>
            </div>
            <span className="flex-shrink-0 rounded-full bg-[rgba(31,164,99,0.12)] px-2.5 py-1 text-[10.5px] font-semibold text-moss">
              On the way
            </span>
          </div>
          <div className="mt-3.5">
            <AnimatedBar pct={66} color="#1fa463" />
          </div>
          <div className="mt-2 flex justify-between font-mono text-[9.5px] uppercase tracking-[0.06em]">
            <span className="text-moss">Preparing</span>
            <span className="text-moss">Picked up</span>
            <span className="text-[#8f8d80]">Delivered</span>
          </div>
        </div>
      </div>
    </>
  );
}
