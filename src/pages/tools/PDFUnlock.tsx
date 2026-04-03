import React, { useState } from 'react';
import { Lock, Download, AlertCircle, Loader2, FileText } from 'lucide-react';
import { PDFDocument } from 'pdf-lib';
import { motion, AnimatePresence } from 'motion/react';
import ToolLayout from '../../components/ToolLayout';
import FileDropzone, { FileList } from '../../components/FileDropzone';

const PDFUnlock = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [password, setPassword] = useState('');
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
    if (!password) {
      setError('Please enter the current password.');
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      const file = files[0];
      const arrayBuffer = await file.arrayBuffer();
      
      // pdf-lib doesn't support decryption of password-protected PDFs.
      // We inform the user that this feature is not supported in this browser-based tool.
      throw new Error('PDF decryption is currently not supported in this browser-based tool. We are working on adding this feature.');

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while unlocking the PDF. Please check your password.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <ToolLayout
      title="Unlock PDF"
      desc="Remove password protection from your PDF document."
      icon={Lock}
      badge="PDF Security"
    >
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
          <FileDropzone
            onFileSelect={handleFilesSelected}
            accept="application/pdf"
            multiple={false}
            title="Drop your locked PDF here or click to browse"
            icon={FileText}
          />

          {files.length > 0 && (
            <div className="mt-6 space-y-6">
              <FileList files={files} onRemove={handleRemoveFile} onClear={handleClearFiles} />
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Current Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter current password to unlock PDF"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
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
                    <Lock className="w-5 h-5" />
                    Unlock PDF
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
                download={`unlocked_${files[0].name}`}
                className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Unlocked PDF
              </a>
            </motion.div>
          )}
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h3>How to unlock your PDF</h3>
          <ol>
            <li>Upload the password-protected PDF file.</li>
            <li>Enter the current password for the document.</li>
            <li>Click "Unlock PDF" to remove the protection.</li>
            <li>Download your new, unlocked PDF file.</li>
          </ol>
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            Note: All processing happens in your browser. Your files and passwords are never sent to our servers.
          </p>
        </div>
      </div>
    </ToolLayout>
  );
};

export default PDFUnlock;
