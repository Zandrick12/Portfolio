import React from "react";
import { portfolioConfig } from "@/config/portfolio.config";
import { User, Cpu, Compass, ShieldCheck, Laptop, GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-600">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>[SECTION.01]</span>
            <span className="text-slate-400">//</span>
            <span>IDENTITY & PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            About Me — Zandrick M Quiloña
          </h2>
          <p className="text-slate-600 text-sm max-w-xl">
            BSIT Student at Eastern Samar State University Can-Avid (ESSUC) combining software development, spatial data analysis, IT Support, Networking, Cybersecurity, Data Analysis, and ROTC battalion leadership.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Who I Am */}
          <div className="glass-panel glass-panel-hover p-8 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 shadow-sm">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-mono flex items-center justify-between">
                <span>Who I Am</span>
                <span className="text-xs text-slate-400 font-normal">01</span>
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-sans">
                {portfolioConfig.person.bioSummary}
              </p>
            </div>
            
            <div className="pt-6 border-t border-slate-200 mt-6 flex items-center justify-between font-mono text-xs text-slate-600">
              <span className="flex items-center gap-1 font-bold text-slate-800">
                <GraduationCap className="w-4 h-4 text-blue-600" /> ESSUC BSIT
              </span>
              <span className="text-blue-600 font-bold">2023 - Present</span>
            </div>
          </div>

          {/* Card 2: What I Do */}
          <div className="glass-panel glass-panel-hover p-8 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600 shadow-sm">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-mono flex items-center justify-between">
                <span>What I Do</span>
                <span className="text-xs text-slate-400 font-normal">02</span>
              </h3>
              <ul className="space-y-2.5 text-slate-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-mono font-bold mt-0.5">&gt;</span>
                  <span>Build full-stack web applications (React, TypeScript, Python FastAPI)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-mono font-bold mt-0.5">&gt;</span>
                  <span>Architect real organizational systems (ROTC QR Attendance System)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-mono font-bold mt-0.5">&gt;</span>
                  <span>Analyze GIS spatial coordinate data (QGIS, WGS 84, DRRM mapping)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-mono font-bold mt-0.5">&gt;</span>
                  <span>Serve as ROTC Bn S7 Cadet Officer at ESSU Maragap Unit</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-200 mt-6 flex items-center justify-between font-mono text-xs text-slate-600">
              <span className="flex items-center gap-1 font-bold text-slate-800">
                <ShieldCheck className="w-4 h-4 text-purple-600" /> ROTC Bn S7
              </span>
              <span className="text-purple-600 font-bold">Cadet Officer</span>
            </div>
          </div>

          {/* Card 3: Developer Environment */}
          <div className="glass-panel glass-panel-hover p-8 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-sm">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-mono flex items-center justify-between">
                <span>Developer Setup</span>
                <span className="text-xs text-slate-400 font-normal">03</span>
              </h3>
              <div className="space-y-2 text-xs font-mono text-slate-700">
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex justify-between">
                  <span className="text-slate-500">OS:</span>
                  <span className="font-bold text-slate-900">{portfolioConfig.person.hardwareSpecs.os}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex justify-between">
                  <span className="text-slate-500">Processor:</span>
                  <span className="font-bold text-slate-900">{portfolioConfig.person.hardwareSpecs.processor}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex justify-between">
                  <span className="text-slate-500">RAM & Storage:</span>
                  <span className="font-bold text-slate-900">{portfolioConfig.person.hardwareSpecs.ram} • 1TB</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex justify-between">
                  <span className="text-slate-500">Evolution:</span>
                  <span className="font-bold text-emerald-600">Termux &rarr; VS Code & Docker</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 mt-6 flex items-center justify-between font-mono text-xs text-slate-600">
              <span>Primary IDE: VS Code</span>
              <a href="#journey" className="text-emerald-600 font-bold hover:underline">View Journey &rarr;</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
