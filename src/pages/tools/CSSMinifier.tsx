import { useState } from "react";
import { Braces, Copy, Check, Trash2, Zap, ShieldCheck, Sparkles } from "lucide-react";
import ToolLayout from "../../components/ToolLayout";

export default function CSSMinifier() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const minify = () => {
    const minified = input
      .replace(/\/\*[\s\S]*?\*\//g, "") // Remove comments
      .replace(/\s+/g, " ") // Collapse spaces
      .replace(/\s*([{}:;,])\s*/g, "$1") // Remove spaces around symbols
      .replace(/;}/g, "}") // Remove last semicolon
      .trim();
    setOutput(minified);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolLayout
      title="CSS Minifier"
      desc="Compress your CSS code for better website performance."
      icon={Braces}
      badge="Developer Tool"
      features={[
        { icon: Sparkles, title: "Performance", desc: "Reduce CSS file size for faster rendering." },
        { icon: Zap, title: "Instant", desc: "Minify your styles locally in milliseconds." },
        { icon: ShieldCheck, title: "Private", desc: "Your styles stay in your browser." }
      ]}
    >
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/50 space-y-6">
        <div className="space-y-4">
          <h4 className="font-bold text-slate-900 text-sm uppercase tracking-widest">Input CSS</h4>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="body {\n  background-color: white;\n  color: black;\n}"
            className="w-full h-48 p-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-700 focus:border-indigo-500 transition-all resize-none font-mono text-sm"
          />
        </div>
        <button onClick={minify} className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
          ⚡ Minify CSS
        </button>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-widest">Minified Output</h4>
            <button onClick={copyToClipboard} className={`p-2 rounded-lg transition-all flex items-center gap-2 text-xs font-bold ${copied ? "bg-emerald-50 text-emerald-600" : "bg-slate-50 text-slate-400 hover:text-indigo-600"}`}>
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <textarea
            readOnly
            value={output}
            placeholder="Minified CSS will appear here..."
            className="w-full h-32 p-4 bg-slate-900 text-indigo-400 border border-slate-800 rounded-2xl font-mono text-sm resize-none"
          />
        </div>
      </div>
    </ToolLayout>
  );
}
