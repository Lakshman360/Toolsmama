import React, { useState } from "react";
import { FileText, Download, Trash2, Zap, ShieldCheck, Sparkles, Image as ImageIcon, Loader2, AlertCircle } from "lucide-react";
import { PDFDocument } from "pdf-lib";
import ToolLayout from "../../components/ToolLayout";
import FileDropzone, { FileList } from "../../components/FileDropzone";
import { motion, AnimatePresence } from "motion/react";

const JPGToPDF = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const handleFileSelect = (newFiles: File[]) => {
    const imgFiles = newFiles.filter(f => f.type === "image/jpeg" || f.type === "image/jpg" || f.type === "image/png");
    if (imgFiles.length === 0) {
      setError("Please select valid JPG or PNG images.");
      return;
    }
    setFiles(prev => [...prev, ...imgFiles]);
    setDownloadUrl(null);
    setError(null);
  };

  const handleRemoveFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
    setDownloadUrl(null);
  };

  const handleClearFiles = () => {
    setFiles([]);
    setDownloadUrl(null);
  };

  const convertToPDF = async () => {
    if (files.length === 0) return;
    setLoading(true);
    setError(null);
    try {
      const pdfDoc = await PDFDocument.create();
      
      for (const file of files) {
        const bytes = await file.arrayBuffer();
        let image;
        if (file.type === "image/png") {
          image = await pdfDoc.embedPng(bytes);
        } else {
          image = await pdfDoc.embedJpg(bytes);
        }
        
        const page = pdfDoc.addPage([image.width, image.height]);
        page.drawImage(image, {
          x: 0,
          y: 0,
          width: image.width,
          height: image.height,
        });
      }
      
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      setDownloadUrl(URL.createObjectURL(blob));
    } catch (error) {
      console.error(error);
      setError("Error converting images to PDF. Please check the files.");
    }
    setLoading(false);
  };

  return (
    <ToolLayout
      title="JPG to PDF"
      desc="Convert your JPG and PNG images into a single PDF document."
      icon={ImageIcon}
      badge="PDF Tool"
      features={[
        { icon: Sparkles, title: "High Quality", desc: "Preserves original image resolution and quality." },
        { icon: Zap, title: "Fast", desc: "Conversion happens entirely in your browser." },
        { icon: ShieldCheck, title: "Secure", desc: "Your images never leave your device." }
      ]}
    >
      <div className="bg-white dark:bg-[#1f2937] border border-gray-200 dark:border-gray-700 rounded-[2.5rem] p-8 md:p-12 shadow-sm transition-colors duration-300">
        <FileDropzone 
          onFileSelect={handleFileSelect} 
          accept="image/jpeg,image/png" 
          title="Drop your images here"
          icon={ImageIcon}
        />

        <FileList 
          files={files} 
          onRemove={handleRemoveFile} 
          onClear={handleClearFiles} 
        />

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mt-8 p-6 bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-900/30 text-rose-600 dark:text-rose-400 rounded-2xl text-sm font-bold flex items-center gap-4"
            >
              <AlertCircle size={24} className="flex-shrink-0" />
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-12 flex flex-col gap-6">
          <button
            onClick={convertToPDF}
            disabled={loading || files.length === 0}
            className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xl flex items-center justify-center gap-4 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-200 dark:shadow-none active:scale-95"
          >
            {loading ? (
              <>
                <Loader2 size={28} className="animate-spin" />
                Converting...
              </>
            ) : (
              <>
                <FileText size={28} />
                Convert {files.length} Images to PDF
              </>
            )}
          </button>

          {downloadUrl && (
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              href={downloadUrl}
              download="images-to-pdf-toolsmama.pdf"
              className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-black text-xl flex items-center justify-center gap-4 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 dark:shadow-none animate-bounce-subtle"
            >
              <Download size={28} />
              Download PDF
            </motion.a>
          )}
        </div>
      </div>
    </ToolLayout>
  );
};

export default JPGToPDF;
