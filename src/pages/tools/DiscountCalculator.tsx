import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";

export default function DiscountCalculator() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  const p = parseFloat(price) || 0;
  const d = parseFloat(discount) || 0;

  const savings = (p * d) / 100;
  const finalPrice = p - savings;

  return (
    <ToolContainer
      title="Discount Calculator"
      description="Calculate the final price after applying a discount."
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Original Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="100"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Discount (%)</label>
              <input
                type="number"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                placeholder="20"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold"
              />
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 space-y-6 border border-slate-100">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">You Save</span>
              <span className="font-black text-lg text-green-600">${savings.toFixed(2)}</span>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Final Price</span>
                <span className="font-black text-3xl text-indigo-600">${finalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ToolContainer>
  );
}
