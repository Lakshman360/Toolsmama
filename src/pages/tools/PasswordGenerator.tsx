import { useState, useEffect } from "react";
import ToolContainer from "../../components/ToolContainer";
import { RefreshCw, Copy, Check } from "lucide-react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    const charset = {
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
    };

    let characters = "";
    if (options.uppercase) characters += charset.uppercase;
    if (options.lowercase) characters += charset.lowercase;
    if (options.numbers) characters += charset.numbers;
    if (options.symbols) characters += charset.symbols;

    if (!characters) {
      setPassword("");
      return;
    }

    let result = "";
    const randomValues = new Uint32Array(length);
    window.crypto.getRandomValues(randomValues);
    for (let i = 0; i < length; i++) {
      result += characters.charAt(randomValues[i] % characters.length);
    }
    setPassword(result);
  };

  useEffect(() => {
    generatePassword();
  }, []);

  const handleCopy = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStrength = () => {
    let score = 0;
    if (length > 8) score++;
    if (length > 12) score++;
    if (options.uppercase) score++;
    if (options.lowercase) score++;
    if (options.numbers) score++;
    if (options.symbols) score++;

    if (score < 3) return { label: "Weak", color: "bg-rose-500" };
    if (score < 5) return { label: "Medium", color: "bg-orange-500" };
    return { label: "Strong", color: "bg-emerald-500" };
  };

  const strength = getStrength();

  return (
    <ToolContainer
      title="Password Generator"
      description="Create strong, random, and secure passwords instantly."
      onCopy={handleCopy}
    >
      <div className="space-y-8">
        {/* Result Area */}
        <div className="relative group">
          <div className="w-full p-8 bg-slate-900 text-white rounded-[2rem] font-mono text-2xl md:text-3xl break-all flex items-center justify-center text-center min-h-[120px]">
            {password || "Select options..."}
          </div>
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              onClick={generatePassword}
              className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all"
              title="Regenerate"
            >
              <RefreshCw size={20} />
            </button>
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm">
            <div className={`w-2 h-2 rounded-full ${strength.color}`} />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{strength.label}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Password Length</label>
                <span className="text-indigo-600 font-black text-lg">{length}</span>
              </div>
              <input
                type="range"
                min="4"
                max="50"
                value={length}
                onChange={(e) => setLength(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <OptionToggle
              label="Uppercase"
              active={options.uppercase}
              onClick={() => setOptions((p) => ({ ...p, uppercase: !p.uppercase }))}
            />
            <OptionToggle
              label="Lowercase"
              active={options.lowercase}
              onClick={() => setOptions((p) => ({ ...p, lowercase: !p.lowercase }))}
            />
            <OptionToggle
              label="Numbers"
              active={options.numbers}
              onClick={() => setOptions((p) => ({ ...p, numbers: !p.numbers }))}
            />
            <OptionToggle
              label="Symbols"
              active={options.symbols}
              onClick={() => setOptions((p) => ({ ...p, symbols: !p.symbols }))}
            />
          </div>
        </div>

        <button
          onClick={generatePassword}
          className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98]"
        >
          Generate Secure Password
        </button>
      </div>
    </ToolContainer>
  );
}

function OptionToggle({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 rounded-xl font-bold text-sm transition-all border ${
        active
          ? "bg-indigo-50 border-indigo-200 text-indigo-600"
          : "bg-white border-slate-200 text-slate-400 hover:border-indigo-200"
      }`}
    >
      {label}
    </button>
  );
}
