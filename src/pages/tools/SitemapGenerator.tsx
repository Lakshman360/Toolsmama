import { useState } from "react";
import { Plus } from "lucide-react";
import ToolContainer from "../../components/ToolContainer";

export default function SitemapGenerator() {
  const [urls, setUrls] = useState<string[]>([""]);

  const addUrl = () => setUrls([...urls, ""]);
  const updateUrl = (index: number, val: string) => {
    const newUrls = [...urls];
    newUrls[index] = val;
    setUrls(newUrls);
  };

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.filter(u => u.trim() !== "").map(u => `  <url>
    <loc>${u.trim()}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <priority>0.80</priority>
  </url>`).join("\n")}
</urlset>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sitemap);
  };

  return (
    <ToolContainer
      title="Sitemap Generator"
      description="Generate an XML sitemap to help search engines index your site."
      onCopy={handleCopy}
    >
      <div className="space-y-8">
        <div className="space-y-4">
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Website URLs</label>
          <div className="space-y-3">
            {urls.map((url, i) => (
              <input
                key={i}
                type="text"
                value={url}
                onChange={(e) => updateUrl(i, e.target.value)}
                placeholder="https://example.com/page"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-indigo-500 transition-all font-bold"
              />
            ))}
          </div>
          <button
            onClick={addUrl}
            className="flex items-center gap-2 text-indigo-600 font-black text-sm hover:text-indigo-700 transition-colors bg-indigo-50 px-6 py-3 rounded-xl active:scale-95"
          >
            <Plus size={18} /> Add Another URL
          </button>
        </div>

        <div className="space-y-4">
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Sitemap XML</label>
          <pre className="w-full p-8 bg-slate-900 text-indigo-300 rounded-3xl font-mono text-xs overflow-x-auto leading-relaxed shadow-2xl">
            {sitemap}
          </pre>
        </div>
      </div>
    </ToolContainer>
  );
}
