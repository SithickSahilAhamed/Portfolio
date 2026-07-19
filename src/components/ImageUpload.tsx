import React, { useState, useRef } from 'react';
import { Upload, X, Check, AlertCircle } from 'lucide-react';

interface ImageUploadProps {
  onImageChange: (imageUrl: string | null) => void;
  currentImage?: string | null;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageChange, currentImage }) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Configuration
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  const ACCEPTED_FORMATS = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
  const ACCEPTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

  const validateFile = (file: File): string | null => {
    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      return `File size must be less than ${MAX_FILE_SIZE / (1024 * 1024)}MB`;
    }

    // Check file type
    if (!ACCEPTED_FORMATS.includes(file.type)) {
      return `Please upload a valid image file (${ACCEPTED_EXTENSIONS.join(', ')})`;
    }

    return null;
  };

  const processImage = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          
          // Set canvas size (square for circular display)
          const size = Math.min(img.width, img.height);
          canvas.width = 400;
          canvas.height = 400;
          
          if (ctx) {
            // Calculate crop position to center the image
            const sourceX = (img.width - size) / 2;
            const sourceY = (img.height - size) / 2;
            
            // Draw cropped and resized image
            ctx.drawImage(img, sourceX, sourceY, size, size, 0, 0, 400, 400);
            
            // Convert to blob and create URL
            canvas.toBlob((blob) => {
              if (blob) {
                const url = URL.createObjectURL(blob);
                resolve(url);
              } else {
                reject(new Error('Failed to process image'));
              }
            }, 'image/jpeg', 0.9);
          } else {
            reject(new Error('Failed to get canvas context'));
          }
        };
        img.onerror = () => reject(new Error('Failed to load image'));
        img.src = e.target?.result as string;
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsDataURL(file);
    });
  };

  const handleFile = async (file: File) => {
    setError(null);
    setSuccess(false);
    setUploading(true);

    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      setUploading(false);
      return;
    }

    try {
      const imageUrl = await processImage(file);
      onImageChange(imageUrl);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to process image');
    } finally {
      setUploading(false);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleRemoveImage = () => {
    onImageChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setError(null);
    setSuccess(false);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Profile Image</h3>
        <p className="text-sm text-gray-600">
          Upload your professional photo (Max: 5MB, Formats: JPG, PNG, GIF, WebP)
        </p>
      </div>

      {currentImage ? (
        <div className="relative">
          <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={currentImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <button
            onClick={handleRemoveImage}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors shadow-lg"
            aria-label="Remove image"
          >
            <X size={16} />
          </button>
        </div>
      ) : (
        <div
          className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
            dragActive
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-300 hover:border-gray-400'
          } ${uploading ? 'opacity-50 pointer-events-none' : ''}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept={ACCEPTED_EXTENSIONS.join(',')}
            onChange={handleInputChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            disabled={uploading}
          />
          
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              {uploading ? (
                <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent"></div>
              ) : (
                <Upload size={32} className="text-gray-400" />
              )}
            </div>
            
            <div>
              <p className="text-lg font-medium text-gray-700 mb-2">
                {uploading ? 'Processing image...' : 'Drop your image here'}
              </p>
              <p className="text-sm text-gray-500">
                or click to browse files
              </p>
            </div>
            
            <div className="text-xs text-gray-400 space-y-1">
              <p>Supported formats: JPG, PNG, GIF, WebP</p>
              <p>Maximum file size: 5MB</p>
              <p>Image will be automatically cropped to square</p>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="mt-4 p-3 bg-red-100 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
          <AlertCircle size={16} />
          <span className="text-sm">{error}</span>
        </div>
      )}

      {success && (
        <div className="mt-4 p-3 bg-green-100 border border-green-200 rounded-lg flex items-center gap-2 text-green-700">
          <Check size={16} />
          <span className="text-sm">Image uploaded successfully!</span>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;