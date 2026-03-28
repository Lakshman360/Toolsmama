import { useState, useEffect } from "react";
import ToolContainer from "../../components/ToolContainer";
import { RefreshCw } from "lucide-react";

export default function UUIDGenerator() {
  const [uuid, setUuid] = useState("");

  const generateUUID = () => {
    const newUuid = crypto.randomUUID();
    setUuid(newUuid);
  };

  useEffect(() => {
    generateUUID();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(uuid);
  };

  return (
    <ToolContainer
      title="UUID Generator"
      description="Generate random UUIDs (v4) for your projects instantly."
      onCopy={handleCopy}
    >
      <div className="space-y-8">
        <div className="relative group">
          <div className="w-full p-10 bg-slate-900 text-white rounded-[2rem] font-mono text-xl md:text-3xl font-black text-center tracking-wider break-all flex items-center justify-center min-h-[140px]">
            {uuid}
          </div>
          <div className="absolute top-4 right-4">
            <button
              onClick={generateUUID}
              className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all active:rotate-180 duration-500"
              title="Regenerate"
            >
              <RefreshCw size={20} />
            </button>
          </div>
        </div>
        <button
          onClick={generateUUID}
          className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98]"
        >
          Generate New UUID
        </button>
      </div>
    </ToolContainer>
  );
}
