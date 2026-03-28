import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";
import ReactMarkdown from "react-markdown";

export default function MarkdownPreview() {
  const [input, setInput] = useState("# Hello World\n\nThis is a **Markdown** previewer.");

  const handleCopy = () => {
    navigator.clipboard.writeText(input);
  };

  return (
    <ToolContainer
      title="Markdown Previewer"
      description="Write Markdown and see the live preview instantly."
      onCopy={handleCopy}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Markdown Editor</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your markdown here..."
            className="w-full h-[500px] p-6 bg-slate-50 border border-slate-200 rounded-3xl text-slate-700 focus:border-indigo-500 outline-none transition-all resize-none font-mono text-sm leading-relaxed"
          />
        </div>
        <div className="space-y-4">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Live Preview</label>
          <div className="w-full h-[500px] p-8 bg-white border border-slate-200 rounded-3xl overflow-y-auto prose prose-slate max-w-none shadow-inner">
            <ReactMarkdown>{input}</ReactMarkdown>
          </div>
        </div>
      </div>
    </ToolContainer>
  );
}
