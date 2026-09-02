import React from "react";
import { portfolioConfig } from "@/config/portfolio.config";
import { CheckCircle2, Circle } from "lucide-react";

export function Journey() {
  return (
    <section id="journey" className="py-24 relative bg-tech-grid-light border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-600">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>[SECTION.06]</span>
            <span className="text-slate-400">//</span>
            <span>EVOLUTION & GROWTH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            My Development Journey
          </h2>
          <p className="text-slate-600 text-sm max-w-xl">
            A transparent timeline of technical progression—from Android mobile scripting to full-stack web applications and ESSU BSIT studies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {portfolioConfig.journey.map((item) => {
            const isCurrent = item.status === "Current Focus";
            const isCompleted = item.status === "Completed";

            return (
              <div key={item.title} className="relative group">
                
                {/* Dot */}
                <div className="absolute -left-[32px] sm:-left-[49px] top-1">
                  {isCompleted ? (
                    <div className="w-6 h-6 rounded-full bg-blue-100 border-2 border-blue-600 flex items-center justify-center text-blue-600 shadow-sm">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                  ) : isCurrent ? (
                    <div className="w-6 h-6 rounded-full bg-purple-100 border-2 border-purple-600 flex items-center justify-center text-purple-600 animate-pulse shadow-sm">
                      <Circle className="w-3.5 h-3.5 fill-purple-600" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-white border-2 border-slate-400 flex items-center justify-center text-slate-400">
                      <Circle className="w-3 h-3" />
                    </div>
                  )}
                </div>

                {/* Card */}
                <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                        {item.period}
                      </span>
                      <span className="font-mono text-xs text-slate-500 uppercase tracking-wider font-semibold">
                        PHASE: {item.phase}
                      </span>
                    </div>

                    <span
                      className={`font-mono text-xs font-bold px-3 py-1 rounded-full border ${
                        isCompleted
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : isCurrent
                          ? "bg-purple-50 text-purple-700 border-purple-200"
                          : "bg-slate-100 text-slate-600 border-slate-200"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-mono">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-700 leading-relaxed font-sans">
                    {item.description}
                  </p>

                  {/* Skills Badges */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {item.keySkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 text-slate-800 border border-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
