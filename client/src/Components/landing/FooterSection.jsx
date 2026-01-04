import { Link } from "react-router-dom";

const FooterSection = () => {
  const quickLinks = [
    { label: "About the initiative", href: "#mysuru", kind: "anchor" },
    { label: "Core objectives", href: "#objectives", kind: "anchor" },
    { label: "Participation", href: "#participation", kind: "anchor" },
    { label: "Rules & regulations", href: "/rules", kind: "route" },
    { label: "Submission portal", href: "/submit", kind: "route" },
    { label: "Contact", href: "#contact", kind: "anchor" },
  ];

  return (
    <footer
      id="contact"
      className="border-t border-[var(--border)] bg-[var(--bg)]"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold tracking-tight text-[var(--text)]">
              Mysuru Vision 2050
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
              A city-scale strategic initiative focused on sustainable growth,
              evidence-based policy, and long-term urban resilience for Mysuru.
            </p>
          </div>

          <nav>
            <div className="text-sm font-semibold tracking-tight text-[var(--text)]">
              Navigation
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((item) =>
                item.kind === "route" ? (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="text-[var(--muted)] transition hover:text-[var(--accent)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ) : (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[var(--muted)] transition hover:text-[var(--accent)]"
                    >
                      {item.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div>
            <div className="text-sm font-semibold tracking-tight text-[var(--text)]">
              Contact
            </div>
            <div className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              <div>SDMIMD, Mysuru, Karnataka, India</div>
              <a
                href="mailto:vision2050@sdmimd.ac.in"
                className="block hover:text-[var(--accent)]"
              >
                vision2050@sdmimd.ac.in
              </a>
              <a
                href="tel:+918212425820"
                className="block hover:text-[var(--accent)]"
              >
                +91 821 2425 820
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted-2)] sm:flex-row sm:items-center sm:justify-between">
          <div>© 2026 Mysuru Vision 2050</div>
          <div>An initiative supported by SDMIMD · Government of Karnataka</div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
