import apiClient from '@/api/apiClient';
import { 
  type CropRecommendationInput, 
  type CropRecommendationResponse, 
  type DiseasePredictionResponse 
} from '@/types';

// Crop disease prediction endpoint
export const predictDisease = async (file: File): Promise<DiseasePredictionResponse> => {
  const formData = new FormData();
  formData.append('image', file);

  const response = await apiClient.post<DiseasePredictionResponse>(
    '/ml/predict-disease/',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  return response.data;
};


// Crop recommendations endpoint
export const recommendCrops = async (data: CropRecommendationInput): Promise<CropRecommendationResponse> => {
  const response = await apiClient.post<CropRecommendationResponse>(
    '/ml/recommend-crops/',
    data
  );

  return response.data;
};