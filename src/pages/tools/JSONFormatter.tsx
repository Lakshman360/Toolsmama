import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";

export default function JSONFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleFormat = () => {
    try {
      setError("");
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
    } catch (e) {
      setError("Invalid JSON format. Please check your input.");
    }
  };

  return (
    <ToolContainer
      title="JSON Formatter"
      description="Format and beautify your JSON data for better readability."
      onCopy={() => navigator.clipboard.writeText(output)}
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Input JSON</label>
          <textarea
            className="w-full h-64 p-6 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-mono text-sm resize-none"
            placeholder='Paste your JSON here...\n\n{"name":"SmartConverter","version":1}'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <button
          onClick={handleFormat}
          className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
        >
          Format JSON
        </button>

        {error && (
          <div className="p-4 bg-rose-50 text-rose-600 rounded-2xl text-sm font-medium border border-rose-100">
            {error}
          </div>
        )}

        {output && (
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Formatted Output</label>
            <textarea
              readOnly
              className="w-full h-64 p-6 bg-slate-50 border border-slate-200 rounded-3xl outline-none font-mono text-sm resize-none"
              value={output}
            />
          </div>
        )}
      </div>
    </ToolContainer>
  );
}
