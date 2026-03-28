import { useState, useEffect } from "react";
import ToolContainer from "../../components/ToolContainer";
import { QrCode, Download, Link as LinkIcon, Type, Mail, Phone, Wifi } from "lucide-react";
import QRCode from "qrcode";

type QRType = "url" | "text" | "email" | "phone" | "wifi";

export default function QRGenerator() {
  const [type, setType] = useState<QRType>("url");
  const [input, setInput] = useState("");
  const [wifiSSID, setWifiSSID] = useState("");
  const [wifiPass, setWifiPass] = useState("");
  const [fgColor, setFgColor] = useState("#1e293b");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [size, setSize] = useState(256);
  const [qrUrl, setQrUrl] = useState<string | null>(null);

  const getQRText = () => {
    if (type === "email") return input ? `mailto:${input}` : "";
    if (type === "phone") return input ? `tel:${input}` : "";
    if (type === "wifi") return wifiSSID ? `WIFI:T:WPA;S:${wifiSSID};P:${wifiPass};;` : "";
    return input;
  };

  useEffect(() => {
    const text = getQRText();
    if (!text) {
      setQrUrl(null);
      return;
    }

    QRCode.toDataURL(text, {
      width: size,
      margin: 2,
      color: {
        dark: fgColor,
        light: bgColor
      }
    }).then(setQrUrl).catch(console.error);
  }, [type, input, wifiSSID, wifiPass, fgColor, bgColor, size]);

  const downloadQR = () => {
    if (!qrUrl) return;
    const a = document.createElement("a");
    a.href = qrUrl;
    a.download = "qrcode.png";
    a.click();
  };

  return (
    <ToolContainer
      title="QR Code Generator"
      description="Instantly generate a QR code from any URL, text, email, or phone number."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-widest">Content Type</h4>
            <div className="flex flex-wrap gap-2">
              <TypeButton active={type === "url"} onClick={() => setType("url")} icon={LinkIcon} label="URL" />
              <TypeButton active={type === "text"} onClick={() => setType("text")} icon={Type} label="Text" />
              <TypeButton active={type === "email"} onClick={() => setType("email")} icon={Mail} label="Email" />
              <TypeButton active={type === "phone"} onClick={() => setType("phone")} icon={Phone} label="Phone" />
              <TypeButton active={type === "wifi"} onClick={() => setType("wifi")} icon={Wifi} label="Wi-Fi" />
            </div>
          </div>

          <div className="space-y-4">
            {type === "wifi" ? (
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Network Name (SSID)</label>
                  <input
                    type="text"
                    value={wifiSSID}
                    onChange={(e) => setWifiSSID(e.target.value)}
                    placeholder="MyWiFi"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Password</label>
                  <input
                    type="text"
                    value={wifiPass}
                    onChange={(e) => setWifiPass(e.target.value)}
                    placeholder="password123"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">
                  {type === "url" ? "Enter URL" : type === "text" ? "Enter Text" : type === "email" ? "Enter Email" : "Enter Phone"}
                </label>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={type === "url" ? "https://example.com" : "Type here..."}
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:border-indigo-500 transition-all font-bold"
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Foreground</label>
              <input
                type="color"
                value={fgColor}
                onChange={(e) => setFgColor(e.target.value)}
                className="w-full h-14 p-1 bg-slate-50 border border-slate-200 rounded-2xl cursor-pointer"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Background</label>
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="w-full h-14 p-1 bg-slate-50 border border-slate-200 rounded-2xl cursor-pointer"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Size: {size}px</label>
            </div>
            <input
              type="range"
              min="128"
              max="512"
              step="64"
              value={size}
              onChange={(e) => setSize(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center bg-slate-50 rounded-[3rem] p-12 border border-slate-100">
          <div className="relative group">
            {qrUrl ? (
              <img src={qrUrl} alt="QR Code" className="w-64 h-64 bg-white border border-slate-100 rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-300" />
            ) : (
              <div className="w-64 h-64 bg-white border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center text-slate-300">
                <QrCode size={48} className="mb-4 opacity-50" />
                <p className="text-xs font-bold uppercase tracking-widest">Enter content</p>
              </div>
            )}
          </div>

          <div className="mt-12 w-full">
            <button
              onClick={downloadQR}
              disabled={!qrUrl}
              className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-emerald-700 disabled:opacity-50 transition-all shadow-xl shadow-emerald-100 active:scale-[0.98]"
            >
              <Download size={24} />
              Download PNG
            </button>
          </div>
        </div>
      </div>
    </ToolContainer>
  );
}

function TypeButton({ active, onClick, icon: Icon, label }: { active: boolean; onClick: () => void; icon: any; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold transition-all border ${
        active ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-100" : "bg-white border-slate-200 text-slate-500 hover:border-indigo-300 hover:text-indigo-600"
      }`}
    >
      <Icon size={14} />
      {label}
    </button>
  );
}
