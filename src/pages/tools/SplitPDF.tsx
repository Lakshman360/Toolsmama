import React, { useState } from "react";
import { Split, Download, Trash2, Zap, ShieldCheck, Sparkles, FileText } from "lucide-react";
import { PDFDocument } from "pdf-lib";
import ToolLayout from "../../components/ToolLayout";

export default function SplitPDF() {
  const [file, setFile] = useState<File | null>(null);
  const [pages, setPages] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f && f.type === "application/pdf") {
      setFile(f);
    }
  };

  const splitPdf = async () => {
    if (!file || !pages) return;
    setLoading(true);
    try {
      const existingPdfBytes = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const pageIndices = pages.split(",").map(p => parseInt(p.trim()) - 1).filter(p => !isNaN(p) && p >= 0 && p < pdfDoc.getPageCount());

      if (pageIndices.length === 0) {
        alert("Please enter valid page numbers.");
        setLoading(false);
        return;
      }

      const newPdfDoc = await PDFDocument.create();
      const copiedPages = await newPdfDoc.copyPages(pdfDoc, pageIndices);
      copiedPages.forEach(page => newPdfDoc.addPage(page));

      const pdfBytes = await newPdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `split-${file.name}`;
      link.click();
    } catch (error) {
      console.error(error);
      alert("Error splitting PDF");
    }
    setLoading(false);
  };

  return (
    <ToolLayout
      title="Split PDF"
      desc="Extract specific pages from your PDF file into a new document."
      icon={Split}
      badge="PDF Tool"
      features={[
        { icon: Sparkles, title: "Custom Pages", desc: "Specify exact pages to extract (e.g., 1, 3, 5)." },
        { icon: Zap, title: "Fast", desc: "PDF processing happens entirely in your browser." },
        { icon: ShieldCheck, title: "Private", desc: "Your PDF never leaves your device." }
      ]}
    >
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/50 space-y-8">
        {!file ? (
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-slate-200 rounded-3xl cursor-pointer hover:bg-slate-50 transition-all group">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                <FileText size={32} />
              </div>
              <p className="mb-2 text-sm text-slate-700 font-bold">Upload PDF File</p>
              <p className="text-xs text-slate-400">PDF (MAX. 50MB)</p>
            </div>
            <input type="file" className="hidden" accept="application/pdf" onChange={handleFile} />
          </label>
        ) : (
          <div className="space-y-8">
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
                  <FileText size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-900">{file.name}</div>
                  <div className="text-xs text-slate-400">{(file.size / 1024 / 1024).toFixed(2)} MB</div>
                </div>
              </div>
              <button onClick={() => setFile(null)} className="p-2 text-slate-400 hover:text-rose-500 transition-colors">
                <Trash2 size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Enter Page Numbers (e.g., 1, 2, 5)</label>
              <input
                type="text"
                value={pages}
                onChange={(e) => setPages(e.target.value)}
                placeholder="1, 2, 5"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-indigo-500 transition-all font-bold"
              />
            </div>

            <button
              onClick={splitPdf}
              disabled={loading || !pages}
              className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? "Processing..." : "⚡ Split PDF"}
            </button>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
