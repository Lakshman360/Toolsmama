import { useState, useEffect } from "react";
import ToolContainer from "../../components/ToolContainer";
import { jwtDecode } from "jwt-decode";

export default function JWTDecoder() {
  const [token, setToken] = useState("");
  const [header, setHeader] = useState<any>(null);
  const [payload, setPayload] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      setHeader(null);
      setPayload(null);
      setError(null);
      return;
    }

    try {
      const decodedPayload = jwtDecode(token);
      const decodedHeader = jwtDecode(token, { header: true });
      setPayload(decodedPayload);
      setHeader(decodedHeader);
      setError(null);
    } catch (e: any) {
      setError("Invalid JWT Token");
      setHeader(null);
      setPayload(null);
    }
  }, [token]);

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify({ header, payload }, null, 2));
  };

  return (
    <ToolContainer
      title="JWT Decoder"
      description="Decode JSON Web Tokens (JWT) to inspect their header and payload."
      onCopy={handleCopy}
    >
      <div className="space-y-8">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">JWT Token</label>
          <textarea
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Paste your JWT token here..."
            className="w-full h-32 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-slate-700 focus:border-indigo-500 outline-none transition-all resize-none font-mono text-sm leading-relaxed"
          />
        </div>

        {error && (
          <div className="p-4 bg-red-50 text-red-600 rounded-2xl text-sm font-bold border border-red-100 text-center">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Header</label>
            <pre className="w-full p-6 bg-slate-900 text-indigo-300 rounded-3xl font-mono text-xs overflow-x-auto leading-relaxed shadow-2xl">
              {header ? JSON.stringify(header, null, 2) : "// Header will appear here"}
            </pre>
          </div>
          <div className="space-y-4">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Payload</label>
            <pre className="w-full p-6 bg-slate-900 text-indigo-300 rounded-3xl font-mono text-xs overflow-x-auto leading-relaxed shadow-2xl">
              {payload ? JSON.stringify(payload, null, 2) : "// Payload will appear here"}
            </pre>
          </div>
        </div>
      </div>
    </ToolContainer>
  );
}
