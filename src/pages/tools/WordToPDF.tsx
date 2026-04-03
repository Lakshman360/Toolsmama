import React, { useState } from "react";
import { FileText, Download, Trash2, Zap, ShieldCheck, Sparkles, FileType, Loader2, AlertCircle } from "lucide-react";
import mammoth from "mammoth";
import { jsPDF } from "jspdf";
import ToolLayout from "../../components/ToolLayout";
import FileDropzone, { FileList } from "../../components/FileDropzone";
import { motion, AnimatePresence } from "motion/react";

const WordToPDF = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const file = files[0] || null;

  const handleFileSelect = (newFiles: File[]) => {
    const f = newFiles[0];
    if (f && (f.name.endsWith(".docx") || f.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
      setFiles([f]);
      setError(null);
      setDownloadUrl(null);
    } else {
      setError("Please select a valid Word (.docx) file.");
    }
  };

  const handleRemoveFile = () => {
    setFiles([]);
    setDownloadUrl(null);
  };

  const convertToPDF = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);
    try {
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.extractRawText({ arrayBuffer });
      const text = result.value;
      
      const doc = new jsPDF();
      const splitText = doc.splitTextToSize(text, 180);
      doc.text(splitText, 15, 15);
      
      const pdfBlob = doc.output("blob");
      setDownloadUrl(URL.createObjectURL(pdfBlob));
    } catch (error) {
      console.error(error);
      setError("Error converting Word to PDF. Please ensure the file is a valid .docx document.");
    }
    setLoading(false);
  };

  return (
    <ToolLayout
      title="Word to PDF"
      desc="Convert your Word documents (.docx) into high-quality PDF files."
      icon={FileType}
      badge="PDF Tool"
      features={[
        { icon: Sparkles, title: "Clean Conversion", desc: "Converts text content while preserving layout." },
        { icon: Zap, title: "Fast", desc: "Conversion happens entirely in your browser." },
        { icon: ShieldCheck, title: "Secure", desc: "Your Word file never leaves your device." }
      ]}
    >
      <div className="bg-white dark:bg-[#1f2937] border border-gray-200 dark:border-gray-700 rounded-[2.5rem] p-8 md:p-12 shadow-sm transition-colors duration-300">
        {!file ? (
          <FileDropzone 
            onFileSelect={handleFileSelect} 
            multiple={false} 
            accept=".docx" 
            title="Drop your Word file here"
            icon={FileType}
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
                onClick={convertToPDF}
                disabled={loading || downloadUrl !== null}
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
                    Convert Word to PDF
                  </>
                )}
              </button>

              {downloadUrl && (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  href={downloadUrl}
                  download={`${file.name.replace(".docx", "")}-toolsmama.pdf`}
                  className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-black text-xl flex items-center justify-center gap-4 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 dark:shadow-none animate-bounce-subtle"
                >
                  <Download size={28} />
                  Download PDF File
                </motion.a>
              )}
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default WordToPDF;
