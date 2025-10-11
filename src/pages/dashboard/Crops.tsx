import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { type CropRecommendationFormData } from '@/schemas/cropRecommendation';
import { CropRecommendationForm } from '@/components/crops/CropRecommendationForm';
import { CropCard } from '@/components/crops/CropCard';
import { SustainabilityTips } from '@/components/crops/SustainabilityTips';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { 
  ArrowDownAZ, 
  ArrowUpAZ, 
  Calendar, 
  Info, 
  Leaf, 
  RefreshCw, 
  Sprout,
} from 'lucide-react';
import { recommendCrops } from '@/api/models';
import { type CropRecommendationResponse } from '@/types';

type SortOption = 'confidence-desc' | 'confidence-asc' | 'name-asc' | 'name-desc';

export default function Crops() {
  const [recommendations, setRecommendations] = useState<CropRecommendationResponse | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>('confidence-desc');

  type ErrorResponse = {
    response?: {
      data?: {
        message?: string;
      };
    };
  };

  const mutation = useMutation({
    mutationFn: recommendCrops,
    onSuccess: (data) => {
      setRecommendations(data);
      toast.success('Crop recommendations generated successfully!');
    },
    onError: (error: unknown) => {
      console.error('Error fetching recommendations:', error);
      const err = error as ErrorResponse;
      if (
        err &&
        typeof err === 'object' &&
        err.response &&
        typeof err.response === 'object' &&
        err.response.data
      ) {
        toast.error(err.response.data.message || 'Failed to get recommendations. Please try again.');
      } else {
        toast.error('Failed to get recommendations. Please try again.');
      }
    },
  });

  const handleSubmit = (data: CropRecommendationFormData) => {
    mutation.mutate(data);
  };

  const handleReset = () => {
    setRecommendations(null);
    mutation.reset();
  };

  const getSortedRecommendations = () => {
    if (!recommendations?.prediction?.recommendations) return [];
    
    const recs = [...recommendations.prediction.recommendations];
    
    switch (sortBy) {
      case 'confidence-desc':
        return recs.sort((a, b) => b.confidence - a.confidence);
      case 'confidence-asc':
        return recs.sort((a, b) => a.confidence - b.confidence);
      case 'name-asc':
        return recs.sort((a, b) => a.crop.localeCompare(b.crop));
      case 'name-desc':
        return recs.sort((a, b) => b.crop.localeCompare(a.crop));
      default:
        return recs;
    }
  };

  const sortedRecommendations = getSortedRecommendations();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <Sprout className="h-8 w-8 text-green-600" />
          Crop Recommendations
        </h1>
        <p className="text-muted-foreground mt-2">
          Get AI-powered crop suggestions based on your soil and climate conditions
        </p>
      </div>

      {/* Info Alert */}
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>How it works</AlertTitle>
        <AlertDescription>
          Our AI analyzes your soil nutrients (NPK), pH levels, and climate data to recommend the most
          suitable crops for your farm. Higher suitability scores indicate better compatibility with your
          conditions.
        </AlertDescription>
      </Alert>

      {/* Form */}
      <CropRecommendationForm onSubmit={handleSubmit} isLoading={mutation.isPending} />

      {/* Results Section */}
      {recommendations && (
        <div className="space-y-6">
          {/* Results Header with Controls */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-green-600" />
                    Your Crop Recommendations
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-2">
                    <Calendar className="h-4 w-4" />
                    Generated on {new Date(recommendations.timestamp).toLocaleString()}
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" onClick={handleReset}>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  New Analysis
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">
                    Found {sortedRecommendations.length} suitable crop{sortedRecommendations.length !== 1 ? 's' : ''}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Based on N: {recommendations.inputs.N}, P: {recommendations.inputs.P}, K:{' '}
                    {recommendations.inputs.K}, pH: {recommendations.inputs.ph}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <div className="flex gap-1">
                    <Button
                      variant={sortBy === 'confidence-desc' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSortBy('confidence-desc')}
                      className="gap-1"
                    >
                      <ArrowDownAZ className="h-4 w-4" />
                      A-Z
                    </Button>
                    <Button
                      variant={sortBy === 'name-desc' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSortBy('name-desc')}
                      className="gap-1"
                    >
                      <ArrowUpAZ className="h-4 w-4" />
                      Z-A
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Crop Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedRecommendations.map((rec, index) => (
              <CropCard
                key={rec.crop}
                recommendation={rec}
                rank={sortBy === 'confidence-desc' ? index + 1 : 0}
              />
            ))}
          </div>

          {/* Sustainability Tips */}
          <SustainabilityTips />
        </div>
      )}

      {/* Empty State */}
      {!recommendations && !mutation.isPending && (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Sprout className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Ready to Find Your Perfect Crops?</h3>
            <p className="text-muted-foreground text-center max-w-md">
              Fill in the form above with your soil and climate data to receive personalized crop
              recommendations powered by AI.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};