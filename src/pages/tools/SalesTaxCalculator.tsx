import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";

export default function SalesTaxCalculator() {
  const [price, setPrice] = useState("");
  const [taxRate, setTaxRate] = useState("");

  const p = parseFloat(price) || 0;
  const t = parseFloat(taxRate) || 0;

  const taxAmount = (p * t) / 100;
  const totalAmount = p + taxAmount;

  return (
    <ToolContainer
      title="Sales Tax Calculator"
      description="Calculate the total cost including sales tax."
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Price Before Tax</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="100"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Tax Rate (%)</label>
              <input
                type="number"
                value={taxRate}
                onChange={(e) => setTaxRate(e.target.value)}
                placeholder="8"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold"
              />
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 space-y-6 border border-slate-100">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Tax Amount</span>
              <span className="font-black text-lg text-slate-700">${taxAmount.toFixed(2)}</span>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Total Price</span>
                <span className="font-black text-3xl text-indigo-600">${totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ToolContainer>
  );
}
