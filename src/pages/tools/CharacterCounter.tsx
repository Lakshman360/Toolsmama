import { useState, useEffect } from "react";
import ToolContainer from "../../components/ToolContainer";

export default function CharacterCounter() {
  const [text, setText] = useState("");
  const [stats, setStats] = useState({
    total: 0,
    noSpaces: 0,
    alphabets: 0,
    numbers: 0,
    special: 0
  });

  useEffect(() => {
    const total = text.length;
    const noSpaces = text.replace(/\s/g, "").length;
    const alphabets = (text.match(/[a-z]/gi) || []).length;
    const numbers = (text.match(/[0-9]/g) || []).length;
    const special = total - noSpaces - alphabets - numbers; // This is a bit simplified

    setStats({ total, noSpaces, alphabets, numbers, special });
  }, [text]);

  return (
    <ToolContainer
      title="Character Counter"
      description="Detailed character analysis including spaces, letters, and numbers."
      onCopy={() => navigator.clipboard.writeText(text)}
    >
      <div className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <StatBox label="Total" value={stats.total} />
          <StatBox label="No Spaces" value={stats.noSpaces} />
          <StatBox label="Letters" value={stats.alphabets} />
          <StatBox label="Numbers" value={stats.numbers} />
          <StatBox label="Other" value={stats.total - stats.noSpaces} />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Input Text</label>
          <textarea
            className="w-full h-64 p-6 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-medium resize-none"
            placeholder="Paste or type your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
    </ToolContainer>
  );
}

function StatBox({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
      <div className="text-2xl font-black text-indigo-600 mb-1">{value}</div>
      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{label}</div>
    </div>
  );
}
