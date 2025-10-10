// src/pages/Home.tsx
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Leaf, Cloud, TrendingUp, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center shadow-2xl">
            <Leaf className="w-14 h-14 text-white" />
          </div>

          {/* Heading */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="px-2 py-4 text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              AgriSave
            </h1>
            <p className="text-2xl md:text-3xl text-emerald-800 font-semibold">
              AI-Powered Climate Resilience Dashboard
            </p>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Harness the power of artificial intelligence to predict climate patterns, 
              monitor crop health, detect diseases early, and reward sustainable farming practices.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all text-lg px-8"
            >
              <Link to="/register">Get Started</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold text-lg px-8"
            >
              <Link to="/login">Sign In</Link>
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-16 max-w-6xl">
            <FeatureCard
              icon={<Cloud className="w-8 h-8" />}
              title="Climate Prediction"
              description="AI-powered weather forecasting and climate pattern analysis"
            />
            <FeatureCard
              icon={<Leaf className="w-8 h-8" />}
              title="Crop Monitoring"
              description="Real-time tracking of crop growth and health indicators"
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Disease Detection"
              description="Early identification of crop diseases using computer vision"
            />
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Sustainability Rewards"
              description="Track and earn rewards for eco-friendly farming practices"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) {
  return (
    <div className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-shadow">
      <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-emerald-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
}