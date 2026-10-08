import React from 'react';
import { 
  CheckCircle2, 
  ExternalLink, 
  Calendar, 
  FileSpreadsheet, 
  Layers, 
  Bug, 
  ShieldCheck, 
  Code2, 
  Sparkles,
  ArrowRight,
  Workflow
} from 'lucide-react';

export const ProjectCard = ({ project, onInspectArtifact }) => {
  const isQA = project.category === 'qa';

  return (
    <div className={`glass-card rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
      project.featured 
        ? 'border-cyan-500/30 hover:border-cyan-400/60 shadow-lg hover:shadow-cyan-500/10' 
        : 'border-slate-800 hover:border-slate-700'
    }`}>
      
      {/* Top Banner & Metadata */}
      <div className="p-6 sm:p-7 space-y-5">
        
        {/* Header Tags */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider ${
              isQA 
                ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/60' 
                : 'bg-purple-950 text-purple-300 border border-purple-800/60'
            }`}>
              {project.type}
            </span>
            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                <Sparkles className="w-3 h-3" /> Featured
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            <span>{project.date}</span>
          </div>
        </div>

        {/* Project Title & Subtitle */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-xs font-medium text-cyan-400/90 mt-1">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Short Description */}
        <p className="text-sm text-slate-300 leading-relaxed">
          {project.description}
        </p>

        {/* Quantitative Stats (Measurable Achievements from CV) */}
        {project.stats && project.stats.length > 0 && (
          <div className="grid grid-cols-3 gap-2.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80">
            {project.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <span className="text-base sm:text-lg font-bold text-white block tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[10px] text-slate-400 font-medium block truncate">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Key Responsibilities & Contributions (Strictly from CV) */}
        <div className="space-y-2.5">
          <h4 className="text-xs uppercase font-semibold text-slate-300 tracking-wider">
            Key Responsibilities & Contributions
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            {project.contributions.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5"></div>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Testing / Engineering Highlights Chips */}
        {project.testingHighlights && (
          <div className="pt-2">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-2">
              Relevant Competencies
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.testingHighlights.map((hl) => (
                <span
                  key={hl}
                  className="px-2.5 py-1 rounded text-[11px] font-medium bg-slate-900 text-slate-300 border border-slate-800"
                >
                  {hl}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Card Footer: Tools & Interactive Action */}
      <div className="p-6 bg-slate-950/60 border-t border-slate-800/80 space-y-4">
        
        {/* Tools Badges */}
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-400 font-medium">Tools & Technologies:</span>
          <div className="flex flex-wrap gap-1.5 justify-end">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-cyan-950/40 text-cyan-300 border border-cyan-800/40"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div>
          {project.id === 'banking-app' && (
            <button
              onClick={() => onInspectArtifact('testcase')}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 flex items-center justify-center gap-2 transition-all"
            >
              <FileSpreadsheet className="w-4 h-4 text-cyan-400" />
              <span>Inspect Sample Test Case & Defect Report</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}

          {project.id === 'swag-labs' && (
            <button
              onClick={() => onInspectArtifact('jira')}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-400 flex items-center justify-center gap-2 transition-all"
            >
              <Workflow className="w-4 h-4 text-blue-400" />
              <span>Inspect Jira & Zephyr Agile Traceability</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}

          {project.id === 'aeva' && (
            <div className="flex items-center justify-between py-1 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-purple-300 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>AI Chatbot & Recommendations</span>
              </span>
              <span className="font-mono text-[11px] text-slate-300">Graduation Project</span>
            </div>
          )}

          {project.id === 'skuh-website' && (
            <div className="flex items-center justify-between py-1 text-xs text-slate-400">
              <span className="text-teal-300 font-medium">
                Hospital Healthcare Portal
              </span>
              <span className="font-mono text-[11px] text-slate-300">Angular & TypeScript</span>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
