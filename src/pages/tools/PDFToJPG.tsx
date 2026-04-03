import React, { useState } from "react";
import { Image as ImageIcon, Download, Trash2, Zap, ShieldCheck, Sparkles, FileText, Loader2, AlertCircle } from "lucide-react";
import * as pdfjsLib from "pdfjs-dist";
import ToolLayout from "../../components/ToolLayout";
import FileDropzone, { FileList } from "../../components/FileDropzone";
import { motion, AnimatePresence } from "motion/react";

// Set up worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const PDFToJPG = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [images, setImages] = useState<string[]>([]);

  const file = files[0] || null;

  const handleFileSelect = (newFiles: File[]) => {
    const f = newFiles[0];
    if (f && f.type === "application/pdf") {
      setFiles([f]);
      setError(null);
      setImages([]);
    } else {
      setError("Please select a valid PDF file.");
    }
  };

  const handleRemoveFile = () => {
    setFiles([]);
    setImages([]);
  };

  const convertToJPG = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      const totalPages = pdf.numPages;
      const imageUrls: string[] = [];

      for (let i = 1; i <= totalPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 2.0 }); // High quality
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        
        if (context) {
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          
          await page.render({
            canvasContext: context,
            viewport: viewport,
            canvas: canvas,
          }).promise;
          
          imageUrls.push(canvas.toDataURL("image/jpeg", 0.9));
        }
      }
      
      setImages(imageUrls);
    } catch (error) {
      console.error(error);
      setError("Error converting PDF to images. Please check the file.");
    }
    setLoading(false);
  };

  return (
    <ToolLayout
      title="PDF to JPG"
      desc="Convert each page of your PDF into a high-quality JPG image."
      icon={ImageIcon}
      badge="PDF Tool"
      features={[
        { icon: Sparkles, title: "High Quality", desc: "Renders pages at 2x scale for crisp images." },
        { icon: Zap, title: "Fast", desc: "Conversion happens entirely in your browser." },
        { icon: ShieldCheck, title: "Secure", desc: "Your PDF never leaves your device." }
      ]}
    >
      <div className="bg-white dark:bg-[#1f2937] border border-gray-200 dark:border-gray-700 rounded-[2.5rem] p-8 md:p-12 shadow-sm transition-colors duration-300">
        {!file ? (
          <FileDropzone 
            onFileSelect={handleFileSelect} 
            multiple={false} 
            accept="application/pdf"
            title="Drop your PDF here or click to browse"
            icon={FileText}
          />
        ) : (
          <div className="space-y-8">
            <FileList files={files} onRemove={handleRemoveFile} onClear={handleRemoveFile} />

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-6 bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-900/30 text-rose-600 dark:text-rose-400 rounded-2xl text-sm font-bold flex items-center gap-4"
                >
                  <AlertCircle size={24} className="flex-shrink-0" />
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-col gap-6">
              <button
                onClick={convertToJPG}
                disabled={loading || images.length > 0}
                className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xl flex items-center justify-center gap-4 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-200 dark:shadow-none active:scale-95"
              >
                {loading ? (
                  <>
                    <Loader2 size={28} className="animate-spin" />
                    Converting...
                  </>
                ) : (
                  <>
                    <ImageIcon size={28} />
                    Convert PDF to JPG
                  </>
                )}
              </button>

              {images.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {images.map((img, idx) => (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      key={idx}
                      className="bg-gray-50 dark:bg-[#111827]/50 border border-gray-100 dark:border-gray-800 rounded-2xl p-4 flex flex-col gap-4"
                    >
                      <img src={img} alt={`Page ${idx + 1}`} className="w-full h-auto rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" referrerPolicy="no-referrer" />
                      <a
                        href={img}
                        download={`page-${idx + 1}.jpg`}
                        className="w-full py-3 bg-emerald-600 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all"
                      >
                        <Download size={18} />
                        Download Page {idx + 1}
                      </a>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default PDFToJPG;
