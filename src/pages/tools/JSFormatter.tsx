import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";
import beautify from "js-beautify";

export default function JSFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const format = () => {
    if (!input) return;
    try {
      const formatted = beautify.js(input, {
        indent_size: 2,
        indent_char: " ",
        max_preserve_newlines: 2,
        preserve_newlines: true,
        brace_style: "collapse",
        end_with_newline: false,
        wrap_line_length: 0,
        indent_empty_lines: false,
      });
      setOutput(formatted);
    } catch (e) {
      setOutput("Error: Invalid JavaScript");
    }
  };

  const minify = () => {
    if (!input) return;
    // Simple regex-based minification for demo. In production, use a real minifier like Terser.
    const minified = input
      .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "$1") // Remove comments
      .replace(/\s+/g, " ") // Collapse whitespace
      .trim();
    setOutput(minified);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <ToolContainer
      title="JS Formatter"
      description="Beautify or minify your JavaScript code instantly."
      onCopy={handleCopy}
    >
      <div className="space-y-8">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">JS Input</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your JavaScript here..."
            className="w-full h-64 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-slate-700 focus:border-indigo-500 outline-none transition-all resize-none font-mono text-sm leading-relaxed"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={format}
            className="py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98]"
          >
            Beautify JS
          </button>
          <button
            onClick={minify}
            className="py-5 bg-slate-800 text-white rounded-2xl font-black text-lg hover:bg-slate-900 transition-all shadow-xl shadow-slate-200 active:scale-[0.98]"
          >
            Minify JS (Basic)
          </button>
        </div>
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
