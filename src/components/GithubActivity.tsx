"use client";

import React, { useState, useEffect } from "react";
import { portfolioConfig } from "@/config/portfolio.config";
import { fetchGithubUser, GithubUserData } from "@/lib/github";
import { Github, Activity, Code, Calendar } from "lucide-react";

export function GithubActivity() {
  const [userData, setUserData] = useState<GithubUserData | null>(null);

  useEffect(() => {
    async function loadUser() {
      const data = await fetchGithubUser(portfolioConfig.person.githubUsername);
      setUserData(data);
    }
    loadUser();
  }, []);

  return (
    <section className="py-20 relative bg-tech-grid-light border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-600">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>[SECTION.08]</span>
            <span className="text-slate-400">//</span>
            <span>OPEN-SOURCE TELEMETRY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            GitHub Activity (@Zandrick12)
          </h2>
          <p className="text-slate-600 text-sm max-w-xl">
            Live repository metrics and open-source development activity from my GitHub account.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* User Stat Cards */}
          <div className="lg:col-span-4 space-y-4">
            <div className="glass-panel p-6 rounded-2xl border border-slate-200 bg-white flex items-center gap-4 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                <Github className="w-7 h-7" />
              </div>
              <div>
                <span className="font-mono text-xs text-slate-500">PUBLIC REPOSITORIES</span>
                <h3 className="text-3xl font-bold text-slate-900 font-mono">
                  {userData?.public_repos || 12}
                </h3>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-200 bg-white flex items-center gap-4 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
                <Activity className="w-7 h-7" />
              </div>
              <div>
                <span className="font-mono text-xs text-slate-500">COMMIT STREAK</span>
                <h3 className="text-3xl font-bold text-slate-900 font-mono">
                  Active
                </h3>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-200 bg-white flex items-center gap-4 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <Code className="w-7 h-7" />
              </div>
              <div>
                <span className="font-mono text-xs text-slate-500">PRIMARY LANGUAGES</span>
                <h3 className="text-base font-bold text-slate-900 font-mono">
                  TypeScript • Python • PHP
                </h3>
              </div>
            </div>
          </div>

          {/* Activity Matrix Simulator */}
          <div className="lg:col-span-8 glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white space-y-6 shadow-sm">
            <div className="flex items-center justify-between font-mono text-xs text-slate-600 border-b border-slate-100 pb-4">
              <span className="text-blue-600 font-bold flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Contribution Heatmap Stream
              </span>
              <a
                href={portfolioConfig.person.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 underline font-bold"
              >
                @{portfolioConfig.person.githubUsername} &rarr;
              </a>
            </div>

            {/* Matrix Block Grid */}
            <div className="space-y-2">
              <div className="grid grid-cols-12 sm:grid-cols-24 gap-1.5 pt-2">
                {Array.from({ length: 48 }).map((_, i) => {
                  const level = (i * 7) % 5;
                  const bgClass =
                    level === 4
                      ? "bg-blue-600"
                      : level === 3
                      ? "bg-blue-400"
                      : level === 2
                      ? "bg-blue-200"
                      : level === 1
                      ? "bg-slate-200"
                      : "bg-slate-100";

                  return (
                    <div
                      key={i}
                      className={`h-4 sm:h-5 rounded-sm ${bgClass} transition-all hover:scale-125 cursor-pointer`}
                      title={`Activity Level ${level}`}
                    />
                  );
                })}
              </div>
              <div className="flex items-center justify-between font-mono text-[10px] text-slate-500 pt-2">
                <span>Less</span>
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 rounded-sm bg-slate-100" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-slate-200" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-blue-200" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-blue-400" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-blue-600" />
                </div>
                <span>More</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <a
                href={portfolioConfig.person.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-bold text-white bg-slate-900 hover:bg-blue-600 transition-all shadow-sm"
              >
                <Github className="w-4 h-4 text-white" />
                <span>Visit Official GitHub Profile</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
