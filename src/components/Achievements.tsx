import React from "react";
import { portfolioConfig } from "@/config/portfolio.config";
import { Award, ShieldCheck, Trophy } from "lucide-react";

export function Achievements() {
  return (
    <section className="py-20 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-600">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>[SECTION.09]</span>
            <span className="text-slate-400">//</span>
            <span>ACCOMPLISHMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Achievements & Leadership
          </h2>
          <p className="text-slate-600 text-sm max-w-xl">
            Key milestones, ROTC Bn S7 designations, IT Fundamentals, Cybersecurity, Networking, GIS spatial studies, and project honors at ESSUC.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioConfig.achievements.map((item) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between space-y-4 shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                    {item.type}
                  </span>
                  <span className="font-mono text-xs text-slate-500">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-mono leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs font-mono text-blue-600 font-semibold">
                  {item.organization}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between font-mono text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> Verified Leadership
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
