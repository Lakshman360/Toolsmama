import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";
import formatXML from "xml-formatter";

export default function XMLFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleFormat = () => {
    if (!input) return;
    try {
      const formatted = formatXML(input, {
        indentation: "  ",
        collapseContent: true,
        lineSeparator: "\n",
      });
      setOutput(formatted);
    } catch (e) {
      setOutput("Error: Invalid XML");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <ToolContainer
      title="XML Formatter"
      description="Beautify your XML code for better readability."
      onCopy={handleCopy}
    >
      <div className="space-y-8">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">XML Input</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="<root><child>Hello</child></root>"
            className="w-full h-64 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-slate-700 focus:border-indigo-500 outline-none transition-all resize-none font-mono text-sm leading-relaxed"
          />
        </div>
        <button
          onClick={handleFormat}
          className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98]"
        >
          Beautify XML
        </button>
        {output && (
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Output</label>
            <pre className="w-full p-8 bg-slate-900 text-indigo-300 rounded-3xl font-mono text-xs overflow-x-auto leading-relaxed shadow-2xl">
              {output}
            </pre>
          </div>
        )}
      </div>
    </ToolContainer>
  );
}
