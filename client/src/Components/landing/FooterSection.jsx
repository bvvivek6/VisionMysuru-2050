import { Link } from "react-router-dom";

const FooterSection = () => {
  const quickLinks = [
    { label: "About the Initiative", href: "#mysuru", kind: "anchor" },
    { label: "Objectives", href: "#objectives", kind: "anchor" },
    { label: "Participation", href: "#faqs", kind: "anchor" },
    { label: "Registration", href: "/submit", kind: "route" },
    { label: "Resources", href: "#faqs", kind: "anchor" },
    { label: "Rules & Regulations", href: "#faqs", kind: "anchor" },
    { label: "Submissions", href: "/submit", kind: "route" },
    { label: "Coordinators", href: "#faqs", kind: "anchor" },
    { label: "Contact Us", href: "#contact", kind: "anchor" },
  ];

  return (
    <footer
      id="contact"
      className="border-t border-[var(--border)] bg-[var(--surface)]"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="text-sm font-semibold text-[var(--text)]">
              About
            </div>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Mysuru Vision 2050 is a strategic city-level initiative aimed at
              sustainable development and technological advancement for Mysuru.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-[var(--text)]">
              Quick links
            </div>
            <div className="mt-2 space-y-1 text-sm">
              {quickLinks.map((item) =>
                item.kind === "route" ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block text-[var(--muted)] hover:text-[var(--accent)]"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-[var(--muted)] hover:text-[var(--accent)]"
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-[var(--text)]">
              Contact
            </div>
            <div className="mt-2 space-y-1 text-sm text-[var(--muted)]">
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

        <div className="mt-10 flex flex-col gap-2 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted-2)] sm:flex-row sm:items-center sm:justify-between">
          <div>© 2026 Mysuru Vision 2050. All rights reserved.</div>
          <div>Powered by SDMIMD | Government of Karnataka Initiative</div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
