import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";

export default function RobotsGenerator() {
  const [sitemap, setSitemap] = useState("");
  const [allowAll, setAllowAll] = useState(true);

  const robots = `User-agent: *
${allowAll ? "Allow: /" : "Disallow: /"}
${sitemap ? `Sitemap: ${sitemap}` : ""}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(robots);
  };

  return (
    <ToolContainer
      title="Robots.txt Generator"
      description="Create a robots.txt file to guide search engine crawlers."
      onCopy={handleCopy}
    >
      <div className="space-y-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Sitemap URL (Optional)</label>
            <input
              type="text"
              value={sitemap}
              onChange={(e) => setSitemap(e.target.value)}
              placeholder="https://example.com/sitemap.xml"
              className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-indigo-500 transition-all font-bold"
            />
          </div>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={allowAll}
              onChange={(e) => setAllowAll(e.target.checked)}
              className="w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="text-sm font-bold text-slate-600 group-hover:text-indigo-600 transition-colors">Allow all search engines to crawl your site</span>
          </label>
        </div>

        <div className="space-y-4">
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Robots.txt Content</label>
          <pre className="w-full p-8 bg-slate-900 text-indigo-300 rounded-3xl font-mono text-sm overflow-x-auto shadow-2xl">
            {robots}
          </pre>
        </div>
      </div>
    </ToolContainer>
  );
}
