import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Bug, 
  FileSpreadsheet, 
  Layers, 
  AlertCircle, 
  ExternalLink,
  ShieldCheck,
  Calendar,
  Terminal,
  Copy,
  Check
} from 'lucide-react';

export const TestCaseModal = ({ isOpen, onClose, initialTab = 'testcase' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl border border-cyan-500/40 shadow-2xl bg-[#0a0f1d] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <FileSpreadsheet className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest block">
              QA Documentation Sample Artifact
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Banking Web App — Test Case & Bug Report Showcase
            </h3>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-3">
          <button
            onClick={() => setActiveTab('testcase')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'testcase'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Structured Test Case (TC-BNK-024)</span>
          </button>

          <button
            onClick={() => setActiveTab('bug')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'bug'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Bug className="w-4 h-4 text-rose-400" />
            <span>Defect Report (BUG-BNK-009)</span>
          </button>

          <button
            onClick={() => setActiveTab('jira')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'jira'
                ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Layers className="w-4 h-4 text-blue-400" />
            <span>Jira / Zephyr Workflow Trace</span>
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'testcase' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs">
              <div>
                <span className="text-slate-400 block font-mono">Test ID</span>
                <span className="font-bold text-white font-mono mt-0.5 block">TC-BNK-024</span>
              </div>
              <div>
                <span className="text-slate-400 block font-mono">Test Type</span>
                <span className="font-semibold text-cyan-300 mt-0.5 block">Negative Functional</span>
              </div>
              <div>
                <span className="text-slate-400 block font-mono">Priority / Severity</span>
                <span className="font-semibold text-amber-400 mt-0.5 block">High / P1</span>
              </div>
              <div>
                <span className="text-slate-400 block font-mono">Execution Status</span>
                <span className="font-bold text-emerald-400 font-mono mt-0.5 inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> PASSED
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs uppercase font-semibold text-slate-300 tracking-wider">
                Title & Purpose
              </h4>
              <p className="text-sm font-semibold text-white bg-slate-900 p-3 rounded-lg border border-slate-800">
                Verify fund transfer validation when transfer amount exceeds account available balance.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs uppercase font-semibold text-slate-300 tracking-wider">
                Preconditions
              </h4>
              <p className="text-xs text-slate-300 font-mono bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                1. User is logged into authenticated banking web session.<br />
                2. User source checking account holds exactly $500.00 available balance.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs uppercase font-semibold text-slate-300 tracking-wider">
                Test Steps & Execution Flow
              </h4>
              <div className="bg-slate-950 rounded-xl border border-slate-800 divide-y divide-slate-800/80 text-xs text-slate-300">
                <div className="p-3 flex gap-3">
                  <span className="font-mono text-cyan-400 font-bold shrink-0">Step 1:</span>
                  <span>Navigate to navigation menu and select 'Transfers & Payments'.</span>
                </div>
                <div className="p-3 flex gap-3">
                  <span className="font-mono text-cyan-400 font-bold shrink-0">Step 2:</span>
                  <span>Select source account with available balance = $500.00.</span>
                </div>
                <div className="p-3 flex gap-3">
                  <span className="font-mono text-cyan-400 font-bold shrink-0">Step 3:</span>
                  <span>Enter recipient account number: <code className="text-cyan-300 font-mono">987654321</code>.</span>
                </div>
                <div className="p-3 flex gap-3">
                  <span className="font-mono text-cyan-400 font-bold shrink-0">Step 4:</span>
                  <span>Enter transfer amount: <code className="text-cyan-300 font-mono">$550.00</code> (negative boundary condition exceeding balance by $50).</span>
                </div>
                <div className="p-3 flex gap-3">
                  <span className="font-mono text-cyan-400 font-bold shrink-0">Step 5:</span>
                  <span>Click the 'Submit Transfer' action button.</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <span className="font-semibold uppercase tracking-wider text-cyan-400 block">
                  Expected Result (SRS Spec)
                </span>
                <p className="text-slate-300 leading-relaxed">
                  Transfer must be rejected immediately. Clear inline error banner: "Insufficient funds for this transaction". Account balance remains unmodified at $500.00.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-1.5">
                <span className="font-semibold uppercase tracking-wider text-emerald-400 block">
                  Actual Result (Recorded)
                </span>
                <p className="text-slate-200 leading-relaxed">
                  Error notification displayed correctly as specified. No network request processed with debits. Source balance unchanged. Verified via Chrome DevTools Network Tab.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'bug' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs">
              <div>
                <span className="text-slate-400 block font-mono">Bug Ticket</span>
                <span className="font-bold text-rose-400 font-mono mt-0.5 block">BUG-BNK-009</span>
              </div>
              <div>
                <span className="text-slate-400 block font-mono">Severity</span>
                <span className="font-semibold text-rose-400 mt-0.5 block">Major (Functional)</span>
              </div>
              <div>
                <span className="text-slate-400 block font-mono">Priority</span>
                <span className="font-semibold text-amber-400 mt-0.5 block">High (P2)</span>
              </div>
              <div>
                <span className="text-slate-400 block font-mono">Status</span>
                <span className="font-bold text-emerald-400 font-mono mt-0.5 block">Retested & Closed</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs uppercase font-semibold text-slate-300 tracking-wider">
                Defect Title / Summary
              </h4>
              <p className="text-sm font-semibold text-white bg-slate-900 p-3 rounded-lg border border-slate-800">
                Transaction history page displays raw unformatted 'NaN-undefined' when sorting table by date descending.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs uppercase font-semibold text-slate-300 tracking-wider">
                Environment Details
              </h4>
              <p className="text-xs text-slate-300 font-mono bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                Environment: Staging Build 1.0.3 | Browser: Google Chrome 128 (macOS Sonoma) | Viewport: 1920x1080
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs uppercase font-semibold text-slate-300 tracking-wider">
                Steps to Reproduce
              </h4>
              <div className="bg-slate-950 rounded-xl border border-slate-800 divide-y divide-slate-800/80 text-xs text-slate-300">
                <div className="p-3 flex gap-3">
                  <span className="font-mono text-rose-400 font-bold shrink-0">1.</span>
                  <span>Log in as standard user with existing transaction records.</span>
                </div>
                <div className="p-3 flex gap-3">
                  <span className="font-mono text-rose-400 font-bold shrink-0">2.</span>
                  <span>Navigate to 'Account Statement & History'.</span>
                </div>
                <div className="p-3 flex gap-3">
                  <span className="font-mono text-rose-400 font-bold shrink-0">3.</span>
                  <span>Click the table header column labelled 'Date' to toggle sort from Ascending to Descending.</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <span className="font-semibold uppercase tracking-wider text-cyan-400 block">
                  Expected Result
                </span>
                <p className="text-slate-300 leading-relaxed">
                  Transaction table should cleanly re-sort rows by date descending with valid localized date format (e.g. DD/MM/YYYY).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-1.5">
                <span className="font-semibold uppercase tracking-wider text-rose-400 block">
                  Actual Result
                </span>
                <p className="text-slate-200 leading-relaxed">
                  Date cells evaluate to NaN, rendering 'NaN-undefined' and breaking table pagination navigation controls.
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-slate-300 space-y-1">
              <span className="font-semibold text-emerald-400 block">
                Retest & Verification Sign-Off
              </span>
              <p>
                Fix verified in Build 1.0.4. Sorting toggles reliably in ascending and descending order. Regression executed across statement filters with 0 regressions. Ticket marked Closed.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'jira' && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <span className="text-xs uppercase font-mono font-semibold text-cyan-400 block">
                Agile Traceability Hierarchy (Jira & Zephyr)
              </span>
              <div className="space-y-3 text-xs">
                
                <div className="p-3 rounded-lg bg-slate-900/90 border-l-4 border-purple-500 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-purple-400 font-bold">Epic</span>
                    <h5 className="font-bold text-white text-sm">SWAG-EPIC-01: End-to-End E-Commerce Checkout Flow</h5>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-purple-950 text-purple-300 text-[10px] font-mono">Jira Epic</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/90 border-l-4 border-blue-500 ml-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-blue-400 font-bold">User Story</span>
                    <h5 className="font-bold text-white text-sm">SWAG-STORY-12: User Cart Item Management & Total Calculation</h5>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-blue-950 text-blue-300 text-[10px] font-mono">User Story</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/90 border-l-4 border-cyan-500 ml-8 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-cyan-400 font-bold">Zephyr Test Cycle</span>
                    <h5 className="font-bold text-white text-sm">CYCLE-2026-AUG: Functional Checkout Validation Pass 1</h5>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 text-[10px] font-mono">Zephyr Cycle</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/90 border-l-4 border-rose-500 ml-12 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-rose-400 font-bold">Linked Defect</span>
                    <h5 className="font-bold text-white text-sm">SWAG-BUG-04: Cart item count badge fails to decrement on item removal</h5>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-rose-950 text-rose-300 text-[10px] font-mono">Jira Bug</span>
                </div>

              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 leading-relaxed">
              <strong className="text-white block mb-1">QA Traceability Takeaway:</strong>
              This structured breakdown ensures that 100% of user stories have direct coverage in Zephyr test cases, test execution statuses are visible in real time, and all defects remain linked to both the story and test cycle for complete auditability.
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Modeled directly from practical QA project experience</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 text-white font-semibold hover:bg-slate-700 transition-colors"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
