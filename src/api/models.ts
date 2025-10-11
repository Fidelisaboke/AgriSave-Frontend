import apiClient from './apiClient';
import { type DiseasePredictionResponse } from '@/types';

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