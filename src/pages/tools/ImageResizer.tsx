import React, { useState, useRef } from "react";
import { Download, Trash2, ImageIcon } from "lucide-react";
import ToolContainer from "../../components/ToolContainer";

export default function ImageResizer() {
  const [image, setImage] = useState<string | null>(null);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [aspectRatio, setAspectRatio] = useState(true);
  const [originalSize, setOriginalSize] = useState<{ w: number; h: number } | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        setImage(event.target?.result as string);
        setWidth(img.width);
        setHeight(img.height);
        setOriginalSize({ w: img.width, h: img.height });
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleWidthChange = (val: number) => {
    setWidth(val);
    if (aspectRatio && originalSize) {
      setHeight(Math.round((val / originalSize.w) * originalSize.h));
    }
  };

  const handleHeightChange = (val: number) => {
    setHeight(val);
    if (aspectRatio && originalSize) {
      setWidth(Math.round((val / originalSize.h) * originalSize.w));
    }
  };

  const download = () => {
    if (!image || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = width;
      canvas.height = height;
      ctx?.drawImage(img, 0, 0, width, height);
      const link = document.createElement("a");
      link.download = `resized-image.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
    img.src = image;
  };

  return (
    <ToolContainer
      title="Image Resizer"
      description="Change image dimensions with pixel-perfect precision."
    >
      <div className="space-y-8">
        {!image ? (
          <label className="flex flex-col items-center justify-center w-full h-80 border-2 border-dashed border-slate-200 rounded-3xl cursor-pointer hover:bg-slate-50 transition-all group">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                <ImageIcon size={32} />
              </div>
              <p className="mb-2 text-sm text-slate-700 font-bold">Click to upload or drag and drop</p>
              <p className="text-xs text-slate-400">PNG, JPG, WebP (MAX. 10MB)</p>
            </div>
            <input type="file" className="hidden" accept="image/*" onChange={handleFile} />
          </label>
        ) : (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1 w-full bg-slate-50 rounded-2xl p-4 flex items-center justify-center overflow-hidden border border-slate-100">
                <img src={image} alt="Preview" className="max-h-80 rounded-lg shadow-sm" />
              </div>
              <div className="w-full md:w-72 space-y-6 bg-white p-6 border border-slate-100 rounded-3xl shadow-sm">
                <div className="space-y-4">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Width (px)</label>
                  <input
                    type="number"
                    value={width}
                    onChange={(e) => handleWidthChange(parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 transition-all font-bold"
                  />
                </div>
                <div className="space-y-4">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Height (px)</label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => handleHeightChange(parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 transition-all font-bold"
                  />
                </div>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={aspectRatio}
                    onChange={(e) => setAspectRatio(e.target.checked)}
                    className="w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-sm font-bold text-slate-600 group-hover:text-indigo-600 transition-colors">Lock Aspect Ratio</span>
                </label>
              </div>
            </div>
            <div className="flex gap-4">
              <button onClick={download} className="flex-1 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center justify-center gap-2">
                <Download size={20} /> Download Resized Image
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
