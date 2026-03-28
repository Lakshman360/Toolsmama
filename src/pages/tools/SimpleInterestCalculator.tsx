import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";

export default function SimpleInterestCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");

  const p = parseFloat(principal) || 0;
  const r = parseFloat(rate) || 0;
  const t = parseFloat(time) || 0;

  const interest = (p * r * t) / 100;
  const totalAmount = p + interest;

  return (
    <ToolContainer
      title="Simple Interest Calculator"
      description="Calculate simple interest and the total amount over time."
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
                placeholder="5"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold"
              />
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 space-y-6 border border-slate-100">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Interest Earned</span>
              <span className="font-black text-lg text-slate-700">${interest.toFixed(2)}</span>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Total Amount</span>
                <span className="font-black text-3xl text-indigo-600">${totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ToolContainer>
  );
}
