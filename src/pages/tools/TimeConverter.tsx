import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";

const TIME_UNITS = {
  seconds: 1,
  minutes: 60,
  hours: 3600,
  days: 86400,
  weeks: 604800,
  months: 2629746, // Average month in seconds
  years: 31556952, // Average year in seconds
};

export default function TimeConverter() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState<keyof typeof TIME_UNITS>("hours");
  const [toUnit, setToUnit] = useState<keyof typeof TIME_UNITS>("minutes");

  const val = parseFloat(value) || 0;
  const inSeconds = val * TIME_UNITS[fromUnit];
  const result = inSeconds / TIME_UNITS[toUnit];

  return (
    <ToolContainer
      title="Time Converter"
      description="Convert between seconds, minutes, hours, days, and more."
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Amount</label>
              <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="1"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">From</label>
                <select
                  value={fromUnit}
                  onChange={(e) => setFromUnit(e.target.value as keyof typeof TIME_UNITS)}
                  className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold text-slate-600 capitalize"
                >
                  {Object.keys(TIME_UNITS).map((u) => (
                    <option key={u} value={u}>{u}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">To</label>
                <select
                  value={toUnit}
                  onChange={(e) => setToUnit(e.target.value as keyof typeof TIME_UNITS)}
                  className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold text-slate-600 capitalize"
                >
                  {Object.keys(TIME_UNITS).map((u) => (
                    <option key={u} value={u}>{u}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 flex flex-col items-center justify-center border border-slate-100 min-h-[200px]">
            <div className="text-center space-y-4">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Result</div>
              <div className="text-5xl font-black text-indigo-600">
                {result.toLocaleString(undefined, { maximumFractionDigits: 6 })}
              </div>
              <div className="text-sm font-bold text-slate-400 capitalize">
                {toUnit}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ToolContainer>
  );
}
