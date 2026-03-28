import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";

export default function HexConverter() {
  const [value, setValue] = useState("");
  const [fromBase, setFromBase] = useState("16");

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const getDecimal = () => {
    try {
      if (!value) return null;
      const dec = parseInt(value, parseInt(fromBase));
      return isNaN(dec) ? null : dec;
    } catch {
      return null;
    }
  };

  const decimal = getDecimal();

  return (
    <ToolContainer
      title="Number Base Converter"
      description="Convert between Hexadecimal, Decimal, Binary, and Octal bases."
      onCopy={() => handleCopy(decimal?.toString() || "")}
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Input Value</label>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter value..."
              className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold uppercase"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">From Base</label>
            <select
              value={fromBase}
              onChange={(e) => setFromBase(e.target.value)}
              className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold text-slate-600"
            >
              <option value="16">Hexadecimal (Base 16)</option>
              <option value="10">Decimal (Base 10)</option>
              <option value="8">Octal (Base 8)</option>
              <option value="2">Binary (Base 2)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BaseResult label="Hexadecimal" value={decimal?.toString(16).toUpperCase() || "-"} onCopy={handleCopy} />
          <BaseResult label="Decimal" value={decimal?.toString(10) || "-"} onCopy={handleCopy} />
          <BaseResult label="Octal" value={decimal?.toString(8) || "-"} onCopy={handleCopy} />
          <BaseResult label="Binary" value={decimal?.toString(2) || "-"} onCopy={handleCopy} />
        </div>
      </div>
    </ToolContainer>
  );
}

function BaseResult({ label, value, onCopy }: { label: string; value: string; onCopy: (t: string) => void }) {
  return (
    <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 flex justify-between items-center group">
      <div>
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</div>
        <div className="text-xl font-black text-slate-700 break-all">{value}</div>
      </div>
      <button
        onClick={() => onCopy(value)}
        className="p-3 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-all opacity-0 group-hover:opacity-100 shadow-sm"
      >
        Copy
      </button>
    </div>
  );
}
