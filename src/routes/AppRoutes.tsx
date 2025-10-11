// src/routes/AppRoutes.tsx
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from '@/components/ProtectedRoute';
import GuestRoute from '@/components/GuestRoute';
import { AppLayout } from '@/components/layout';

// Auth pages
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';

// Dashboard pages
import Dashboard from '@/pages/dashboard/Dashboard';
import Climate from '@/pages/dashboard/Climate';
import Crops from '@/pages/dashboard/Crops';
import Sustainability from '@/pages/dashboard/Sustainability';

// Other pages
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import DiseaseDetection from '@/pages/dashboard/DiseaseDetection';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} />

      {/* Guest routes (only accessible when not authenticated) */}
      <Route
        path="/login"
        element={
          <GuestRoute>
            <Login />
          </GuestRoute>
        }
      />
      <Route
        path="/register"
        element={
          <GuestRoute>
            <Register />
          </GuestRoute>
        }
      />

      {/* Protected routes (require authentication) */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <AppLayout>
              <Dashboard />
            </AppLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/weather"
        element={
          <ProtectedRoute>
            <AppLayout>
              <Climate />
            </AppLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/crops"
        element={
          <ProtectedRoute>
            <AppLayout>
              <Crops />
            </AppLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/disease-detection"
        element={
          <ProtectedRoute>
            <AppLayout>
              <DiseaseDetection />
            </AppLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/greenpoints"
        element={
          <ProtectedRoute>
            <AppLayout>
              <Sustainability />
            </AppLayout>
          </ProtectedRoute>
        }
      />

      {/* Catch all - 404 */}
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}