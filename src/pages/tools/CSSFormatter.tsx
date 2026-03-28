import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";
import beautify from "js-beautify";

export default function CSSFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const format = () => {
    if (!input) return;
    try {
      const formatted = beautify.css(input, {
        indent_size: 2,
        indent_char: " ",
        selector_separator_newline: true,
        newline_between_rules: true,
      });
      setOutput(formatted);
    } catch (e) {
      setOutput("Error: Invalid CSS");
    }
  };

  const minify = () => {
    if (!input) return;
    const minified = input
      .replace(/\s+/g, " ")
      .replace(/\/\*.*?\*\//g, "")
      .replace(/ ?\{ ?/g, "{")
      .replace(/ ?\} ?/g, "}")
      .replace(/ ?\: ?/g, ":")
      .replace(/ ?\; ?/g, ";")
      .trim();
    setOutput(minified);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <ToolContainer
      title="CSS Formatter"
      description="Beautify or minify your CSS code instantly."
      onCopy={handleCopy}
    >
      <div className="space-y-8">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">CSS Input</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your CSS here..."
            className="w-full h-64 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-slate-700 focus:border-indigo-500 outline-none transition-all resize-none font-mono text-sm leading-relaxed"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={format}
            className="py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98]"
          >
            Beautify CSS
          </button>
          <button
            onClick={minify}
            className="py-5 bg-slate-800 text-white rounded-2xl font-black text-lg hover:bg-slate-900 transition-all shadow-xl shadow-slate-200 active:scale-[0.98]"
          >
            Minify CSS
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
