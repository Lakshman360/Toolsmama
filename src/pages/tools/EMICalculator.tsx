import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";

export default function EMICalculator() {
  const [loan, setLoan] = useState("");
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState<string | null>(null);

  const calculate = () => {
    const p = parseFloat(loan);
    const r = parseFloat(rate) / 12 / 100;
    const n = parseFloat(tenure);
    if (isNaN(p) || isNaN(r) || isNaN(n)) return;
    
    const emiVal = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(emiVal.toFixed(2));
  };

  return (
    <ToolContainer
      title="EMI Calculator"
      description="Calculate your monthly loan installments easily."
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Loan Amount</label>
            <input
              type="number"
              value={loan}
              onChange={(e) => setLoan(e.target.value)}
              placeholder="100000"
              className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Interest Rate (%)</label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="10"
              className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Tenure (Months)</label>
            <input
              type="number"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              placeholder="12"
              className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold"
            />
          </div>
        </div>
        <button
          onClick={calculate}
          className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
        >
          Calculate EMI
        </button>

        {emi && (
          <div className="p-8 bg-indigo-50 border border-indigo-100 rounded-3xl text-center">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Monthly EMI</div>
            <div className="text-4xl font-black text-indigo-600">${emi}</div>
          </div>
        )}
      </div>
    </ToolContainer>
  );
}
