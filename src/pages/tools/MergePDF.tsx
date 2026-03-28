import { FileText, Upload, X, FilePlus, Download, Loader2, ShieldCheck, Zap, Sparkles } from "lucide-react";
import React, { useState, useRef } from "react";
import ToolLayout from "../../components/ToolLayout";
import { PDFDocument } from "pdf-lib";

export default function MergePDF() {
  const [files, setFiles] = useState<File[]>([]);
  const [isMerging, setIsMerging] = useState(false);
  const [mergedUrl, setMergedUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).filter(f => (f as File).type === "application/pdf") as File[];
      setFiles(prev => [...prev, ...newFiles]);
      setMergedUrl(null);
      setError(null);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
    setMergedUrl(null);
  };

  const mergePDFs = async () => {
    if (files.length < 2) return;
    setIsMerging(true);
    setError(null);
    try {
      const mergedPdf = await PDFDocument.create();
      for (const file of files) {
        const bytes = await file.arrayBuffer();
        const pdf = await PDFDocument.load(bytes);
        const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        pages.forEach(page => mergedPdf.addPage(page));
      }
      const mergedBytes = await mergedPdf.save();
      const blob = new Blob([mergedBytes], { type: "application/pdf" });
      setMergedUrl(URL.createObjectURL(blob));
    } catch (err) {
      console.error(err);
      setError("Failed to merge PDFs. Please ensure all files are valid PDF documents.");
    } finally {
      setIsMerging(false);
    }
  };

  return (
    <ToolLayout
      title="Merge PDF Files"
      desc="Combine multiple PDF documents into a single file. Fast, free, and secure."
      icon={FileText}
      badge="PDF Tool"
      features={[
        { icon: ShieldCheck, title: "100% Secure", desc: "All processing happens in your browser. No files are uploaded to any server." },
        { icon: Zap, title: "Lightning Fast", desc: "Client-side merging means instant results without waiting for uploads." },
        { icon: Sparkles, title: "High Quality", desc: "Preserves original formatting, images, and layout of all your PDF files." }
      ]}
    >
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/50">
        {/* Dropzone */}
        <div
          onClick={() => fileInputRef.current?.click()}
          className="group relative border-2 border-dashed border-slate-200 rounded-2xl p-12 text-center cursor-pointer hover:border-indigo-500 hover:bg-indigo-50/30 transition-all"
        >
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            multiple
            accept="application/pdf"
            onChange={handleFileChange}
          />
          <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
            <Upload size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Drop your PDF files here</h3>
          <p className="text-slate-500">or click to browse files from your computer</p>
        </div>

        {/* File List */}
        {files.length > 0 && (
          <div className="mt-8 space-y-3">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold text-slate-900">Selected Files ({files.length})</h4>
              <button
                onClick={() => setFiles([])}
                className="text-sm text-slate-400 hover:text-rose-500 font-medium transition-colors"
              >
                Clear all
              </button>
            </div>
            {files.map((file, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl group">
                <div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-indigo-600">
                  <FileText size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-slate-900 text-sm truncate">{file.name}</div>
                  <div className="text-slate-400 text-xs">{(file.size / 1024).toFixed(1)} KB</div>
                </div>
                <button
                  onClick={() => removeFile(idx)}
                  className="p-2 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all"
                >
                  <X size={18} />
                </button>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="mt-6 p-4 bg-rose-50 border border-rose-100 text-rose-600 rounded-xl text-sm font-medium flex items-center gap-3">
            <X size={18} className="flex-shrink-0" />
            {error}
          </div>
        )}

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-4">
          <button
            onClick={mergePDFs}
            disabled={files.length < 2 || isMerging}
            className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-200"
          >
            {isMerging ? (
              <>
                <Loader2 size={24} className="animate-spin" />
                Merging PDFs...
              </>
            ) : (
              <>
                <FilePlus size={24} />
                Merge {files.length} PDFs
              </>
            )}
          </button>

          {mergedUrl && (
            <a
              href={mergedUrl}
              download="merged.pdf"
              className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 animate-bounce-subtle"
            >
              <Download size={24} />
              Download Merged PDF
            </a>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}
