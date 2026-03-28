import { useState, useEffect } from "react";
import ToolContainer from "../../components/ToolContainer";
import { UAParser } from "ua-parser-js";

export default function UserAgentParser() {
  const [ua, setUa] = useState("");
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const currentUA = navigator.userAgent;
    setUa(currentUA);
    parseUA(currentUA);
  }, []);

  const parseUA = (input: string) => {
    const parser = new UAParser(input);
    setResult(parser.getResult());
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(result, null, 2));
  };

  return (
    <ToolContainer
      title="User Agent Parser"
      description="Parse and analyze any User Agent string to identify browser, OS, and device."
      onCopy={handleCopy}
    >
      <div className="space-y-8">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">User Agent String</label>
          <textarea
            value={ua}
            onChange={(e) => {
              setUa(e.target.value);
              parseUA(e.target.value);
            }}
            placeholder="Paste User Agent string here..."
            className="w-full h-32 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-slate-700 focus:border-indigo-500 outline-none transition-all resize-none font-mono text-sm leading-relaxed"
          />
        </div>

        {result && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard label="Browser" value={`${result.browser.name || "Unknown"} ${result.browser.version || ""}`} />
            <InfoCard label="Operating System" value={`${result.os.name || "Unknown"} ${result.os.version || ""}`} />
            <InfoCard label="Device" value={`${result.device.vendor || ""} ${result.device.model || "Desktop"}`} />
            <InfoCard label="Engine" value={`${result.engine.name || "Unknown"} ${result.engine.version || ""}`} />
          </div>
        )}
      </div>
    </ToolContainer>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6">
      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</div>
      <div className="text-xl font-black text-indigo-600">{value}</div>
    </div>
  );
}
