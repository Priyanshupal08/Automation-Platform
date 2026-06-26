import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[var(--powder)] text-[var(--noir)] antialiased">
      <Nav />
      {children}
      <Footer />
    </main>
  );
}
