import React, { useState } from "react";
import {
  Search,
  Download,
  Plus,
  Users,
  CheckSquare,
  AlertTriangle,
  Eye,
  Ban,
  Lock,
  Filter,
} from "lucide-react";

const mockMembers = [
  {
    id: "MEM-0842",
    initials: "AK",
    name: "Dr. Aris Thorne",
    email: "a.thorne@mjf-academic.edu",
    role: "Faculty",
    loans: "4 items",
    due: "Due Oct 24",
    fines: "$0.00",
    registered: "Sep 2021",
    expires: "Exp: Dec 2026",
    status: "Active",
  },
  {
    id: "MEM-0843",
    initials: "SL",
    name: "Selena Low",
    email: "s.low@student.mjf.edu",
    role: "Student",
    loans: "2 items",
    due: "Due Oct 16",
    fines: "$0.00",
    registered: "Aug 2023",
    expires: "Exp: Jun 2027",
    status: "Active",
  },
  {
    id: "MEM-0844",
    initials: "MC",
    name: "Marcus Chen",
    email: "marcus.chen@quantum-inst.org",
    role: "Researcher",
    loans: "3 items (Overdue)",
    due: "Was due Sep 28",
    fines: "$15.00",
    registered: "Jan 2022",
    expires: "Exp: Jan 2025",
    status: "Suspended",
  },
  {
    id: "MEM-0845",
    initials: "ED",
    name: "Elena Rostova",
    email: "e.rostova@student.mjf.edu",
    role: "Student",
    loans: "1 item",
    due: "Due Nov 02",
    fines: "$0.00",
    registered: "Sep 2023",
    expires: "Exp: Jun 2026",
    status: "Active",
  },
  {
    id: "MEM-0846",
    initials: "JP",
    name: "Prof. Julian Patel",
    email: "j.patel@mjf-academic.edu",
    role: "Faculty",
    loans: "0 items",
    due: "None checked out",
    fines: "$0.00",
    registered: "Feb 2019",
    expires: "Exp: Dec 2028",
    status: "Active",
  },
];

export default function Members() {
  const [searchTerm, setSearchTerm] = useState("");

  const getRoleColor = (role) => {
    switch (role) {
      case "Faculty":
        return "text-violet-700 bg-violet-50 border-violet-200";
      case "Student":
        return "text-sky-700 bg-sky-50 border-sky-200";
      case "Researcher":
        return "text-emerald-700 bg-emerald-50 border-emerald-200";
      default:
        return "text-ink-secondary bg-surface-muted border-border-default";
    }
  };

  return (
    <div className="min-h-screen bg-canvas p-6 md:p-10 text-ink-primary font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold tracking-[0.05em] uppercase text-accent-primary bg-glacial px-2 py-0.5 rounded-full">
              Patron Management
            </span>
            <span className="text-xs text-ink-muted font-medium">
              • Registry Index
            </span>
          </div>
          <h1 className="font-serif text-4xl font-medium text-ink-primary mb-2">
            Library Members
          </h1>
          <p className="text-sm text-ink-secondary max-w-2xl">
            Directory of registered students, faculty, and research patrons.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="h-10 px-4 bg-surface border border-border-default text-ink-secondary text-sm font-medium rounded flex items-center gap-2 hover:bg-surface-muted transition-colors">
            <Download size={16} />
            Export List
          </button>
          <button className="h-10 px-4 bg-accent-primary hover:bg-accent-secondary text-white text-sm font-semibold rounded flex items-center gap-2 transition-colors">
            <Plus size={16} />
            Add Member
          </button>
        </div>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-surface border border-border-default rounded-lg p-5 flex flex-col relative overflow-hidden">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[11px] font-bold tracking-widest uppercase text-ink-muted">
              Total Members
            </span>
            <Users size={16} className="text-accent-primary" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-medium font-serif">3,420</span>
          </div>
          <div className="text-xs text-emerald-600 font-medium mt-1">
            ~+84 this month • 99.2% account coverage
          </div>
        </div>

        <div className="bg-surface border border-border-default rounded-lg p-5 flex flex-col relative overflow-hidden">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[11px] font-bold tracking-widest uppercase text-ink-muted">
              Active Borrowers
            </span>
            <CheckSquare size={16} className="text-sky-600" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-medium font-serif">1,240</span>
          </div>
          <div className="text-xs text-ink-muted font-medium mt-1">
            36.2% currently holding items
          </div>
          <div className="absolute bottom-0 left-0 h-1 w-24 bg-sky-500" />
        </div>

        <div className="bg-surface border border-border-default rounded-lg p-5 flex flex-col relative overflow-hidden">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[11px] font-bold tracking-widest uppercase text-ink-muted">
              Overdue Accounts
            </span>
            <AlertTriangle size={16} className="text-rose-600" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-medium font-serif text-rose-600">
              28
            </span>
          </div>
          <div className="text-xs text-rose-600 font-medium mt-1">
            $142.50 aggregate fines • Requires follow-up
          </div>
          <div className="absolute bottom-0 left-0 h-1 w-12 bg-rose-500" />
        </div>
      </div>

      {/* Main Table Container */}
      <div className="bg-surface border border-border-default rounded-lg shadow-sm">
        {/* Table Toolbar */}
        <div className="p-4 border-b border-border-default flex flex-col md:flex-row justify-between items-center gap-4 bg-white/80 backdrop-blur-md rounded-t-lg">
          <div className="relative w-full md:w-[400px]">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-ink-muted">
              <Search size={16} />
            </div>
            <input
              type="text"
              placeholder="Search by Member Name or Member ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-10 pl-9 pr-4 bg-surface-muted border border-border-default rounded text-sm text-ink-primary placeholder-ink-muted focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-ink-muted">
                <Filter size={14} />
              </div>
              <select className="h-10 pl-8 pr-8 appearance-none bg-surface border border-border-default rounded text-sm text-ink-secondary focus:outline-none focus:border-accent-primary cursor-pointer">
                <option>All Roles</option>
                <option>Faculty</option>
                <option>Student</option>
                <option>Researcher</option>
              </select>
            </div>

            <div className="flex bg-surface-muted p-1 rounded border border-border-default">
              <button className="px-3 py-1 text-xs font-semibold rounded bg-accent-primary text-white shadow-sm">
                All
              </button>
              <button className="px-3 py-1 text-xs font-semibold rounded text-ink-secondary hover:text-ink-primary">
                Active
              </button>
              <button className="px-3 py-1 text-xs font-semibold rounded text-ink-secondary hover:text-ink-primary">
                Suspended
              </button>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface text-[11px] uppercase tracking-wider text-ink-muted border-b border-border-default">
                <th className="px-4 py-3 font-semibold">Member ID</th>
                <th className="px-4 py-3 font-semibold">Patron Info</th>
                <th className="px-4 py-3 font-semibold">Role</th>
                <th className="px-4 py-3 font-semibold">Active Loans</th>
                <th className="px-4 py-3 font-semibold">Fines / Dues</th>
                <th className="px-4 py-3 font-semibold">
                  Registered • Expires
                </th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {mockMembers.map((member, index) => (
                <tr
                  key={index}
                  className="border-b border-border-default hover:bg-slate-50 transition-colors group"
                >
                  <td className="px-4 py-3 align-middle font-mono text-xs text-accent-primary font-medium">
                    {member.id}
                  </td>
                  <td className="px-4 py-3 align-middle flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 border border-border-default flex items-center justify-center text-xs font-bold text-ink-secondary">
                      {member.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-ink-primary">
                        {member.name}
                      </div>
                      <div className="text-ink-muted text-xs mt-0.5">
                        {member.email}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${getRoleColor(member.role)}`}
                    >
                      {member.role}
                    </span>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <div
                      className={`font-medium ${member.loans.includes("Overdue") ? "text-rose-600" : "text-ink-primary"}`}
                    >
                      {member.loans}
                    </div>
                    <div
                      className={`text-xs mt-0.5 ${member.loans.includes("Overdue") ? "text-rose-500" : "text-ink-muted"}`}
                    >
                      {member.due}
                    </div>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <span
                      className={`font-mono font-medium ${member.fines !== "$0.00" ? "text-rose-600" : "text-ink-secondary"}`}
                    >
                      {member.fines}
                    </span>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <div className="text-ink-primary">{member.registered}</div>
                    <div className="text-ink-muted text-xs mt-0.5">
                      {member.expires}
                    </div>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${member.status === "Active" ? "bg-emerald-500" : "bg-rose-500"}`}
                      ></span>
                      <span
                        className={`text-xs font-semibold ${member.status === "Active" ? "text-emerald-700" : "text-rose-700"}`}
                      >
                        {member.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 align-middle text-center">
                    <div className="flex items-center justify-center gap-1">
                      <button className="p-1.5 text-ink-muted hover:text-accent-primary rounded transition-colors">
                        <Eye size={16} />
                      </button>
                      <button className="p-1.5 text-ink-muted hover:text-ink-primary rounded transition-colors">
                        <Ban size={16} />
                      </button>
                      {member.status === "Suspended" && (
                        <button className="p-1.5 text-rose-500 hover:text-rose-600 rounded transition-colors">
                          <Lock size={16} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
