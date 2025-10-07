import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Home from "@/pages/Home";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Dashboard from "@/pages/dashboard/Dashboard";
import Climate from "@/pages/dashboard/Climate";
import Crops from "@/pages/dashboard/Crops";
import Sustainability from "@/pages/dashboard/Sustainability";
import NotFound from "@/pages/NotFound";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          {/* Nested dashboard routes */}
          <Route index element={<Navigate to="climate" replace />} />
          <Route path="climate" element={<Climate />} />
          <Route path="crops" element={<Crops />} />
          <Route path="sustainability" element={<Sustainability />} />
        </Route>

        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
