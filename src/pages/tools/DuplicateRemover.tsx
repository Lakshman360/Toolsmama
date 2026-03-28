import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";

export default function DuplicateRemover() {
  const [text, setText] = useState("");
  const [removedCount, setRemovedCount] = useState(0);

  const process = () => {
    const lines = text.split("\n");
    const uniqueLines = Array.from(new Set(lines.map(l => l.trim()).filter(l => l !== "")));
    setRemovedCount(lines.length - uniqueLines.length);
    setText(uniqueLines.join("\n"));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <ToolContainer
      title="Duplicate Remover"
      description="Remove duplicate lines from your text or lists instantly."
      onCopy={handleCopy}
    >
      <div className="space-y-8">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Input List</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Item 1\nItem 2\nItem 1..."
            className="w-full h-64 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-slate-700 focus:border-indigo-500 outline-none transition-all resize-none font-mono leading-relaxed"
          />
        </div>
        <button
          onClick={process}
          className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98]"
        >
          Remove Duplicates
        </button>
        {removedCount > 0 && (
          <div className="p-6 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-2xl text-sm font-bold text-center">
            Successfully removed {removedCount} duplicate lines!
          </div>
        )}
      </div>
    </ToolContainer>
  );
}
