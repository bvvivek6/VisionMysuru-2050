import React from "react";

const StatCard = ({ title, count, color }) => (
  <div className={`rounded-xl border-2 ${color} bg-[var(--surface)] p-6`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-[var(--muted)]">{title}</p>
        <p className="mt-2 text-3xl font-bold text-[var(--text)]">{count}</p>
      </div>
    </div>
  </div>
);

const Stats = ({ submissions }) => {
  const total = submissions.length;
  const byCategory = submissions.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Submissions"
        count={total}
        color="border-blue-500"
      />
      <StatCard
        title="Students"
        count={byCategory["students"] || 0}
        color="border-purple-500"
      />
      <StatCard
        title="Startups"
        count={byCategory["startups"] || 0}
        color="border-emerald-500"
      />
      <StatCard
        title="NGOs"
        count={byCategory["ngos"] || 0}
        color="border-orange-500"
      />
    </div>
  );
};

export default Stats;
