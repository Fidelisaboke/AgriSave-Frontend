import { Cloud, CloudRain, Sun, Wind, Droplets, AlertTriangle } from 'lucide-react';
import { DashboardCard } from '@/components/dashboard/DashboardCard';
import { StatCard } from '@/components/dashboard/StatCard';

export default function Climate() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Weather & Climate Data ☁️
        </h2>
        <p className="text-gray-600">
          Real-time weather information and climate predictions for your farm
        </p>
      </div>

      {/* Current Weather Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Temperature"
          value="28"
          suffix="°C"
          icon={Sun}
          iconColor="text-orange-600"
          iconBgColor="bg-orange-50"
          trend={{ value: 3, label: 'from morning' }}
        />
        <StatCard
          title="Humidity"
          value="65"
          suffix="%"
          icon={Droplets}
          iconColor="text-blue-600"
          iconBgColor="bg-blue-50"
          trend={{ value: -5, label: 'vs yesterday' }}
        />
        <StatCard
          title="Wind Speed"
          value="12"
          suffix="km/h"
          icon={Wind}
          iconColor="text-cyan-600"
          iconBgColor="bg-cyan-50"
        />
        <StatCard
          title="Rainfall"
          value="45"
          suffix="mm"
          icon={CloudRain}
          iconColor="text-indigo-600"
          iconBgColor="bg-indigo-50"
          trend={{ value: 15, label: 'this week' }}
        />
      </div>

      {/* Weather Details Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* 7-Day Forecast */}
        <DashboardCard
          title="7-Day Forecast"
          description="Weather predictions for the week"
          icon={Cloud}
          iconColor="text-blue-600"
        >
          <div className="space-y-3">
            {[
              { day: 'Today', temp: '28°C', condition: 'Sunny', icon: Sun },
              { day: 'Tomorrow', temp: '26°C', condition: 'Partly Cloudy', icon: Cloud },
              { day: 'Wednesday', temp: '24°C', condition: 'Rainy', icon: CloudRain },
              { day: 'Thursday', temp: '25°C', condition: 'Cloudy', icon: Cloud },
              { day: 'Friday', temp: '27°C', condition: 'Sunny', icon: Sun },
              { day: 'Saturday', temp: '29°C', condition: 'Sunny', icon: Sun },
              { day: 'Sunday', temp: '28°C', condition: 'Partly Cloudy', icon: Cloud },
            ].map((forecast, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <forecast.icon className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-900">{forecast.day}</p>
                    <p className="text-sm text-gray-600">{forecast.condition}</p>
                  </div>
                </div>
                <span className="text-lg font-semibold text-gray-900">{forecast.temp}</span>
              </div>
            ))}
          </div>
        </DashboardCard>

        {/* Weather Alerts */}
        <DashboardCard
          title="Weather Alerts"
          description="Important weather warnings"
          icon={AlertTriangle}
          iconColor="text-amber-600"
        >
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
              <div className="flex items-start gap-3">
                <CloudRain className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Heavy Rain Warning</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Expected tomorrow 2:00 PM - 6:00 PM. Prepare drainage systems.
                  </p>
                  <p className="text-xs text-blue-600 font-medium mt-2">High Priority</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-lg">
              <div className="flex items-start gap-3">
                <Sun className="h-5 w-5 text-amber-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Heat Wave Alert</p>
                  <p className="text-sm text-gray-600 mt-1">
                    High temperatures expected next week. Increase irrigation.
                  </p>
                  <p className="text-xs text-amber-600 font-medium mt-2">Medium Priority</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
              <div className="flex items-start gap-3">
                <Wind className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Optimal Conditions</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Perfect weather for planting and crop maintenance this weekend.
                  </p>
                  <p className="text-xs text-green-600 font-medium mt-2">Info</p>
                </div>
              </div>
            </div>
          </div>
        </DashboardCard>

        {/* Climate Insights */}
        <DashboardCard
          title="Climate Insights"
          description="AI-powered recommendations"
          icon={Cloud}
          iconColor="text-purple-600"
        >
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="font-medium text-gray-900 mb-2">Seasonal Pattern</p>
              <p className="text-sm text-gray-600">
                Rainfall is 20% above average for this season. Consider adjusting irrigation
                schedules to conserve water.
              </p>
            </div>

            <div className="p-4 bg-emerald-50 rounded-lg">
              <p className="font-medium text-gray-900 mb-2">Best Planting Window</p>
              <p className="text-sm text-gray-600">
                Next 5 days show ideal conditions for planting drought-resistant crops.
              </p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="font-medium text-gray-900 mb-2">Long-term Forecast</p>
              <p className="text-sm text-gray-600">
                El Niño conditions predicted. Expect higher rainfall in the coming months.
              </p>
            </div>
          </div>
        </DashboardCard>

        {/* Historical Data */}
        <DashboardCard
          title="Historical Comparison"
          description="This month vs last year"
          icon={CloudRain}
          iconColor="text-teal-600"
        >
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Rainfall</span>
                <span className="text-sm font-semibold text-gray-900">+15%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Temperature</span>
                <span className="text-sm font-semibold text-gray-900">+2°C</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Humidity</span>
                <span className="text-sm font-semibold text-gray-900">-3%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '58%' }}></div>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Overall conditions are favorable compared to last year's data.
              </p>
            </div>
          </div>
        </DashboardCard>
      </div>
    </div>
  );
}