import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Product", to: "/product" },
  { label: "Features", to: "/#features" },
  { label: "Pricing", to: "/#pricing" },
  { label: "Docs", to: "/docs" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--powder)]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Link
          to="/"
          className="group flex items-center gap-2 font-mono text-[15px] font-bold tracking-tight text-[var(--noir)]"
        >
          <span className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-md bg-[var(--noir)] text-[var(--forsythia)]">
            <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 transition-transform duration-500 group-hover:rotate-180">
              <path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z" />
            </svg>
          </span>
          nocturne<span className="text-[var(--saffron)]">.</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="ul-draw relative rounded-full px-3 py-1.5 text-sm text-[var(--ink-soft)] transition-colors hover:text-[var(--noir)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/signin"
            className="hidden h-9 items-center rounded-full px-4 text-sm font-medium text-[var(--ink-soft)] hover:bg-[var(--mint)] sm:inline-flex"
          >
            Sign in
          </Link>
          <Link
            to="/signin"
            className="magnet inline-flex h-9 items-center gap-1.5 rounded-full bg-[var(--noir)] px-4 text-sm font-medium text-[var(--powder)]"
          >
            Start free <span aria-hidden>→</span>
          </Link>
          <button
            aria-label="Open menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] bg-white text-[var(--noir)] md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden ${open ? "block" : "hidden"} border-t border-[var(--border)] bg-[var(--powder)]/95 backdrop-blur`}>
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
          {NAV.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-[var(--noir)] hover:bg-[var(--mint)]"
            >
              {l.label}
            </Link>
          ))}
          <Link to="/signin" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm text-[var(--noir)] hover:bg-[var(--mint)]">
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
}
