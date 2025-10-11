import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Leaf, Droplets, Recycle, Sprout } from 'lucide-react';

const tips = [
  {
    icon: Droplets,
    title: 'Water Conservation',
    description: 'Implement drip irrigation to reduce water usage by up to 50% while improving crop yields.',
  },
  {
    icon: Leaf,
    title: 'Crop Rotation',
    description: 'Rotate crops seasonally to maintain soil health, reduce pests, and improve nutrient balance.',
  },
  {
    icon: Recycle,
    title: 'Organic Fertilizers',
    description: 'Use compost and organic matter to enrich soil naturally and reduce chemical dependency.',
  },
  {
    icon: Sprout,
    title: 'Cover Cropping',
    description: 'Plant cover crops during off-seasons to prevent erosion and add organic matter to soil.',
  },
];

export const SustainabilityTips = () => {
  return (
    <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-green-800">
          <Lightbulb className="h-5 w-5" />
          Sustainable Farming Tips
        </CardTitle>
        <CardDescription className="text-green-700">
          Maximize your yield while protecting the environment
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <div
                key={index}
                className="flex gap-3 p-4 bg-white rounded-lg border border-green-100 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1 text-green-900">{tip.title}</h4>
                  <p className="text-xs text-green-700">{tip.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <Alert className="bg-green-100 border-green-300">
          <Leaf className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-800">Climate-Smart Agriculture</AlertTitle>
          <AlertDescription className="text-green-700">
            By following these sustainable practices, you can increase productivity while building resilience
            against climate change. Remember: healthy soil equals healthy crops and a healthy planet.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
};