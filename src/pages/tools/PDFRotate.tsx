import React, { useState } from 'react';
import { RotateCw, Download, AlertCircle, Loader2, FileText } from 'lucide-react';
import { PDFDocument, degrees } from 'pdf-lib';
import { motion, AnimatePresence } from 'motion/react';
import ToolLayout from '../../components/ToolLayout';
import FileDropzone, { FileList } from '../../components/FileDropzone';

const PDFRotate = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [rotation, setRotation] = useState(90);
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

  const processPDF = async () => {
    if (files.length === 0) {
      setError('Please select a PDF file.');
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      const file = files[0];
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const pages = pdfDoc.getPages();
      
      pages.forEach((page) => {
        const currentRotation = page.getRotation().angle;
        page.setRotation(degrees(currentRotation + rotation));
      });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while rotating the PDF.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <ToolLayout
      title="Rotate PDF"
      desc="Rotate all pages in your PDF document."
      icon={RotateCw}
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
                  Rotation Angle
                </label>
                <div className="flex gap-4">
                  {[90, 180, 270].map((angle) => (
                    <button
                      key={angle}
                      onClick={() => setRotation(angle)}
                      className={`flex-1 py-2 rounded-lg border transition-all ${
                        rotation === angle
                          ? 'bg-blue-600 border-blue-600 text-white'
                          : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500'
                      }`}
                    >
                      {angle}°
                    </button>
                  ))}
                </div>
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
                    <RotateCw className="w-5 h-5" />
                    Rotate PDF
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
                download={`rotated_${files[0].name}`}
                className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Rotated PDF
              </a>
            </motion.div>
          )}
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h3>How to rotate your PDF</h3>
          <ol>
            <li>Upload the PDF file you want to rotate.</li>
            <li>Select the rotation angle (90°, 180°, or 270°).</li>
            <li>Click "Rotate PDF" to apply the rotation to all pages.</li>
            <li>Download your rotated PDF file.</li>
          </ol>
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            Note: All processing happens in your browser. Your files are never sent to our servers.
          </p>
        </div>
      </div>
    </ToolLayout>
  );
};

export default PDFRotate;
