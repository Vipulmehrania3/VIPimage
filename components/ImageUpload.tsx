
import React, { useState, useRef, useCallback } from 'react';

interface ImageUploadProps {
  onFileSelect: (file: File) => void;
  index: number;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onFileSelect, index }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAreaClick = () => {
    fileInputRef.current?.click();
  };
  
  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const onDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      onFileSelect(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [onFileSelect]);


  return (
    <div
      className="relative w-full aspect-square bg-gray-700 rounded-lg border-2 border-dashed border-gray-500 flex items-center justify-center text-gray-400 cursor-pointer hover:border-purple-400 hover:bg-gray-600 transition-all duration-300 overflow-hidden"
      onClick={handleAreaClick}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/png, image/jpeg, image/webp"
      />
      {preview ? (
        <img src={preview} alt={`Preview ${index + 1}`} className="w-full h-full object-cover" />
      ) : (
        <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          <span className="font-semibold text-center">Image for Person {index + 1}</span>
          <span className="text-xs">Click or drag & drop</span>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
