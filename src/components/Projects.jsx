import React, { useState } from 'react';
import { 
  FolderGit2, 
  ShieldCheck, 
  Code2, 
  Sparkles, 
  Workflow, 
  FileSpreadsheet,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Bug
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

export const Projects = ({ onInspectArtifact }) => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'qa') return project.category === 'qa';
    if (filter === 'dev') return project.category === 'dev';
    return true;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/60 text-cyan-400 border border-cyan-800/50 uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-base text-slate-400">
            Real software testing projects demonstrating manual QA workflows, defect lifecycle management, and full-stack web applications.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filter === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800'
            }`}
          >
            All Projects ({projects.length})
          </button>

          <button
            onClick={() => setFilter('qa')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filter === 'qa'
                ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-cyan-300 hover:bg-slate-800'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Software Testing (2)</span>
          </button>

          <button
            onClick={() => setFilter('dev')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filter === 'dev'
                ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md shadow-purple-500/20'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-purple-300 hover:bg-slate-800'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Web Development (2)</span>
          </button>
        </div>

        {/* Visual Callout for QA Workflow (from CV Project 3: Swag Labs) */}
        {filter !== 'dev' && (
          <div className="mb-12 p-6 glass-card rounded-2xl border border-cyan-500/25 bg-gradient-to-r from-slate-950 via-[#0e1526] to-slate-950">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest block mb-1">
                  Swag Labs & Banking App QA Flow
                </span>
                <h4 className="text-lg font-bold text-white">
                  Real Testing Workflow in Action
                </h4>
              </div>

              {/* Step pills */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs font-mono">
                {['Requirements Analysis', 'Test Case Design', 'Test Cycle', 'Execution', 'Defect Logging', 'Retesting'].map((s, idx, arr) => (
                  <React.Fragment key={s}>
                    <span className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-200 border border-slate-700/80">
                      {s}
                    </span>
                    {idx < arr.length - 1 && (
                      <span className="text-cyan-400 font-bold">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onInspectArtifact={onInspectArtifact}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
