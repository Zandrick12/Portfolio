import React from "react";
import { portfolioConfig } from "@/config/portfolio.config";
import { ShieldCheck, Award, Flag, Users, FileText, CheckCircle2, Map, Radio } from "lucide-react";

export function RotcExperience() {
  return (
    <section id="rotc" className="py-24 relative bg-tech-grid-light border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-600">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>[SECTION.04]</span>
            <span className="text-slate-400">//</span>
            <span>LEADERSHIP & SERVICE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            ROTC Leadership & Unit Experience
          </h2>
          <p className="text-slate-600 text-sm max-w-xl">
            Cadet Officer leadership at ESSUC ROTC Maragap Unit, connecting IT software systems with organizational duty, military instruction, and community service.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: ROTC Cards */}
          <div className="lg:col-span-7 space-y-6">
            {portfolioConfig.rotcExperience.map((exp) => (
              <div
                key={exp.id}
                className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                  <div>
                    <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-wider">
                      {exp.unit}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 font-mono">
                      {exp.role}
                    </h3>
                  </div>
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    {exp.period}
                  </span>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed font-sans">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2">
                  <span className="font-mono text-xs text-slate-500 font-bold block">KEY RESPONSIBILITIES & ACTIVITIES</span>
                  <ul className="space-y-1.5 text-xs text-slate-700 font-sans">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-xs">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: ROTC Instruction & Community Activities Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-blue-200 bg-blue-50/50 space-y-6">
              <div className="space-y-1 border-b border-blue-200 pb-4">
                <span className="font-mono text-xs text-blue-700 font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> CADET OFFICER HIGHLIGHTS
                </span>
                <h4 className="text-lg font-bold text-slate-900 font-mono">
                  Instruction & Community Duty
                </h4>
              </div>

              <div className="space-y-3 font-sans text-xs text-slate-700">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <Radio className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold font-mono text-slate-900">Basic Signal Communication</h5>
                    <p className="text-slate-600 text-[11px]">Facilitated signal communication protocols & radio instruction for cadets.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <Map className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold font-mono text-slate-900">Map Reading & Orienteering</h5>
                    <p className="text-slate-600 text-[11px]">Taught basic map reading, compass navigation, and land orienteering exercises.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <Users className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold font-mono text-slate-900">Community Clean-up & Blood Donation</h5>
                    <p className="text-slate-600 text-[11px]">Organized student participation in campus clean-up initiatives and blood drives.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <Flag className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold font-mono text-slate-900">Boy Scouts / Girl Scouts Camporee</h5>
                    <p className="text-slate-600 text-[11px]">Coordinated logistics, cadet supervision, and event activities during joint camporees.</p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-blue-200 text-center font-mono text-xs text-blue-800">
                &ldquo;ROTC leadership combined with IT software development creates authentic problem-solving experience.&rdquo;
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
