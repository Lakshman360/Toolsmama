import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";

export default function RandomNumber() {
  const [min, setMin] = useState("1");
  const [max, setMax] = useState("100");
  const [result, setResult] = useState<number | null>(null);

  const generate = () => {
    const mi = parseInt(min);
    const ma = parseInt(max);
    if (isNaN(mi) || isNaN(ma) || mi >= ma) return;
    setResult(Math.floor(Math.random() * (ma - mi + 1)) + mi);
  };

  const handleCopy = () => {
    if (result !== null) {
      navigator.clipboard.writeText(result.toString());
    }
  };

  return (
    <ToolContainer
      title="Random Number Generator"
      description="Generate random numbers within a specified range."
      onCopy={handleCopy}
    >
      <div className="space-y-8">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Min Value</label>
            <input
              type="number"
              value={min}
              onChange={(e) => setMin(e.target.value)}
              className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Max Value</label>
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(e.target.value)}
              className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold"
            />
          </div>
        </div>
        <button
          onClick={generate}
          className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98]"
        >
          Generate Number
        </button>

        {result !== null && (
          <div className="p-12 bg-indigo-50 border border-indigo-100 rounded-[2rem] text-center">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Result</div>
            <div className="text-7xl font-black text-indigo-600">{result}</div>
          </div>
        )}
      </div>
    </ToolContainer>
  );
}
