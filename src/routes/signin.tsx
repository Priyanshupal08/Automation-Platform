import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/site/Shell";
import { useState } from "react";

export const Route = createFileRoute("/signin")({
  head: () => ({
    meta: [
      { title: "Sign in — Nocturne" },
      { name: "description", content: "Sign in to your Nocturne workspace and ship autonomous data pipelines in minutes." },
      { property: "og:title", content: "Sign in — Nocturne" },
      { property: "og:description", content: "Sign in to your Nocturne workspace." },
    ],
  }),
  component: SignInPage,
});

function SignInPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <Shell>
      <section className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center justify-center px-5 py-16">
        <div className="pointer-events-none absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
        <div className="relative w-full max-w-md anim-scale">
          <div className="rounded-[2rem] border border-[var(--border)] bg-white p-8 shadow-[0_40px_120px_-50px_rgba(17,76,90,0.45)]">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">// workspace access</div>
            <h1 className="mt-3 text-4xl tracking-[-0.02em]">
              Welcome <span className="font-display italic text-[var(--saffron)]">back</span>.
            </h1>
            <p className="mt-2 text-sm text-[var(--ink-soft)]">
              Sign in with a magic link. No passwords, no friction.
            </p>

            {sent ? (
              <div className="mt-8 rounded-2xl border border-[var(--forsythia)] bg-[var(--forsythia)]/10 p-4 text-sm">
                Check <strong>{email}</strong> for your magic link.
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); if (email) setSent(true); }}
                className="mt-8 space-y-4"
              >
                <label className="block">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--ink-soft)]">Email</span>
                  <input
                    type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@team.com"
                    className="mt-1 w-full rounded-xl border border-[var(--border)] bg-[var(--powder)] px-4 py-3 text-sm outline-none transition focus:border-[var(--noir)]"
                  />
                </label>
                <button className="magnet w-full rounded-xl bg-[var(--noir)] py-3 text-sm font-medium text-[var(--powder)] glow-saffron">
                  Send magic link →
                </button>
              </form>
            )}

            <div className="mt-6 text-center text-xs text-[var(--ink-soft)]">
              New here? <Link to="/product" className="underline">See what Nocturne does</Link>.
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
