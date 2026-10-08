import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  Award,
  Terminal,
  ShieldCheck
} from 'lucide-react';
import { courses } from '../data/portfolioData';

export const Courses = () => {
  return (
    <section id="courses" className="py-20 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/60 text-cyan-400 border border-cyan-800/50 uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Professional Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Courses & Training
          </h2>
          <p className="text-base text-slate-400">
            Intensive testing diplomas and structured courses grounded in ISTQB standards and practical industry tooling.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {courses.map((course) => (
            <div
              key={course.id}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                
                {/* Header */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block">
                      {course.provider}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {course.title}
                    </h3>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-medium">
                  {course.focus}
                </p>

                {/* Modules & Topics */}
                <div className="space-y-4">
                  {course.modules.map((mod, idx) => (
                    <div key={idx} className="bg-slate-950/80 rounded-xl p-4 border border-slate-800/80 space-y-2.5">
                      <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        {mod.name}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {mod.topics.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Footer Note */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Verified Curriculum</span>
                <span className="font-mono text-cyan-400 font-semibold">{course.provider}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
