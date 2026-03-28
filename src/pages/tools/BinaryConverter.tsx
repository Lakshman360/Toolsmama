import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";

export default function BinaryConverter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const textToBinary = () => {
    const bin = input.split("").map(char => char.charCodeAt(0).toString(2).padStart(8, "0")).join(" ");
    setOutput(bin);
  };

  const binaryToText = () => {
    try {
      const text = input.split(" ").map(bin => String.fromCharCode(parseInt(bin, 2))).join("");
      setOutput(text);
    } catch (e) {
      setOutput("Error: Invalid Binary");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <ToolContainer
      title="Binary Converter"
      description="Convert text to binary and binary back to text instantly."
      onCopy={handleCopy}
    >
      <div className="space-y-8">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Input</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text or binary here..."
            className="w-full h-40 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-slate-700 focus:border-indigo-500 outline-none transition-all resize-none font-mono leading-relaxed"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={textToBinary}
            className="py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98]"
          >
            Text → Binary
          </button>
          <button
            onClick={binaryToText}
            className="py-5 bg-slate-800 text-white rounded-2xl font-black text-lg hover:bg-slate-900 transition-all shadow-xl shadow-slate-200 active:scale-[0.98]"
          >
            Binary → Text
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
