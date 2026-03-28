import React, { useState, useRef } from "react";
import { RotateCw, Download, Trash2, ImageIcon } from "lucide-react";
import ToolContainer from "../../components/ToolContainer";

export default function ImageRotator() {
  const [image, setImage] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      setImage(event.target?.result as string);
      setRotation(0);
    };
    reader.readAsDataURL(file);
  };

  const rotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const download = () => {
    if (!image || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      if (rotation % 180 === 0) {
        canvas.width = img.width;
        canvas.height = img.height;
      } else {
        canvas.width = img.height;
        canvas.height = img.width;
      }

      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((rotation * Math.PI) / 180);
        ctx.drawImage(img, -img.width / 2, -img.height / 2);
        ctx.restore();

        const link = document.createElement("a");
        link.download = `rotated-image.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
      }
    };
    img.src = image;
  };

  return (
    <ToolContainer
      title="Image Rotator"
      description="Rotate your images by 90, 180, or 270 degrees instantly."
    >
      <div className="space-y-8">
        {!image ? (
          <label className="flex flex-col items-center justify-center w-full h-80 border-2 border-dashed border-slate-200 rounded-3xl cursor-pointer hover:bg-slate-50 transition-all group">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                <ImageIcon size={32} />
              </div>
              <p className="mb-2 text-sm text-slate-700 font-bold">Upload Image to Rotate</p>
              <p className="text-xs text-slate-400">PNG, JPG, WebP (MAX. 10MB)</p>
            </div>
            <input type="file" className="hidden" accept="image/*" onChange={handleFile} />
          </label>
        ) : (
          <div className="space-y-8">
            <div className="bg-slate-50 rounded-2xl p-8 flex items-center justify-center overflow-hidden min-h-[300px] border border-slate-100">
              <img
                src={image}
                alt="Preview"
                style={{ transform: `rotate(${rotation}deg)` }}
                className="max-h-80 rounded-lg shadow-sm transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-wrap gap-4">
              <button onClick={rotate} className="flex-1 py-4 bg-slate-800 text-white rounded-2xl font-bold text-lg hover:bg-slate-900 transition-all shadow-lg flex items-center justify-center gap-2">
                <RotateCw size={20} /> Rotate 90°
              </button>
              <button onClick={download} className="flex-1 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center justify-center gap-2">
                <Download size={20} /> Download
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
