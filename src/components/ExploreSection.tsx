import React from "react";
import { portfolioConfig } from "@/config/portfolio.config";

export function ExploreSection() {
  return (
    <section id="explore" className="py-20 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-600">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>[SECTION.07]</span>
            <span className="text-slate-400">//</span>
            <span>ACTIVE STUDY & ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Currently Exploring
          </h2>
          <p className="text-slate-600 text-sm max-w-xl">
            Core computer science fundamentals, backend API architectures, cybersecurity, and spatial GIS mapping topics I am studying.
          </p>
        </div>

        {/* Numbered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioConfig.exploring.map((topic) => (
            <div
              key={topic.id}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between space-y-4 shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-blue-600">
                    {topic.code}
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Active Study
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-mono">
                  {topic.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {topic.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5 font-mono text-[10px]">
                {topic.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
