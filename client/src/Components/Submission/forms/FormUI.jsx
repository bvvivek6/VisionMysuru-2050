import React from "react";

export const Field = ({ label, hint, required, children }) => (
  <label className="block">
    <div className="flex items-baseline justify-between gap-3">
      <span className="text-sm font-semibold text-[var(--text)]">
        {label} {required && <span className="text-[var(--accent)]">*</span>}
      </span>
      {hint && <span className="text-xs text-[var(--muted-2)]">{hint}</span>}
    </div>
    <div className="mt-2">{children}</div>
  </label>
);

export const TextInput = (props) => (
  <input
    {...props}
    className={`w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--muted-2)] focus:border-[var(--accent)] focus:outline-none focus:ring-4 focus:ring-[var(--focus)] ${
      props.className ?? ""
    }`}
  />
);

export const TextArea = (props) => (
  <textarea
    {...props}
    className={`min-h-30 w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--muted-2)] focus:border-[var(--accent)] focus:outline-none focus:ring-4 focus:ring-[var(--focus)] ${
      props.className ?? ""
    }`}
  />
);

export const Select = (props) => (
  <select
    {...props}
    className={`w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm text-[var(--text)] focus:border-[var(--accent)] focus:outline-none focus:ring-4 focus:ring-[var(--focus)] ${
      props.className ?? ""
    }`}
  />
);
