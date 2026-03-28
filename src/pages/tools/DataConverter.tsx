import { useState } from "react";
import { HardDrive, RefreshCw, Zap, ShieldCheck, Sparkles } from "lucide-react";
import ToolLayout from "../../components/ToolLayout";

const UNITS = {
  bytes: 1,
  kilobytes: 1024,
  megabytes: 1024 * 1024,
  gigabytes: 1024 * 1024 * 1024,
  terabytes: 1024 * 1024 * 1024 * 1024
};

export default function DataConverter() {
  const [val, setVal] = useState("1");
  const [from, setFrom] = useState<keyof typeof UNITS>("megabytes");
  const [to, setTo] = useState<keyof typeof UNITS>("gigabytes");

  const result = (parseFloat(val) * UNITS[from]) / UNITS[to];

  return (
    <ToolLayout
      title="Data Converter"
      desc="Convert between different units of digital storage like MB, GB, and TB."
      icon={HardDrive}
      badge="Unit Converter"
      features={[
        { icon: Sparkles, title: "Storage Units", desc: "Convert between Bytes, KB, MB, GB, and TB." },
        { icon: Zap, title: "Instant", desc: "Results update as you type your values." },
        { icon: ShieldCheck, title: "Private", desc: "All conversions happen locally." }
      ]}
    >
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/50 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">From</label>
            <div className="flex gap-2">
              <input
                type="number"
                value={val}
                onChange={(e) => setVal(e.target.value)}
                className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 transition-all font-bold"
              />
              <select
                value={from}
                onChange={(e) => setFrom(e.target.value as any)}
                className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 transition-all font-bold text-slate-600"
              >
                {Object.keys(UNITS).map(u => <option key={u} value={u}>{u}</option>)}
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">To</label>
            <div className="flex gap-2">
              <div className="flex-1 px-4 py-3 bg-indigo-50 border border-indigo-100 rounded-xl font-bold text-indigo-600">
                {isNaN(result) ? "0" : result.toFixed(6)}
              </div>
              <select
                value={to}
                onChange={(e) => setTo(e.target.value as any)}
                className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 transition-all font-bold text-slate-600"
              >
                {Object.keys(UNITS).map(u => <option key={u} value={u}>{u}</option>)}
              </select>
            </div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
