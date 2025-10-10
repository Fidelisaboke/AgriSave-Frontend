import { type ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DashboardCardProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  iconColor?: string;
  children: ReactNode;
  className?: string;
  headerAction?: ReactNode;
}

export function DashboardCard({
  title,
  description,
  icon: Icon,
  iconColor = 'text-emerald-600',
  children,
  className,
  headerAction,
}: DashboardCardProps) {
  return (
    <Card className={cn('border-emerald-100 shadow-sm hover:shadow-md transition-shadow', className)}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3 flex-1">
            {Icon && (
              <div className={cn('rounded-lg p-2 bg-emerald-50', iconColor)}>
                <Icon className="h-5 w-5" />
              </div>
            )}
            <div className="flex-1">
              <CardTitle className="text-gray-900">{title}</CardTitle>
              {description && (
                <CardDescription className="text-gray-600 mt-1">
                  {description}
                </CardDescription>
              )}
            </div>
          </div>
          {headerAction && <div className="ml-2">{headerAction}</div>}
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}