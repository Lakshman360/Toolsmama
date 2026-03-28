import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";

export default function TextSorter() {
  const [text, setText] = useState("");

  const sortText = (reverse = false) => {
    const lines = text.split("\n").filter(l => l.trim() !== "");
    lines.sort((a, b) => a.localeCompare(b));
    if (reverse) lines.reverse();
    setText(lines.join("\n"));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <ToolContainer
      title="Text Sorter"
      description="Sort lines of text alphabetically or in reverse order."
      onCopy={handleCopy}
    >
      <div className="space-y-8">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Input Text (One item per line)</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Apple\nBanana\nCherry..."
            className="w-full h-64 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-slate-700 focus:border-indigo-500 outline-none transition-all resize-none font-mono leading-relaxed"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => sortText(false)}
            className="py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98]"
          >
            A → Z
          </button>
          <button
            onClick={() => sortText(true)}
            className="py-5 bg-slate-800 text-white rounded-2xl font-black text-lg hover:bg-slate-900 transition-all shadow-xl shadow-slate-200 active:scale-[0.98]"
          >
            Z → A
          </button>
        </div>
      </div>
    </ToolContainer>
  );
}
