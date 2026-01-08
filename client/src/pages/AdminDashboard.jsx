import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FiLogOut, FiSearch, FiFilter, FiRefreshCw } from "react-icons/fi";
import Stats from "../dashboard/Stats";
import SubmissionTable from "../dashboard/SubmissionTable";
import DetailModal from "../dashboard/DetailModal";
import { CATEGORY, TOPIC_OPTIONS } from "../constants/content";

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: "All",
    theme: "All",
    status: "All",
  });
  const [updating, setUpdating] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const navigate = useNavigate();

  // Fetch data
  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        navigate("/admin/login");
        return;
      }

      const { data } = await axios.get("/api/v1/admin/submissions", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSubmissions(data);
    } catch (error) {
      console.error(error);
      if (error.response?.status === 401) {
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
      } else {
        toast.error("Failed to load submissions");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    navigate("/admin/login");
  };

  // Update status
  const updateStatus = async (id, status, category) => {
    try {
      const token = localStorage.getItem("adminToken");
      setUpdating(true);
      await axios.patch(
        `/api/v1/admin/submissions/${id}/status`,
        { status, category },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setSubmissions((prev) =>
        prev.map((sub) => (sub._id === id ? { ...sub, status } : sub))
      );

      // Update selected submission if open
      if (selectedSubmission?._id === id) {
        setSelectedSubmission((prev) => ({ ...prev, status }));
      }

      toast.success(`Status updated to ${status}`);
      setUpdating(false);
    } catch (error) {
      toast.error("Failed to update status", error.message);
    }
  };

  const filteredData = useMemo(() => {
    return submissions.filter((sub) => {
      const matchesCategory =
        filters.category === "All" || sub.category === filters.category;
      const matchesTheme =
        filters.theme === "All" || sub.theme === filters.theme;
      const matchesStatus =
        filters.status === "All" || sub.status === filters.status;

      return matchesCategory && matchesTheme && matchesStatus;
    });
  }, [submissions, filters]);

  if (loading)
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--bg)]">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[var(--accent)] border-t-transparent"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] dm-sans">
      <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-xl font-bold text-[var(--text)]">
              Admin Dashboard
            </h1>
            <p className="text-xs text-[var(--muted)]">
              Overview of all submissions
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-2 text-sm font-semibold text-white hover:bg-red-100 dark:bg-red-800 "
            >
              <FiLogOut /> Logout
            </button>
          </div>
        </div>
      </header>

      <main className=" px-4 py-8 sm:px-6 lg:px-8 max-w-8xl mx-auto space-y-4">
        <Stats submissions={submissions} />
        <section className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <FiFilter className="text-[var(--muted)]" />

            <select
              value={filters.category}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, category: e.target.value }))
              }
              className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm outline-none focus:border-[var(--accent)]"
            >
              <option value="All">All Categories</option>
              <option value="students">Students</option>
              <option value="corporates">Corporates</option>
              <option value="ngos">NGOs</option>
            </select>

            <select
              value={filters.theme}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, theme: e.target.value }))
              }
              className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm outline-none focus:border-[var(--accent)]"
            >
              <option value="All">All Themes</option>
              {TOPIC_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>

            <select
              value={filters.status}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, status: e.target.value }))
              }
              className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm outline-none focus:border-[var(--accent)]"
            >
              <option value="All">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="shortlisted_r1">Shortlisted R1</option>
              <option value="shortlisted_r2">Shortlisted R2</option>
              <option value="finaleist">Finalist</option>
              <option value="winner">Winner</option>
              <option value="rejected">Rejected</option>
            </select>
            <div className=" border border-[var(--border)] bg-amber-200 px-4 py-1 rounded-xl">
              <p>
                Count:{" "}
                <span className="font-bold text-sm ">
                  {filteredData.length}
                </span>
              </p>
            </div>
          </div>
        </section>

        <SubmissionTable
          submissions={filteredData}
          onView={setSelectedSubmission}
        />
      </main>

      {selectedSubmission && (
        <DetailModal
          submission={selectedSubmission}
          onClose={() => setSelectedSubmission(null)}
          onUpdateStatus={updateStatus}
          updating={updating}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
