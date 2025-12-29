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
    <div className="min-h-dvh dm-sans tracking-tight bg-[#00060d] text-slate-100">
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
