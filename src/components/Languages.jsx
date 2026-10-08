import React from 'react';
import { 
  Globe2, 
  CheckCircle2, 
  Award,
  Sparkles
} from 'lucide-react';
import { languages } from '../data/portfolioData';

export const Languages = () => {
  return (
    <section className="py-14 relative bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/60 text-cyan-400 border border-cyan-800/50 uppercase tracking-wider">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Communication & Linguistic Range</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Languages
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Fluent English for international technical documentation and cross-border Agile teams, complemented by certified French proficiency.
          </p>
        </div>

        {/* Languages Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/30 transition-all flex items-center justify-between shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl p-2 rounded-xl bg-slate-900 border border-slate-800">
                  {lang.flag}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {lang.name}
                  </h3>
                  <p className="text-xs text-cyan-300 font-semibold mt-0.5">
                    {lang.proficiency}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {lang.level}
                  </p>
                </div>
              </div>

              <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
