import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiDownload,
  FiExternalLink,
  FiUser,
  FiPhone,
  FiMail,
} from "react-icons/fi";

const STATUS_OPTIONS = [
  "pending",
  "shortlisted_r1",
  "shortlisted_r2",
  "finaleist",
  "winner",
  "rejected",
];

const DetailModal = ({ submission, onClose, onUpdateStatus }) => {
  if (!submission) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-[var(--surface)] "
        >
          <div className="sticky top-0 z-10  bg-[var(--surface)] px-6 py-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl  font-bold text-[var(--text)]">
                {submission.solutionName}
              </h2>
              <div className="mt-1 flex flex-wrap items-center gap-2  text-[var(--muted)]">
                <span className="font-mono  text-white bg-black font-bold text-md  rounded bg-[var(--bg)] px-3 py-0.5">
                  {submission.teamId}
                </span>
                <span>•</span>
                <span className="uppercase text-sm tracking-wide">
                  {submission.theme}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="rounded-2xl p-2 text-white bg-red-600 hover:bg-red-700  transition"
              aria-label="Close modal"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 px-2 pb-6 pt-2">
            <div className="lg:col-span-2 space-y-2">
              <Card title="Organization Details">
                <InfoGrid
                  items={[
                    ["Category", submission.category],
                    ["Organization", submission.organizationName],
                    ["City", submission.city],
                    submission.institution && [
                      "Institution",
                      submission.institution,
                    ],
                    submission.department && [
                      "Department",
                      submission.department,
                    ],
                    submission.stage && ["Stage", submission.stage],
                  ]}
                />

                {submission.website && (
                  <a
                    href={submission.website}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--accent)] hover:underline"
                  >
                    Visit Website <FiExternalLink />
                  </a>
                )}
              </Card>
              <Card title={`Team Members (${submission.members.length})`}>
                <div className="grid sm:grid-cols-2 gap-2">
                  {submission.members.map((m, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border p-4 border-[var(--border)] bg-[var(--bg)]"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <FiUser
                          className={
                            m.isLeader
                              ? "text-[var(--accent)]"
                              : "text-[var(--muted)]"
                          }
                        />
                        <span className="font-semibold text-sm">{m.name}</span>
                        {m.isLeader && (
                          <span className="ml-auto text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-[var(--accent)] text-white">
                            Leader
                          </span>
                        )}
                      </div>

                      <div className="space-y-1 text-xs text-[var(--muted)]">
                        <div className="flex items-center gap-2">
                          <FiMail /> {m.email}
                        </div>
                        <div className="flex items-center gap-2">
                          <FiPhone /> {m.phone || "N/A"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card title="Problem & Solution Summary">
                <p className="text-sm leading-relaxed text-[var(--text)]">
                  {submission.shortDescription}
                </p>
              </Card>
            </div>

            <div className="space-y-2">
              <Card title="Update Status">
                <div className="space-y-1">
                  {STATUS_OPTIONS.map((status) => {
                    const active = submission.status === status;
                    return (
                      <button
                        key={status}
                        onClick={() =>
                          onUpdateStatus(
                            submission._id,
                            status,
                            submission.category
                          )
                        }
                        className={`w-full rounded  px-3 py-2 text-xs font-semibold border transition ${
                          active
                            ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                            : "bg-[var(--bg)] border-[var(--border)] text-[var(--text)] hover:bg-[var(--surface)]"
                        }`}
                      >
                        {status.replace("_", " ").toUpperCase()}
                      </button>
                    );
                  })}
                </div>
              </Card>

              <Card title="Submitted Document">
                {submission.idea_document ? (
                  <a
                    href={submission.idea_document.public_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3 hover:border-[var(--accent)] transition"
                  >
                    <div className="rounded bg-red-100 p-2 text-red-600">
                      <FiDownload />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-[var(--text)]">
                        {submission.idea_document.name || "Project PDF"}
                      </p>
                      <p className="text-xs text-[var(--muted)]">
                        View / Download
                      </p>
                    </div>
                  </a>
                ) : (
                  <p className="text-sm text-[var(--muted)]">
                    No document uploaded
                  </p>
                )}
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const Card = ({ title, children }) => (
  <section className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4">
    <h3 className="mb-3 text-xs font-bold uppercase tracking-wide text-[var(--muted)]">
      {title}
    </h3>
    {children}
  </section>
);

const InfoGrid = ({ items }) => (
  <div className="grid grid-cols-2 gap-4 text-sm">
    {items.filter(Boolean).map(([label, value]) => (
      <div key={label}>
        <span className="block text-xs text-[var(--muted)]">{label}</span>
        <span className="font-medium text-[var(--text)]">{value}</span>
      </div>
    ))}
  </div>
);

export default DetailModal;
