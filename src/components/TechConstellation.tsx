"use client";

import React, { useState } from "react";
import { portfolioConfig } from "@/config/portfolio.config";
import { Network, ArrowRight, Info } from "lucide-react";

export function TechConstellation() {
  const [activeNodeId, setActiveNodeId] = useState<string>("fastapi");

  const nodes = portfolioConfig.techConstellationNodes;
  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[0];

  const getNodeColor = (group: string) => {
    switch (group) {
      case "language":
        return "#2563eb";
      case "framework":
        return "#7c3aed";
      case "database":
        return "#0284c7";
      case "gis":
        return "#059669";
      default:
        return "#d97706";
    }
  };

  return (
    <section id="constellation" className="py-24 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-600">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>[SECTION.05]</span>
            <span className="text-slate-400">//</span>
            <span>SYSTEM TOPOLOGY MAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Technology Constellation
          </h2>
          <p className="text-slate-600 text-sm max-w-xl">
            Interactive system network topology mapping how Python APIs, React web clients, QGIS spatial tools, and databases connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Interactive SVG Map */}
          <div className="lg:col-span-8 glass-panel p-6 rounded-2xl border border-slate-200 bg-slate-50 relative overflow-hidden min-h-[380px] flex flex-col justify-between shadow-sm">
            <div className="flex items-center justify-between font-mono text-xs text-slate-600 mb-4">
              <span className="flex items-center gap-2 text-blue-600 font-bold">
                <Network className="w-4 h-4" /> Node Network Graph
              </span>
              <span>Click or hover nodes to inspect integration pipelines</span>
            </div>

            {/* Nodes Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 py-6">
              {nodes.map((node) => {
                const isSelected = node.id === activeNodeId;
                const isConnected = activeNode.connections.includes(node.id);
                const color = getNodeColor(node.group);

                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNodeId(node.id)}
                    onMouseEnter={() => setActiveNodeId(node.id)}
                    className={`p-4 rounded-xl font-mono text-xs flex flex-col items-center justify-center space-y-2 transition-all cursor-pointer border ${
                      isSelected
                        ? "bg-white border-blue-600 shadow-md shadow-blue-500/20 scale-105"
                        : isConnected
                        ? "bg-white border-purple-300 text-slate-900 shadow-sm"
                        : "bg-white/60 border-slate-200 text-slate-600 hover:border-slate-400"
                    }`}
                  >
                    <div
                      className="w-3 h-3 rounded-full animate-pulse"
                      style={{ backgroundColor: color }}
                    />
                    <span className="font-bold text-slate-900">{node.label}</span>
                    <span className="text-[9px] uppercase tracking-wider text-slate-500">
                      {node.group}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Status Bar */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between font-mono text-xs text-slate-600">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Active Node: <strong className="text-slate-900">{activeNode.label}</strong>
              </span>
              <span>Connected Pipelines: {activeNode.connections.length}</span>
            </div>
          </div>

          {/* Right Side: Telemetry Inspector */}
          <div className="lg:col-span-4 glass-panel p-6 rounded-2xl border border-blue-200 bg-white space-y-6 shadow-sm">
            <div className="space-y-2 border-b border-slate-200 pb-4">
              <span className="font-mono text-xs text-blue-600 font-bold flex items-center gap-1.5">
                <Info className="w-4 h-4" /> NODE TELEMETRY INSPECTOR
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-mono">
                {activeNode.label}
              </h3>
              <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-blue-50 text-blue-700 border border-blue-200 font-bold">
                {activeNode.group} LAYER
              </span>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs text-slate-500 font-bold block">
                INTEGRATION PURPOSE
              </span>
              <p className="text-xs text-slate-700 leading-relaxed font-sans">
                {activeNode.details}
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-200">
              <span className="font-mono text-xs text-slate-500 font-bold block">
                CONNECTED PIPELINE NODES ({activeNode.connections.length})
              </span>
              <div className="flex flex-wrap gap-2">
                {activeNode.connections.map((connId) => {
                  const connNode = nodes.find((n) => n.id === connId);
                  return (
                    <button
                      key={connId}
                      onClick={() => setActiveNodeId(connId)}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 flex items-center gap-1 font-medium"
                    >
                      <span>{connNode?.label || connId}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
