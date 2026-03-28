import { useState } from "react";
import { Palette, Copy, Check, Zap, ShieldCheck, Sparkles } from "lucide-react";
import ToolLayout from "../../components/ToolLayout";

export default function ColorPicker() {
  const [color, setColor] = useState("#4f46e5");
  const [copied, setCopied] = useState<string | null>(null);

  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <ToolLayout
      title="Color Picker"
      desc="Pick and convert colors between HEX and RGB formats."
      icon={Palette}
      badge="Misc Tool"
      features={[
        { icon: Sparkles, title: "Visual Picker", desc: "Easily select any color from the spectrum." },
        { icon: Zap, title: "Conversion", desc: "Instantly see HEX and RGB values." },
        { icon: ShieldCheck, title: "Private", desc: "No data is sent to any server." }
      ]}
    >
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/50 space-y-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-48 h-48 p-2 bg-slate-50 border border-slate-200 rounded-3xl cursor-pointer"
          />
          <div className="flex-1 space-y-6 w-full">
            <ColorBox label="HEX" value={color.toUpperCase()} onCopy={() => copy(color.toUpperCase())} isCopied={copied === color.toUpperCase()} />
            <ColorBox label="RGB" value={hexToRgb(color)} onCopy={() => copy(hexToRgb(color))} isCopied={copied === hexToRgb(color)} />
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}

function ColorBox({ label, value, onCopy, isCopied }: { label: string; value: string; onCopy: () => void; isCopied: boolean }) {
  return (
    <div className="space-y-2">
      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</label>
      <div className="flex gap-2">
        <div className="flex-1 px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-mono font-bold text-slate-700">
          {value}
        </div>
        <button onClick={onCopy} className={`px-6 rounded-2xl transition-all shadow-sm ${isCopied ? "bg-emerald-500 text-white" : "bg-white border border-slate-200 text-slate-400 hover:text-indigo-600"}`}>
          {isCopied ? <Check size={20} /> : <Copy size={20} />}
        </button>
      </div>
    </div>
  );
}
