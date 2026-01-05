import React from "react";
import { CORE_OBJECTIVES } from "../../constants/content.js";

const ObjectivesSection = () => {
  return (
    <section id="objectives" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 mt-15">
        <img
          src="/Mysore_District_2020.png"
          alt="Mysuru District Map"
          className="w-full h-full object-cover opacity-44"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-transparent to-[var(--bg)]"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold tracking-wide text-[var(--accent)] uppercase">
            Core Objectives
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            What Mysuru Vision 2050 is designed to achieve
          </h2>
        </div>

        <div className="grid gap-2 md:grid-cols-2">
          {CORE_OBJECTIVES.map((item, idx) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl 
                bg-white/30 backdrop-blur-md border border-[var(--border)]
                p-6"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold uppercase text-[var(--text)] group-hover:text-[var(--accent)] transition-colors pr-4">
                      {item.title}
                    </h3>
                    <span className="text-6xl font-semibold oswald text-[var(--accent)]/10 group-hover:text-[var(--accent)]/20 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <p className="text-[var(--muted)] leading-tight mb-4 text-base">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border)]">
                  <p className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider mb-2">
                    Outcome
                  </p>
                  <p className="text-sm font-medium leading-tight text-[var(--text)]">
                    {item.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
