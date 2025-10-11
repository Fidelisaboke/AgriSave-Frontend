import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Leaf, TrendingUp } from 'lucide-react';
import type { CropRecommendation } from '@/types';

interface CropCardProps {
  recommendation: CropRecommendation;
  rank: number;
}

const cropEmojis: Record<string, string> = {
  rice: '🌾',
  maize: '🌽',
  chickpea: '🫘',
  kidneybeans: '🫘',
  pigeonpeas: '🫘',
  mothbeans: '🫘',
  mungbean: '🫘',
  blackgram: '🫘',
  lentil: '🫘',
  pomegranate: '🍎',
  banana: '🍌',
  mango: '🥭',
  grapes: '🍇',
  watermelon: '🍉',
  muskmelon: '🍈',
  apple: '🍎',
  orange: '🍊',
  papaya: '🫐',
  coconut: '🥥',
  cotton: '🌱',
  jute: '🌿',
  coffee: '☕',
};

const getSuitabilityLevel = (confidence: number): { label: string; color: string } => {
  if (confidence >= 0.7) return { label: 'Highly Suitable', color: 'text-green-600' };
  if (confidence >= 0.5) return { label: 'Suitable', color: 'text-blue-600' };
  if (confidence >= 0.3) return { label: 'Moderately Suitable', color: 'text-yellow-600' };
  return { label: 'Less Suitable', color: 'text-orange-600' };
};

export const CropCard = ({ recommendation, rank }: CropCardProps) => {
  const { crop, confidence } = recommendation;
  const emoji = cropEmojis[crop.toLowerCase()] || '🌱';
  const suitability = getSuitabilityLevel(confidence);
  const confidencePercentage = Math.round(confidence * 100);

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-green-500">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl">{emoji}</div>
            <div>
              <CardTitle className="text-xl capitalize flex items-center gap-2">
                {crop}
                {rank === 1 && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                    Top Pick
                  </span>
                )}
              </CardTitle>
              <p className={`text-sm font-medium mt-1 ${suitability.color}`}>
                {suitability.label}
              </p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground flex items-center gap-1">
              <TrendingUp className="h-4 w-4" />
              Suitability Score
            </span>
            <span className="font-semibold text-lg">{confidencePercentage}%</span>
          </div>
          <Progress value={confidencePercentage} className="h-2" />
        </div>

        <div className="pt-2 border-t">
          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <Leaf className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600" />
            <p className="text-xs">
              Based on your soil nutrients and climate conditions, this crop shows{' '}
              {confidencePercentage >= 70 ? 'excellent' : confidencePercentage >= 50 ? 'good' : 'moderate'}{' '}
              compatibility with your farm.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};