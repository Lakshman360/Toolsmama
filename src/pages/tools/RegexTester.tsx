import { useState, useEffect } from "react";
import ToolContainer from "../../components/ToolContainer";

export default function RegexTester() {
  const [regex, setRegex] = useState("");
  const [flags, setFlags] = useState("g");
  const [text, setText] = useState("");
  const [matches, setMatches] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!regex) {
      setMatches([]);
      setError(null);
      return;
    }

    try {
      // matchAll requires the 'g' flag. If not present, we use match() instead.
      const re = new RegExp(regex, flags);
      if (flags.includes('g')) {
        const allMatches = Array.from(text.matchAll(re));
        setMatches(allMatches);
      } else {
        const match = text.match(re);
        setMatches(match ? [match] : []);
      }
      setError(null);
    } catch (e: any) {
      setError(e.message);
      setMatches([]);
    }
  }, [regex, flags, text]);

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(matches, null, 2));
  };

  return (
    <ToolContainer
      title="Regex Tester"
      description="Test your regular expressions against sample text in real-time."
      onCopy={handleCopy}
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-3 space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Regular Expression</label>
            <div className="relative">
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 font-mono">/</span>
              <input
                type="text"
                value={regex}
                onChange={(e) => setRegex(e.target.value)}
                placeholder="[a-z]+"
                className="w-full pl-10 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-mono font-bold"
              />
              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 font-mono">/</span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Flags</label>
            <input
              type="text"
              value={flags}
              onChange={(e) => setFlags(e.target.value)}
              placeholder="gim"
              className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-mono font-bold"
            />
          </div>
        </div>

        {error && (
          <div className="p-4 bg-red-50 text-red-600 rounded-2xl text-xs font-bold border border-red-100 font-mono">
            {error}
          </div>
        )}

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Test Text</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text to test against..."
            className="w-full h-40 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-slate-700 focus:border-indigo-500 outline-none transition-all resize-none font-mono text-sm leading-relaxed"
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Matches ({matches.length})</label>
          </div>
          <div className="w-full min-h-[100px] p-6 bg-slate-900 text-indigo-300 rounded-3xl font-mono text-xs overflow-x-auto leading-relaxed shadow-2xl">
            {matches.length > 0 ? (
              <div className="space-y-2">
                {matches.map((match, i) => (
                  <div key={i} className="p-2 bg-indigo-950/50 rounded-lg border border-indigo-900/50">
                    <span className="text-indigo-500 mr-2">#{i + 1}:</span>
                    <span className="text-white font-bold">"{match[0]}"</span>
                    <span className="text-indigo-400 ml-4">Index: {match.index}</span>
                  </div>
                ))}
              </div>
            ) : (
              <span className="text-slate-500 italic">No matches found</span>
            )}
          </div>
        </div>
      </div>
    </ToolContainer>
  );
}
