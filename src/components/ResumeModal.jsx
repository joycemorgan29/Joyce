import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink,
  GraduationCap,
  Copy,
  Check
} from 'lucide-react';
import { 
  personalInfo, 
  education, 
  skillCategories, 
  projects, 
  courses, 
  certificates, 
  languages 
} from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto glass-card rounded-2xl border border-cyan-500/40 shadow-2xl bg-[#0a0f1d] p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Joyce_Sameh_QA_CV_Summary.pdf</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable CV Content Container */}
        <div className="space-y-8 text-slate-300 text-xs sm:text-sm">
          
          {/* CV Header */}
          <div className="text-center pb-6 border-b border-slate-800 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {personalInfo.fullName}
            </h2>
            <p className="text-base font-bold text-cyan-400">
              {personalInfo.role}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400 pt-1 font-medium">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400" />
                {personalInfo.location}
              </span>
              <span>•</span>
              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="hover:text-cyan-300">
                {personalInfo.phone}
              </a>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-300">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center justify-center gap-4 text-xs pt-1 font-mono">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                LinkedIn Profile
              </a>
              <span>|</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                GitHub: joycemorgan29
              </a>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase font-mono font-bold tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
              PROFILE SUMMARY
            </h3>
            <p className="leading-relaxed text-slate-300">
              {personalInfo.summary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase font-mono font-bold tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
              EDUCATION
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
              <div>
                <strong className="text-white text-sm">{education.institution}</strong>
                <span className="text-slate-400"> — {education.location}</span>
                <p className="text-cyan-300 mt-0.5">{education.degree}, {education.major}</p>
              </div>
              <div className="text-left sm:text-right mt-1 sm:mt-0 font-mono text-xs">
                <span className="text-slate-400">{education.period}</span>
                <p className="text-emerald-400 font-bold">GPA: {education.gpa}</p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase font-mono font-bold tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
              TECHNICAL SKILLS
            </h3>
            <div className="space-y-1.5 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.category} className="grid grid-cols-1 sm:grid-cols-4 gap-1">
                  <span className="font-semibold text-slate-200">{cat.category}:</span>
                  <span className="sm:col-span-3 text-slate-300">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Courses & Diplomas */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-mono font-bold tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
              COURSES & DIPLOMAS
            </h3>
            {courses.map((c) => (
              <div key={c.id} className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <strong className="text-white">{c.title} — {c.provider}</strong>
                </div>
                <div className="text-xs text-slate-400 space-y-1">
                  {c.modules.map((m, idx) => (
                    <div key={idx} className="flex gap-2">
                      <span className="text-cyan-400 font-semibold">• {m.name}:</span>
                      <span>{m.topics.join(', ')}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase font-mono font-bold tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
              PROJECTS
            </h3>
            {projects.map((p) => (
              <div key={p.id} className="space-y-1.5 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <strong className="text-white text-sm">{p.title}</strong>
                  <span className="text-cyan-400 font-mono">{p.date}</span>
                </div>
                <div className="flex gap-2 text-slate-400 font-mono text-[11px]">
                  <span>{p.type}</span>
                  <span>|</span>
                  <span>{p.tools.join(', ')}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  {p.contributions.map((c, i) => (
                    <li key={i} className="leading-relaxed">{c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certificates */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase font-mono font-bold tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
              CERTIFICATES
            </h3>
            <div className="space-y-1 text-xs">
              {certificates.map((cert) => (
                <div key={cert.title} className="flex justify-between">
                  <span className="font-semibold text-white">• {cert.title}</span>
                  <span className="text-slate-400">{cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase font-mono font-bold tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
              LANGUAGES
            </h3>
            <p className="text-xs text-slate-300">
              {languages.map(l => `${l.name}: ${l.proficiency}`).join('   |   ')}
            </p>
          </div>

        </div>

        {/* Modal Close CTA */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-colors"
          >
            Close Summary
          </button>
        </div>

      </div>
    </div>
  );
};
