import React from "react";
import { portfolioConfig } from "@/config/portfolio.config";
import { FooterVectorArt } from "./VectorArt";
import { Github, Linkedin, Mail, Cpu, ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative bg-white border-t border-slate-200 pt-12 pb-8 overflow-hidden">
      
      {/* Vector Line Graphic */}
      <div className="mb-8 opacity-30">
        <FooterVectorArt />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-200">
          
          {/* Identity */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-600" />
              <span className="font-mono text-base font-bold text-slate-900 tracking-tight">
                {portfolioConfig.person.name.toUpperCase()}
              </span>
            </div>
            <p className="font-mono text-xs text-slate-600">
              {portfolioConfig.person.university} • {portfolioConfig.person.degree}
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-slate-600 font-medium">
            <a href="#hero" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#rotc" className="hover:text-blue-600 transition-colors">ROTC Leadership</a>
            <a href="#journey" className="hover:text-blue-600 transition-colors">Journey</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2.5">
            <a
              href={portfolioConfig.person.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl glass-pill hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors border border-slate-200"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-slate-900" />
            </a>

            <a
              href={portfolioConfig.person.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl glass-pill hover:bg-slate-100 text-slate-700 hover:text-blue-600 transition-colors border border-slate-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-blue-600" />
            </a>

            <a
              href={portfolioConfig.person.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="px-2.5 py-1 rounded-xl glass-pill hover:bg-slate-100 text-xs font-mono font-bold text-blue-600 transition-colors border border-slate-200"
              aria-label="Facebook"
            >
              FB
            </a>

            <a
              href={`mailto:${portfolioConfig.person.email}`}
              className="p-2 rounded-xl glass-pill hover:bg-slate-100 text-slate-700 hover:text-blue-600 transition-colors border border-slate-200"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-purple-600" />
            </a>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-slate-500 gap-2">
          <p>© {currentYear} {portfolioConfig.person.name}. Built with Next.js, TypeScript & Tailwind CSS.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>[ESSUC.BSIT.OPERATIONAL]</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
