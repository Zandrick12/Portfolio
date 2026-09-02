"use client";

import React, { useState } from "react";
import { portfolioConfig } from "@/config/portfolio.config";
import { SkillCategory, ProficiencyLevel } from "@/types/portfolio";
import { Code2, Layout, Server, Database, Wrench, MapPin, CheckCircle, Sparkles, BookOpen } from "lucide-react";

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories: SkillCategory[] = [
    "Programming",
    "Frameworks / Web",
    "Backend & Runtime",
    "Databases",
    "Auth & DevOps",
    "GIS & Data Analysis",
  ];

  const filteredSkills =
    selectedCategory === "All"
      ? portfolioConfig.skills
      : portfolioConfig.skills.filter((s) => s.category === selectedCategory);

  const getProficiencyStyle = (level: ProficiencyLevel) => {
    switch (level) {
      case "Building With":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Familiar":
        return "bg-purple-50 text-purple-700 border-purple-200";
      case "Learning":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  const getCategoryIcon = (cat: SkillCategory) => {
    switch (cat) {
      case "Programming":
        return <Code2 className="w-4 h-4 text-blue-600" />;
      case "Frameworks / Web":
        return <Layout className="w-4 h-4 text-purple-600" />;
      case "Backend & Runtime":
        return <Server className="w-4 h-4 text-emerald-600" />;
      case "Databases":
        return <Database className="w-4 h-4 text-sky-600" />;
      case "Auth & DevOps":
        return <Wrench className="w-4 h-4 text-amber-600" />;
      case "GIS & Data Analysis":
        return <MapPin className="w-4 h-4 text-indigo-600" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-600">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>[SECTION.03]</span>
            <span className="text-slate-400">//</span>
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Skills & Technical Tools
              </h2>
              <p className="text-slate-600 text-sm max-w-xl mt-1">
                Structured technical capabilities labeled transparently by practical proficiency. No meaningless percentage bars.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 glass-pill p-1.5 rounded-xl border border-slate-200 bg-slate-50">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`px-3.5 py-1.5 rounded-lg font-mono text-xs transition-all ${
                  selectedCategory === "All"
                    ? "bg-blue-600 text-white font-bold shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                }`}
              >
                All Capabilities
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg font-mono text-xs transition-all ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white font-bold shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 mb-8 font-mono text-xs bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm">
          <span className="text-slate-500 font-bold">PROFICIENCY LEGEND:</span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded border bg-blue-50 text-blue-700 border-blue-200 font-medium">
            <CheckCircle className="w-3 h-3 text-blue-600" /> Building With (Active In Projects)
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded border bg-purple-50 text-purple-700 border-purple-200 font-medium">
            <Sparkles className="w-3 h-3 text-purple-600" /> Familiar (Applied Knowledge)
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded border bg-emerald-50 text-emerald-700 border-emerald-200 font-medium">
            <BookOpen className="w-3 h-3 text-emerald-600" /> Learning (Active Study)
          </span>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-panel glass-panel-hover p-5 rounded-xl border border-slate-200 bg-white flex flex-col justify-between space-y-3 shadow-sm"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-mono text-[11px] text-slate-500">
                    {getCategoryIcon(skill.category)}
                    {skill.category}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${getProficiencyStyle(
                      skill.proficiency
                    )}`}
                  >
                    {skill.proficiency}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-mono">
                  {skill.name}
                </h3>
              </div>

              {skill.description && (
                <p className="text-xs text-slate-600 leading-relaxed font-sans pt-1 border-t border-slate-100">
                  {skill.description}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
