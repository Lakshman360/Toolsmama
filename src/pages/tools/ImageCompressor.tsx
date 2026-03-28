import { Image as ImageIcon, Upload, X, Download, Loader2, Zap } from "lucide-react";
import React, { useState, useRef } from "react";
import ToolContainer from "../../components/ToolContainer";

export default function ImageCompressor() {
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [compressedUrl, setCompressedUrl] = useState<string | null>(null);
  const [compressedSize, setCompressedSize] = useState<number | null>(null);
  const [quality, setQuality] = useState(75);
  const [isCompressing, setIsCompressing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setOriginalFile(file);
      setOriginalUrl(URL.createObjectURL(file));
      setCompressedUrl(null);
      setCompressedSize(null);
    }
  };

  const compressImage = () => {
    if (!originalUrl || !originalFile) return;
    setIsCompressing(true);

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);
      const mimeType = originalFile.type === "image/png" ? "image/png" : "image/jpeg";
      
      canvas.toBlob((blob) => {
        if (blob) {
          setCompressedUrl(URL.createObjectURL(blob));
          setCompressedSize(blob.size);
          setIsCompressing(false);
        }
      }, mimeType, quality / 100);
    };
    img.src = originalUrl;
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / 1024 / 1024).toFixed(2) + " MB";
  };

  return (
    <ToolContainer
      title="Image Compressor"
      description="Reduce image file sizes without losing quality. Works entirely in your browser — private and instant."
    >
      <div className="space-y-6">
        <div>
          {!originalUrl ? (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="group relative border-2 border-dashed border-slate-200 rounded-2xl p-12 text-center cursor-pointer hover:border-indigo-500 hover:bg-indigo-50/30 transition-all"
            >
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleFileChange}
              />
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Upload size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Drop your image here</h3>
              <p className="text-slate-500">Supports JPG, PNG, WebP</p>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                    <ImageIcon size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{originalFile?.name}</div>
                    <div className="text-slate-400 text-xs">{formatSize(originalFile?.size || 0)}</div>
                  </div>
                </div>
                <button
                  onClick={() => { setOriginalUrl(null); setOriginalFile(null); setCompressedUrl(null); }}
                  className="p-2 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-bold text-slate-900 text-sm">Compression Quality</label>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold">{quality}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={quality}
                  onChange={(e) => setQuality(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
              </div>

              <button
                onClick={compressImage}
                disabled={isCompressing}
                className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-indigo-700 disabled:opacity-50 transition-all shadow-lg shadow-indigo-200"
              >
                {isCompressing ? <Loader2 size={24} className="animate-spin" /> : <Zap size={24} />}
                Compress Image
              </button>
            </div>
          )}
        </div>

        {compressedUrl && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white border border-slate-200 rounded-3xl p-6">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Original</div>
              <img src={originalUrl!} alt="Original" className="w-full h-48 object-contain rounded-xl bg-slate-50 border border-slate-100 mb-4" referrerPolicy="no-referrer" />
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-slate-900">{formatSize(originalFile?.size || 0)}</span>
                <span className="text-xs text-slate-400">100%</span>
              </div>
            </div>
            <div className="bg-white border border-indigo-200 rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-wider">
                Compressed
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Optimized</div>
              <img src={compressedUrl} alt="Compressed" className="w-full h-48 object-contain rounded-xl bg-slate-50 border border-slate-100 mb-4" referrerPolicy="no-referrer" />
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-indigo-600">{formatSize(compressedSize || 0)}</span>
                <span className="text-xs font-bold text-emerald-600">
                  -{Math.round((1 - (compressedSize || 0) / (originalFile?.size || 1)) * 100)}% saved
                </span>
              </div>
              <a
                href={compressedUrl}
                download={`compressed_${originalFile?.name}`}
                className="mt-6 w-full py-3 bg-emerald-600 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100"
              >
                <Download size={18} />
                Download Image
              </a>
            </div>
          </div>
        )}
      </div>
    </ToolContainer>
  );
}
