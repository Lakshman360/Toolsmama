import { useState, useEffect } from "react";
import ToolContainer from "../../components/ToolContainer";
import chroma from "chroma-js";

export default function ColorConverter() {
  const [color, setColor] = useState("#6366f1");
  const [results, setResults] = useState<any>(null);

  useEffect(() => {
    try {
      if (chroma.valid(color)) {
        const c = chroma(color);
        setResults({
          hex: c.hex(),
          rgb: c.css(),
          hsl: c.css("hsl"),
          lab: c.lab().map(v => v.toFixed(2)).join(", "),
          name: c.name(),
          isDark: c.luminance() < 0.5,
        });
      }
    } catch (e) {
      // Invalid color
    }
  }, [color]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <ToolContainer
      title="Color Converter"
      description="Convert between HEX, RGB, HSL, and other color formats."
      onCopy={() => handleCopy(results?.hex || "")}
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pick or Enter Color</label>
              <div className="flex gap-4">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-20 h-20 bg-transparent border-0 rounded-3xl cursor-pointer"
                />
                <input
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  placeholder="#000000"
                  className="flex-1 px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold text-xl"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <ColorResult label="HEX" value={results?.hex || "-"} onCopy={handleCopy} />
              <ColorResult label="RGB" value={results?.rgb || "-"} onCopy={handleCopy} />
              <ColorResult label="HSL" value={results?.hsl || "-"} onCopy={handleCopy} />
              <ColorResult label="LAB" value={results?.lab || "-"} onCopy={handleCopy} />
            </div>
          </div>

          <div 
            className="rounded-3xl shadow-2xl flex items-center justify-center p-12 transition-all duration-500"
            style={{ backgroundColor: color }}
          >
            <div className={`text-4xl font-black uppercase tracking-tighter ${results?.isDark ? "text-white" : "text-black"}`}>
              {results?.hex}
            </div>
          </div>
        </div>
      </div>
    </ToolContainer>
  );
}

function ColorResult({ label, value, onCopy }: { label: string; value: string; onCopy: (t: string) => void }) {
  return (
    <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 flex justify-between items-center group">
      <div>
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</div>
        <div className="text-lg font-black text-slate-700">{value}</div>
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
