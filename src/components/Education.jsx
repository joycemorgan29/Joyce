import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Award, 
  BookOpen, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { education } from '../data/portfolioData';

export const Education = () => {
  return (
    <section id="education" className="py-20 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/60 text-cyan-400 border border-cyan-800/50 uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education
          </h2>
          <p className="text-base text-slate-400">
            Four-year Computer Science degree providing the theoretical framework for software engineering, databases, and quality assurance.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-7 sm:p-9 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-6">
            
            {/* Top row: Degree & Institution */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block">
                  Undergraduate Degree
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {education.degree}
                </h3>
                <p className="text-sm font-semibold text-cyan-300">
                  {education.major}
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                  <span className="font-semibold text-slate-200">{education.institution}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    {education.location}
                  </span>
                </div>
              </div>

              {/* GPA & Dates */}
              <div className="flex sm:flex-col items-center sm:items-end justify-between gap-3 shrink-0">
                <div className="px-3.5 py-1.5 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-right">
                  <span className="text-[10px] text-emerald-400 uppercase font-mono block">Grade Point Average</span>
                  <span className="text-xl font-bold text-emerald-300 font-mono">GPA: {education.gpa}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>{education.period}</span>
                </div>
              </div>
            </div>

            {/* Core Coursework & Foundations */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Key Computer Science Disciplines Studied
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {education.keyTopics.map((topic, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0"></div>
                    <span className="text-xs text-slate-200 font-medium">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* QA Connection Note */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Computer Science training equips me to analyze complex code architectures, understand relational database structures in SQL, decipher API JSON payloads, and communicate with software developers in their language.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
