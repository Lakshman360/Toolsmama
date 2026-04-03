import React, { useState } from 'react';
import { Layers, Download, AlertCircle, Loader2, FileText } from 'lucide-react';
import { PDFDocument } from 'pdf-lib';
import { motion, AnimatePresence } from 'motion/react';
import ToolLayout from '../../components/ToolLayout';
import FileDropzone, { FileList } from '../../components/FileDropzone';

const PDFReorderPages = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [newOrder, setNewOrder] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const handleFilesSelected = (newFiles: File[]) => {
    setFiles(newFiles);
    setError(null);
    setDownloadUrl(null);
  };

  const handleRemoveFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
    setDownloadUrl(null);
  };

  const handleClearFiles = () => {
    setFiles([]);
    setDownloadUrl(null);
  };

  const parseOrder = (order: string, totalPages: number): number[] => {
    const indices = order.split(',').map(p => parseInt(p.trim())).filter(n => !isNaN(n));
    return indices.map(n => n - 1).filter(n => n >= 0 && n < totalPages);
  };

  const processPDF = async () => {
    if (files.length === 0) {
      setError('Please select a PDF file.');
      return;
    }
    if (!newOrder.trim()) {
      setError('Please enter the new page order (e.g., 3, 1, 2).');
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      const file = files[0];
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const totalPages = pdfDoc.getPageCount();
      
      const pageIndices = parseOrder(newOrder, totalPages);
      
      if (pageIndices.length === 0) {
        throw new Error('Invalid page order or pages out of bounds.');
      }

      const newPdfDoc = await PDFDocument.create();
      const copiedPages = await newPdfDoc.copyPages(pdfDoc, pageIndices);
      copiedPages.forEach((page) => newPdfDoc.addPage(page));

      const pdfBytes = await newPdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while reordering pages.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <ToolLayout
      title="Reorder PDF Pages"
      desc="Change the order of pages in your PDF document."
      icon={Layers}
      badge="PDF Editor"
    >
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
          <FileDropzone
            onFileSelect={handleFilesSelected}
            accept="application/pdf"
            multiple={false}
            title="Drop your PDF here or click to browse"
            icon={FileText}
          />

          {files.length > 0 && (
            <div className="mt-6 space-y-6">
              <FileList files={files} onRemove={handleRemoveFile} onClear={handleClearFiles} />
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  New Page Order
                </label>
                <input
                  type="text"
                  value={newOrder}
                  onChange={(e) => setNewOrder(e.target.value)}
                  placeholder="e.g., 3, 1, 2, 4"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Enter the page numbers in the sequence you want them to appear.
                </p>
              </div>

              <button
                onClick={processPDF}
                disabled={isProcessing}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Layers className="w-5 h-5" />
                    Reorder Pages
                  </>
                )}
              </button>
            </div>
          )}

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3 text-red-700 dark:text-red-400"
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">{error}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {downloadUrl && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6"
            >
              <a
                href={downloadUrl}
                download={`reordered_${files[0].name}`}
                className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Reordered PDF
              </a>
            </motion.div>
          )}
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h3>How to reorder pages in your PDF</h3>
          <ol>
            <li>Upload the PDF file you want to reorder.</li>
            <li>Enter the new sequence of page numbers (e.g., "3, 1, 2, 4").</li>
            <li>Click "Reorder Pages" to generate a new PDF with the specified order.</li>
            <li>Download your reordered PDF file.</li>
          </ol>
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            Note: All processing happens in your browser. Your files are never sent to our servers.
          </p>
        </div>
      </div>
    </ToolLayout>
  );
};

export default PDFReorderPages;
