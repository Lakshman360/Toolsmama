import { useState, useEffect } from "react";
import ToolContainer from "../../components/ToolContainer";
import { Search, MapPin, Globe, Shield } from "lucide-react";

export default function IPLookup() {
  const [ip, setIp] = useState("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchIP = async (targetIP: string = "") => {
    setLoading(true);
    setError(null);
    try {
      const url = targetIP ? `https://ipapi.co/${targetIP}/json/` : "https://ipapi.co/json/";
      const response = await fetch(url);
      const result = await response.json();
      if (result.error) throw new Error(result.reason);
      setData(result);
      setIp(result.ip);
    } catch (err) {
      setError("Could not fetch IP details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIP();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
  };

  return (
    <ToolContainer
      title="IP Lookup"
      description="Find geolocation and network information for any IP address."
      onCopy={handleCopy}
    >
      <div className="space-y-8">
        <div className="relative">
          <input
            type="text"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            placeholder="Enter IP address (e.g., 8.8.8.8)..."
            className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold pr-16 shadow-inner"
          />
          <button
            onClick={() => fetchIP(ip)}
            disabled={loading}
            className="absolute right-3 top-3 p-3 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition-all disabled:opacity-50"
          >
            <Search size={20} className={loading ? "animate-spin" : ""} />
          </button>
        </div>

        {error && (
          <div className="p-4 bg-red-50 text-red-600 rounded-2xl text-sm font-bold text-center border border-red-100">
            {error}
          </div>
        )}

        {data && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <IPCard icon={Globe} label="IP Address" value={data.ip} />
            <IPCard icon={MapPin} label="Location" value={`${data.city}, ${data.region}, ${data.country_name}`} />
            <IPCard icon={Shield} label="ISP / Network" value={data.org} />
            <IPCard icon={MapPin} label="Timezone" value={data.timezone} />
          </div>
        )}
      </div>
    </ToolContainer>
  );
}

function IPCard({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 flex items-start gap-4">
      <div className="p-3 bg-white rounded-2xl text-indigo-600 shadow-sm">
        <Icon size={20} />
      </div>
      <div>
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</div>
        <div className="text-lg font-black text-slate-700 leading-tight">{value}</div>
      </div>
    </div>
  );
}
