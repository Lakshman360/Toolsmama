import { useState } from "react";
import { Link as LinkIcon, Copy, Check, Trash2, Zap, ShieldCheck, Sparkles } from "lucide-react";
import ToolLayout from "../../components/ToolLayout";

export default function SlugGenerator() {
  const [input, setInput] = useState("");
  const [slug, setSlug] = useState("");
  const [copied, setCopied] = useState(false);

  const generateSlug = (text: string) => {
    setInput(text);
    const result = text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
    setSlug(result);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(slug);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolLayout
      title="Slug Generator"
      desc="Convert any text into a URL-friendly slug instantly."
      icon={LinkIcon}
      badge="SEO Tool"
      features={[
        { icon: Sparkles, title: "URL Friendly", desc: "Removes special characters and spaces for clean URLs." },
        { icon: Zap, title: "Real-Time", desc: "Slug updates as you type your text." },
        { icon: ShieldCheck, title: "Private", desc: "Processing happens entirely in your browser." }
      ]}
    >
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/50 space-y-8">
        <div className="space-y-4">
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Enter Text</label>
          <input
            type="text"
            value={input}
            onChange={(e) => generateSlug(e.target.value)}
            placeholder="My Awesome Blog Post Title"
            className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-indigo-500 transition-all font-bold text-slate-700"
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-widest">Generated Slug</h4>
            <button onClick={copyToClipboard} className={`p-2 rounded-lg transition-all flex items-center gap-2 text-xs font-bold ${copied ? "bg-emerald-50 text-emerald-600" : "bg-slate-50 text-slate-400 hover:text-indigo-600"}`}>
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <div className="w-full p-6 bg-slate-50 border border-slate-100 rounded-2xl font-mono text-lg text-indigo-600 break-all">
            {slug || "your-slug-will-appear-here"}
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
