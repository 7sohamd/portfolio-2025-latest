'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code2, Download, ArrowRight } from 'lucide-react';
import { PROFILE, SKILLS, PROJECTS, EXPERIENCE, EDUCATION, AWARDS, CERTIFICATIONS, LANGUAGES } from '../constants';
import { SectionHeader } from '../components/SectionHeader';
import { VerticalLine } from '../components/VerticalLine';
import { ThemeToggle } from '../components/ThemeToggle';
import { Typewriter } from '../components/Typewriter';
import ChatAssistant from '../components/ui/ChatAssistant';
import { script } from 'framer-motion/client';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="relative min-h-screen bg-jap-white dark:bg-jap-black text-jap-black dark:text-jap-white font-sans selection:bg-jap-black selection:text-jap-white dark:selection:bg-jap-white dark:selection:text-jap-black transition-colors duration-300">

      {/* Expand Sidebar Button (Fixed relative to Viewport) - Moved outside main/aside to prevent stacking context issues */}
      <div className={`hidden lg:block fixed top-6 left-6 z-[60] transition-all duration-500 ${!isSidebarOpen ? 'translate-x-0 opacity-100 pointer-events-auto' : '-translate-x-10 opacity-0 pointer-events-none'}`}>
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-3 bg-jap-white/80 dark:bg-jap-black/80 backdrop-blur-sm border border-neutral-900 dark:border-neutral-700 shadow-sm hover:shadow-md text-neutral-800 dark:text-neutral-200 hover:text-jap-red dark:hover:text-jap-red transition-all duration-300 opacity-50 hover:opacity-100 focus:opacity-100 group rounded-sm"
          title="Expand Sidebar"
          aria-label="Expand Sidebar"
        >
          <span className="font-mono font-bold text-xl tracking-tighter block group-hover:translate-x-1 transition-transform duration-300">&gt;&gt;</span>
        </button>
      </div>

      {/* Mobile Header / Desktop Sidebar Wrapper */}
      <div className="flex flex-col lg:flex-row">

        {/* Left Panel (Fixed on Desktop) */}
        <aside
          className={`
            flex-shrink-0 border-b lg:border-b-0 border-neutral-900 dark:border-neutral-700 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden
            ${isSidebarOpen ? 'lg:w-[35%] opacity-100' : 'lg:w-0 lg:opacity-0 lg:border-none'}
            lg:h-screen lg:sticky lg:top-0 bg-jap-white dark:bg-jap-black z-40
          `}
        >
          <div className="p-6 md:p-12 flex flex-col h-full min-w-[320px] relative overflow-y-auto no-scrollbar">

            {/* Top Section: Profile */}
            <div className="relative">
              {/* Mobile Theme Toggle Position */}
              <div className="absolute right-0 top-0 lg:hidden">
                <ThemeToggle />
              </div>

              {/* Desktop Collapse Button */}
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="hidden lg:block absolute right-0 top-1 p-2 hover:text-jap-red transition-colors text-neutral-900 dark:text-neutral-100 group z-50"
                title="Collapse Sidebar"
                aria-label="Collapse Sidebar"
              >
                <span className="font-mono font-bold text-xl tracking-tighter group-hover:-translate-x-1 block transition-transform duration-300">&lt;&lt;</span>
              </button>

              <h1 className="text-5xl md:text-7xl font-serif font-medium leading-none tracking-tighter mb-4 animate-on-load">
                {PROFILE.name.split(' ').map((n, i) => (
                  <span key={i} className="block">{n}</span>
                ))}
              </h1>
              <p className="text-xl font-mono mt-6 mb-8 text-neutral-600 dark:text-neutral-400 transition-colors duration-300 animate-on-load delay-100">
                {PROFILE.role}
              </p>

              <div className="space-y-2 font-mono text-sm animate-on-load delay-200">
                <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-3 hover:text-jap-red hover:translate-x-1 transition-all duration-300 w-fit">
                  <Mail size={16} /> {PROFILE.email}
                </a>
                <a href={`tel:${PROFILE.phone}`} className="flex items-center gap-3 hover:text-jap-red hover:translate-x-1 transition-all duration-300 w-fit">
                  <Phone size={16} /> {PROFILE.phone}
                </a>
                <div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-500">
                  <MapPin size={16} /> {PROFILE.location}
                </div>
              </div>

              <div className="flex gap-4 mt-8 animate-on-load delay-300">
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="p-3 border border-neutral-900 dark:border-neutral-400 hover:bg-neutral-900 hover:text-white dark:hover:bg-neutral-200 dark:hover:text-jap-black hover:-translate-y-1 transition-all duration-300">
                  <Linkedin size={20} />
                </a>
                <a href={PROFILE.github} target="_blank" rel="noreferrer" className="p-3 border border-neutral-900 dark:border-neutral-400 hover:bg-neutral-900 hover:text-white dark:hover:bg-neutral-200 dark:hover:text-jap-black hover:-translate-y-1 transition-all duration-300">
                  <Github size={20} />
                </a>
                {/* Desktop Theme Toggle Position */}
                <div className="hidden lg:block">
                  <ThemeToggle />
                </div>
              </div>

              {/* Summary Section with Typewriter Effect */}
              <div className="mt-8 hidden lg:block">
                <div className="font-mono text-base leading-relaxed text-neutral-600 dark:text-neutral-400 text-justify">
                  <Typewriter text={PROFILE.summary} delay={800} speed={10} />
                </div>
              </div>

              {/* YouTube Video Section (Desktop Only) */}
              <div className="mt-8 hidden lg:block">
                <div className="relative w-full aspect-video rounded overflow-hidden border border-neutral-900 dark:border-neutral-700">
                  <iframe
                    src="https://www.youtube.com/embed/FvWLnpbeF-0?autoplay=1&mute=1&loop=1&playlist=FvWLnpbeF-0&controls=1&modestbranding=1&rel=0"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="YouTube Video"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Section: CTA (Desktop Only) */}
            <div className="mt-auto pt-12 hidden lg:block animate-on-load delay-500">
              <h2 className="text-4xl font-serif mb-2 text-jap-black dark:text-white">Let's Build.</h2>
              <a href={`mailto:${PROFILE.email}`} className="block text-lg border-b border-neutral-300 hover:border-jap-black dark:border-neutral-700 dark:hover:border-white transition-colors pb-1 mb-6 w-fit">
                {PROFILE.email}
              </a>
              <a href="/Resume_TCS_Latest.pdf" download className="flex items-center gap-2 px-6 py-3 bg-jap-black dark:bg-neutral-200 text-white dark:text-jap-black font-bold uppercase tracking-wider hover:bg-neutral-700 dark:hover:bg-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 text-sm w-fit">
                <Download size={16} /> Resume
              </a>
            </div>
          </div>
        </aside>

        {/* Vertical Line - Hide when sidebar is collapsed */}
        {isSidebarOpen && <VerticalLine />}

        {/* Right Panel (Scrollable) */}
        <main className={`flex flex-col transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] no-scrollbar ${isSidebarOpen ? 'lg:w-[65%]' : 'w-full'}`}>

          {/* Mobile Summary (Hidden on Desktop) */}
          <div className="lg:hidden p-6 md:p-12 border-b border-neutral-900 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900 transition-colors duration-300">
            <p className="font-mono text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 text-justify">
              {PROFILE.summary}
            </p>
          </div>

          {/* Experience Section */}
          <section className="p-6 md:p-12 border-b border-neutral-900 dark:border-neutral-700 transition-colors duration-300 animate-on-load delay-100">
            <SectionHeader title="Experience" number="(01)" />
            <div className="space-y-12">
              {EXPERIENCE.map((exp, index) => (
                <div key={index} className="grid md:grid-cols-12 gap-4 md:gap-8 group">
                  <div className="md:col-span-4 font-mono text-sm text-neutral-500 dark:text-neutral-400 group-hover:text-jap-black dark:group-hover:text-jap-white transition-colors">
                    {exp.period}
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="text-xl font-bold font-serif mb-1 text-jap-black dark:text-jap-white group-hover:text-jap-red transition-colors">{exp.role}</h3>
                    <div className="text-sm font-mono mb-4 text-jap-red uppercase tracking-wider">{exp.company} | {exp.location}</div>
                    <ul className="space-y-2">
                      {exp.details.map((detail, idx) => (
                        <li key={idx} className="text-neutral-800 dark:text-neutral-300 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-neutral-300 dark:before:bg-neutral-600 group-hover:before:bg-jap-red dark:group-hover:before:bg-jap-red before:transition-colors before:duration-300 font-mono">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="p-6 md:p-12 border-b border-neutral-900 dark:border-neutral-700 transition-colors duration-300 animate-on-load delay-200">
            <SectionHeader title="Projects" number="(02)" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PROJECTS.map((project, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col justify-between border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:border-neutral-900 dark:hover:border-neutral-200 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
                >

                  {/* Decorative Red Line Reveal */}
                  <div className="absolute top-0 left-0 w-1 h-0 bg-jap-red group-hover:h-full transition-all duration-500 ease-in-out" />

                  <div className="p-6 z-10">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-serif group-hover:text-jap-red transition-colors">{project.title}</h3>
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-jap-red hover:scale-110"
                          aria-label={`Visit ${project.title}`}
                        >
                          <ArrowRight size={20} />
                        </a>
                      )}
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-xs font-mono uppercase tracking-wide text-neutral-700 dark:text-neutral-300 group-hover:bg-jap-black group-hover:text-jap-white dark:group-hover:bg-jap-white dark:group-hover:text-jap-black transition-colors duration-300 delay-[50ms]" style={{ transitionDelay: `${i * 50}ms` }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 pt-4 border-t border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-black/20">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-sm font-bold hover:text-jap-red dark:hover:text-jap-red transition-colors group/link"
                      >
                        <ExternalLink size={14} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" /> LIVE
                      </a>
                    )}
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-sm font-bold hover:text-jap-red dark:hover:text-jap-red transition-colors group/link"
                      >
                        <Code2 size={14} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" /> CODE
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="p-6 md:p-12 border-b border-neutral-900 dark:border-neutral-700 bg-neutral-50 dark:bg-[#202020] transition-colors duration-300 animate-on-load delay-300">
            <SectionHeader title="Technical Skills" number="(03)" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6">
              {SKILLS.map((category, index) => (
                <div key={index} className="group">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4 border-b border-neutral-300 dark:border-neutral-700 pb-2 group-hover:border-jap-red transition-colors duration-500">
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {category.skills.map((skill, idx) => (
                      <span key={idx} className="text-lg font-serif text-neutral-800 dark:text-neutral-200 hover:text-jap-red transition-colors cursor-default relative hover:scale-105 inline-block duration-200">
                        {skill}
                        {idx !== category.skills.length - 1 && <span className="text-neutral-300 dark:text-neutral-600 ml-4 select-none">/</span>}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Awards & Certifications & Education (Grid Layout) */}
          <div className="grid md:grid-cols-2 animate-on-load delay-400">

            {/* Education & Certs */}
            <section className="p-6 md:p-12 border-b md:border-b-0 md:border-r border-neutral-900 dark:border-neutral-700 transition-colors duration-300">
              <h3 className="font-serif text-2xl mb-8 uppercase tracking-widest border-b border-neutral-900 dark:border-neutral-700 pb-2">Education</h3>
              <div className="space-y-8">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="group hover:bg-neutral-50 dark:hover:bg-neutral-900/50 p-4 -mx-4 rounded transition-colors">
                    <div className="text-sm font-mono text-neutral-500 dark:text-neutral-400 mb-1">{edu.period}</div>
                    <h4 className="font-bold text-lg text-jap-black dark:text-jap-white group-hover:text-jap-red transition-colors">{edu.institution}</h4>
                    <p className="text-neutral-700 dark:text-neutral-300 font-mono">{edu.degree}</p>
                    {edu.details && <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1 font-mono">{edu.details}</p>}
                  </div>
                ))}
              </div>

              <h3 className="font-serif text-2xl mt-12 mb-8 uppercase tracking-widest border-b border-neutral-900 dark:border-neutral-700 pb-2">Certifications</h3>
              <ul className="space-y-4">
                {CERTIFICATIONS.map((cert, idx) => (
                  <li key={idx} className="flex flex-col group hover:bg-neutral-50 dark:hover:bg-neutral-900/50 p-3 -mx-3 rounded transition-colors">
                    <span className="font-bold text-jap-black dark:text-jap-white group-hover:text-jap-red transition-colors font-mono">{cert.name}</span>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 font-mono">{cert.issuer}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Awards & Languages */}
            <section className="p-6 md:p-12 border-b border-neutral-900 dark:border-neutral-700 md:border-b-0 transition-colors duration-300">
              <h3 className="font-serif text-2xl mb-8 uppercase tracking-widest border-b border-neutral-900 dark:border-neutral-700 pb-2">Hackathon & Awards</h3>
              <ul className="space-y-6">
                {AWARDS.map((award, idx) => (
                  <li key={idx} className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-jap-red before:text-xs before:top-1 group">
                    <p className="leading-snug text-neutral-800 dark:text-neutral-300 group-hover:text-jap-black dark:group-hover:text-white transition-colors font-mono">{award}</p>
                  </li>
                ))}
              </ul>

              <h3 className="font-serif text-2xl mt-12 mb-8 uppercase tracking-widest border-b border-neutral-900 dark:border-neutral-700 pb-2">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {LANGUAGES.map((lang, idx) => (
                  <span key={idx} className="px-4 py-2 border border-neutral-900 dark:border-neutral-600 rounded-full text-sm font-medium hover:bg-neutral-900 hover:text-white dark:hover:bg-neutral-200 dark:hover:text-jap-black hover:scale-105 transition-all duration-300 cursor-default shadow-sm">
                    {lang}
                  </span>
                ))}
              </div>
              <script type="module" src="https://unpkg.com/@splinetool/viewer@1.12.0/build/spline-viewer.js"></script>
              {/* Crop the iframe vertically by placing it in an overflow-hidden container.
                  Two iframes are rendered: the first (light-mode spline) is hidden in dark mode,
                  the second (animated sun) is shown only in dark mode. Both share the same
                  positioning so the top/bottom crop remains identical. */}
              <div className="relative w-full h-64 md:h-96 overflow-hidden rounded">
                {/* Light mode spline (visible when not dark) */}
                <iframe
                  src="https://my.spline.design/star-SC1iK5osclgqkd2RAXXO9B4k/"
                  className="absolute left-0 w-full min-h-[140%] top-1/2 -translate-y-1/2 dark:hidden"
                  style={{ border: 0 }}
                  title="3D Star (light)"
                />

                {/* Dark mode animated sun (visible only in dark) */}
                <iframe
                  src="https://my.spline.design/moonrotationwobble-7Dnu6sa2Qs9YFs56Ix2hsNiG/"
                  className="absolute left-0 w-full min-h-[140%] top-1/2 -translate-y-1/2 hidden dark:block"
                  style={{ border: 0 }}
                  title="Animated Sun (dark)"
                  frameBorder={0}
                />
              </div>
            </section>
          </div>

          {/* Mobile Footer CTA (Visible only on Mobile) */}
          <section className="lg:hidden p-6 md:p-12 bg-jap-black dark:bg-neutral-900 text-jap-white dark:text-neutral-400 transition-colors duration-300">
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-4xl font-serif mb-4 text-jap-white dark:text-white">Let's Build.</h2>
                <a href={`mailto:${PROFILE.email}`} className="text-xl border-b border-jap-white/30 hover:border-jap-white dark:border-neutral-600 dark:hover:border-white transition-colors pb-1">
                  {PROFILE.email}
                </a>
              </div>
              <a href="/Resume_TCS_Latest.pdf" download className="flex items-center gap-2 px-6 py-3 bg-jap-white dark:bg-neutral-800 text-jap-black dark:text-white font-bold uppercase tracking-wider hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors w-fit">
                <Download size={18} /> Resume
              </a>
            </div>
          </section>

          {/* Copyright Footer */}
          <footer className="p-6 md:p-12 bg-neutral-100 dark:bg-neutral-950 text-right transition-colors duration-300 border-t border-neutral-900 dark:border-neutral-700">
            <p className="font-mono text-neutral-500 dark:text-neutral-600 text-sm">© {new Date().getFullYear()} Soham Dey.</p>
          </footer>
        </main>
      </div>
      <ChatAssistant />
    </div>
  );
}
