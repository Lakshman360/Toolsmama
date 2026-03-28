import { useState } from "react";
import { Timer, RefreshCw, Copy, Check, Zap, ShieldCheck, Sparkles } from "lucide-react";
import ToolLayout from "../../components/ToolLayout";

export default function TimestampConverter() {
  const [timestamp, setTimestamp] = useState(Math.floor(Date.now() / 1000).toString());
  const [copied, setCopied] = useState(false);

  const date = new Date(parseInt(timestamp) * 1000);
  const formatted = date.toString() !== "Invalid Date" ? date.toLocaleString() : "Invalid Timestamp";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolLayout
      title="Timestamp Converter"
      desc="Convert Unix timestamps to human-readable dates."
      icon={Timer}
      badge="Misc Tool"
      features={[
        { icon: Sparkles, title: "Unix Time", desc: "Supports standard 10-digit Unix timestamps." },
        { icon: Zap, title: "Instant", desc: "See the readable date as you type the timestamp." },
        { icon: ShieldCheck, title: "Private", desc: "Conversions happen locally in your browser." }
      ]}
    >
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/50 space-y-8">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Unix Timestamp (Seconds)</label>
            <button onClick={() => setTimestamp(Math.floor(Date.now() / 1000).toString())} className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
              <RefreshCw size={12} /> Current Time
            </button>
          </div>
          <input
            type="text"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
            className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-indigo-500 transition-all font-mono font-bold text-slate-700"
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-widest">Readable Date</h4>
            <button onClick={copyToClipboard} className={`p-2 rounded-lg transition-all flex items-center gap-2 text-xs font-bold ${copied ? "bg-emerald-50 text-emerald-600" : "bg-slate-50 text-slate-400 hover:text-indigo-600"}`}>
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <div className="w-full p-8 bg-indigo-50 border border-indigo-100 rounded-2xl text-center">
            <div className="text-2xl md:text-3xl font-black text-indigo-600">{formatted}</div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
