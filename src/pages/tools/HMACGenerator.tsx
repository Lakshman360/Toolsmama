import { useState } from "react";
import ToolContainer from "../../components/ToolContainer";
import CryptoJS from "crypto-js";

export default function HMACGenerator() {
  const [input, setInput] = useState("");
  const [secret, setSecret] = useState("");
  const [algo, setAlgo] = useState("SHA256");
  const [hash, setHash] = useState("");

  const generateHash = () => {
    if (!input || !secret) return;
    let hmac;
    if (algo === "SHA256") hmac = CryptoJS.HmacSHA256(input, secret);
    else if (algo === "MD5") hmac = CryptoJS.HmacMD5(input, secret);
    else if (algo === "SHA1") hmac = CryptoJS.HmacSHA1(input, secret);
    else hmac = CryptoJS.HmacSHA512(input, secret);
    
    setHash(hmac.toString());
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(hash);
  };

  return (
    <ToolContainer
      title="HMAC Generator"
      description="Generate a Hash-based Message Authentication Code (HMAC)."
      onCopy={handleCopy}
    >
      <div className="space-y-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message</label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter message here..."
              className="w-full h-32 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-slate-700 focus:border-indigo-500 outline-none transition-all resize-none font-mono leading-relaxed"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Secret Key</label>
              <input
                type="text"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                placeholder="Enter secret key..."
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Algorithm</label>
              <select
                value={algo}
                onChange={(e) => setAlgo(e.target.value)}
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold text-slate-600"
              >
                <option value="SHA256">HMAC-SHA256</option>
                <option value="MD5">HMAC-MD5</option>
                <option value="SHA1">HMAC-SHA1</option>
                <option value="SHA512">HMAC-SHA512</option>
              </select>
            </div>
          </div>
          <button
            onClick={generateHash}
            disabled={!input || !secret}
            className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98] disabled:opacity-50"
          >
            Generate HMAC
          </button>
        </div>

        {hash && (
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">HMAC Result</label>
            <div className="w-full p-6 bg-slate-900 text-indigo-300 rounded-3xl font-mono text-sm break-all leading-relaxed shadow-2xl">
              {hash}
            </div>
          </div>
        )}
      </div>
    </ToolContainer>
  );
}
