import { Card, CardContent, CardHeader } from '@/components/ui/card';

export function DiseaseResultSkeleton() {
  return (
    <Card className="border-emerald-100 shadow-lg animate-pulse">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-200 rounded-lg" />
            <div>
              <div className="h-6 w-40 bg-gray-200 rounded" />
              <div className="h-4 w-32 bg-gray-200 rounded mt-2" />
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Disease Name & Confidence Skeleton */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex-1">
              <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
              <div className="h-8 w-48 bg-gray-200 rounded" />
            </div>
            <div className="text-right">
              <div className="h-4 w-24 bg-gray-200 rounded mb-2 ml-auto" />
              <div className="h-8 w-16 bg-gray-200 rounded ml-auto" />
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3" />
        </div>

        {/* Severity Alert Skeleton */}
        <div className="p-4 bg-gray-100 rounded-lg border-2 border-gray-200">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 bg-gray-200 rounded-full flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-3/4 bg-gray-200 rounded" />
              <div className="h-4 w-full bg-gray-200 rounded" />
            </div>
          </div>
        </div>

        {/* Recommended Actions Skeleton */}
        <div>
          <div className="h-6 w-48 bg-gray-200 rounded mb-3" />
          <div className="space-y-2">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="w-6 h-6 bg-gray-200 rounded-full flex-shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-full bg-gray-200 rounded" />
                  <div className="h-4 w-3/4 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Skeleton */}
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-start gap-3">
            <div className="w-4 h-4 bg-gray-200 rounded-full flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-3 w-full bg-gray-200 rounded" />
              <div className="h-3 w-4/5 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}