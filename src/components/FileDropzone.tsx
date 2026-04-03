import React, { useRef } from "react";
import { Upload, FileText, X } from "lucide-react";
import { motion } from "motion/react";

interface FileDropzoneProps {
  onFileSelect: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  title?: string;
  subtitle?: string;
  icon?: React.ElementType;
}

export default function FileDropzone({
  onFileSelect,
  accept = "application/pdf",
  multiple = true,
  title = "Drop your files here",
  subtitle = "or click to browse files from your computer",
  icon: Icon = Upload
}: FileDropzoneProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onFileSelect(Array.from(e.target.files));
    }
  };

  return (
    <div
      onClick={() => fileInputRef.current?.click()}
      className="group relative border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-[2rem] p-12 text-center cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-all duration-300"
    >
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        multiple={multiple}
        accept={accept}
        onChange={handleFileChange}
      />
      <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-[1.5rem] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm">
        <Icon size={36} />
      </div>
      <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 font-medium">{subtitle}</p>
      
      <div className="mt-8 flex justify-center gap-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
        <span className="flex items-center gap-1.5">
          <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
          Secure
        </span>
        <span className="flex items-center gap-1.5">
          <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
          Private
        </span>
        <span className="flex items-center gap-1.5">
          <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
          Fast
        </span>
      </div>
    </div>
  );
}

interface FileListProps {
  files: File[];
  onRemove: (index: number) => void;
  onClear: () => void;
}

export function FileList({ files, onRemove, onClear }: FileListProps) {
  if (files.length === 0) return null;

  return (
    <div className="mt-10 space-y-4">
      <div className="flex justify-between items-center px-2">
        <h4 className="font-black text-gray-900 dark:text-white uppercase tracking-wider text-sm">
          Selected Files ({files.length})
        </h4>
        <button
          onClick={onClear}
          className="text-xs font-bold text-gray-400 hover:text-rose-500 transition-colors uppercase tracking-widest"
        >
          Clear all
        </button>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {files.map((file, idx) => (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            key={`${file.name}-${idx}`}
            className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-[#111827]/50 border border-gray-100 dark:border-gray-800 rounded-2xl group hover:border-blue-200 dark:hover:border-blue-900/50 transition-all"
          >
            <div className="w-12 h-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm group-hover:scale-110 transition-transform">
              <FileText size={24} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-gray-900 dark:text-white text-sm truncate">{file.name}</div>
              <div className="text-gray-400 dark:text-gray-500 text-xs font-medium">{(file.size / 1024).toFixed(1)} KB</div>
            </div>
            <button
              onClick={() => onRemove(idx)}
              className="p-2.5 text-gray-300 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-xl transition-all"
            >
              <X size={20} />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
