import React from 'react';
import { 
  CheckCircle2, 
  FileCheck, 
  Layers, 
  Database, 
  RefreshCw, 
  Search, 
  GraduationCap, 
  Target,
  Sparkles
} from 'lucide-react';
import { personalInfo, education } from '../data/portfolioData';

export const About = () => {
  const qaFocusPillars = [
    {
      icon: Search,
      title: "Requirements & SRS Analysis",
      description: "Carefully analyzing Software Requirements Specifications (SRS) and UI/UX mockups, raising proactive clarification questions to make ambiguities testable before development closes."
    },
    {
      icon: FileCheck,
      title: "Effective Test Case Design",
      description: "Authoring comprehensive positive and negative test cases, applying boundary value analysis and equivalence partitioning to maximize functional test coverage."
    },
    {
      icon: Target,
      title: "Defect Lifecycle & Retesting",
      description: "Identifying defects early, providing unambiguous reproduction steps, assigning objective severity & priority, and verifying bug fixes through disciplined retesting."
    },
    {
      icon: RefreshCw,
      title: "Regression & Stability",
      description: "Executing regression suites systematically to ensure bug fixes and new code modifications do not introduce unintended side effects across existing application flows."
    },
    {
      icon: Database,
      title: "SQL & Data Validation",
      description: "Leveraging structured SQL queries across SQL Server and PostgreSQL to inspect relational data, verify transactional records, and guarantee back-end consistency."
    },
    {
      icon: Layers,
      title: "Agile & QA Methodologies",
      description: "Operating within Agile/Scrum sprints, maintaining requirement-to-test traceability using Jira Epics, Stories, Tasks, and Zephyr test cycles."
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/60 text-cyan-400 border border-cyan-800/50 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile & QA Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-base text-slate-400">
            Dedicated QA Engineer combining a Computer Science foundation with systematic testing methodologies to ensure software reliability, precision, and business readiness.
          </p>
        </div>

        {/* Narrative & CS Foundation Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Main Narrative */}
          <div className="lg:col-span-8 glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-5 flex flex-col justify-between">
            <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                I am a <strong className="text-white font-semibold">QA Engineer / Software Tester</strong> based in Shoubra, Cairo, Egypt. My focus centers on verifying that software solutions behave reliably, meet rigorous business specifications, and provide seamless user experiences.
              </p>
              <p>
                My hands-on experience spans <strong className="text-cyan-300 font-semibold">manual testing</strong> across web applications, starting from early SRS requirement inspection, drafting detailed positive and negative test cases, executing systematic test passes, and managing the end-to-end defect lifecycle with precision.
              </p>
              <p>
                With a solid academic foundation in <strong className="text-white font-semibold">Computer Science</strong>, I bridge the gap between technical system internals and user-facing requirements—validating data states with <strong className="text-teal-300 font-semibold">SQL</strong>, investigating browser behavior using Chrome DevTools, and working comfortably within fast-paced Agile sprint teams.
              </p>
            </div>

            {/* Quick Highlights Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                <span className="text-xs text-slate-400 block">Focus</span>
                <span className="text-sm font-bold text-white mt-0.5 block">Manual QA</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                <span className="text-xs text-slate-400 block">Agile Tool</span>
                <span className="text-sm font-bold text-cyan-300 mt-0.5 block">Jira & Zephyr</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                <span className="text-xs text-slate-400 block">Data Testing</span>
                <span className="text-sm font-bold text-teal-300 mt-0.5 block">SQL Queries</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                <span className="text-xs text-slate-400 block">Location</span>
                <span className="text-sm font-bold text-slate-200 mt-0.5 block">Cairo, Egypt</span>
              </div>
            </div>
          </div>

          {/* Education Spotlight Card */}
          <div className="lg:col-span-4 glass-card rounded-2xl p-6 sm:p-7 border border-cyan-500/20 bg-gradient-to-b from-slate-900/90 to-cyan-950/20 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block">
                Academic Foundation
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                {education.degree}
              </h3>
              <p className="text-xs text-cyan-200/80 font-medium">{education.major}</p>

              <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2 text-xs text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-800/40">
                  <span className="text-slate-400">University:</span>
                  <span className="font-semibold text-white text-right">MUST</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/40">
                  <span className="text-slate-400">Location:</span>
                  <span className="text-slate-200">Giza, Egypt</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/40">
                  <span className="text-slate-400">Years:</span>
                  <span className="text-slate-200">{education.period}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">GPA:</span>
                  <span className="font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                    {education.gpa}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/60">
              <span className="text-[11px] text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                Core Coursework
              </span>
              <div className="flex flex-wrap gap-1.5">
                {education.keyTopics.map((topic) => (
                  <span
                    key={topic}
                    className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* 6 QA Focus Pillars Grid */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white tracking-tight">
              What I Bring to the QA Team
            </h3>
            <p className="text-xs text-slate-400 mt-1">Disciplined testing standards applied at each phase of development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {qaFocusPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="glass-card glass-card-hover rounded-xl p-5 border border-slate-800/80 space-y-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h4 className="text-base font-semibold text-white">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
