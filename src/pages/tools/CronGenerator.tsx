import { useState, useEffect } from "react";
import ToolContainer from "../../components/ToolContainer";
import cronstrue from "cronstrue";

export default function CronGenerator() {
  const [cron, setCron] = useState("* * * * *");
  const [explanation, setExplanation] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const desc = cronstrue.toString(cron);
      setExplanation(desc);
      setError(null);
    } catch (e: any) {
      setError(e.message);
      setExplanation("");
    }
  }, [cron]);

  const handleCopy = () => {
    navigator.clipboard.writeText(cron);
  };

  return (
    <ToolContainer
      title="Cron Generator"
      description="Generate and explain cron expressions for scheduled tasks."
      onCopy={handleCopy}
    >
      <div className="space-y-8">
        <div className="space-y-4">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Cron Expression</label>
          <input
            type="text"
            value={cron}
            onChange={(e) => setCron(e.target.value)}
            placeholder="* * * * *"
            className="w-full px-8 py-6 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-mono text-2xl font-black text-indigo-600 shadow-inner"
          />
          <div className="grid grid-cols-5 gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">
            <span>Min</span>
            <span>Hour</span>
            <span>Day</span>
            <span>Month</span>
            <span>Weekday</span>
          </div>
        </div>

        {error ? (
          <div className="p-6 bg-red-50 text-red-600 rounded-3xl text-sm font-bold border border-red-100">
            {error}
          </div>
        ) : (
          <div className="p-8 bg-indigo-50 border border-indigo-100 rounded-3xl text-center space-y-2">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Explanation</div>
            <div className="text-xl font-black text-indigo-600">
              {explanation}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PresetButton label="Every Minute" value="* * * * *" onClick={setCron} />
          <PresetButton label="Every Hour" value="0 * * * *" onClick={setCron} />
          <PresetButton label="Every Day at Midnight" value="0 0 * * *" onClick={setCron} />
          <PresetButton label="Every Sunday at Midnight" value="0 0 * * 0" onClick={setCron} />
        </div>
      </div>
    </ToolContainer>
  );
}

function PresetButton({ label, value, onClick }: { label: string; value: string; onClick: (v: string) => void }) {
  return (
    <button
      onClick={() => onClick(value)}
      className="p-6 bg-slate-50 border border-slate-100 rounded-3xl text-left hover:border-indigo-200 hover:bg-indigo-50 transition-all group"
    >
      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 group-hover:text-indigo-400">{label}</div>
      <div className="text-sm font-mono font-bold text-slate-600 group-hover:text-indigo-600">{value}</div>
    </button>
  );
}
