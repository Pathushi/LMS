import React, { useState } from "react";
import {
  Search,
  Plus,
  Download,
  Eye,
  BookOpen,
  CheckCircle2,
  UserRound,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Filter,
} from "lucide-react";

// Mock data based on the provided inventory screenshot
const mockBooks = [
  {
    id: "BK-9042",
    acc: "ACC-104829",
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    category: "Computer Science",
    publisher: "O'Reilly Media",
    location: "Sebastopol, CA • 2020",
    pages: "614 pp.",
    price: "$49.99",
    source: "Central Purchase",
    status: "Available",
    remarks: "Excellent condition • Stack 3B",
  },
  {
    id: "BK-9043",
    acc: "ACC-104830",
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    category: "Literature",
    publisher: "Harper & Row",
    location: "New York, NY • 1970",
    pages: "417 pp.",
    price: "$18.50",
    source: "University Grant",
    status: "Borrowed",
    remarks: "Due Oct 12 • Mem: #MB-8201",
  },
  {
    id: "BK-9044",
    acc: "ACC-104831",
    title: "Principles of Neural Science",
    author: "Eric R. Kandel et al.",
    category: "Sciences",
    publisher: "McGraw-Hill Medical",
    location: "Chicago, IL • 2021",
    pages: "1,760 pp.",
    price: "$135.00",
    source: "Faculty Donation",
    status: "Available",
    remarks: "Reference Desk • Res. Only",
  },
  {
    id: "BK-9045",
    acc: "ACC-104832",
    title: "The Silk Roads: A New History",
    author: "Peter Frankopan",
    category: "History",
    publisher: "Bloomsbury Publishing",
    location: "London, UK • 2016",
    pages: "656 pp.",
    price: "$22.00",
    source: "Central Purchase",
    status: "Borrowed",
    remarks: "Due Nov 02 • Mem: #MB-4102",
  },
  {
    id: "BK-9046",
    acc: "ACC-104833",
    title: "The Story of Art: Pocket Edition",
    author: "E.H. Gombrich",
    category: "Arts",
    publisher: "Phaidon Press",
    location: "London, UK • 2018",
    pages: "1,048 pp.",
    price: "$39.95",
    source: "Central Purchase",
    status: "Available",
    remarks: "Special Collection • Glass Case A",
  },
];

export default function Inventory() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-canvas p-6 md:p-10 text-ink-primary font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold tracking-[0.05em] uppercase text-accent-primary bg-glacial px-2 py-0.5 rounded-full">
              Catalog Archive
            </span>
            <span className="text-xs text-ink-muted font-medium">
              • Real-time Index
            </span>
          </div>
          <h1 className="font-serif text-4xl font-medium text-ink-primary mb-2">
            Book Inventory
          </h1>
          <p className="text-sm text-ink-secondary max-w-2xl">
            Browse, search, and manage library catalog titles across physical
            stacks and archival collections.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="h-10 px-4 bg-surface border border-border-default text-ink-secondary text-sm font-medium rounded flex items-center gap-2 hover:bg-surface-muted transition-colors">
            <Download size={16} />
            Export CSV
          </button>
          <button className="h-10 px-4 bg-accent-primary hover:bg-accent-secondary text-white text-sm font-semibold rounded flex items-center gap-2 transition-colors">
            <Plus size={16} />
            Add New Book
          </button>
        </div>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {[
          {
            label: "Total Books",
            value: "24,850",
            sub: "+140 this mo",
            icon: BookOpen,
            color: "text-accent-primary",
            bg: "bg-glacial",
          },
          {
            label: "Available",
            value: "18,420",
            sub: "74.1% stack rate",
            icon: CheckCircle2,
            color: "text-emerald-600",
            bg: "bg-emerald-50",
          },
          {
            label: "Borrowed",
            value: "6,110",
            sub: "Active loans",
            icon: UserRound,
            color: "text-violet-600",
            bg: "bg-violet-50",
          },
          {
            label: "Maintenance",
            value: "320",
            sub: "Archiving & repair",
            icon: AlertCircle,
            color: "text-rose-600",
            bg: "bg-rose-50",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-surface border border-border-default rounded-lg p-5 flex flex-col relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-[11px] font-bold tracking-widest uppercase text-ink-muted">
                {stat.label}
              </span>
              <stat.icon size={16} className={stat.color} />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-medium font-serif">
                {stat.value}
              </span>
              <span className="text-xs text-ink-muted font-medium">
                {stat.sub}
              </span>
            </div>
            {/* Subtle bottom border accent indicator */}
            <div
              className={`absolute bottom-0 left-0 h-1 w-12 ${stat.bg.replace("bg-", "bg-").replace("50", "500")}`}
            />
          </div>
        ))}
      </div>

      {/* Main Table Container */}
      <div className="bg-surface border border-border-default rounded-lg shadow-sm">
        {/* Table Toolbar */}
        <div className="p-4 border-b border-border-default flex flex-col md:flex-row justify-between items-center gap-4 bg-white/80 backdrop-blur-md rounded-t-lg">
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-ink-muted">
              <Search size={16} />
            </div>
            <input
              type="text"
              placeholder="Search by Book ID, Author, Title, Category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-10 pl-9 pr-4 bg-surface-muted border border-border-default rounded text-sm text-ink-primary placeholder-ink-muted focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-ink-muted">
                <Filter size={14} />
              </div>
              <select className="h-10 pl-8 pr-8 appearance-none bg-surface border border-border-default rounded text-sm text-ink-secondary focus:outline-none focus:border-accent-primary cursor-pointer">
                <option>All Categories</option>
                <option>Computer Science</option>
                <option>Literature</option>
                <option>Sciences</option>
              </select>
            </div>

            <div className="flex bg-surface-muted p-1 rounded border border-border-default">
              <button className="px-3 py-1 text-xs font-semibold rounded bg-accent-primary text-white shadow-sm">
                All
              </button>
              <button className="px-3 py-1 text-xs font-semibold rounded text-ink-secondary hover:text-ink-primary">
                Available
              </button>
              <button className="px-3 py-1 text-xs font-semibold rounded text-ink-secondary hover:text-ink-primary">
                Borrowed
              </button>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface text-[11px] uppercase tracking-wider text-ink-muted border-b border-border-default">
                <th className="px-4 py-3 font-semibold w-28">Identifiers</th>
                <th className="px-4 py-3 font-semibold">Title & Author</th>
                <th className="px-4 py-3 font-semibold">Category</th>
                <th className="px-4 py-3 font-semibold">Publisher & Details</th>
                <th className="px-4 py-3 font-semibold">Pages / Price</th>
                <th className="px-4 py-3 font-semibold">Source</th>
                <th className="px-4 py-3 font-semibold">Status & Remarks</th>
                <th className="px-4 py-3 font-semibold text-center"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {mockBooks.map((book, index) => (
                <tr
                  key={index}
                  className="border-b border-border-default hover:bg-slate-50 transition-colors group"
                >
                  <td className="px-4 py-3 align-top">
                    <div className="font-mono text-xs text-accent-primary font-medium">
                      {book.id}
                    </div>
                    <div className="font-mono text-[11px] text-ink-muted mt-0.5">
                      {book.acc}
                    </div>
                  </td>
                  <td className="px-4 py-3 align-top max-w-xs">
                    <div className="font-semibold text-ink-primary truncate">
                      {book.title}
                    </div>
                    <div className="text-ink-secondary text-xs mt-0.5">
                      {book.author}
                    </div>
                  </td>
                  <td className="px-4 py-3 align-top">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-glacial text-accent-primary border border-accent-primary/20">
                      {book.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 align-top">
                    <div className="text-ink-primary">{book.publisher}</div>
                    <div className="text-ink-muted text-xs mt-0.5">
                      {book.location}
                    </div>
                  </td>
                  <td className="px-4 py-3 align-top">
                    <div className="text-ink-primary font-mono text-xs">
                      {book.pages}
                    </div>
                    <div className="text-ink-muted font-mono text-xs mt-0.5">
                      {book.price}
                    </div>
                  </td>
                  <td className="px-4 py-3 align-top">
                    <span className="text-[11px] bg-surface-muted text-ink-secondary px-2 py-1 rounded border border-border-default">
                      {book.source}
                    </span>
                  </td>
                  <td className="px-4 py-3 align-top">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${book.status === "Available" ? "bg-emerald-500" : "bg-amber-500"}`}
                      ></span>
                      <span
                        className={`text-xs font-semibold ${book.status === "Available" ? "text-emerald-700" : "text-amber-700"}`}
                      >
                        {book.status}
                      </span>
                    </div>
                    <div className="text-[11px] text-ink-muted line-clamp-1">
                      {book.remarks}
                    </div>
                  </td>
                  <td className="px-4 py-3 align-top text-center">
                    <button className="p-1.5 text-ink-muted hover:text-accent-primary hover:bg-glacial rounded transition-colors">
                      <Eye size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-4 border-t border-border-default flex items-center justify-between text-sm text-ink-secondary bg-surface">
          <div>
            Showing <span className="font-semibold text-ink-primary">1</span> to{" "}
            <span className="font-semibold text-ink-primary">5</span> of{" "}
            <span className="font-semibold text-ink-primary">24,850</span> books
          </div>
          <div className="flex items-center gap-1">
            <button
              className="px-3 py-1.5 border border-border-default rounded text-ink-muted hover:bg-surface-muted transition-colors flex items-center gap-1 disabled:opacity-50"
              disabled
            >
              <ChevronLeft size={14} /> Previous
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-accent-primary text-white font-semibold">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-muted">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-muted">
              3
            </button>
            <span className="px-1 text-ink-muted">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-muted">
              2485
            </button>
            <button className="px-3 py-1.5 border border-border-default rounded hover:bg-surface-muted transition-colors flex items-center gap-1">
              Next <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
