import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tipPercent, setTipPercent] = useState("15");
  const [people, setPeople] = useState("1");

  const b = parseFloat(bill) || 0;
  const t = parseFloat(tipPercent) || 0;
  const p = parseInt(people) || 1;

  const tipAmount = (b * t) / 100;
  const totalBill = b + tipAmount;
  const perPerson = totalBill / p;

  return (
    <ToolContainer
      title="Tip Calculator"
      description="Quickly calculate tips and split the bill among friends."
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Bill Amount</label>
              <input
                type="number"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                placeholder="50"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Tip Percentage (%)</label>
              <select
                value={tipPercent}
                onChange={(e) => setTipPercent(e.target.value)}
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold text-slate-600"
              >
                <option value="10">10%</option>
                <option value="15">15%</option>
                <option value="18">18%</option>
                <option value="20">20%</option>
                <option value="25">25%</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Number of People</label>
              <input
                type="number"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                placeholder="1"
                min="1"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold"
              />
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 space-y-6 border border-slate-100">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Tip Amount</span>
              <span className="font-black text-lg text-slate-700">${tipAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Total Bill</span>
              <span className="font-black text-lg text-slate-700">${totalBill.toFixed(2)}</span>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Per Person</span>
                <span className="font-black text-3xl text-indigo-600">${perPerson.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ToolContainer>
  );
}
