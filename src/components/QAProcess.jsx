import React, { useState } from 'react';
import { 
  GitCommit, 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  FileText, 
  ListChecks, 
  PlayCircle, 
  Bug, 
  RotateCcw, 
  ShieldAlert, 
  FileCheck2,
  ChevronRight,
  Workflow
} from 'lucide-react';
import { qaProcessSteps } from '../data/portfolioData';

export const QAProcess = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (stepNum) => {
    switch (stepNum) {
      case 1: return Search;
      case 2: return FileText;
      case 3: return ListChecks;
      case 4: return PlayCircle;
      case 5: return Bug;
      case 6: return RotateCcw;
      case 7: return ShieldAlert;
      case 8: return FileCheck2;
      default: return CheckCircle2;
    }
  };

  const currentStep = qaProcessSteps[activeStepIndex];
  const StepIcon = getStepIcon(currentStep.step);

  return (
    <section id="qa-process" className="py-20 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/60 text-cyan-400 border border-cyan-800/50 uppercase tracking-wider">
            <Workflow className="w-3.5 h-3.5" />
            <span>Methodology & STLC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            QA Process / How I Work
          </h2>
          <p className="text-base text-slate-400">
            A systematic, disciplined testing lifecycle applied from initial requirement review down to final release documentation.
          </p>
        </div>

        {/* Process Steps Visual Flow Bar */}
        <div className="mb-10 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center min-w-[760px] lg:min-w-0 justify-between gap-2 p-2 rounded-2xl bg-slate-900/80 border border-slate-800">
            {qaProcessSteps.map((step, idx) => {
              const Icon = getStepIcon(step.step);
              const isActive = activeStepIndex === idx;
              const isPast = activeStepIndex > idx;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex-1 flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl transition-all text-center group focus:outline-none ${
                    isActive 
                      ? 'bg-gradient-to-b from-cyan-500/20 to-teal-500/10 border border-cyan-500/40 text-cyan-300 shadow-md' 
                      : 'hover:bg-slate-800/60 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all ${
                    isActive 
                      ? 'bg-cyan-500 text-slate-950 font-bold scale-110 shadow-sm shadow-cyan-400/50' 
                      : isPast
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/60'
                        : 'bg-slate-800 text-slate-300 group-hover:bg-slate-700'
                  }`}>
                    {step.step}
                  </div>
                  <span className={`text-[11px] font-semibold tracking-tight truncate max-w-[95px] ${
                    isActive ? 'text-white' : 'text-slate-400'
                  }`}>
                    {step.title.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Detailed Showcase Box */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Step Overview */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-sm">
                  <StepIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest block">
                    Phase {currentStep.step} of 8
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {currentStep.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentStep.shortDesc}
              </p>

              {/* Deliverable Box */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-cyan-400 block">
                  Key Phase Deliverable
                </span>
                <p className="text-xs sm:text-sm font-medium text-slate-200">
                  {currentStep.deliverables}
                </p>
              </div>

              {/* Step Navigation Controls */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex(prev => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-800 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800"
                >
                  ← Previous Phase
                </button>
                <button
                  disabled={activeStepIndex === qaProcessSteps.length - 1}
                  onClick={() => setActiveStepIndex(prev => Math.min(qaProcessSteps.length - 1, prev + 1))}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500 text-slate-950 font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-cyan-400"
                >
                  Next Phase →
                </button>
              </div>
            </div>

            {/* Step Activities List */}
            <div className="lg:col-span-7 bg-slate-950/80 rounded-xl p-6 border border-slate-800/80 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Hands-On QA Activities
                </span>
                <span className="text-xs font-mono text-cyan-400">
                  STLC Standard
                </span>
              </div>

              <div className="space-y-3">
                {currentStep.activities.map((act, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-snug">
                      {act}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Verification State: Strict</span>
                <span className="text-emerald-400 font-semibold">Zero Defect Leakage Goal</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
