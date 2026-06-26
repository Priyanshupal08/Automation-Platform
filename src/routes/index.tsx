import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Shell } from "@/components/site/Shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nocturne — AI Data Automation Platform" },
      { name: "description", content: "Autonomous AI data workflows with matrix pricing across INR, USD and EUR. Built for teams that ship." },
      { property: "og:title", content: "Nocturne — AI Data Automation Platform" },
      { property: "og:description", content: "Autonomous AI data workflows with matrix pricing across INR, USD and EUR. Built for teams that ship." },
    ],
  }),
  component: LandingPage,
});

/* ------------------------------ Icons (inline, semantic) ------------------------------ */
const IconSearch = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="currentColor" {...p}>
    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
  </svg>
);
const IconLink = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" {...p}>
    <path d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
  </svg>
);
const IconCube = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="currentColor" {...p}>
    <path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z" />
  </svg>
);
const IconCog = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" {...p}>
    <path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93c.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204c.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78c-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107c-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93c-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204c-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78c.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107c.397-.165.71-.505.78-.929l.15-.894Z" />
    <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
  </svg>
);
const IconChevronDown = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" {...p}>
    <path d="m19.5 8.25l-7.5 7.5l-7.5-7.5" />
  </svg>
);
const IconChartPie = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" {...p}>
    <path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
    <path d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
  </svg>
);
const IconTrendUp = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" {...p}>
    <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
);
const IconArrowPath = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" {...p}>
    <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
);

/* ------------------------------ Page ------------------------------ */
function LandingPage() {
  return (
    <Shell>
      <Hero />
      <LogoMarquee />
      <StatsStrip />
      <Features />
      <CodeShowcase />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </Shell>
  );
}

/* ------------------------------ Hero ------------------------------ */
const ROTATING_WORDS = ["machines", "agents", "pipelines", "midnight"];

function RotatingWord() {
  // Equal-delay timed cycle — pure CSS, hardware accelerated.
  const dur = 6; // seconds — matches nRotateIn keyframe
  return (
    <span className="word-rot relative align-baseline">
      {ROTATING_WORDS.map((w, i) => (
        <span
          key={w}
          className="relative whitespace-nowrap"
          style={{ animationDelay: `${(i * dur) / ROTATING_WORDS.length - dur}s` }}
        >
          <span className="relative z-10">{w}</span>
          <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-[var(--forsythia)] sm:h-4 lg:h-5" />
        </span>
      ))}
    </span>
  );
}

function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    };
    el.addEventListener("pointermove", onMove);
    return () => { el.removeEventListener("pointermove", onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Aurora layer */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="aurora-a absolute -left-32 top-20 h-[36rem] w-[36rem] rounded-full bg-[var(--forsythia)] opacity-30 blur-[120px]" />
        <div className="aurora-b absolute -right-20 top-0 h-[40rem] w-[40rem] rounded-full bg-[var(--saffron)] opacity-25 blur-[140px]" />
        <div className="aurora-a absolute left-1/3 top-1/2 h-[28rem] w-[28rem] rounded-full bg-[var(--deep)] opacity-20 blur-[120px]" style={{ animationDelay: "-9s" }} />
      </div>
      <div className="pointer-events-none absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_top,black_55%,transparent_85%)]" />
      {/* Spotlight that follows cursor */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(600px circle at var(--mx, 50%) var(--my, 30%), rgba(255,200,1,0.10), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-16 sm:pt-24 lg:pb-32">
        <div className="anim-fade-up inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--ink-soft)] backdrop-blur">
          <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[var(--saffron)]" />
          Autonomous Agents now in GA
        </div>

        <h1 className="anim-fade-up d-1 mt-6 max-w-5xl text-[44px] leading-[1.0] tracking-[-0.03em] sm:text-6xl lg:text-[92px]">
          <span className="gradient-text">Data automation,</span>
          <br />
          <span className="font-display italic text-[var(--ink-soft)]">written by </span>
          <RotatingWord />
          <span className="text-[var(--saffron)]">.</span>
        </h1>

        <p className="anim-fade-up d-2 mt-7 max-w-xl font-sans text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
          Nocturne turns brittle ETL into autonomous, self-healing workflows. Pipelines that observe themselves, fix themselves, and ship faster than your team can review the PR.
        </p>

        <div className="anim-fade-up d-3 mt-9 flex flex-wrap items-center gap-3">
          <Link to="/signin" className="magnet group inline-flex h-12 items-center gap-2 rounded-full bg-[var(--noir)] px-6 text-sm font-medium text-[var(--powder)] glow-saffron">
            Start automating
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--forsythia)] text-[var(--noir)] transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
          <a href="#features" className="magnet inline-flex h-12 items-center gap-2 rounded-full border border-[var(--border)] bg-white px-5 text-sm font-medium text-[var(--noir)]">
            <IconSearch className="h-4 w-4" />
            Explore the platform
          </a>
        </div>

        <HeroCanvas />
      </div>
    </section>
  );
}


function HeroCanvas() {
  const wrapRef = useRef<HTMLDivElement>(null);

  // 3D parallax tilt on pointer move (WAAPI / pure transform)
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `perspective(1400px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg)`;
      });
    };
    const onLeave = () => { el.style.transform = "perspective(1400px) rotateX(0) rotateY(0)"; };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="anim-scale d-4 relative mt-16 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--noir)] p-1 shadow-[0_40px_120px_-40px_rgba(17,76,90,0.55)] transition-transform duration-300 will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-[#0e2530] via-[#143845] to-[#114C5A] p-6 sm:p-10">
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: "linear-gradient(to right, #F1F6F4 1px, transparent 1px), linear-gradient(to bottom, #F1F6F4 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        {/* floating orb */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[var(--forsythia)] opacity-30 blur-3xl float-slow" />

        <div className="relative grid gap-5 sm:grid-cols-3">
          <StatCard k="Pipelines" v={1284} suffix="" delta="+12.4%" Icon={IconChartPie} />
          <StatCard k="Rows / sec" v={920} suffix="K" delta="stable" Icon={IconTrendUp} />
          <StatCard k="Auto-fixes" v={47} suffix="" delta="last hour" Icon={IconArrowPath} spinIcon />
        </div>

        {/* SVG dashboard chart */}
        <div className="relative mt-6 grid gap-5 sm:grid-cols-5">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:col-span-3">
            <div className="flex items-center justify-between">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--mint)]/70">Throughput · 24h</div>
              <div className="font-mono text-[10px] text-[var(--forsythia)]">live</div>
            </div>
            <svg viewBox="0 0 320 110" className="mt-3 h-28 w-full">
              <defs>
                <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#FFC801" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#FFC801" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,80 C30,60 50,90 80,70 C110,50 130,85 160,60 C190,35 210,70 240,45 C270,20 290,55 320,30 L320,110 L0,110 Z" fill="url(#g1)" />
              <path d="M0,80 C30,60 50,90 80,70 C110,50 130,85 160,60 C190,35 210,70 240,45 C270,20 290,55 320,30" fill="none" stroke="#FFC801" strokeWidth="2" />
              <path d="M0,95 C40,90 80,80 120,75 C160,70 200,55 240,50 C280,45 300,40 320,38" fill="none" stroke="#D9E8E2" strokeOpacity="0.5" strokeWidth="1.5" className="dash-flow" />
            </svg>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--mint)]/70">Agent activity</div>
            <ul className="mt-3 space-y-2 font-mono text-[12px] text-[var(--mint)]/80">
              {[
                ["healed", "payments.events"],
                ["synced", "users.profile"],
                ["rerouted", "ledger.tx"],
                ["alerted", "ops.queue"],
              ].map(([action, target]) => (
                <li key={target} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--forsythia)]" />
                  <span className="text-[var(--saffron)]">{action}</span>
                  <span className="opacity-70">{target}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CLI */}
        <div className="relative mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-5 font-mono text-[12px] leading-relaxed text-[var(--mint)]/90 sm:text-sm">
          <div className="flex gap-1.5 pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div><span className="text-[var(--forsythia)]">nocturne</span> <span className="text-[var(--saffron)]">deploy</span> --agent etl-prime</div>
          <div className="opacity-70">→ resolving schema drift in <span className="text-[var(--forsythia)]">payments.events</span></div>
          <div className="opacity-70">→ generating backfill plan (12 partitions)</div>
          <div>✓ pipeline healed in <span className="text-[var(--forsythia)]">218ms</span><span className="caret ml-1 inline-block h-3 w-1.5 translate-y-0.5 bg-[var(--forsythia)]" /></div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  k, v, suffix, delta, Icon, spinIcon,
}: { k: string; v: number; suffix?: string; delta: string; Icon: (p: React.SVGProps<SVGSVGElement>) => React.ReactElement; spinIcon?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const target = v;
    const start = performance.now();
    const dur = 1200;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const n = Math.round(target * eased);
      el.textContent = n.toLocaleString() + (suffix ?? "");
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [v, suffix]);
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-colors hover:border-[var(--forsythia)]/40">
      <div className="flex items-center justify-between">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--mint)]/70">{k}</div>
        <Icon className={["h-4 w-4 text-[var(--forsythia)]", spinIcon ? "spin-slow" : ""].join(" ")} />
      </div>
      <div className="mt-3">
        <span ref={ref} className="font-mono text-3xl text-[var(--powder)] sm:text-4xl">0{suffix ?? ""}</span>
      </div>
      <div className="mt-1 text-xs text-[var(--forsythia)]">{delta}</div>
    </div>
  );
}

/* ------------------------------ Logo Marquee ------------------------------ */
function LogoMarquee() {
  const names = ["LINEAR", "VERCEL", "STRIPE", "SUPABASE", "PLAID", "NOTION", "RAMP", "ARC", "FIGMA", "LATTICE"];
  return (
    <section aria-label="Trusted by" className="border-y border-[var(--border)] bg-[var(--mint)]/40 py-6">
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="marquee flex w-max gap-16 whitespace-nowrap font-mono text-sm tracking-[0.3em] text-[var(--ink-soft)]/70">
          {[...names, ...names].map((n, i) => (
            <span key={i}>{n}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Stats strip ------------------------------ */
function StatsStrip() {
  const items = [
    { v: "99.99%", k: "uptime SLA" },
    { v: "180+", k: "connectors" },
    { v: "30 ms", k: "edge runtime" },
    { v: "0", k: "config files" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-4">
        {items.map((it, i) => (
          <div
            key={it.k}
            className="spotlight group relative bg-[var(--powder)] p-8 text-center transition-colors hover:bg-white"
            style={{ animation: `nFadeUp 520ms ${i * 80}ms cubic-bezier(0.22,1,0.36,1) both` }}
          >
            <div className="font-display text-5xl tracking-tight text-[var(--noir)] transition-transform duration-500 group-hover:-translate-y-1 sm:text-6xl">{it.v}</div>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--ink-soft)]">{it.k}</div>
            <div className="pointer-events-none absolute inset-x-6 bottom-3 h-px origin-left scale-x-0 bg-[var(--saffron)] transition-transform duration-500 group-hover:scale-x-100" />
          </div>
        ))}
      </div>
    </section>
  );
}


/* ------------------------------ Features (Bento ⇄ Accordion) ------------------------------ */
const FEATURES = [
  { title: "Autonomous agents", blurb: "Self-directed agents observe pipelines, detect drift, and ship fixes through your existing PR workflow.", icon: IconCog, span: "lg:col-span-2 lg:row-span-2", accent: "bg-[var(--forsythia)]" },
  { title: "Schema-aware sync", blurb: "Bidirectional sync across 180+ sources with column-level lineage.", icon: IconLink, span: "lg:col-span-1", accent: "bg-[var(--saffron)]" },
  { title: "Zero-config observability", blurb: "Every transformation is profiled — latency, cost, freshness.", icon: IconChartPie, span: "lg:col-span-1", accent: "bg-[var(--mint)]" },
  { title: "Policy-native governance", blurb: "Row-level policies enforced at compile time. SOC2, HIPAA, GDPR.", icon: IconSearch, span: "lg:col-span-1", accent: "bg-[var(--mint)]" },
  { title: "Edge-deployed runtime", blurb: "Workloads run within 30ms of your warehouse. Cold start: 0ms.", icon: IconCube, span: "lg:col-span-1", accent: "bg-[var(--forsythia)]" },
];

function useIsMobile(breakpoint = 1024) {
  const [m, setM] = useState(false);
  useLayoutEffect(() => {
    const q = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const sync = () => setM(q.matches);
    sync();
    q.addEventListener("change", sync);
    return () => q.removeEventListener("change", sync);
  }, [breakpoint]);
  return m;
}

function Features() {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const hoverRef = useRef<number | null>(0);

  useEffect(() => {
    if (isMobile) {
      const carry = hoverRef.current ?? activeIndex;
      if (carry !== null) setActiveIndex(carry);
    }
  }, [isMobile]);

  return (
    <section id="features" className="relative mx-auto max-w-7xl px-5 py-24 sm:py-32">
      <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">// platform</div>
          <h2 className="mt-3 max-w-2xl text-4xl tracking-[-0.02em] sm:text-5xl lg:text-6xl">
            Six primitives.<br />
            <span className="font-display italic text-[var(--ink-soft)]">One</span> autonomous data plane.
          </h2>
        </div>
        <p className="max-w-md text-[var(--ink-soft)]">
          Everything in Nocturne is composable — pipelines, agents, policies, observability. Wire them once, run them forever.
        </p>
      </div>

      {!isMobile ? (
        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            const isActive = activeIndex === i;
            return (
              <button
                key={f.title}
                onMouseEnter={() => { hoverRef.current = i; setActiveIndex(i); }}
                onFocus={() => { hoverRef.current = i; setActiveIndex(i); }}
                className={[
                  "group relative overflow-hidden rounded-3xl border border-[var(--border)] p-6 text-left transition-all duration-300",
                  f.span,
                  isActive
                    ? "bg-[var(--noir)] text-[var(--powder)] -translate-y-1 shadow-[0_30px_80px_-40px_rgba(23,43,54,0.55)]"
                    : "bg-white hover:-translate-y-0.5",
                ].join(" ")}
              >
                {isActive && (
                  <span className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[var(--forsythia)] opacity-30 blur-3xl" />
                )}
                <div className={[
                  "relative inline-grid h-10 w-10 place-items-center rounded-xl transition-colors",
                  isActive ? "bg-[var(--forsythia)] text-[var(--noir)]" : `${f.accent} text-[var(--noir)]`,
                ].join(" ")}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className={["relative mt-5 text-xl tracking-tight", isActive ? "text-[var(--powder)]" : ""].join(" ")}>
                  {f.title}
                </h3>
                <p className={["relative mt-2 text-sm leading-relaxed", isActive ? "text-[var(--mint)]/85" : "text-[var(--ink-soft)]"].join(" ")}>
                  {f.blurb}
                </p>
                <div className="absolute bottom-5 right-5 font-mono text-[11px] opacity-60">0{i + 1}</div>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="divide-y divide-[var(--border)] overflow-hidden rounded-2xl border border-[var(--border)] bg-white">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            const open = activeIndex === i;
            return (
              <div key={f.title}>
                <button
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  aria-expanded={open}
                  onClick={() => setActiveIndex(open ? null : i)}
                >
                  <span className="flex items-center gap-3">
                    <span className={`grid h-9 w-9 place-items-center rounded-lg ${f.accent}`}>
                      <Icon className="h-4 w-4 text-[var(--noir)]" />
                    </span>
                    <span className="text-base font-medium">{f.title}</span>
                  </span>
                  <IconChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                </button>
                <div className={`acc-panel ${open ? "acc-panel-open" : ""}`}>
                  <div>
                    <p className="px-5 pb-5 text-sm leading-relaxed text-[var(--ink-soft)]">{f.blurb}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

/* ------------------------------ Code Showcase (copy-able CLI) ------------------------------ */
function CodeShowcase() {
  const [copied, setCopied] = useState(false);
  const snippet = `nocturne agents create etl-prime \\
  --source postgres://prod \\
  --sink snowflake://warehouse \\
  --policy gdpr,soc2 --autoheal`;
  return (
    <section className="mx-auto max-w-7xl px-5 pb-8">
      <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--noir)] p-2">
        <div className="rounded-[22px] bg-[#0e2530] p-6 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--forsythia)]">// 30-second install</div>
              <h3 className="mt-2 text-2xl text-[var(--powder)] sm:text-3xl">
                One command. <span className="font-display italic text-[var(--mint)]">Production</span> ready.
              </h3>
            </div>
            <button
              onClick={async () => {
                try { await navigator.clipboard.writeText(snippet); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch {}
              }}
              className="magnet inline-flex h-10 items-center gap-2 rounded-full bg-[var(--forsythia)] px-4 text-xs font-medium text-[var(--noir)]"
            >
              {copied ? "Copied!" : "Copy command"} <span aria-hidden>⌘C</span>
            </button>
          </div>
          <pre className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-black/40 p-5 font-mono text-sm leading-relaxed text-[var(--mint)]/90">
{snippet}
          </pre>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Pricing (performance-isolated) ------------------------------ */
type CurrencyKey = "USD" | "INR" | "EUR";
const CURRENCY_MATRIX: Record<CurrencyKey, { symbol: string; tariff: number; locale: string }> = {
  USD: { symbol: "$", tariff: 1, locale: "en-US" },
  INR: { symbol: "₹", tariff: 83, locale: "en-IN" },
  EUR: { symbol: "€", tariff: 0.92, locale: "de-DE" },
};
const ANNUAL_DISCOUNT = 0.8;

const TIERS = [
  { name: "Starter", tagline: "For solo engineers shipping their first pipeline.", base: 19, features: ["3 pipelines", "10K rows / hr", "Community support", "1 workspace"], featured: false },
  { name: "Studio", tagline: "For teams running production-grade data flows.", base: 49, features: ["50 pipelines", "5M rows / hr", "Slack alerts", "Lineage graph", "SSO ready"], featured: true },
  { name: "Scale", tagline: "For organizations with mission-critical data.", base: 129, features: ["Unlimited pipelines", "Custom row caps", "24/7 on-call", "Dedicated VPC", "Audit logs"], featured: false },
];

function formatPrice(base: number, currency: CurrencyKey, annual: boolean) {
  const cfg = CURRENCY_MATRIX[currency];
  const value = base * cfg.tariff * (annual ? ANNUAL_DISCOUNT : 1);
  const rounded = Math.round(value);
  return `${cfg.symbol}${rounded.toLocaleString(cfg.locale)}`;
}

function Pricing() {
  return (
    <section id="pricing" className="relative bg-[var(--noir)] py-24 text-[var(--powder)] sm:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: "linear-gradient(to right, #F1F6F4 1px, transparent 1px), linear-gradient(to bottom, #F1F6F4 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }} />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--forsythia)] opacity-20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--forsythia)]">// pricing matrix</div>
            <h2 className="mt-3 text-4xl tracking-[-0.02em] sm:text-5xl lg:text-6xl">
              Honest math.<br />
              <span className="font-display italic text-[var(--mint)]/80">Across</span> every currency.
            </h2>
          </div>
          <p className="max-w-md text-[var(--mint)]/80">
            One regional tariff matrix. One annual discount multiplier. Zero hidden line items.
          </p>
        </div>
        <PricingMatrix />
      </div>
    </section>
  );
}

function PricingMatrix() {
  const billingRef = useRef<"monthly" | "annual">("monthly");
  const currencyRef = useRef<CurrencyKey>("USD");

  const containerRef = useRef<HTMLDivElement>(null);
  const monthlyBtnRef = useRef<HTMLButtonElement>(null);
  const annualBtnRef = useRef<HTMLButtonElement>(null);
  const knobRef = useRef<HTMLSpanElement>(null);
  const currencyBtnsRef = useRef<Record<CurrencyKey, HTMLButtonElement | null>>({ USD: null, INR: null, EUR: null });

  const repaintPrices = () => {
    const c = currencyRef.current;
    const annual = billingRef.current === "annual";
    const root = containerRef.current;
    if (!root) return;
    root.querySelectorAll<HTMLElement>("[data-price]").forEach((el) => {
      const base = Number(el.dataset.base);
      el.textContent = formatPrice(base, c, annual);
    });
    root.querySelectorAll<HTMLElement>("[data-period]").forEach((el) => {
      el.textContent = annual ? "/mo · billed yearly" : "/month";
    });
    root.querySelectorAll<HTMLElement>("[data-save]").forEach((el) => {
      el.style.opacity = annual ? "1" : "0";
    });
  };

  const setBilling = (b: "monthly" | "annual") => {
    billingRef.current = b;
    if (knobRef.current) {
      knobRef.current.style.transform = b === "annual" ? "translateX(100%)" : "translateX(0)";
    }
    monthlyBtnRef.current?.setAttribute("data-active", String(b === "monthly"));
    annualBtnRef.current?.setAttribute("data-active", String(b === "annual"));
    repaintPrices();
  };

  const setCurrency = (c: CurrencyKey) => {
    currencyRef.current = c;
    (Object.keys(currencyBtnsRef.current) as CurrencyKey[]).forEach((k) => {
      currencyBtnsRef.current[k]?.setAttribute("data-active", String(k === c));
    });
    repaintPrices();
  };

  return (
    <div ref={containerRef} className="anim-fade d-1 mt-12">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div className="relative inline-flex rounded-full border border-white/15 bg-white/[0.06] p-1 font-mono text-xs">
          <span ref={knobRef} aria-hidden className="absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-[var(--forsythia)] transition-transform duration-300 ease-out" style={{ transform: "translateX(0)" }} />
          <button ref={monthlyBtnRef} data-active="true" onClick={() => setBilling("monthly")} className="relative z-10 rounded-full px-5 py-2 text-[var(--powder)] data-[active=true]:text-[var(--noir)]">Monthly</button>
          <button ref={annualBtnRef} data-active="false" onClick={() => setBilling("annual")} className="relative z-10 inline-flex items-center gap-2 rounded-full px-5 py-2 text-[var(--powder)] data-[active=true]:text-[var(--noir)]">
            Annual
            <span className="rounded-sm bg-[var(--saffron)] px-1.5 py-0.5 text-[10px] text-[var(--noir)]">−20%</span>
          </button>
        </div>

        <div className="inline-flex rounded-full border border-white/15 bg-white/[0.06] p-1 font-mono text-xs">
          {(Object.keys(CURRENCY_MATRIX) as CurrencyKey[]).map((c) => (
            <button
              key={c}
              ref={(el) => { currencyBtnsRef.current[c] = el; }}
              data-active={c === "USD"}
              onClick={() => setCurrency(c)}
              className="rounded-full px-4 py-2 text-[var(--powder)] transition-colors data-[active=true]:bg-[var(--mint)] data-[active=true]:text-[var(--noir)]"
              aria-label={`${c} pricing`}
            >
              {CURRENCY_MATRIX[c].symbol} {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {TIERS.map((t, i) => (
          <article
            key={t.name}
            className={[
              "relative overflow-hidden rounded-3xl border p-7 transition-transform duration-300 hover:-translate-y-1",
              t.featured
                ? "border-[var(--forsythia)] bg-gradient-to-b from-[#1c3946] to-[#0f242d] glow-forsythia"
                : "border-white/12 bg-white/[0.03] hover:border-white/25",
            ].join(" ")}
            style={{ animation: `nFadeUp 420ms ${100 + i * 80}ms cubic-bezier(0.22,1,0.36,1) both` }}
          >
            {t.featured && (
              <div className="absolute right-5 top-5 rounded-full bg-[var(--forsythia)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--noir)]">
                Most loved
              </div>
            )}
            <h3 className="text-2xl tracking-tight text-[var(--powder)]">{t.name}</h3>
            <p className="mt-2 min-h-[40px] text-sm text-[var(--mint)]/75">{t.tagline}</p>

            <div className="mt-7 flex items-end gap-2">
              <span data-price data-base={t.base} className="font-mono text-5xl tracking-tight text-[var(--powder)]">
                {formatPrice(t.base, "USD", false)}
              </span>
              <span data-period className="pb-2 text-xs text-[var(--mint)]/70">/month</span>
            </div>
            <div data-save className="mt-1 font-mono text-[11px] text-[var(--forsythia)]" style={{ opacity: 0 }}>
              Save 20% vs. monthly
            </div>

            <Link
              to="/signin"
              className={[
                "magnet mt-7 inline-flex h-11 w-full items-center justify-center rounded-full text-sm font-medium",
                t.featured ? "bg-[var(--forsythia)] text-[var(--noir)]" : "border border-white/20 text-[var(--powder)] hover:bg-white/10",
              ].join(" ")}
            >
              {t.featured ? "Start Studio" : `Choose ${t.name}`}
            </Link>

            <ul className="mt-7 space-y-3 border-t border-white/10 pt-6">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-[var(--mint)]/85">
                  <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[var(--forsythia)] text-[var(--noir)]">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12l5 5 9-11" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--mint)]/60">
        // tariff matrix · USD ×1.00 · INR ×83.00 · EUR ×0.92 · annual ×0.80
      </p>
    </div>
  );
}

/* ------------------------------ Testimonials ------------------------------ */
function Testimonials() {
  const quotes = [
    { q: "We deleted 4,000 lines of orchestration code in a weekend. Nocturne just… ran.", a: "Priya Raman", r: "Staff Data Eng, Loomwave" },
    { q: "It caught a schema drift in production before our on-call did. That's the whole pitch.", a: "Marc Velasquez", r: "VP Platform, Northstar Bank" },
    { q: "Pricing math is transparent across every region. Finance signed off in one meeting.", a: "Hana Okafor", r: "Head of FinOps, Triangulate" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:py-32">
      <div className="mb-12 flex items-end justify-between">
        <h2 className="text-4xl tracking-[-0.02em] sm:text-5xl">
          Loved by data teams that <span className="font-display italic text-[var(--saffron)]">ship</span>.
        </h2>
        <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--ink-soft)] sm:block">// social proof</span>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {quotes.map((t, i) => (
          <figure
            key={t.a}
            className="tilt-3d relative rounded-3xl border border-[var(--border)] bg-white p-7"
            style={{ animation: `nFadeUp 420ms ${i * 80}ms cubic-bezier(0.22,1,0.36,1) both` }}
          >
            <div className="font-display text-6xl leading-none text-[var(--forsythia)]">"</div>
            <blockquote className="mt-3 text-lg leading-snug text-[var(--noir)]">{t.q}</blockquote>
            <figcaption className="mt-6 border-t border-[var(--border)] pt-4">
              <div className="text-sm font-medium">{t.a}</div>
              <div className="text-xs text-[var(--ink-soft)]">{t.r}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ FAQ ------------------------------ */
function FAQ() {
  const items = [
    { q: "How is Nocturne different from a traditional orchestrator?", a: "Traditional orchestrators run DAGs you wrote. Nocturne writes and heals the DAG itself. You declare intent — sources, sinks, policies — and agents handle the rest." },
    { q: "What happens to my data?", a: "Nothing leaves your VPC. The control plane is SaaS, the data plane runs inside your cloud. SOC 2 Type II, HIPAA, GDPR by default." },
    { q: "Can I use Nocturne with my existing dbt project?", a: "Yes. Nocturne wraps dbt models as first-class agents, with lineage, observability and auto-backfills layered on top." },
    { q: "How does the regional pricing matrix work?", a: "Every base price multiplies through a per-currency tariff (USD ×1.00, INR ×83.00, EUR ×0.92) and an annual discount (×0.80). No hidden line items." },
    { q: "Is there a free trial?", a: "30 days, full feature set, no credit card. Spin up an agent and watch it work." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">// faq</div>
          <h2 className="mt-3 text-4xl tracking-[-0.02em] sm:text-5xl">
            Questions, <span className="font-display italic text-[var(--saffron)]">answered</span>.
          </h2>
          <p className="mt-5 max-w-sm text-[var(--ink-soft)]">
            Still curious? <Link to="/docs" className="underline decoration-[var(--forsythia)] decoration-2 underline-offset-4">Read the docs</Link> or reach out.
          </p>
        </div>
        <div className="divide-y divide-[var(--border)] rounded-3xl border border-[var(--border)] bg-white">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q}>
                <button
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="text-base font-medium text-[var(--noir)] sm:text-lg">{it.q}</span>
                  <IconChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[var(--saffron)]" : "text-[var(--ink-soft)]"}`} />
                </button>
                <div className={`acc-panel ${isOpen ? "acc-panel-open" : ""}`}>
                  <div>
                    <p className="px-6 pb-6 text-sm leading-relaxed text-[var(--ink-soft)]">{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ CTA ------------------------------ */
function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-[var(--forsythia)] p-10 sm:p-16">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--saffron)] opacity-60 blur-3xl float-slow" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[var(--noir)] opacity-10 blur-3xl" />
        <div className="relative max-w-2xl">
          <h2 className="text-4xl tracking-[-0.02em] text-[var(--noir)] sm:text-6xl">
            Stop babysitting pipelines.<br />
            <span className="font-display italic">Start shipping outcomes.</span>
          </h2>
          <p className="mt-5 max-w-lg text-[var(--noir)]/80">
            Free for 30 days. No card. No "talk to sales." Just spin up an agent and watch it work.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/signin" className="magnet inline-flex h-12 items-center gap-2 rounded-full bg-[var(--noir)] px-6 text-sm font-medium text-[var(--powder)]">
              Start free
              <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--forsythia)] text-[var(--noir)]">→</span>
            </Link>
            <Link to="/docs" className="magnet inline-flex h-12 items-center gap-2 rounded-full border border-[var(--noir)]/20 bg-white/40 px-5 text-sm font-medium text-[var(--noir)] hover:bg-white/70">
              Read the docs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
