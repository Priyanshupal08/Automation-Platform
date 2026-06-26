import { Link } from "@tanstack/react-router";

export function Footer() {
  const cols = [
    { h: "Product", links: [
      { l: "Overview", to: "/product" },
      { l: "Features", to: "/#features" },
      { l: "Pricing", to: "/#pricing" },
      { l: "Docs", to: "/docs" },
    ]},
    { h: "Company", links: [
      { l: "About", to: "/product" },
      { l: "Customers", to: "/product" },
      { l: "Careers", to: "/product" },
      { l: "Press", to: "/product" },
    ]},
    { h: "Resources", links: [
      { l: "Docs", to: "/docs" },
      { l: "Changelog", to: "/docs" },
      { l: "Status", to: "/docs" },
      { l: "Security", to: "/docs" },
    ]},
  ];

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--mint)]/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 font-mono text-sm font-bold">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-[var(--noir)] text-[var(--forsythia)]">
              <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
                <path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z" />
              </svg>
            </span>
            nocturne<span className="text-[var(--saffron)]">.</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-[var(--ink-soft)]">
            Autonomous data infrastructure for teams who'd rather ship.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--ink-soft)]">{c.h}</div>
            <ul className="mt-4 space-y-2 text-sm">
              {c.links.map((l) => (
                <li key={l.l}>
                  <Link to={l.to} className="text-[var(--ink-soft)] transition-colors hover:text-[var(--noir)]">
                    {l.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-[var(--border)]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--ink-soft)]">
          <span>© 2026 Nocturne Labs</span>
          <span>Built with motion-first principles · &lt;500ms TTI</span>
        </div>
      </div>
    </footer>
  );
}
