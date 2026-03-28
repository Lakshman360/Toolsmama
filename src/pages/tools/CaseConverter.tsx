import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";

type CaseType = "upper" | "lower" | "title" | "sentence" | "camel" | "pascal" | "snake" | "kebab" | "constant" | "dot" | "alternate" | "inverse";

const CASE_LABELS: Record<CaseType, string> = {
  upper: "UPPERCASE",
  lower: "lowercase",
  title: "Title Case",
  sentence: "Sentence case",
  camel: "camelCase",
  pascal: "PascalCase",
  snake: "snake_case",
  kebab: "kebab-case",
  constant: "CONSTANT_CASE",
  dot: "dot.case",
  alternate: "AlTeRnAtE cAsE",
  inverse: "iNVERSE cAsE"
};

export default function CaseConverter() {
  const [text, setText] = useState("");

  const transformCase = (type: CaseType) => {
    if (!text.trim()) return;
    let result = text;
    switch (type) {
      case "upper": result = text.toUpperCase(); break;
      case "lower": result = text.toLowerCase(); break;
      case "title": result = text.toLowerCase().replace(/(?:^|\s)\S/g, c => c.toUpperCase()); break;
      case "sentence": result = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase()); break;
      case "camel": result = text.toLowerCase().replace(/[^a-z0-9]+(.)/gi, (_, c) => c.toUpperCase()).replace(/^./, c => c.toLowerCase()); break;
      case "pascal": result = text.toLowerCase().replace(/(?:^|[^a-z0-9])([a-z0-9])/gi, (_, c) => c.toUpperCase()); break;
      case "snake": result = text.trim().replace(/\s+/g, "_").replace(/[^a-z0-9_]/gi, "").toLowerCase(); break;
      case "kebab": result = text.trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/gi, "").toLowerCase(); break;
      case "constant": result = text.trim().replace(/\s+/g, "_").replace(/[^a-z0-9_]/gi, "").toUpperCase(); break;
      case "dot": result = text.trim().replace(/\s+/g, ".").replace(/[^a-z0-9.]/gi, "").toLowerCase(); break;
      case "alternate": result = text.split("").map((c, i) => i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()).join(""); break;
      case "inverse": result = text.split("").map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join(""); break;
    }
    setText(result);
  };

  return (
    <ToolContainer
      title="Case Converter"
      description="Convert text between any case format instantly."
      onCopy={() => navigator.clipboard.writeText(text)}
    >
      <div className="space-y-8">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Your Text</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste or type your text here..."
            className="w-full h-64 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-slate-700 focus:border-indigo-500 outline-none transition-all resize-none font-sans leading-relaxed"
          />
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-slate-900 text-sm uppercase tracking-widest">Select Case Format</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {(Object.keys(CASE_LABELS) as CaseType[]).map((type) => (
              <button
                key={type}
                onClick={() => transformCase(type)}
                className="px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-xs font-bold text-slate-600 hover:border-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
              >
                {CASE_LABELS[type]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </ToolContainer>
  );
}
