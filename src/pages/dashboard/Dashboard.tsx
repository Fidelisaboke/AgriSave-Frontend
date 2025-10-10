import { Cloud, Sprout, Award, Droplets, Sun } from 'lucide-react';
import { StatCard } from '@/components/dashboard/StatCard';
import { DashboardCard } from '@/components/dashboard/DashboardCard';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Welcome back, Farmer! 🌱
        </h2>
        <p className="text-gray-600">
          Here's an overview of your farm's climate resilience metrics
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="GreenPoints"
          value="1,245"
          icon={Award}
          iconColor="text-amber-600"
          iconBgColor="bg-amber-50"
          trend={{ value: 12, label: 'vs last month' }}
        />
        <StatCard
          title="Active Crops"
          value="8"
          icon={Sprout}
          iconColor="text-emerald-600"
          iconBgColor="bg-emerald-50"
          suffix="types"
        />
        <StatCard
          title="Weather Alerts"
          value="2"
          icon={Cloud}
          iconColor="text-blue-600"
          iconBgColor="bg-blue-50"
          trend={{ value: -33, label: 'vs last week' }}
        />
        <StatCard
          title="Rainfall"
          value="45"
          icon={Droplets}
          iconColor="text-cyan-600"
          iconBgColor="bg-cyan-50"
          suffix="mm"
          trend={{ value: 8, label: 'this week' }}
        />
      </div>

      {/* Dashboard Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Weather Overview */}
        <DashboardCard
          title="Today's Weather"
          description="Current conditions for your location"
          icon={Sun}
          iconColor="text-yellow-600"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Temperature</span>
              <span className="text-2xl font-bold text-gray-900">28°C</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Humidity</span>
              <span className="text-lg font-semibold text-gray-900">65%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Wind Speed</span>
              <span className="text-lg font-semibold text-gray-900">12 km/h</span>
            </div>
            <div className="pt-2 border-t border-emerald-100">
              <p className="text-sm text-gray-600">
                Perfect conditions for crop maintenance
              </p>
            </div>
          </div>
        </DashboardCard>

        {/* Crop Health */}
        <DashboardCard
          title="Crop Health Status"
          description="Monitor your crops' performance"
          icon={Sprout}
          iconColor="text-green-600"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Maize</p>
                <p className="text-sm text-gray-600">Excellent condition</p>
              </div>
              <div className="h-3 w-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Beans</p>
                <p className="text-sm text-gray-600">Needs watering</p>
              </div>
              <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Tomatoes</p>
                <p className="text-sm text-gray-600">Growing well</p>
              </div>
              <div className="h-3 w-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </DashboardCard>

        {/* Recent Alerts */}
        <DashboardCard
          title="Recent Alerts"
          description="Important notifications"
          icon={Cloud}
          iconColor="text-blue-600"
        >
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
              <p className="font-medium text-gray-900 text-sm">Heavy Rain Expected</p>
              <p className="text-xs text-gray-600 mt-1">Tomorrow, 2:00 PM - 6:00 PM</p>
            </div>
            <div className="p-3 bg-amber-50 border-l-4 border-amber-500 rounded">
              <p className="font-medium text-gray-900 text-sm">High Temperature Alert</p>
              <p className="text-xs text-gray-600 mt-1">Next week, prepare for heat wave</p>
            </div>
          </div>
        </DashboardCard>

        {/* Sustainability Score */}
        <DashboardCard
          title="Sustainability Score"
          description="Your environmental impact"
          icon={Award}
          iconColor="text-purple-600"
        >
          <div className="text-center py-4">
            <div className="relative inline-flex items-center justify-center">
              <svg className="w-32 h-32 transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="52"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-gray-200"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="52"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 52}`}
                  strokeDashoffset={`${2 * Math.PI * 52 * (1 - 0.78)}`}
                  className="text-emerald-500"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute text-center">
                <p className="text-3xl font-bold text-gray-900">78%</p>
                <p className="text-xs text-gray-600">Excellent</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Keep up the great work! You're contributing to a sustainable future.
            </p>
          </div>
        </DashboardCard>
      </div>
    </div>
  );
}