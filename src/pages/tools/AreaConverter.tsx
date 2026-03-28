import { useState, useMemo } from "react";
import { Square, RefreshCw, Zap, ShieldCheck, Sparkles } from "lucide-react";
import ToolLayout from "../../components/ToolLayout";

const UNITS = {
  squareMeters: 1,
  squareKilometers: 0.000001,
  squareFeet: 10.7639,
  squareInches: 1550,
  acres: 0.000247105,
  hectares: 0.0001
};

export default function AreaConverter() {
  const [val, setVal] = useState("1");
  const [from, setFrom] = useState<keyof typeof UNITS>("squareMeters");
  const [to, setTo] = useState<keyof typeof UNITS>("squareFeet");
  const [error, setError] = useState<string | null>(null);

  const result = useMemo(() => {
    const v = parseFloat(val);
    if (isNaN(v) || v < 0) {
      setError("Please enter a valid positive number.");
      return null;
    }
    setError(null);
    return (v / UNITS[from]) * UNITS[to];
  }, [val, from, to]);

  return (
    <ToolLayout
      title="Area Converter"
      desc="Convert between different units of area like square meters, acres, and more."
      icon={Square}
      badge="Unit Converter"
      features={[
        { icon: Sparkles, title: "Multiple Units", desc: "Convert between metric and imperial area units." },
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
                {error ? "Error" : (result === null ? "0" : result.toFixed(4))}
              </div>
              <select
                value={to}
                onChange={(e) => setTo(e.target.value as any)}
                className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 transition-all font-bold text-slate-600"
              >
                {Object.keys(UNITS).map(u => <option key={u} value={u}>{u}</option>)}
              </select>
            </div>
            {error && <p className="text-red-500 text-xs font-bold">{error}</p>}
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
