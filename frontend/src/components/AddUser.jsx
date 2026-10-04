import React, { useState } from "react";
import {
  UserPlus,
  Shield,
  Settings,
  Mail,
  Lock,
  Key,
  Info,
  History,
  CheckCircle2,
  Clock,
  Building,
  User,
  BookOpen,
} from "lucide-react";

export default function AddUser() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userId: "# MJF-09246",
    password: "",
    role: "Librarian",
    department: "Central Library - Main Stacks",
    workstation: "Desk Terminals - Primary Entrance",
    status: "Active",
    notes: "",
    sendEmail: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to Django backend user creation endpoint
    console.log("Creating user account:", formData);
  };

  return (
    <div className="min-h-screen bg-canvas p-6 md:p-10 text-ink-primary font-sans">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-ink-muted font-medium">
            Admin &gt; Users &gt;
          </span>
          <span className="text-xs text-accent-primary font-bold">
            New User
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="font-serif text-3xl font-medium text-ink-primary mb-2">
              Admin: Add New User
            </h1>
            <p className="text-sm text-ink-secondary max-w-2xl">
              Provision access credentials and assign system roles for staff,
              librarians, and patrons across the MJF network.
            </p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-surface border border-border-default rounded-full text-xs font-medium text-ink-secondary">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            LDAP Directory Sync: Active
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Left Column (Main Form - Span 2) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Section 1: Account Information */}
          <div className="bg-surface border border-border-default rounded-lg p-6 md:p-8">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border-default">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-glacial text-accent-primary rounded">
                  <User size={20} />
                </div>
                <div>
                  <h2 className="font-serif text-lg font-medium text-ink-primary">
                    1. Account Information
                  </h2>
                  <p className="text-xs text-ink-muted">
                    Core identity details and access credentials
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-accent-primary bg-glacial px-2 py-1 rounded">
                SEC // IDENTITY
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div className="space-y-1.5">
                <label className="text-[13px] font-semibold text-ink-secondary">
                  First Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Arthur"
                  className="w-full h-10 px-3 bg-surface border border-slate-300 rounded text-sm focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 outline-none"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[13px] font-semibold text-ink-secondary">
                  Last Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Pendelton"
                  className="w-full h-10 px-3 bg-surface border border-slate-300 rounded text-sm focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 outline-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5 mb-5">
              <label className="text-[13px] font-semibold text-ink-secondary">
                Email Address *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-ink-muted">
                  <Mail size={16} />
                </div>
                <input
                  type="email"
                  placeholder="patron.staff@mjf-library.org"
                  className="w-full h-10 pl-9 pr-3 bg-surface border border-slate-300 rounded text-sm focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 outline-none"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-[13px] font-semibold text-ink-secondary">
                    User / Staff / Student ID *
                  </label>
                  <button
                    type="button"
                    className="text-[11px] text-accent-primary font-medium hover:underline flex items-center gap-1"
                  >
                    <History size={12} /> Auto-generate
                  </button>
                </div>
                <input
                  type="text"
                  value={formData.userId}
                  onChange={(e) =>
                    setFormData({ ...formData, userId: e.target.value })
                  }
                  className="w-full h-10 px-3 bg-surface-muted border border-border-default rounded text-sm font-mono text-ink-secondary outline-none"
                  readOnly
                />
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-[13px] font-semibold text-ink-secondary">
                    Temporary Password *
                  </label>
                  <button
                    type="button"
                    className="text-[11px] text-accent-primary font-medium hover:underline flex items-center gap-1"
                  >
                    <Key size={12} /> Generate Secure
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-ink-muted">
                    <Lock size={16} />
                  </div>
                  <input
                    type="password"
                    placeholder="••••••••••••"
                    className="w-full h-10 pl-9 pr-3 bg-surface border border-slate-300 rounded text-sm focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 outline-none"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Role & System Privileges */}
          <div className="bg-surface border border-border-default rounded-lg p-6 md:p-8">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border-default">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-glacial text-accent-primary rounded">
                  <Shield size={20} />
                </div>
                <div>
                  <h2 className="font-serif text-lg font-medium text-ink-primary">
                    2. Role & System Privileges
                  </h2>
                  <p className="text-xs text-ink-muted">
                    Define authority hierarchy and organizational unit
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-accent-primary bg-glacial px-2 py-1 rounded">
                PRIVILEGES
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  name: "Librarian",
                  sub: "Standard Curatorial",
                  desc: "Full access to inventory metadata, item acquisitions, member checkout desks, and catalog indexing.",
                  icon: BookOpen,
                },
                {
                  name: "Desk Assistant / Staff",
                  sub: "Circulation Desk",
                  desc: "Day-to-day circulation operations, patron returns, card issuance, and fine collections.",
                  icon: UserPlus,
                },
                {
                  name: "Administrator",
                  sub: "Superuser Access",
                  desc: "Global system privileges, security parameters, system configurations, and user creation.",
                  icon: Shield,
                },
                {
                  name: "Member / Patron",
                  sub: "Cardholder",
                  desc: "Self-service OPAC catalog search, digital asset reservations, and personal hold tracking.",
                  icon: User,
                },
              ].map((role, idx) => (
                <div
                  key={idx}
                  onClick={() => setFormData({ ...formData, role: role.name })}
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${formData.role === role.name ? "border-accent-primary bg-glacial/30" : "border-border-default hover:border-slate-300"}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className={`p-1.5 rounded ${formData.role === role.name ? "bg-accent-primary text-white" : "bg-surface-muted text-ink-muted"}`}
                      >
                        <role.icon size={16} />
                      </div>
                      <div>
                        <div className="text-[13px] font-bold text-ink-primary">
                          {role.name}
                        </div>
                        <div className="text-[11px] text-ink-secondary">
                          {role.sub}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${formData.role === role.name ? "border-accent-primary" : "border-slate-300"}`}
                    >
                      {formData.role === role.name && (
                        <div className="w-2 h-2 rounded-full bg-accent-primary"></div>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-ink-muted leading-relaxed mt-3">
                    {role.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[13px] font-semibold text-ink-secondary">
                  Assigned Department / Branch
                </label>
                <select className="w-full h-10 px-3 bg-surface border border-slate-300 rounded text-sm text-ink-primary outline-none focus:border-accent-primary">
                  <option>Central Library — Main Stack</option>
                  <option>North Wing Archive</option>
                  <option>Science & Technology Branch</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[13px] font-semibold text-ink-secondary">
                  Workstation Group
                </label>
                <select className="w-full h-10 px-3 bg-surface border border-slate-300 rounded text-sm text-ink-primary outline-none focus:border-accent-primary">
                  <option>Desk Terminals - Primary Entrance</option>
                  <option>Backoffice Processing</option>
                  <option>Any Workstation</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 3: Access Preferences & Notes */}
          <div className="bg-surface border border-border-default rounded-lg p-6 md:p-8">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border-default">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-glacial text-accent-primary rounded">
                  <Settings size={20} />
                </div>
                <div>
                  <h2 className="font-serif text-lg font-medium text-ink-primary">
                    3. Access Preferences & Notes
                  </h2>
                  <p className="text-xs text-ink-muted">
                    Lifecycle status and communication dispatch
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-accent-primary bg-glacial px-2 py-1 rounded">
                SETTINGS
              </span>
            </div>

            <div className="space-y-1.5 mb-6">
              <label className="text-[13px] font-semibold text-ink-secondary block mb-2">
                Account Lifecycle Status
              </label>
              <div className="flex gap-4">
                <label
                  className={`flex-1 flex items-center justify-center gap-2 h-10 border rounded cursor-pointer transition-colors ${formData.status === "Active" ? "border-accent-primary bg-glacial/30 text-accent-primary font-medium" : "border-border-default text-ink-secondary"}`}
                >
                  <input
                    type="radio"
                    name="status"
                    className="hidden"
                    checked={formData.status === "Active"}
                    onChange={() =>
                      setFormData({ ...formData, status: "Active" })
                    }
                  />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>{" "}
                  Active & Ready
                </label>
                <label
                  className={`flex-1 flex items-center justify-center gap-2 h-10 border rounded cursor-pointer transition-colors ${formData.status === "Suspended" ? "border-accent-primary bg-glacial/30 text-accent-primary font-medium" : "border-border-default text-ink-secondary"}`}
                >
                  <input
                    type="radio"
                    name="status"
                    className="hidden"
                    checked={formData.status === "Suspended"}
                    onChange={() =>
                      setFormData({ ...formData, status: "Suspended" })
                    }
                  />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>{" "}
                  On Leave / Suspended
                </label>
              </div>
            </div>

            <div className="space-y-1.5 mb-6">
              <label className="text-[13px] font-semibold text-ink-secondary">
                Remarks & Staff Provisioning Notes (Optional)
              </label>
              <textarea
                rows="3"
                placeholder="Enter special authorization codes, supervisor sign-off references, or hardware assignments..."
                className="w-full p-3 bg-surface border border-slate-300 rounded text-sm text-ink-primary placeholder-ink-muted focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 outline-none resize-none"
              ></textarea>
            </div>

            <div className="flex items-start gap-3 p-4 bg-surface-muted rounded border border-border-default">
              <input
                type="checkbox"
                id="sendEmail"
                checked={formData.sendEmail}
                onChange={(e) =>
                  setFormData({ ...formData, sendEmail: e.target.checked })
                }
                className="mt-0.5 appearance-none w-4 h-4 rounded-sm border-[1.5px] border-slate-400 bg-surface checked:bg-accent-primary checked:border-accent-primary transition-colors cursor-pointer"
              />
              <div>
                <label
                  htmlFor="sendEmail"
                  className="text-sm font-semibold text-ink-primary block cursor-pointer"
                >
                  Send automated onboarding welcome email
                </label>
                <p className="text-xs text-ink-muted mt-1">
                  Includes temporary passkey, catalog portal guide, and
                  self-reset link. Expires in 48 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Form Actions Footer */}
          <div className="flex items-center justify-between py-6 border-t border-border-default">
            <div className="flex items-center gap-2 text-xs text-ink-muted">
              <Shield size={14} />
              Role changes are logged to MJF Security Audits
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                className="h-10 px-6 bg-transparent border border-border-default hover:bg-surface text-ink-secondary text-sm font-medium rounded transition-colors"
              >
                Cancel / Reset
              </button>
              <button
                type="submit"
                className="h-10 px-6 bg-accent-primary hover:bg-accent-secondary text-white text-sm font-semibold rounded flex items-center gap-2 transition-all"
              >
                <UserPlus size={16} />
                Create User Account
              </button>
            </div>
          </div>
        </div>

        {/* Right Column (Sidebar Summary - Span 1) */}
        <div className="lg:col-span-1 space-y-6">
          {/* Recent Actions */}
          <div className="bg-surface border border-border-default rounded-lg p-5">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-accent-primary" />
                <h3 className="text-sm font-semibold text-ink-primary">
                  Recent Admin Actions
                </h3>
              </div>
              <span className="text-xs font-semibold text-accent-primary bg-glacial px-2 py-0.5 rounded">
                3 Added Today
              </span>
            </div>
            <p className="text-xs text-ink-muted mb-4 pb-4 border-b border-border-default">
              Recently provisioned accounts within your management partition.
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-surface-muted border border-border-default flex items-center justify-center text-xs font-bold text-ink-secondary">
                    EV
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink-primary">
                      Eleanor Vance
                    </div>
                    <div className="text-[11px] text-ink-muted flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-accent-primary"></span>{" "}
                      Librarian • Science Wing
                    </div>
                  </div>
                </div>
                <div className="text-[10px] text-ink-muted">14m ago</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-surface-muted border border-border-default flex items-center justify-center text-xs font-bold text-ink-secondary">
                    MT
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink-primary">
                      Marcus Thorne
                    </div>
                    <div className="text-[11px] text-ink-muted flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-accent-primary"></span>{" "}
                      Desk Staff • Central Main
                    </div>
                  </div>
                </div>
                <div className="text-[10px] text-ink-muted">2h ago</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-surface-muted border border-border-default flex items-center justify-center text-xs font-bold text-ink-secondary">
                    CL
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink-primary">
                      Clara Lindqvist
                    </div>
                    <div className="text-[11px] text-ink-muted flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-accent-primary"></span>{" "}
                      Patron • Humanities
                    </div>
                  </div>
                </div>
                <div className="text-[10px] text-ink-muted">4h ago</div>
              </div>
            </div>
            <button
              type="button"
              className="w-full mt-5 py-2 text-xs font-semibold text-ink-secondary border border-border-default rounded hover:bg-surface-muted transition-colors"
            >
              View All User Logs
            </button>
          </div>

          {/* Policy & Reference */}
          <div className="bg-surface border border-border-default rounded-lg p-5">
            <h3 className="text-sm font-semibold text-ink-primary flex items-center gap-2 mb-4">
              <Shield size={16} className="text-ink-muted" />
              Policy & Role Reference
            </h3>

            <div className="mb-5 pb-5 border-b border-border-default">
              <h4 className="text-[12px] font-bold text-ink-primary flex items-center gap-1.5 mb-1.5">
                <Key size={14} className="text-accent-primary" /> Password
                Entropy
              </h4>
              <p className="text-xs text-ink-muted leading-relaxed">
                Passwords must be minimum 12 characters, including 1 symbol and
                uppercase character. Temporary passwords expire after 48h.
              </p>
            </div>

            <div>
              <h4 className="text-[12px] font-bold text-ink-primary flex items-center gap-1.5 mb-1.5">
                <CheckCircle2 size={14} className="text-accent-primary" /> Admin
                Authorization
              </h4>
              <p className="text-xs text-ink-muted leading-relaxed">
                Creating superuser administrators requires dual approval from
                the Chief Curator before elevated privileges are enacted.
              </p>
            </div>
          </div>

          {/* Campus Branch Station */}
          <div className="bg-surface border border-border-default rounded-lg p-5">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-[12px] font-bold text-ink-primary">
                Campus Branch Station
              </h3>
              <span className="text-[9px] font-bold tracking-widest uppercase text-accent-primary bg-glacial px-1.5 py-0.5 rounded">
                LOC // 01
              </span>
            </div>
            <div className="w-full h-32 bg-slate-200 rounded mb-3 flex items-center justify-center text-ink-muted overflow-hidden">
              {/* Placeholder for the location image shown in the mockup */}
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-xs text-ink-secondary flex items-center gap-1.5">
                <Building size={14} /> St. Jude Central Wing Terminal
              </div>
              <span className="text-[10px] font-mono text-ink-muted">
                STATION-4
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
