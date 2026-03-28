import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [frequency, setFrequency] = useState("12"); // Monthly

  const p = parseFloat(principal) || 0;
  const r = parseFloat(rate) / 100 || 0;
  const t = parseFloat(time) || 0;
  const n = parseInt(frequency) || 1;

  const amount = p * Math.pow(1 + r / n, n * t);
  const interest = amount - p;

  return (
    <ToolContainer
      title="Compound Interest Calculator"
      description="Calculate how your investments grow over time with compound interest."
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Principal Amount</label>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                placeholder="1000"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Annual Interest Rate (%)</label>
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                placeholder="5"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Time Period (Years)</label>
              <input
                type="number"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="10"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Compounding Frequency</label>
              <select
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold text-slate-600"
              >
                <option value="1">Annually</option>
                <option value="2">Semi-Annually</option>
                <option value="4">Quarterly</option>
                <option value="12">Monthly</option>
                <option value="365">Daily</option>
              </select>
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 space-y-6 border border-slate-100">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Total Interest</span>
              <span className="font-black text-lg text-slate-700">${interest.toFixed(2)}</span>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Total Amount</span>
                <span className="font-black text-3xl text-indigo-600">${amount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ToolContainer>
  );
}
