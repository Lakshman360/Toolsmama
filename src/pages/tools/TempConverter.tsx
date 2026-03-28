import { useState } from "react";
import { Thermometer, RefreshCw, Zap, ShieldCheck, Sparkles } from "lucide-react";
import ToolLayout from "../../components/ToolLayout";

export default function TempConverter() {
  const [val, setVal] = useState("0");
  const [from, setFrom] = useState("Celsius");
  const [to, setTo] = useState("Fahrenheit");

  const convert = (v: number, f: string, t: string) => {
    let celsius = v;
    if (f === "Fahrenheit") celsius = (v - 32) * 5/9;
    if (f === "Kelvin") celsius = v - 273.15;

    if (t === "Celsius") return celsius;
    if (t === "Fahrenheit") return (celsius * 9/5) + 32;
    if (t === "Kelvin") return celsius + 273.15;
    return v;
  };

  const result = convert(parseFloat(val), from, to);

  return (
    <ToolLayout
      title="Temperature Converter"
      desc="Convert between Celsius, Fahrenheit, and Kelvin."
      icon={Thermometer}
      badge="Unit Converter"
      features={[
        { icon: Sparkles, title: "Precise", desc: "Accurate conversion formulas for all units." },
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
                onChange={(e) => setFrom(e.target.value)}
                className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 transition-all font-bold text-slate-600"
              >
                <option>Celsius</option>
                <option>Fahrenheit</option>
                <option>Kelvin</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">To</label>
            <div className="flex gap-2">
              <div className="flex-1 px-4 py-3 bg-indigo-50 border border-indigo-100 rounded-xl font-bold text-indigo-600">
                {isNaN(result) ? "0" : result.toFixed(2)}
              </div>
              <select
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 transition-all font-bold text-slate-600"
              >
                <option>Celsius</option>
                <option>Fahrenheit</option>
                <option>Kelvin</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
