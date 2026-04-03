import React, { useState } from "react";
import { FileText, Download, Trash2, Zap, ShieldCheck, Sparkles, FileType, Loader2, AlertCircle } from "lucide-react";
import * as pdfjsLib from "pdfjs-dist";
import { Document, Packer, Paragraph, TextRun } from "docx";
import ToolLayout from "../../components/ToolLayout";
import FileDropzone, { FileList } from "../../components/FileDropzone";
import { motion, AnimatePresence } from "motion/react";

// Set up worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const PDFToWord = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const file = files[0] || null;

  const handleFileSelect = (newFiles: File[]) => {
    const f = newFiles[0];
    if (f && f.type === "application/pdf") {
      setFiles([f]);
      setError(null);
      setDownloadUrl(null);
    } else {
      setError("Please select a valid PDF file.");
    }
  };

  const handleRemoveFile = () => {
    setFiles([]);
    setDownloadUrl(null);
  };

  const convertToWord = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      const totalPages = pdf.numPages;
      const paragraphs: Paragraph[] = [];

      for (let i = 1; i <= totalPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const textItems = textContent.items as any[];
        
        let lastY = -1;
        let currentLine = "";
        
        for (const item of textItems) {
          if (lastY !== -1 && Math.abs(item.transform[5] - lastY) > 5) {
            paragraphs.push(new Paragraph({
              children: [new TextRun(currentLine)],
            }));
            currentLine = "";
          }
          currentLine += item.str + " ";
          lastY = item.transform[5];
        }
        
        if (currentLine) {
          paragraphs.push(new Paragraph({
            children: [new TextRun(currentLine)],
          }));
        }
        
        // Add page break after each page except the last
        if (i < totalPages) {
          paragraphs.push(new Paragraph({
            children: [new TextRun({ text: "", break: 1 })],
          }));
        }
      }

      const doc = new Document({
        sections: [{
          properties: {},
          children: paragraphs,
        }],
      });

      const blob = await Packer.toBlob(doc);
      setDownloadUrl(URL.createObjectURL(blob));
    } catch (error) {
      console.error(error);
      setError("Error extracting text from PDF. Some PDFs are image-based and require OCR.");
    }
    setLoading(false);
  };

  return (
    <ToolLayout
      title="PDF to Word"
      desc="Extract text from your PDF and convert it into a Word document (.docx)."
      icon={FileType}
      badge="PDF Tool"
      features={[
        { icon: Sparkles, title: "Text Extraction", desc: "Extracts text content while preserving basic layout." },
        { icon: Zap, title: "Fast", desc: "Conversion happens entirely in your browser." },
        { icon: ShieldCheck, title: "Secure", desc: "Your PDF never leaves your device." }
      ]}
    >
      <div className="bg-white dark:bg-[#1f2937] border border-gray-200 dark:border-gray-700 rounded-[2.5rem] p-8 md:p-12 shadow-sm transition-colors duration-300">
        {!file ? (
          <FileDropzone onFileSelect={handleFileSelect} multiple={false} />
        ) : (
          <div className="space-y-8">
            <div className="p-6 bg-gray-50 dark:bg-[#111827]/50 border border-gray-100 dark:border-gray-800 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                  <FileText size={24} />
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">{file.name}</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500 font-medium">{(file.size / 1024 / 1024).toFixed(2)} MB</div>
                </div>
              </div>
              <button onClick={handleRemoveFile} className="p-2.5 text-gray-300 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-xl transition-all">
                <Trash2 size={20} />
              </button>
            </div>

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
                onClick={convertToWord}
                disabled={loading || downloadUrl !== null}
                className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xl flex items-center justify-center gap-4 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-200 dark:shadow-none active:scale-95"
              >
                {loading ? (
                  <>
                    <Loader2 size={28} className="animate-spin" />
                    Extracting Text...
                  </>
                ) : (
                  <>
                    <FileType size={28} />
                    Convert PDF to Word
                  </>
                )}
              </button>

              {downloadUrl && (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  href={downloadUrl}
                  download={`${file.name.replace(".pdf", "")}-toolsmama.docx`}
                  className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-black text-xl flex items-center justify-center gap-4 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 dark:shadow-none animate-bounce-subtle"
                >
                  <Download size={28} />
                  Download Word File
                </motion.a>
              )}
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default PDFToWord;
