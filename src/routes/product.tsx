import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/site/Shell";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product — Nocturne" },
      { name: "description", content: "Nocturne is an autonomous data automation platform: agents, pipelines, observability and governance in one plane." },
      { property: "og:title", content: "Product — Nocturne" },
      { property: "og:description", content: "Autonomous agents that observe, fix and ship data pipelines." },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  const blocks = [
    { k: "01", h: "Autonomous Agents", b: "Self-directed agents observe pipelines, detect drift and ship fixes through your existing PR workflow." },
    { k: "02", h: "Schema-aware Sync", b: "Bidirectional sync across 180+ sources with column-level lineage and zero hand-written DDL." },
    { k: "03", h: "Edge Runtime", b: "Workloads run within 30 ms of your warehouse. Cold start measured in microseconds." },
    { k: "04", h: "Policy-native Governance", b: "Row-level policies enforced at compile time. SOC 2, HIPAA, GDPR — out of the box." },
  ];
  return (
    <Shell>
      <section className="relative mx-auto max-w-7xl px-5 pb-24 pt-20 sm:pt-28">
        <div className="anim-fade-up font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">// product</div>
        <h1 className="anim-fade-up d-1 mt-4 max-w-4xl text-5xl leading-[1.02] tracking-[-0.03em] sm:text-7xl">
          One <span className="font-display italic text-[var(--ink-soft)]">data plane</span> for every pipeline you'll ever ship.
        </h1>
        <p className="anim-fade-up d-2 mt-7 max-w-2xl text-lg text-[var(--ink-soft)]">
          Nocturne unifies orchestration, observability and governance behind a single autonomous control plane — so your team writes intent, not glue code.
        </p>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {blocks.map((b, i) => (
            <article
              key={b.k}
              className="tilt-3d group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-white p-8"
              style={{ animation: `nFadeUp 420ms ${i * 70}ms cubic-bezier(0.22,1,0.36,1) both` }}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--saffron)]">{b.k}</div>
              <h2 className="mt-3 text-2xl tracking-tight">{b.h}</h2>
              <p className="mt-3 text-[var(--ink-soft)]">{b.b}</p>
              <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-[var(--forsythia)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40" />
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-3">
          <Link to="/signin" className="magnet inline-flex h-12 items-center gap-2 rounded-full bg-[var(--noir)] px-6 text-sm font-medium text-[var(--powder)] glow-saffron">
            Start free
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--forsythia)] text-[var(--noir)]">→</span>
          </Link>
          <Link to="/docs" className="inline-flex h-12 items-center gap-2 rounded-full border border-[var(--border)] bg-white px-5 text-sm font-medium text-[var(--noir)] hover:bg-[var(--mint)]">
            Read the docs
          </Link>
        </div>
      </section>
    </Shell>
  );
}
