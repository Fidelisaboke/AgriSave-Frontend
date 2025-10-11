import { AlertCircle, CheckCircle, AlertTriangle, XCircle, Leaf } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { type DiseasePrediction } from '@/types';
import { cn } from '@/lib/utils';

interface DiseaseResultCardProps {
  prediction: DiseasePrediction;
}

const severityConfig = {
  None: {
    icon: AlertCircle,
    color: 'text-gray-500',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200',
    label: 'None',
  },
  Low: {
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    label: 'Low Risk',
  },
  Medium: {
    icon: AlertCircle,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    label: 'Medium Risk',
  },
  High: {
    icon: AlertTriangle,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    label: 'High Risk',
  },
  Critical: {
    icon: XCircle,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    label: 'Critical Risk',
  },
};

export function DiseaseResultCard({ prediction }: DiseaseResultCardProps) {
  const config = severityConfig[prediction.severity] || severityConfig.None;
  const Icon = config.icon;
  const confidencePercent = Math.round(prediction.confidence * 100);

  return (
    <Card className="border-emerald-100 shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-50 rounded-lg">
              <Leaf className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <CardTitle className="text-xl">Detection Results</CardTitle>
              <p className="text-sm text-gray-600 mt-1">AI-powered analysis complete</p>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Disease Name & Confidence */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm font-medium text-gray-600">Detection Result</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {prediction.predicted_class}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-600">Confidence</p>
              <p className="text-2xl font-bold text-emerald-600 mt-1">
                {confidencePercent}%
              </p>
            </div>
          </div>

          {/* Confidence Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className={cn(
                'h-full rounded-full transition-all duration-500',
                confidencePercent >= 80
                  ? 'bg-emerald-500'
                  : confidencePercent >= 60
                  ? 'bg-yellow-500'
                  : 'bg-orange-500'
              )}
              style={{ width: `${confidencePercent}%` }}
            />
          </div>
        </div>

        {/* Severity Alert */}
        <Alert className={cn('border-2', config.borderColor, config.bgColor)}>
          <Icon className={cn('h-5 w-5', config.color)} />
          <AlertDescription className="ml-2">
            <span className={cn('font-semibold', config.color)}>
              {config.label}:
            </span>{' '}
            <span className="text-gray-700">
              {`This disease has been classified as ${prediction.severity ? prediction.severity.toLowerCase() : 'none'} severity.`}
              {prediction.severity && ' Please review the recommended actions below.'}
            </span>
          </AlertDescription>
        </Alert>

        {/* Recommended Actions */}
        {prediction.severity && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
              Recommended Actions
            </h3>
            <div className="space-y-2">
              {Array.isArray(prediction?.recommended_actions) && prediction.recommended_actions.length > 0 ? (
                prediction.recommended_actions.map((action, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-100"
                  >
                    <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <p className="text-sm text-gray-700 flex-1">{action}</p>
                  </div>
                ))
              ) : (
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-600 text-sm">
                  No specific recommendations available for this result.
                </div>
              )}
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="text-xs">
            This is an AI-generated prediction. For critical cases or uncertain results,
            please consult with an agricultural expert or extension officer.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
}