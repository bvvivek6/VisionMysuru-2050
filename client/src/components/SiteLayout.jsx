import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function SiteLayout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-dvh bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-24 left-1/2 h-80 w-xl -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-64 right-0 h-80 w-lg rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-md rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative">
        <Header />
        <main className="mx-auto w-full max-w-6xl px-4 py-10">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
