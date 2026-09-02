import React from "react";

export function SkeletonCard() {
  return (
    <div className="glass-panel p-6 rounded-2xl border border-slate-200/80 bg-white/80 space-y-4 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="h-5 w-24 bg-slate-200 rounded-md" />
        <div className="h-4 w-10 bg-slate-200 rounded-md" />
      </div>

      <div className="space-y-2">
        <div className="h-6 w-3/4 bg-slate-200 rounded-md" />
        <div className="h-4 w-1/2 bg-slate-200 rounded-md" />
      </div>

      <div className="space-y-2">
        <div className="h-3.5 w-full bg-slate-200 rounded" />
        <div className="h-3.5 w-5/6 bg-slate-200 rounded" />
      </div>

      <div className="flex gap-2 pt-2">
        <div className="h-5 w-16 bg-slate-200 rounded" />
        <div className="h-5 w-20 bg-slate-200 rounded" />
        <div className="h-5 w-14 bg-slate-200 rounded" />
      </div>

      <div className="pt-4 border-t border-slate-100 flex justify-between">
        <div className="h-4 w-28 bg-slate-200 rounded" />
        <div className="h-4 w-6 bg-slate-200 rounded-full" />
      </div>
    </div>
  );
}

export function SkeletonRepoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}

export function SkeletonTextLines({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2 animate-pulse">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-3.5 bg-slate-200 rounded"
          style={{ width: `${100 - i * 15}%` }}
        />
      ))}
    </div>
  );
}
