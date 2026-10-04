import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Building,
  Info,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // REPLACE 'http://localhost:8000/api/login/' with your actual Django backend login URL
      const response = await fetch("http://localhost:8000/api/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store the authentication token (adjust 'data.token' based on your backend response)
        if (data.token || data.access) {
          localStorage.setItem("authToken", data.token || data.access);
        }
        // Navigate to the inventory page
        navigate("/inventory");
      } else {
        // Handle backend validation errors
        setError(
          data.detail || data.error || "Invalid credentials. Please try again.",
        );
      }
    } catch (err) {
      // Handle network errors (e.g., backend server is not running)
      setError("Network error. Unable to connect to the server.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-canvas relative overflow-hidden p-4">
      {/* Subtle radial background glow from the mockup */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glacial rounded-full blur-[120px] opacity-40 pointer-events-none"></div>

      {/* Login Card (Level 3 Elevation) */}
      <div className="w-full max-w-[420px] bg-surface rounded-lg shadow-level-3 border border-border-default relative z-10 p-8 sm:p-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-10 h-10 bg-glacial text-accent-primary rounded mb-4">
            <BookOpen size={20} />
          </div>
          <p className="text-accent-primary text-[11px] font-bold tracking-[0.05em] uppercase mb-1">
            Archival Core
          </p>
          <h1 className="font-serif text-3xl font-medium text-ink-primary mb-2">
            MJF Library Management
          </h1>
          <p className="text-sm text-ink-muted">
            Sign in to access catalog, member records, and administration
          </p>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center justify-between bg-surface-muted rounded px-3 py-2 border border-border-default mb-6 text-xs font-mono text-ink-secondary">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Terminal Node: North Wing Archive
          </div>
          <span className="bg-surface border border-border-default px-1.5 py-0.5 rounded text-[10px]">
            TLS 1.3
          </span>
        </div>

        {/* Error Message Display */}
        {error && (
          <div className="mb-6 p-3 bg-rose-50 border border-rose-200 rounded flex items-start gap-2 text-rose-700 text-sm">
            <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username Input */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-[13px] font-semibold text-ink-secondary">
                Staff ID / Academic Email
              </label>
              <span className="text-[10px] bg-glacial text-accent-primary px-1.5 py-0.5 rounded font-semibold tracking-wider">
                Verified Domain
              </span>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-ink-muted">
                <Mail size={16} />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g. librarian@mjf-library.org"
                className="w-full h-10 pl-9 pr-3 bg-surface border border-slate-300 rounded text-sm text-ink-primary placeholder-ink-muted focus:outline-none focus:border-accent-primary focus:ring-3 focus:ring-accent-primary/15 transition-all"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-[13px] font-semibold text-ink-secondary">
                Security Password
              </label>
              <button
                type="button"
                className="text-[12px] text-accent-secondary hover:text-accent-primary font-medium transition-colors"
              >
                Forgot password?
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-ink-muted">
                <Lock size={16} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full h-10 pl-9 pr-10 bg-surface border border-slate-300 rounded text-sm text-ink-primary placeholder-ink-muted focus:outline-none focus:border-accent-primary focus:ring-3 focus:ring-accent-primary/15 transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-ink-muted hover:text-ink-secondary transition-colors"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="appearance-none w-4 h-4 rounded-sm border-[1.5px] border-slate-400 bg-surface checked:bg-accent-primary checked:border-accent-primary transition-colors cursor-pointer peer"
                />
                <svg
                  className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="text-sm text-ink-secondary group-hover:text-ink-primary transition-colors">
                Remember on this workstation
              </span>
            </label>
            <Info size={14} className="text-ink-muted" />
          </div>

          {/* Primary Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full h-10 bg-accent-primary hover:bg-accent-secondary text-white text-sm font-semibold rounded flex items-center justify-center gap-2 transition-all focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 ${isLoading ? "opacity-80 cursor-not-allowed" : ""}`}
          >
            {isLoading ? "Authenticating..." : "Sign In to MJF Library"}
            {!isLoading && (
              <span className="text-lg leading-none mb-0.5">→</span>
            )}
          </button>
        </form>

        {/* Divider & SSO */}
        <div className="mt-8 pt-6 border-t border-border-default">
          <p className="text-[11px] font-bold tracking-[0.05em] uppercase text-ink-muted text-center mb-4">
            Institutional Gate
          </p>
          <button className="w-full h-10 bg-transparent border border-border-default hover:bg-canvas text-ink-secondary text-sm font-medium rounded flex items-center justify-center gap-2 transition-colors">
            <Building size={16} className="text-ink-muted" />
            Quick Sign-in with Institutional SSO
          </button>
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-center gap-1.5 text-xs text-ink-muted font-medium">
          <ShieldCheck size={14} />
          MJF Academic Archive v4.2 • Protected Access
        </div>
      </div>
    </div>
  );
}
