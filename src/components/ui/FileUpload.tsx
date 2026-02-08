"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, X, File, Music, Video, Image } from "lucide-react";

interface FileUploadProps {
  onFilesChange: (files: File[]) => void;
  maxFiles?: number;
  maxSizeMB?: number;
  accept?: string;
  label?: string;
}

export function FileUpload({
  onFilesChange,
  maxFiles = 5,
  maxSizeMB = 50,
  accept = "audio/*,video/*,image/*",
  label = "Upload Files",
}: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const getFileIcon = (type: string) => {
    if (type.startsWith("audio/")) return Music;
    if (type.startsWith("video/")) return Video;
    if (type.startsWith("image/")) return Image;
    return File;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;

    setError(null);
    const fileArray = Array.from(newFiles);

    // Check max files
    if (files.length + fileArray.length > maxFiles) {
      setError(`Maximum ${maxFiles} files allowed`);
      return;
    }

    // Check file sizes
    const oversizedFile = fileArray.find(
      (f) => f.size > maxSizeMB * 1024 * 1024
    );
    if (oversizedFile) {
      setError(`File "${oversizedFile.name}" exceeds ${maxSizeMB}MB limit`);
      return;
    }

    const updatedFiles = [...files, ...fileArray];
    setFiles(updatedFiles);
    onFilesChange(updatedFiles);
  };

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onFilesChange(updatedFiles);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-[#C0C0C0] mb-2">
        {label}
      </label>

      {/* Drop Zone */}
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragging
            ? "border-[#3461D2] bg-[#3461D2]/10"
            : "border-[#2A2A2E] hover:border-[#3461D2]/50 bg-[#1A1A1E]"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          accept={accept}
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
        />

        <Upload
          size={32}
          className={`mx-auto mb-3 ${
            isDragging ? "text-[#3461D2]" : "text-[#666]"
          }`}
        />

        <p className="text-sm text-[#A0A0A0] mb-1">
          <span className="text-[#3461D2] font-medium">Click to upload</span> or
          drag and drop
        </p>
        <p className="text-xs text-[#666]">
          Audio, video, or images up to {maxSizeMB}MB each (max {maxFiles} files)
        </p>
      </div>

      {/* Error */}
      {error && (
        <p className="mt-2 text-sm text-[#D23434]">{error}</p>
      )}

      {/* File List */}
      <AnimatePresence>
        {files.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 space-y-2"
          >
            {files.map((file, index) => {
              const Icon = getFileIcon(file.type);
              return (
                <motion.div
                  key={`${file.name}-${index}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="flex items-center gap-3 p-3 bg-[#1A1A1E] border border-[#2A2A2E] rounded-lg"
                >
                  <div className="w-10 h-10 rounded bg-[#2A2A2E] flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-[#3461D2]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[#EAEAEA] truncate">
                      {file.name}
                    </p>
                    <p className="text-xs text-[#666]">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(index);
                    }}
                    className="p-1 text-[#666] hover:text-[#D23434] transition-colors"
                  >
                    <X size={18} />
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
