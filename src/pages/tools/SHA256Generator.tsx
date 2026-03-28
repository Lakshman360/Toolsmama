import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";

export default function SHA256Generator() {
  const [input, setInput] = useState("");
  const [hash, setHash] = useState("");

  const generateHash = async () => {
    if (!input) return;
    const msgUint8 = new TextEncoder().encode(input);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
    setHash(hashHex);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(hash);
  };

  return (
    <ToolContainer
      title="SHA-256 Generator"
      description="Generate a SHA-256 hash from any text input."
      onCopy={handleCopy}
    >
      <div className="space-y-8">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Input Text</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text here..."
            className="w-full h-40 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-slate-700 focus:border-indigo-500 outline-none transition-all resize-none font-mono leading-relaxed"
          />
        </div>
        <button
          onClick={generateHash}
          disabled={!input}
          className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98] disabled:opacity-50"
        >
          Generate SHA-256 Hash
        </button>
        {hash && (
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">SHA-256 Hash</label>
            <div className="w-full p-6 bg-slate-900 text-indigo-300 rounded-3xl font-mono text-sm break-all leading-relaxed shadow-2xl">
              {hash}
            </div>
          </div>
        )}
      </div>
    </ToolContainer>
  );
}
