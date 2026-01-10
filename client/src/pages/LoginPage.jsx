import { useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FiLock, FiUser, FiKey } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const LoginPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    adminSecret: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isRegistering) {
        await api.post("/api/v1/admin/register", credentials);
        toast.success("Admin registered successfully! Please login.");
        setIsRegistering(false);
        setCredentials((prev) => ({ ...prev, adminSecret: "" }));
      } else {
        const { data } = await api.post("/api/v1/admin/login", {
          username: credentials.username,
          password: credentials.password,
        });
        localStorage.setItem("adminToken", data.token);
        localStorage.setItem("adminUser", data.username);
        toast.success("Welcome back!");
        navigate("/admin/secure/dashboard");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--bg)] px-4 text-[var(--text)]">
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8 "
      >
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[var(--accent)]">
            {isRegistering ? "Admin Registration" : "Admin Login"}
          </h1>
          <p className="mt-2 text-[var(--muted)]">
            {isRegistering
              ? "Create a new admin account"
              : "Enter your credentials to access the dashboard"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium">Username</label>
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-2)]" />
              <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] py-3 pl-10 pr-4 outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                placeholder="admin"
                required
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Password</label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-2)]" />
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] py-3 pl-10 pr-4 outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <AnimatePresence>
            {isRegistering && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium">
                    Admin Secret Key
                  </label>
                  <div className="relative">
                    <FiKey className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-2)]" />
                    <input
                      type="password"
                      name="adminSecret"
                      value={credentials.adminSecret}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] py-3 pl-10 pr-4 outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                      placeholder="Secret key provided by system owner"
                      required={isRegistering}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[var(--accent)] py-3 font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-70"
          >
            {loading
              ? "Processing..."
              : isRegistering
              ? "Register Admin"
              : "Sign In"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <p className="text-[var(--muted)]">
            {isRegistering
              ? "Already have an account?"
              : "Need to register a new admin?"}
            <button
              onClick={() => setIsRegistering(!isRegistering)}
              className="ml-2 font-medium text-[var(--accent)] hover:underline"
            >
              {isRegistering ? "Sign In" : "Register Here"}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
