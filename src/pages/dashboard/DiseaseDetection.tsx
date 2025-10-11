import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { AlertCircle, Leaf, Lightbulb, AlertTriangle } from 'lucide-react';
import { DiseaseUploadCard } from '@/components/disease/DiseaseUploadCard';
import { DiseaseResultCard } from '@/components/disease/DiseaseResultCard';
import { DiseaseResultSkeleton } from '@/components/disease/DiseaseResultSkeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { predictDisease } from '@/api/models';
import { type DiseasePredictionResponse } from '@/types';

export default function DiseaseDetection() {
  const [result, setResult] = useState<DiseasePredictionResponse | null>(null);

  const mutation = useMutation({
    mutationFn: predictDisease,
    onSuccess: (data) => {
      setResult(data);
    },
  });

  const handleFileSelect = (file: File) => {
    setResult(null);
    mutation.mutate(file);
  };

  const handleReset = () => {
    setResult(null);
    mutation.reset();
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Disease Detection 🔬
        </h2>
        <p className="text-gray-600">
          Upload an image of a plant leaf to detect diseases and get treatment recommendations
        </p>
      </div>

      {/* How it Works Guide */}
      <Card className="border-blue-100 bg-blue-50/50">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-blue-600" />
            How It Works
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <p className="font-medium text-gray-900">Upload Image</p>
                <p className="text-gray-600 mt-1">
                  Take a clear photo of the affected leaf
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <p className="font-medium text-gray-900">AI Analysis</p>
                <p className="text-gray-600 mt-1">
                  Our model analyzes the image for diseases
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <p className="font-medium text-gray-900">Get Results</p>
                <p className="text-gray-600 mt-1">
                  Receive diagnosis and treatment recommendations
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upload Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Leaf className="h-5 w-5 text-emerald-600" />
            Upload Leaf Image
          </h3>
          <DiseaseUploadCard
            onFileSelect={handleFileSelect}
            isLoading={mutation.isPending}
            disabled={mutation.isPending}
          />

          {/* Tips Card */}
          <Card className="border-emerald-100 bg-emerald-50/50">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-emerald-600" />
                Tips for Best Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Take photos in good natural lighting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Focus on affected areas of the leaf</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Ensure the leaf fills most of the frame</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Avoid blurry or dark images</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Analysis Results</h3>

          {/* Loading State */}
          {mutation.isPending && <DiseaseResultSkeleton />}

          {/* Error State */}
          {mutation.isError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Analysis Failed</AlertTitle>
              <AlertDescription>
                {mutation.error instanceof Error
                  ? mutation.error.message
                  : 'Unable to analyze the image. Please try again with a different image.'}
              </AlertDescription>
            </Alert>
          )}

          {/* Success State */}
          {result && (
            <div className="space-y-4">
              <DiseaseResultCard prediction={result.prediction} />
              <button
                onClick={handleReset}
                className="w-full py-2 px-4 text-sm font-medium text-emerald-600 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors"
              >
                Analyze Another Image
              </button>
            </div>
          )}

          {/* Empty State */}
          {!mutation.isPending && !mutation.isError && !result && (
            <Card className="border-gray-200 border-dashed">
              <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="h-8 w-8 text-gray-400" />
                </div>
                <p className="text-gray-600 font-medium mb-1">
                  No analysis yet
                </p>
                <p className="text-sm text-gray-500">
                  Upload an image to get started
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Sample Output Card */}
      <Card className="border-purple-100 bg-purple-50/50">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-purple-600" />
            Sample Output
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-white rounded-lg p-4 border border-purple-200">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Disease Name</p>
                  <p className="text-lg font-bold text-gray-900">Tomato Late Blight</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-600">Confidence</p>
                  <p className="text-lg font-bold text-emerald-600">94%</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2 bg-orange-50 rounded border border-orange-200">
                <AlertTriangle className="h-4 w-4 text-orange-600 flex-shrink-0" />
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-orange-600">High Risk:</span> Immediate action required
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-900">Recommended Actions:</p>
                <div className="text-sm text-gray-600 space-y-1 pl-4">
                  <p>• Remove and destroy infected leaves immediately</p>
                  <p>• Apply copper-based fungicide</p>
                  <p>• Improve air circulation around plants</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}