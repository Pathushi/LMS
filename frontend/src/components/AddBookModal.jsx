import React, { useState } from "react";
import { X, Book, Hash } from "lucide-react";

export default function AddBookModal({ isOpen, onClose, onAdd }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "Computer Science",
    publisher: "",
    year: "",
    pages: "",
    price: "",
    source: "Central Purchase",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to Django POST endpoint for creating a book
    console.log("Adding book:", formData);
    onAdd(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink-primary/20 backdrop-blur-sm p-4">
      {/* Modal Container - Level 3 Elevation */}
      <div className="bg-surface w-full max-w-2xl rounded-lg shadow-level-3 border border-border-default overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-border-default flex justify-between items-center bg-canvas">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-glacial text-accent-primary flex items-center justify-center">
              <Book size={18} />
            </div>
            <div>
              <h2 className="font-serif text-lg font-medium text-ink-primary">
                Add New Book
              </h2>
              <p className="text-xs text-ink-muted">
                Enter bibliographic and acquisition details
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-ink-muted hover:text-ink-primary transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1.5 md:col-span-2">
              <label className="text-[13px] font-semibold text-ink-secondary">
                Book Title
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full h-10 px-3 bg-surface border border-slate-300 rounded text-sm text-ink-primary focus:outline-none focus:border-accent-primary focus:ring-3 focus:ring-accent-primary/15"
                placeholder="e.g. Designing Data-Intensive Applications"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[13px] font-semibold text-ink-secondary">
                Author(s)
              </label>
              <input
                type="text"
                required
                value={formData.author}
                onChange={(e) =>
                  setFormData({ ...formData, author: e.target.value })
                }
                className="w-full h-10 px-3 bg-surface border border-slate-300 rounded text-sm text-ink-primary focus:outline-none focus:border-accent-primary focus:ring-3 focus:ring-accent-primary/15"
                placeholder="e.g. Martin Kleppmann"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[13px] font-semibold text-ink-secondary">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full h-10 px-3 bg-surface border border-slate-300 rounded text-sm text-ink-primary focus:outline-none focus:border-accent-primary focus:ring-3 focus:ring-accent-primary/15"
              >
                <option>Computer Science</option>
                <option>Literature</option>
                <option>Sciences</option>
                <option>History</option>
                <option>Arts</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[13px] font-semibold text-ink-secondary">
                Publisher
              </label>
              <input
                type="text"
                required
                value={formData.publisher}
                onChange={(e) =>
                  setFormData({ ...formData, publisher: e.target.value })
                }
                className="w-full h-10 px-3 bg-surface border border-slate-300 rounded text-sm text-ink-primary focus:outline-none focus:border-accent-primary focus:ring-3 focus:ring-accent-primary/15"
                placeholder="e.g. O'Reilly Media"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[13px] font-semibold text-ink-secondary">
                Publication Year
              </label>
              <input
                type="number"
                required
                value={formData.year}
                onChange={(e) =>
                  setFormData({ ...formData, year: e.target.value })
                }
                className="w-full h-10 px-3 bg-surface border border-slate-300 rounded text-sm text-ink-primary focus:outline-none focus:border-accent-primary focus:ring-3 focus:ring-accent-primary/15"
                placeholder="e.g. 2020"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[13px] font-semibold text-ink-secondary">
                  Pages
                </label>
                <input
                  type="number"
                  required
                  value={formData.pages}
                  onChange={(e) =>
                    setFormData({ ...formData, pages: e.target.value })
                  }
                  className="w-full h-10 px-3 bg-surface border border-slate-300 rounded text-sm text-ink-primary focus:outline-none focus:border-accent-primary focus:ring-3 focus:ring-accent-primary/15"
                  placeholder="e.g. 614"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[13px] font-semibold text-ink-secondary">
                  Price ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  className="w-full h-10 px-3 bg-surface border border-slate-300 rounded text-sm text-ink-primary focus:outline-none focus:border-accent-primary focus:ring-3 focus:ring-accent-primary/15"
                  placeholder="e.g. 49.99"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[13px] font-semibold text-ink-secondary">
                Acquisition Source
              </label>
              <select
                value={formData.source}
                onChange={(e) =>
                  setFormData({ ...formData, source: e.target.value })
                }
                className="w-full h-10 px-3 bg-surface border border-slate-300 rounded text-sm text-ink-primary focus:outline-none focus:border-accent-primary focus:ring-3 focus:ring-accent-primary/15"
              >
                <option>Central Purchase</option>
                <option>University Grant</option>
                <option>Faculty Donation</option>
                <option>Alumni Donation</option>
              </select>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-5 border-t border-border-default flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="h-10 px-4 bg-transparent border border-border-default hover:bg-canvas text-ink-secondary text-sm font-medium rounded transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="h-10 px-6 bg-accent-primary hover:bg-accent-secondary text-white text-sm font-semibold rounded flex items-center gap-2 transition-all"
            >
              <Book size={16} />
              Catalog Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
