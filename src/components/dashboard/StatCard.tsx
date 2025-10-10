import { Card, CardContent } from '@/components/ui/card';
import { type LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor?: string;
  iconBgColor?: string;
  trend?: {
    value: number;
    label: string;
  };
  suffix?: string;
  className?: string;
}

export function StatCard({
  title,
  value,
  icon: Icon,
  iconColor = 'text-emerald-600',
  iconBgColor = 'bg-emerald-50',
  trend,
  suffix,
  className,
}: StatCardProps) {
  const isPositiveTrend = trend && trend.value > 0;
  const isNegativeTrend = trend && trend.value < 0;

  return (
    <Card className={cn('border-emerald-100 shadow-sm hover:shadow-md transition-all', className)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <div className="mt-2 flex items-baseline gap-2">
              <p className="text-3xl font-bold text-gray-900">
                {value}
                {suffix && <span className="text-xl text-gray-600 ml-1">{suffix}</span>}
              </p>
            </div>
            {trend && (
              <div className="mt-3 flex items-center gap-1">
                {isPositiveTrend && (
                  <div className="flex items-center text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium ml-1">+{trend.value}%</span>
                  </div>
                )}
                {isNegativeTrend && (
                  <div className="flex items-center text-red-600">
                    <TrendingDown className="h-4 w-4" />
                    <span className="text-sm font-medium ml-1">{trend.value}%</span>
                  </div>
                )}
                <span className="text-sm text-gray-500 ml-1">{trend.label}</span>
              </div>
            )}
          </div>
          <div className={cn('rounded-xl p-3', iconBgColor)}>
            <Icon className={cn('h-6 w-6', iconColor)} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}