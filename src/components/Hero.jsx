import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Terminal, 
  Bug, 
  FileSpreadsheet, 
  Database,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-radial-grid opacity-30 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* QA Availability Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 shadow-sm backdrop-blur-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-cyan-300 tracking-wide uppercase">
                Software Tester & QA Engineer
              </span>
              <span className="text-slate-500 text-xs">•</span>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400" />
                Cairo, Egypt
              </span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Joyce Sameh <br />
                <span className="accent-gradient">Abdelsayed</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 flex items-center gap-2 pt-1">
                <ShieldCheck className="w-6 h-6 text-cyan-400 inline-block" />
                <span>Software Tester | QA Engineer</span>
              </p>
            </div>

            {/* Professional Introduction from CV */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              QA Engineer with hands-on experience in manual software testing and web application QA, with strong skills in requirements analysis, test case design, test execution, defect management, regression testing, retesting, and SQL-based database validation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:from-cyan-400 hover:to-blue-500 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/90 text-slate-200 border border-slate-700 hover:border-cyan-500 hover:text-white hover:bg-slate-800 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social & Contact Links from CV */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-medium">
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-500" />
                </a>

                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                  <span>joycemorgan29</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-500" />
                </a>

                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{personalInfo.email}</span>
                </a>

                <a 
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-400" />
                  <span>{personalInfo.phone}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive QA Console & Metrics Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-teal-500/20 to-blue-600/30 rounded-2xl blur-xl opacity-70"></div>
              
              {/* Main Card */}
              <div className="relative glass-card rounded-2xl p-6 sm:p-7 border border-slate-700/80 shadow-2xl space-y-6">
                
                {/* Header terminal bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="ml-2 font-mono text-xs text-slate-400 font-medium">qa_execution_monitor.sh</span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    <CheckCircle2 className="w-3 h-3" />
                    STATUS: READY
                  </span>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800">
                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold mb-1">
                      <FileSpreadsheet className="w-4 h-4" />
                      <span>Test Design</span>
                    </div>
                    <div className="text-2xl font-bold text-white tracking-tight">60+</div>
                    <p className="text-[11px] text-slate-400 mt-0.5">Test Cases Authored</p>
                  </div>

                  <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800">
                    <div className="flex items-center gap-2 text-teal-400 text-xs font-semibold mb-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Execution</span>
                    </div>
                    <div className="text-2xl font-bold text-white tracking-tight">80+</div>
                    <p className="text-[11px] text-slate-400 mt-0.5">Test Cases Executed</p>
                  </div>

                  <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800">
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold mb-1">
                      <Bug className="w-4 h-4" />
                      <span>Defects</span>
                    </div>
                    <div className="text-2xl font-bold text-white tracking-tight">~10</div>
                    <p className="text-[11px] text-slate-400 mt-0.5">Identified & Retested</p>
                  </div>

                  <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800">
                    <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold mb-1">
                      <Database className="w-4 h-4" />
                      <span>Database</span>
                    </div>
                    <div className="text-2xl font-bold text-white tracking-tight">SQL</div>
                    <p className="text-[11px] text-slate-400 mt-0.5">Data Validation</p>
                  </div>
                </div>

                {/* Active Testing Toolset Preview */}
                <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800 space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-semibold uppercase tracking-wider text-slate-300">Testing Toolkit:</span>
                    <span className="font-mono text-[11px] text-cyan-400">Strict CV-Aligned</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {['Jira', 'Zephyr', 'Google Sheets', 'SQL Server', 'PostgreSQL', 'Chrome DevTools', 'Postman'].map((t) => (
                      <span 
                        key={t}
                        className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Education / Certification Pill */}
                <div className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-cyan-950/30 border border-cyan-800/40 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>B.Sc. Computer Science • GPA 3.17/4.00</span>
                  </div>
                  <span className="font-semibold text-cyan-300">MUST</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
