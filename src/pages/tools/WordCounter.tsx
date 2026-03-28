import { useState, useEffect } from "react";
import ToolContainer from "../../components/ToolContainer";

export default function WordCounter() {
  const [text, setText] = useState("");
  const [stats, setStats] = useState({
    words: 0,
    chars: 0,
    charsNoSpaces: 0,
    sentences: 0,
    paragraphs: 0,
    readingTime: 0
  });

  useEffect(() => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;
    const charsNoSpaces = text.replace(/\s/g, "").length;
    const sentences = text.trim() ? text.split(/[.!?]+/).filter(Boolean).length : 0;
    const paragraphs = text.trim() ? text.split(/\n+/).filter(Boolean).length : 0;
    const readingTime = Math.ceil(words / 200); // 200 wpm average

    setStats({ words, chars, charsNoSpaces, sentences, paragraphs, readingTime });
  }, [text]);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <ToolContainer
      title="Word Counter"
      description="Count words, characters, and reading time in real-time."
      onCopy={handleCopy}
    >
      <div className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <StatBox label="Words" value={stats.words} />
          <StatBox label="Characters" value={stats.chars} />
          <StatBox label="No Spaces" value={stats.charsNoSpaces} />
          <StatBox label="Sentences" value={stats.sentences} />
          <StatBox label="Paragraphs" value={stats.paragraphs} />
          <StatBox label="Reading Time" value={`${stats.readingTime} min`} />
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
