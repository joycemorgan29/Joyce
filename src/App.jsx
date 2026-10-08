import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { QAProcess } from './components/QAProcess';
import { Projects } from './components/Projects';
import { Courses } from './components/Courses';
import { Certificates } from './components/Certificates';
import { Education } from './components/Education';
import { Languages } from './components/Languages';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TestCaseModal } from './components/TestCaseModal';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isDark, setIsDark] = useState(true);
  const [testCaseModalOpen, setTestCaseModalOpen] = useState(false);
  const [testCaseModalTab, setTestCaseModalTab] = useState('testcase');
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const handleInspectArtifact = (tabType = 'testcase') => {
    setTestCaseModalTab(tabType);
    setTestCaseModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Sticky Navigation */}
      <Navbar 
        isDark={isDark} 
        setIsDark={setIsDark} 
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* QA Process / Workflow */}
        <QAProcess />

        {/* Projects Section */}
        <Projects onInspectArtifact={handleInspectArtifact} />

        {/* Courses & Training */}
        <Courses />

        {/* Certificates */}
        <Certificates />

        {/* Education */}
        <Education />

        {/* Languages */}
        <Languages />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive QA Artifacts Modal */}
      <TestCaseModal 
        isOpen={testCaseModalOpen}
        initialTab={testCaseModalTab}
        onClose={() => setTestCaseModalOpen(false)}
      />

      {/* Resume Highlights Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
