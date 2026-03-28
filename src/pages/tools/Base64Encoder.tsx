import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";

export default function Base64Encoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleEncode = () => {
    try {
      setError("");
      // Support for unicode characters
      const encoded = btoa(unescape(encodeURIComponent(input)));
      setOutput(encoded);
    } catch (e) {
      setError("Invalid text for Base64 encoding.");
    }
  };

  return (
    <ToolContainer
      title="Base64 Encoder"
      description="Convert text into Base64 encoded format."
      onCopy={() => navigator.clipboard.writeText(output)}
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Input Text</label>
          <textarea
            className="w-full h-40 p-6 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-medium resize-none"
            placeholder="Enter text to encode..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <button
          onClick={handleEncode}
          className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
        >
          Encode to Base64
        </button>

        {error && (
          <div className="p-4 bg-rose-50 text-rose-600 rounded-2xl text-sm font-medium border border-rose-100">
            {error}
          </div>
        )}

        {output && (
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Base64 Output</label>
            <textarea
              readOnly
              className="w-full h-40 p-6 bg-slate-50 border border-slate-200 rounded-3xl outline-none font-mono text-sm resize-none"
              value={output}
            />
          </div>
        )}
      </div>
    </ToolContainer>
  );
}
