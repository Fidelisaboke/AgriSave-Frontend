import { useCallback, useEffect, useState } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface DiseaseUploadCardProps {
  onFileSelect: (file: File) => void;
  isLoading?: boolean;
  disabled?: boolean;
  selectedFile: File | null;
  setSelectedFile: (file: File | null) => void;
  preview: string | null;
  setPreview: (preview: string | null) => void;
}

export function DiseaseUploadCard({ 
  onFileSelect, 
  isLoading, 
  disabled,
  selectedFile, 
  setSelectedFile, 
  preview, 
  setPreview 
}: DiseaseUploadCardProps) {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === 'dragenter' || e.type === 'dragover');
  }, []);

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }
    setSelectedFile(file);

  }, [setSelectedFile]);

  // Handle cleanup
  useEffect(() => {
    // Revoke data URIs
    return () => { if (preview) URL.revokeObjectURL(preview) };
  })

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
  }, [handleFile]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files?.[0]) handleFile(e.target.files[0]);
  }, [handleFile]);

  const handleAnalyze = () => {
    if (selectedFile) {
      onFileSelect(selectedFile);
    }
  };

  const handleClear = () => {
    setSelectedFile(null);
    setPreview(null);
  };

  return (
    <Card className="border-emerald-100">
      <CardContent className="p-6">
        {!preview ? (
          <div
            className={cn(
              'relative border-2 border-dashed rounded-lg p-8 transition-colors',
              dragActive
                ? 'border-emerald-500 bg-emerald-50'
                : 'border-gray-300 hover:border-emerald-400',
              disabled && 'opacity-50 cursor-not-allowed'
            )}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={handleChange}
              accept="image/*"
              disabled={disabled || isLoading}
            />
            <label
              htmlFor="file-upload"
              className={cn(
                'flex flex-col items-center cursor-pointer',
                disabled && 'cursor-not-allowed'
              )}
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Upload className="h-8 w-8 text-emerald-600" />
              </div>
              <p className="text-lg font-medium text-gray-900 mb-2">
                Upload leaf image for analysis
              </p>
              <p className="text-sm text-gray-600 mb-4 text-center">
                Drag and drop or click to browse
              </p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="pointer-events-none"
              >
                <ImageIcon className="h-4 w-4 mr-2" />
                Choose File
              </Button>
              <p className="text-xs text-gray-500 mt-4">
                Supported formats: JPG, PNG, WebP (Max 5MB)
              </p>
            </label>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="relative rounded-lg overflow-hidden bg-gray-100">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-64 object-contain"
              />
              <button
                onClick={handleClear}
                className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                disabled={isLoading}
              >
                <X className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={handleAnalyze}
                disabled={isLoading}
                className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
              >
                {isLoading ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Upload className="h-4 w-4 mr-2" />
                    Analyze Disease
                  </>
                )}
              </Button>
              <Button variant="outline" onClick={handleClear} disabled={isLoading}>
                Cancel
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}