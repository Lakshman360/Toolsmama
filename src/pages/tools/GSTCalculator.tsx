import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";

export default function GSTCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("18");
  const [type, setType] = useState<"inclusive" | "exclusive">("exclusive");

  const amt = parseFloat(amount) || 0;
  const r = parseFloat(rate) || 0;

  let gstAmount = 0;
  let totalAmount = 0;
  let netAmount = 0;

  if (type === "exclusive") {
    gstAmount = (amt * r) / 100;
    totalAmount = amt + gstAmount;
    netAmount = amt;
  } else {
    gstAmount = amt - (amt * (100 / (100 + r)));
    totalAmount = amt;
    netAmount = amt - gstAmount;
  }

  return (
    <ToolContainer
      title="GST Calculator"
      description="Calculate Goods and Services Tax (GST) for your business."
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="1000"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">GST Rate (%)</label>
              <select
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold text-slate-600"
              >
                <option value="5">5%</option>
                <option value="12">12%</option>
                <option value="18">18%</option>
                <option value="28">28%</option>
              </select>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setType("exclusive")}
                className={`flex-1 py-3 rounded-2xl font-bold text-sm transition-all ${type === "exclusive" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100" : "bg-slate-50 text-slate-400"}`}
              >
                GST Exclusive
              </button>
              <button
                onClick={() => setType("inclusive")}
                className={`flex-1 py-3 rounded-2xl font-bold text-sm transition-all ${type === "inclusive" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100" : "bg-slate-50 text-slate-400"}`}
              >
                GST Inclusive
              </button>
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 space-y-6 border border-slate-100">
            <ResultRow label="Net Amount" value={netAmount.toFixed(2)} />
            <ResultRow label="GST Amount" value={gstAmount.toFixed(2)} />
            <div className="pt-4 border-t border-slate-200">
              <ResultRow label="Total Amount" value={totalAmount.toFixed(2)} isTotal />
            </div>
          </div>
        </div>
      </div>
    </ToolContainer>
  );
}

function ResultRow({ label, value, isTotal }: { label: string; value: string; isTotal?: boolean }) {
  return (
    <div className="flex justify-between items-center">
      <span className={`text-xs font-bold uppercase tracking-widest ${isTotal ? "text-indigo-600" : "text-slate-400"}`}>{label}</span>
      <span className={`font-black ${isTotal ? "text-2xl text-indigo-600" : "text-lg text-slate-700"}`}>${value}</span>
    </div>
  );
}
