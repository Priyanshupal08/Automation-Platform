import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/site/Shell";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "Docs — Nocturne" },
      { name: "description", content: "Quickstarts, API reference and architecture guides for Nocturne — the autonomous data automation platform." },
      { property: "og:title", content: "Docs — Nocturne" },
      { property: "og:description", content: "Quickstarts, API reference and architecture guides for Nocturne." },
    ],
  }),
  component: DocsPage,
});

function DocsPage() {
  const sections = [
    { h: "Quickstart", items: ["Install the CLI", "Connect a warehouse", "Deploy your first agent"] },
    { h: "Core concepts", items: ["Agents & policies", "Schema lineage", "Tariff matrix"] },
    { h: "Reference", items: ["REST API", "CLI commands", "SDKs (TS, Python, Go)"] },
    { h: "Operations", items: ["Observability", "Backfills", "Incident playbooks"] },
  ];
  return (
    <Shell>
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-20 sm:pt-28">
        <div className="anim-fade-up font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">// documentation</div>
        <h1 className="anim-fade-up d-1 mt-4 max-w-4xl text-5xl leading-[1.02] tracking-[-0.03em] sm:text-7xl">
          Everything you need to ship <span className="font-display italic text-[var(--saffron)]">autonomously</span>.
        </h1>
        <p className="anim-fade-up d-2 mt-7 max-w-2xl text-lg text-[var(--ink-soft)]">
          Start with a 30-second quickstart or dive into the architecture behind the autonomous data plane.
        </p>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {sections.map((s, i) => (
            <div
              key={s.h}
              className="rounded-3xl border border-[var(--border)] bg-white p-8"
              style={{ animation: `nFadeUp 420ms ${i * 70}ms cubic-bezier(0.22,1,0.36,1) both` }}
            >
              <h2 className="text-2xl tracking-tight">{s.h}</h2>
              <ul className="mt-5 divide-y divide-[var(--border)]">
                {s.items.map((it) => (
                  <li key={it}>
                    <a href="#" className="flex items-center justify-between py-3 text-sm text-[var(--ink-soft)] transition-colors hover:text-[var(--noir)]">
                      {it}
                      <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m8.25 4.5l7.5 7.5l-7.5 7.5" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-[var(--border)] bg-[var(--noir)] p-8 text-[var(--powder)]">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--forsythia)]">// install</div>
          <pre className="mt-4 overflow-x-auto font-mono text-sm leading-relaxed">
{`curl -fsSL https://nocturne.dev/install.sh | sh
nocturne login
nocturne agents create etl-prime --source postgres --sink snowflake`}
          </pre>
          <div className="mt-6">
            <Link to="/" className="text-sm text-[var(--forsythia)] underline-offset-4 hover:underline">← Back home</Link>
          </div>
        </div>
      </section>
    </Shell>
  );
}
