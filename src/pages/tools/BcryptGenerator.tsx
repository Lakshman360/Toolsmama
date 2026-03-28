import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";
import bcrypt from "bcryptjs";

export default function BcryptGenerator() {
  const [password, setPassword] = useState("");
  const [rounds, setRounds] = useState(10);
  const [hash, setHash] = useState("");
  const [loading, setLoading] = useState(false);

  const generateHash = async () => {
    if (!password) return;
    setLoading(true);
    try {
      const salt = await bcrypt.genSalt(rounds);
      const newHash = await bcrypt.hash(password, salt);
      setHash(newHash);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(hash);
  };

  return (
    <ToolContainer
      title="Bcrypt Generator"
      description="Securely hash your passwords using the Bcrypt algorithm."
      onCopy={handleCopy}
    >
      <div className="space-y-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Password to Hash</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password..."
              className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Salt Rounds ({rounds})</label>
            <input
              type="range"
              min="4"
              max="15"
              value={rounds}
              onChange={(e) => setRounds(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <span>Fast (4)</span>
              <span>Secure (15)</span>
            </div>
          </div>
          <button
            onClick={generateHash}
            disabled={loading || !password}
            className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98] disabled:opacity-50"
          >
            {loading ? "Hashing..." : "Generate Bcrypt Hash"}
          </button>
        </div>

        {hash && (
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Generated Hash</label>
            <div className="w-full p-6 bg-slate-900 text-indigo-300 rounded-3xl font-mono text-sm break-all leading-relaxed shadow-2xl">
              {hash}
            </div>
          </div>
        )}
      </div>
    </ToolContainer>
  );
}
