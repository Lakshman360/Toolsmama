import { useState, useEffect } from "react";
import ToolContainer from "../../components/ToolContainer";

const LOREM_TEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export default function LoremIpsum() {
  const [paragraphs, setParagraphs] = useState(3);
  const [output, setOutput] = useState("");

  const generate = () => {
    const res = Array(paragraphs).fill(LOREM_TEXT).join("\n\n");
    setOutput(res);
  };

  useEffect(() => {
    generate();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <ToolContainer
      title="Lorem Ipsum Generator"
      description="Generate placeholder text for your design and development projects."
      onCopy={handleCopy}
    >
      <div className="space-y-8">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Number of Paragraphs</label>
            <span className="text-indigo-600 font-black text-lg">{paragraphs}</span>
          </div>
          <input
            type="range"
            min="1"
            max="20"
            value={paragraphs}
            onChange={(e) => setParagraphs(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />
          <button
            onClick={generate}
            className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
          >
            Generate Text
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-widest">Output</h4>
          </div>
          <div className="w-full p-8 bg-slate-50 border border-slate-100 rounded-[2rem] text-slate-600 leading-relaxed text-sm whitespace-pre-wrap">
            {output}
          </div>
        </div>
      </div>
    </ToolContainer>
  );
}
