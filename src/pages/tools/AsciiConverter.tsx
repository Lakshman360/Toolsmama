import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";

export default function AsciiConverter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const textToAscii = () => {
    const ascii = input.split("").map(char => char.charCodeAt(0)).join(" ");
    setOutput(ascii);
  };

  const asciiToText = () => {
    try {
      const text = input.split(/\s+/).filter(x => x).map(code => String.fromCharCode(parseInt(code))).join("");
      setOutput(text);
    } catch (e) {
      setOutput("Error: Invalid ASCII codes");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <ToolContainer
      title="ASCII Converter"
      description="Convert text to ASCII codes and vice versa."
      onCopy={handleCopy}
    >
      <div className="space-y-8">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Input</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text or ASCII codes (e.g., 72 101 108 108 111)..."
            className="w-full h-40 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-slate-700 focus:border-indigo-500 outline-none transition-all resize-none font-mono leading-relaxed"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={textToAscii}
            className="py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98]"
          >
            Text → ASCII
          </button>
          <button
            onClick={asciiToText}
            className="py-5 bg-slate-800 text-white rounded-2xl font-black text-lg hover:bg-slate-900 transition-all shadow-xl shadow-slate-200 active:scale-[0.98]"
          >
            ASCII → Text
          </button>
        </div>
        {output && (
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Output</label>
            <div className="w-full min-h-[120px] p-6 bg-slate-50 border border-slate-200 rounded-3xl font-mono text-sm text-slate-600 break-all leading-relaxed">
              {output}
            </div>
          </div>
        )}
      </div>
    </ToolContainer>
  );
}
