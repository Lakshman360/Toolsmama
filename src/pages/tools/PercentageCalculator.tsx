import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";

export default function PercentageCalculator() {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const v1 = parseFloat(val1);
    const v2 = parseFloat(val2);
    if (isNaN(v1) || isNaN(v2)) return;
    setResult(((v1 / 100) * v2).toFixed(2));
  };

  return (
    <ToolContainer
      title="Percentage Calculator"
      description="Easily calculate percentages of any value."
    >
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1 w-full">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">What is</label>
            <div className="relative">
              <input
                type="number"
                value={val1}
                onChange={(e) => setVal1(e.target.value)}
                placeholder="10"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold text-slate-700"
              />
              <span className="absolute right-6 top-1/2 -translate-y-1/2 font-bold text-slate-400">%</span>
            </div>
          </div>
          <div className="text-slate-400 font-bold uppercase tracking-widest mt-6">of</div>
          <div className="flex-1 w-full">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Value</label>
            <input
              type="number"
              value={val2}
              onChange={(e) => setVal2(e.target.value)}
              placeholder="100"
              className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold text-slate-700"
            />
          </div>
        </div>
        <button
          onClick={calculate}
          className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
        >
          Calculate
        </button>

        {result && (
          <div className="p-8 bg-indigo-50 border border-indigo-100 rounded-3xl text-center">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Result</div>
            <div className="text-4xl font-black text-indigo-600">{result}</div>
          </div>
        )}
      </div>
    </ToolContainer>
  );
}
