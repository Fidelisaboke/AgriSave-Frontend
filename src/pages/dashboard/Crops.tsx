import { Sprout, Leaf, AlertCircle, CheckCircle, TrendingUp } from 'lucide-react';
import { DashboardCard } from '@/components/dashboard/DashboardCard';
import { StatCard } from '@/components/dashboard/StatCard';
import { Button } from '@/components/ui/button';

export default function Crops() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Crop Management 🌾
          </h2>
          <p className="text-gray-600">
            Monitor and manage your crops with AI-powered insights
          </p>
        </div>
        <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
          <Sprout className="h-4 w-4 mr-2" />
          Add New Crop
        </Button>
      </div>

      {/* Crop Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Active Crops"
          value="8"
          icon={Sprout}
          iconColor="text-emerald-600"
          iconBgColor="bg-emerald-50"
          suffix="types"
        />
        <StatCard
          title="Healthy Crops"
          value="6"
          icon={CheckCircle}
          iconColor="text-green-600"
          iconBgColor="bg-green-50"
          trend={{ value: 20, label: 'improvement' }}
        />
        <StatCard
          title="Needs Attention"
          value="2"
          icon={AlertCircle}
          iconColor="text-amber-600"
          iconBgColor="bg-amber-50"
        />
        <StatCard
          title="Expected Yield"
          value="95"
          suffix="%"
          icon={TrendingUp}
          iconColor="text-purple-600"
          iconBgColor="bg-purple-50"
          trend={{ value: 8, label: 'vs forecast' }}
        />
      </div>

      {/* Crops Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Maize */}
        <DashboardCard
          title="Maize"
          description="Planted 45 days ago"
          icon={Sprout}
          iconColor="text-yellow-600"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-green-700">Excellent Health</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Growth Stage</span>
                <span className="font-medium text-gray-900">Vegetative</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Area</span>
                <span className="font-medium text-gray-900">2.5 hectares</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Expected Harvest</span>
                <span className="font-medium text-gray-900">60 days</span>
              </div>
            </div>

            <div className="pt-3 border-t border-emerald-100">
              <p className="text-xs text-gray-600 mb-2">Growth Progress</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 h-2 rounded-full" style={{ width: '43%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">43% complete</p>
            </div>

            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </div>
        </DashboardCard>

        {/* Beans */}
        <DashboardCard
          title="Beans"
          description="Planted 30 days ago"
          icon={Leaf}
          iconColor="text-green-600"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
              <span className="text-sm font-medium text-yellow-700">Needs Attention</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Growth Stage</span>
                <span className="font-medium text-gray-900">Flowering</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Area</span>
                <span className="font-medium text-gray-900">1.8 hectares</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Expected Harvest</span>
                <span className="font-medium text-gray-900">45 days</span>
              </div>
            </div>

            <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
              <p className="text-xs font-medium text-yellow-900">Recommendation</p>
              <p className="text-xs text-yellow-700 mt-1">Increase watering frequency. Low soil moisture detected.</p>
            </div>

            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </div>
        </DashboardCard>

        {/* Tomatoes */}
        <DashboardCard
          title="Tomatoes"
          description="Planted 20 days ago"
          icon={Sprout}
          iconColor="text-red-600"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-green-700">Growing Well</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Growth Stage</span>
                <span className="font-medium text-gray-900">Seedling</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Area</span>
                <span className="font-medium text-gray-900">0.5 hectares</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Expected Harvest</span>
                <span className="font-medium text-gray-900">85 days</span>
              </div>
            </div>

            <div className="pt-3 border-t border-emerald-100">
              <p className="text-xs text-gray-600 mb-2">Growth Progress</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 h-2 rounded-full" style={{ width: '19%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">19% complete</p>
            </div>

            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </div>
        </DashboardCard>
      </div>

      {/* AI Recommendations */}
      <DashboardCard
        title="AI-Powered Recommendations"
        description="Personalized insights for your crops"
        icon={Leaf}
        iconColor="text-emerald-600"
      >
        <div className="space-y-3">
          <div className="p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-lg">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">Optimal Planting Window</p>
                <p className="text-sm text-gray-600 mt-1">
                  Current conditions are ideal for planting sorghum and millet. Consider diversifying your crop portfolio.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
            <div className="flex items-start gap-3">
              <Sprout className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">Intercropping Suggestion</p>
                <p className="text-sm text-gray-600 mt-1">
                  Planting beans between maize rows can improve nitrogen fixation and increase overall yield by 15%.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-purple-50 border-l-4 border-purple-500 rounded-lg">
            <div className="flex items-start gap-3">
              <TrendingUp className="h-5 w-5 text-purple-600 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">Market Demand Forecast</p>
                <p className="text-sm text-gray-600 mt-1">
                  Tomato prices expected to increase by 25% next quarter. Consider expanding production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </DashboardCard>
    </div>
  );
}