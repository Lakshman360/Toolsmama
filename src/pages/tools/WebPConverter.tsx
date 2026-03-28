import React, { useState, useRef } from "react";
import { Download, Trash2, ImageIcon } from "lucide-react";
import ToolContainer from "../../components/ToolContainer";

export default function WebPConverter() {
  const [image, setImage] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => setImage(event.target?.result as string);
    reader.readAsDataURL(file);
  };

  const convertAndDownload = () => {
    if (!image || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const link = document.createElement("a");
      link.download = `image.webp`;
      link.href = canvas.toDataURL("image/webp", 0.8);
      link.click();
    };
    img.src = image;
  };

  return (
    <ToolContainer
      title="WebP Converter"
      description="Convert any image to modern, lightweight WebP format."
    >
      <div className="space-y-8">
        {!image ? (
          <label className="flex flex-col items-center justify-center w-full h-80 border-2 border-dashed border-slate-200 rounded-3xl cursor-pointer hover:bg-slate-50 transition-all group">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                <ImageIcon size={32} />
              </div>
              <p className="mb-2 text-sm text-slate-700 font-bold">Upload Image</p>
              <p className="text-xs text-slate-400">PNG, JPG, JPEG (MAX. 10MB)</p>
            </div>
            <input type="file" className="hidden" accept="image/*" onChange={handleFile} />
          </label>
        ) : (
          <div className="space-y-8">
            <div className="bg-slate-50 rounded-2xl p-4 flex items-center justify-center overflow-hidden border border-slate-100">
              <img src={image} alt="Preview" className="max-h-80 rounded-lg shadow-sm" referrerPolicy="no-referrer" />
            </div>
            <div className="flex gap-4">
              <button onClick={convertAndDownload} className="flex-1 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center justify-center gap-2">
                <Download size={20} /> Convert to WebP & Download
              </button>
              <button onClick={() => setImage(null)} className="p-4 bg-slate-100 text-slate-400 hover:text-rose-500 rounded-2xl transition-all">
                <Trash2 size={24} />
              </button>
            </div>
          </div>
        )}
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </ToolContainer>
  );
}
