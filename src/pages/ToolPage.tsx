import React, { Suspense, useMemo, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { TOOLS } from "../registry/tools";

export default function ToolPage() {
  const { id } = useParams<{ id: string }>();
  
  const tool = useMemo(() => TOOLS.find(t => t.id === id), [id]);

  if (!tool) {
    return <Navigate to="/" replace />;
  }

  const ToolComponent = tool.component;

  return (
    <Suspense fallback={<ToolLoading />}>
      <ToolComponent />
    </Suspense>
  );
}

function ToolLoading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
        <p className="text-slate-500 font-medium">Loading Tool...</p>
      </div>
    </div>
  );
}
