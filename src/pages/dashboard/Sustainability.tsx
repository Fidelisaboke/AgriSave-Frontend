import { Award, Leaf, Droplets, Zap, TrendingUp, Gift } from 'lucide-react';
import { DashboardCard } from '@/components/dashboard/DashboardCard';
import { StatCard } from '@/components/dashboard/StatCard';
import { Button } from '@/components/ui/button';

export default function Sustainability() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          GreenPoints & Sustainability 🌍
        </h2>
        <p className="text-gray-600">
          Track your environmental impact and earn rewards for sustainable practices
        </p>
      </div>

      {/* GreenPoints Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total GreenPoints"
          value="1,245"
          icon={Award}
          iconColor="text-amber-600"
          iconBgColor="bg-amber-50"
          trend={{ value: 12, label: 'this month' }}
        />
        <StatCard
          title="Carbon Offset"
          value="2.4"
          suffix="tons"
          icon={Leaf}
          iconColor="text-green-600"
          iconBgColor="bg-green-50"
          trend={{ value: 8, label: 'vs last month' }}
        />
        <StatCard
          title="Water Saved"
          value="850"
          suffix="L"
          icon={Droplets}
          iconColor="text-blue-600"
          iconBgColor="bg-blue-50"
        />
        <StatCard
          title="Rank"
          value="#47"
          icon={TrendingUp}
          iconColor="text-purple-600"
          iconBgColor="bg-purple-50"
          trend={{ value: 5, label: 'positions' }}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - 2 cols */}
        <div className="lg:col-span-2 space-y-6">
          {/* Current Level */}
          <DashboardCard
            title="Your Sustainability Level"
            description="Keep earning points to level up"
            icon={Award}
            iconColor="text-amber-600"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900">Level 3</p>
                  <p className="text-sm text-gray-600">Gold Farmer</p>
                </div>
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                  <Award className="h-10 w-10 text-white" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600">Progress to Level 4</span>
                  <span className="font-medium text-gray-900">1,245 / 2,000 points</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-amber-500 to-amber-600 h-3 rounded-full transition-all"
                    style={{ width: '62%' }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-2">755 points to next level</p>
              </div>

              <div className="pt-4 border-t border-emerald-100 grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-emerald-50 rounded-lg">
                  <p className="text-2xl font-bold text-emerald-600">12</p>
                  <p className="text-xs text-gray-600 mt-1">Badges Earned</p>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">89</p>
                  <p className="text-xs text-gray-600 mt-1">Days Streak</p>
                </div>
              </div>
            </div>
          </DashboardCard>

          {/* Recent Activities */}
          <DashboardCard
            title="Recent Sustainability Activities"
            description="Your eco-friendly actions"
            icon={Leaf}
            iconColor="text-green-600"
          >
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                <div className="mt-1 p-2 bg-green-100 rounded-lg">
                  <Droplets className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-gray-900">Water Conservation</p>
                      <p className="text-sm text-gray-600">Implemented drip irrigation</p>
                    </div>
                    <span className="text-sm font-bold text-green-600">+50 pts</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg">
                <div className="mt-1 p-2 bg-emerald-100 rounded-lg">
                  <Leaf className="h-4 w-4 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-gray-900">Organic Farming</p>
                      <p className="text-sm text-gray-600">Used compost instead of chemical fertilizer</p>
                    </div>
                    <span className="text-sm font-bold text-emerald-600">+75 pts</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">5 days ago</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <div className="mt-1 p-2 bg-blue-100 rounded-lg">
                  <Zap className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-gray-900">Solar Power</p>
                      <p className="text-sm text-gray-600">Installed solar panels for irrigation pump</p>
                    </div>
                    <span className="text-sm font-bold text-blue-600">+100 pts</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">1 week ago</p>
                </div>
              </div>
            </div>
          </DashboardCard>

          {/* Available Challenges */}
          <DashboardCard
            title="Sustainability Challenges"
            description="Complete challenges to earn bonus points"
            icon={TrendingUp}
            iconColor="text-purple-600"
          >
            <div className="space-y-3">
              <div className="p-4 border-2 border-purple-200 rounded-lg hover:border-purple-400 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-gray-900">Zero Waste Week</p>
                    <p className="text-sm text-gray-600">Recycle all farm waste for 7 days</p>
                  </div>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">
                    200 pts
                  </span>
                </div>
                <div className="mb-2">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium text-gray-900">4/7 days</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '57%' }}></div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-2">
                  View Details
                </Button>
              </div>

              <div className="p-4 border-2 border-emerald-200 rounded-lg hover:border-emerald-400 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-gray-900">Water Warrior</p>
                    <p className="text-sm text-gray-600">Save 1000L of water this month</p>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
                    150 pts
                  </span>
                </div>
                <div className="mb-2">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium text-gray-900">850/1000 L</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-2">
                  View Details
                </Button>
              </div>

              <div className="p-4 border-2 border-gray-200 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-gray-900">Tree Planter</p>
                    <p className="text-sm text-gray-600">Plant 10 trees on your farm</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                    300 pts
                  </span>
                </div>
                <Button size="sm" className="w-full mt-2 bg-gradient-to-r from-emerald-500 to-teal-600">
                  Start Challenge
                </Button>
              </div>
            </div>
          </DashboardCard>
        </div>

        {/* Right Column - 1 col */}
        <div className="space-y-6">
          {/* Rewards */}
          <DashboardCard
            title="Available Rewards"
            description="Redeem your points"
            icon={Gift}
            iconColor="text-rose-600"
          >
            <div className="space-y-3">
              <div className="p-3 border border-emerald-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-emerald-50 rounded-lg">
                    <Leaf className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 text-sm">Free Seeds</p>
                    <p className="text-xs text-gray-600">Premium variety pack</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-600">500 points</span>
                  <Button size="sm" variant="outline" className="text-xs h-7">
                    Redeem
                  </Button>
                </div>
              </div>

              <div className="p-3 border border-blue-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Droplets className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 text-sm">Drip Kit</p>
                    <p className="text-xs text-gray-600">50m irrigation system</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-600">1000 points</span>
                  <Button size="sm" variant="outline" className="text-xs h-7">
                    Redeem
                  </Button>
                </div>
              </div>

              <div className="p-3 border border-amber-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-amber-50 rounded-lg">
                    <Zap className="h-5 w-5 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 text-sm">Solar Light</p>
                    <p className="text-xs text-gray-600">Portable LED unit</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-600">750 points</span>
                  <Button size="sm" variant="outline" className="text-xs h-7">
                    Redeem
                  </Button>
                </div>
              </div>

              <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg opacity-60">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <Gift className="h-5 w-5 text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-700 text-sm">Premium Tool Set</p>
                    <p className="text-xs text-gray-500">Professional equipment</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-500">2000 points</span>
                  <span className="text-xs text-gray-500">Locked</span>
                </div>
              </div>
            </div>
          </DashboardCard>

          {/* Leaderboard */}
          <DashboardCard
            title="Community Leaderboard"
            description="Top sustainable farmers"
            icon={Award}
            iconColor="text-amber-600"
          >
            <div className="space-y-2">
              {[
                { rank: 1, name: 'John M.', points: 3420, badge: '🥇' },
                { rank: 2, name: 'Sarah K.', points: 2890, badge: '🥈' },
                { rank: 3, name: 'David O.', points: 2156, badge: '🥉' },
                { rank: 4, name: 'Mary W.', points: 1876, badge: '' },
                { rank: 5, name: 'You', points: 1245, badge: '⭐', highlight: true },
              ].map((farmer) => (
                <div
                  key={farmer.rank}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    farmer.highlight
                      ? 'bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-300'
                      : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-gray-700 w-6">
                      {farmer.badge || `#${farmer.rank}`}
                    </span>
                    <div>
                      <p className={`text-sm font-medium ${farmer.highlight ? 'text-emerald-700' : 'text-gray-900'}`}>
                        {farmer.name}
                      </p>
                      <p className="text-xs text-gray-600">{farmer.points.toLocaleString()} points</p>
                    </div>
                  </div>
                  {farmer.rank <= 3 && !farmer.highlight && (
                    <Award className="h-4 w-4 text-amber-500" />
                  )}
                </div>
              ))}
            </div>
          </DashboardCard>

          {/* Impact Summary */}
          <DashboardCard
            title="Your Environmental Impact"
            description="This month's contribution"
            icon={Leaf}
            iconColor="text-green-600"
          >
            <div className="space-y-4">
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                <Leaf className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">2.4 tons</p>
                <p className="text-xs text-gray-600">CO₂ Offset</p>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Water saved</span>
                  <span className="font-semibold text-gray-900">850 L</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Organic waste recycled</span>
                  <span className="font-semibold text-gray-900">45 kg</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Energy saved</span>
                  <span className="font-semibold text-gray-900">120 kWh</span>
                </div>
              </div>

              <div className="pt-3 border-t border-emerald-100">
                <p className="text-xs text-center text-gray-600">
                  Equivalent to planting <span className="font-bold text-emerald-600">15 trees</span>
                </p>
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
}