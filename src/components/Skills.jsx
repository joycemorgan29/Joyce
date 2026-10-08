import React, { useState } from 'react';
import { 
  CheckCircle, 
  ShieldCheck, 
  FileCheck, 
  Wrench, 
  Database, 
  Code2, 
  GitBranch, 
  Users, 
  Sparkles,
  Layers
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const getCategoryIcon = (catName) => {
    switch (catName) {
      case 'Software Testing':
        return ShieldCheck;
      case 'Test Design & QA':
        return FileCheck;
      case 'Testing Tools':
        return Wrench;
      case 'Database':
        return Database;
      case 'Programming':
        return Code2;
      case 'Version Control':
        return GitBranch;
      case 'Interpersonal Skills':
        return Users;
      default:
        return CheckCircle;
    }
  };

  const getCategoryColor = (catName) => {
    switch (catName) {
      case 'Software Testing':
        return {
          border: 'border-cyan-500/40',
          badge: 'bg-cyan-950/60 text-cyan-300 border-cyan-800/60',
          chip: 'bg-cyan-500/10 text-cyan-200 border-cyan-500/20 hover:border-cyan-400/50'
        };
      case 'Test Design & QA':
        return {
          border: 'border-teal-500/40',
          badge: 'bg-teal-950/60 text-teal-300 border-teal-800/60',
          chip: 'bg-teal-500/10 text-teal-200 border-teal-500/20 hover:border-teal-400/50'
        };
      case 'Testing Tools':
        return {
          border: 'border-blue-500/40',
          badge: 'bg-blue-950/60 text-blue-300 border-blue-800/60',
          chip: 'bg-blue-500/10 text-blue-200 border-blue-500/20 hover:border-blue-400/50'
        };
      case 'Database':
        return {
          border: 'border-indigo-500/40',
          badge: 'bg-indigo-950/60 text-indigo-300 border-indigo-800/60',
          chip: 'bg-indigo-500/10 text-indigo-200 border-indigo-500/20 hover:border-indigo-400/50'
        };
      case 'Programming':
        return {
          border: 'border-purple-500/40',
          badge: 'bg-purple-950/60 text-purple-300 border-purple-800/60',
          chip: 'bg-purple-500/10 text-purple-200 border-purple-500/20 hover:border-purple-400/50'
        };
      case 'Version Control':
        return {
          border: 'border-emerald-500/40',
          badge: 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60',
          chip: 'bg-emerald-500/10 text-emerald-200 border-emerald-500/20 hover:border-emerald-400/50'
        };
      case 'Interpersonal Skills':
        return {
          border: 'border-amber-500/40',
          badge: 'bg-amber-950/60 text-amber-300 border-amber-800/60',
          chip: 'bg-amber-500/10 text-amber-200 border-amber-500/20 hover:border-amber-400/50'
        };
      default:
        return {
          border: 'border-slate-700',
          badge: 'bg-slate-800 text-slate-300 border-slate-700',
          chip: 'bg-slate-800/70 text-slate-200 border-slate-700'
        };
    }
  };

  const filterTabs = ['All', ...skillCategories.map(c => c.category)];

  const displayedCategories = selectedCategory === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.category === selectedCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/60 text-cyan-400 border border-cyan-800/50 uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical & QA Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            QA & Technical Skills
          </h2>
          <p className="text-base text-slate-400">
            Categorized directly from hands-on testing projects and certifications. No arbitrary percentages—just verified capabilities.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedCategory(tab)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                selectedCategory === tab
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                  : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((catGroup) => {
            const Icon = getCategoryIcon(catGroup.category);
            const style = getCategoryColor(catGroup.category);

            return (
              <div
                key={catGroup.category}
                className={`glass-card rounded-2xl p-6 border ${style.border} transition-all duration-300 flex flex-col justify-between hover:shadow-xl`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center text-cyan-400 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {catGroup.category}
                      </h3>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {catGroup.skills.length} competencies
                      </span>
                    </div>
                  </div>

                  {/* Category Description */}
                  <p className="text-xs text-slate-400 mb-5 leading-relaxed min-h-[36px]">
                    {catGroup.description}
                  </p>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2">
                    {catGroup.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${style.chip}`}
                      >
                        <CheckCircle className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer with category label */}
                <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>CV Verified</span>
                  <span className="font-mono text-cyan-400 font-semibold">100% QA Aligned</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
