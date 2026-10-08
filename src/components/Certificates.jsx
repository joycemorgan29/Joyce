import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  Globe2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { certificates } from '../data/portfolioData';

export const Certificates = () => {
  return (
    <section id="certificates" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/60 text-cyan-400 border border-cyan-800/50 uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Formal Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Certificates
          </h2>
          <p className="text-base text-slate-400">
            Official course and language certifications reflecting QA training rigor and international communication proficiency.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificates.map((cert, idx) => {
            const isISTQB = idx === 0;

            return (
              <div
                key={cert.title}
                className="relative glass-card rounded-2xl p-7 sm:p-8 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg"
              >
                {/* Decorative background crest/seal */}
                <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-cyan-500/5 rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>

                <div className="space-y-5 relative z-10">
                  
                  {/* Badge & Category */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                      {cert.category}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500 transition-colors">
                      {isISTQB ? <ShieldCheck className="w-5 h-5" /> : <Globe2 className="w-5 h-5 text-teal-400" />}
                    </div>
                  </div>

                  {/* Certificate Title */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">
                      Issuer: <span className="text-slate-200">{cert.issuer}</span>
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>

                </div>

                {/* Verification Bar */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs relative z-10">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified Qualification</span>
                  </div>
                  <span className="font-mono text-slate-400 text-[11px]">CV Certified</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
