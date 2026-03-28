import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";

export default function RemoveSpaces() {
  const [text, setText] = useState("");

  const process = () => {
    const result = text.replace(/\s+/g, " ").trim();
    setText(result);
  };

  return (
    <ToolContainer
      title="Remove Extra Spaces"
      description="Clean up messy text by removing multiple spaces, tabs, and newlines."
      onCopy={() => navigator.clipboard.writeText(text)}
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Input Text</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste messy text here..."
            className="w-full h-64 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-slate-700 focus:border-indigo-500 outline-none transition-all resize-none font-sans leading-relaxed"
          />
        </div>
        <button
          onClick={process}
          className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
        >
          Remove Extra Spaces
        </button>
      </div>
    </ToolContainer>
  );
}
